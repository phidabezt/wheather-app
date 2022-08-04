const mAxiosInstance = {
  // mock interceptor
  interceptors: {
    request: {
      use: jest.fn(),
    },
    response: {
      use: jest.fn(),
    },
  },
};
export default {
  create: jest.fn(() => mAxiosInstance),
};
