import axiosClient from './axiosClients';

const weatherApi = {
  getWeatherData: (infoType, searchParams) => {
    const url = `/${infoType}`;
    return axiosClient.get(url, { params: searchParams });
  },
  getWeatherIconScr: (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  },
};

export default weatherApi;
