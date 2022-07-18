import axiosClient from './axiosClients'

const weatherApi = {
  getWeatherData: (infoType, searchParams) => {
    const url = `/${infoType}`
    return axiosClient.get(url, { params: searchParams })
  },
}

export default weatherApi
