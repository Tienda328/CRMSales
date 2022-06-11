import axios from 'axios';
const TIMEOUT = 6000;
import {HOST} from '../../constants/configs'
import LOCALE_KEY, {
  getLocale,
  setLocale,
  clearLocale,
} from '../local/appLocale';


export const instance = axios.create({
  baseURL: HOST,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    // 'Authorization': 'Bearer ' + models.getToken()
  },
});

instance.interceptors.request.use(async (request) => {
   const accessToken = await getLocale(LOCALE_KEY.access_token);
  request.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    Authorization: 'Bearer ' + accessToken,
  };
  return request;
});

export function checkVersion(params) {
  var instance1 = axios.create({
    baseURL: HOST,
    timeout: 80000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  });
  return instance1.post(`https://api.achamcong.net/api/check_version?version=${params.version}&app=${params.app}`)
}

export function getTest() {
  return instance.get('https://reactnative.dev/movies.json');
}
