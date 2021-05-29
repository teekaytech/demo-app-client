import Axios from 'axios';

const users = ['LH', 'NA', 'NT'];
const endpoints = {
  sellers: 'sellers',
  revenues: 'revenues',
  budgets: 'budgets',
};
const baseURL = 'https://fast-mountain-27692.herokuapp.com/api/v1';
const fetchData = (page) => Axios.get(`${baseURL}/${page}`).then((response) => response.data);
const fetchUnit = (page, id) => Axios.get(`${baseURL}/${page}/${id}`).then((response) => response.data);

export {
  users, endpoints, fetchData, fetchUnit,
};
