import Axios from 'axios';

const users = ['AI', 'LH', 'NA'];
const months = ['january', 'february', 'march'];
const endpoints = {
  sellers: 'sellers',
  revenues: 'revenues',
  budgets: 'budgets',
  summary: 'summary',
};
const baseURL = 'https://radiant-earth-89871.herokuapp.com/api/v1/';
const fetchData = (page) => Axios.get(`${baseURL}/${page}`).then((response) => response.data);
const fetchUnit = (page, id) => Axios.get(`${baseURL}/${page}/${id}`).then((response) => response.data);
const formatDate = (dt) => new Date(dt).toDateString();

const commaSeparated = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export {
  users, months, endpoints, fetchData, fetchUnit, commaSeparated, formatDate,
};