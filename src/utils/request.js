import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 环境变量配置
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 可在此注入 token
    // const token = getToken()
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  response => response.data, // 直接返回 data
  error => {
    // 可统一处理错误提示
    // message.error(error.response?.data?.message || '请求失败')
    return Promise.reject(error);
  }
);

export default service;
