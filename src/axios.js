import axios from 'axios'
import {baseUrl} from './constants/constants'
import { API_KEY } from './constants/constants';
const instance = axios.create({
    baseURL: baseUrl,
   API_KEY:API_KEY
  });

  export  default instance