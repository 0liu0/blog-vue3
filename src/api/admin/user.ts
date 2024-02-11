import axios from "@/axios";

// 登录接口
export function login(username: string, password: string) {
    return axios.post("/login", { username, password })
}

// 测试接口
export function hello() {
    return axios.get("/test/hello")
}