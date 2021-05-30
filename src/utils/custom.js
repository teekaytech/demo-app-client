import Axios from 'axios';

const users = ['LH', 'NA', 'NT'];
const endpoints = {
  sellers: 'sellers',
  revenues: 'revenues',
  budgets: 'budgets',
  summary: 'summary',
};
const baseURL = 'https://radiant-earth-89871.herokuapp.com/api/v1/';
const fetchData = (page) => Axios.get(`${baseURL}/${page}`).then((response) => response.data);
const fetchUnit = (page, id) => Axios.get(`${baseURL}/${page}/${id}`).then((response) => response.data);

export {
  users, endpoints, fetchData, fetchUnit,
};
