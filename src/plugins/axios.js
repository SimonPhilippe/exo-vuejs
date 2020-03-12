import axios from 'axios'

const JSON = axios.create({
  baseURL: 'https://my-json-server.typicode.com/SimonPhilippe/demo/',
});

export default JSON;