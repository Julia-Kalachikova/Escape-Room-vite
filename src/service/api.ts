import axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';


const BACKEND_URL =
  'https://grading.design.htmlacademy.pro/v1/escape-room';
const REQUEST_TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];


type ErrorMessageType = {
  type: string;
  message: string;
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const errorMessage = (error.response.data);
        toast.warn(errorMessage.message);
      }
      throw error;
    }
  );
  return api;
};
