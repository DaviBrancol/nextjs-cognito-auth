import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

apiClient.interceptors.request.use(async (config) => {
  const token = 'SIMULATE_USER_TOKEN'
  config.headers['Content-Type'] = 'application/json'
  config.headers.Authorization = token

  return config
})

export { apiClient }
