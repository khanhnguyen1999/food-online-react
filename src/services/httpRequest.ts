import { AxiosInstance } from 'axios';
import { axiosInstance, IConfig } from './initRequest';

class HttpRequest {
  api: AxiosInstance;

  constructor() {
    this.api = axiosInstance;
  }

  async get(url: string, config?: IConfig) {
    return this.api.get(url, config);
  }

  async post(url: string, bodyData = {}, config?: IConfig) {
    return this.api.post(url, bodyData, config);
  }

  async put(url: string, bodyData = {}, config?: IConfig) {
    return this.api.put(url, bodyData, config);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;