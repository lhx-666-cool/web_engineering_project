from locust import HttpUser, task, between

class NextjsUser(HttpUser):
    # 等待时间，每个用户在执行任务之间的等待时间（秒）
    wait_time = between(1, 5)

    @task
    def load_homepage(self):
        """
        访问根路径 /
        """
        self.client.get("/")

    @task
    def login(self):
        """
        对 /api/login 接口进行 POST 请求，模拟用户登录
        """
        # 可以根据需要修改用户名和密码，或者从文件中读取
        login_data = {
            "username": "admin",
            "password": "adminpassword"
        }
        # 发送 POST 请求
        response = self.client.post("/api/login", json=login_data)

        # 可以选择性地检查响应，例如状态码和响应体
        if response.status_code == 200:
            print("Login successful!")
            # 如果需要进一步操作（例如访问其他需要认证的页面），可以在这里处理 token
            # 但在这个简单的脚本中我们只关注登录本身
            pass
        elif response.status_code == 401:
            print("Login failed: Invalid credentials")
        else:
            print(f"Login failed with status code: {response.status_code}")
