import axios, { AxiosPromise } from 'axios';
import { API_URL } from '../enums/config';
import Endpoints from '../enums/endpoints';

const instance = axios.create({
  baseURL: API_URL,
});

export const getJoke = (): AxiosPromise => instance.get(`${Endpoints.JOKES}/random`);

export default instance;
