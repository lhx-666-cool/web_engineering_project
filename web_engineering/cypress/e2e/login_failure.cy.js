describe('登录失败测试', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('应该在输入无效凭据时显示错误信息', () => {
        // 输入无效的用户名和密码
        cy.get('input[type="text"]').type('1111');
        cy.get('input[type="password"]').type('1111');

        cy.contains('登录').click();

        // 验证错误信息是否显示
        cy.get('.text-red-500').should('be.visible').and('contain', '错误'); // 验证错误信息文本是否包含“登录失败”
    });

    it('应该在只输入用户名时显示错误信息', () => {
        // 只输入用户名
        cy.get('input[type="text"]').type('用户名');

        cy.contains('登录').click();

        // 验证错误信息是否显示
        cy.get('.text-red-500').should('be.visible');
    });

    it('应该在只输入密码时显示错误信息', () => {
        // 只输入密码
        cy.get('input[type="password"]').type('密码');

        cy.contains('登录').click();

        // 验证错误信息是否显示
        cy.get('.text-red-500').should('be.visible');
    });

    it('应该在不输入任何内容时显示错误信息', () => {
        // 不输入任何内容
        cy.contains('登录').click();

        // 验证错误信息是否显示
        cy.get('.text-red-500').should('be.visible');
    });
});