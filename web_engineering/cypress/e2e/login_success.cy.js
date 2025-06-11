describe('登录成功测试', () => {
    beforeEach(() => {
        // 访问登录页面
        cy.visit('/login');
    });

    it('应该允许用户使用有效凭据成功登录', () => {
        // 输入有效的用户名和密码
        cy.get('input[type="text"]').type('admin'); // 替换为你的有效用户名
        cy.get('input[type="password"]').type('adminpassword'); // 替换为你的有效密码

        // 点击登录按钮
        cy.get('button').contains('登录').click();

        // 验证用户是否被重定向到主页（或者你希望重定向的页面）
        // 你可能需要根据你的应用实际的重定向路径进行调整
        cy.url().should('eq', Cypress.config().baseUrl + '/'); // 假设成功后重定向到根目录
    });

    // 可选：测试重定向到特定页面
    it('应该在成功登录后重定向到指定的 redirect 参数页面', () => {
        const redirectUrl = '/profile'; // 假设要重定向到 /profile 页面
        cy.visit(`/login?redirect=${encodeURIComponent(redirectUrl)}`);

        cy.get('input[type="text"]').type('admin'); // 替换为你的有效用户名
        cy.get('input[type="password"]').type('adminpassword'); // 替换为你的有效密码

        cy.get('button').contains('登录').click();

        cy.url().should('eq', Cypress.config().baseUrl + redirectUrl);
    });
});