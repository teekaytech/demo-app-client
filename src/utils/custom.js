import Axios from 'axios';

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

const summation = (data, col) => {
  let sum = 0;
  data.forEach((element) => {
    const value = element[col] === null ? 0 : parseFloat(element[col]);
    sum += value;
  });
  return sum;
};

const printTotal = (datalist, col) => {
  let result = 0;
  if (datalist.length) result = summation(datalist, col);
  return result;
};

const commissionByMonth = (dataObj) => {
  let one = 0;
  let two = 0;
  let three = 0;
  dataObj.forEach((sm) => {
    switch (new Date(sm.date).getMonth()) {
      case 0:
        one += sm.commission && parseInt(sm.commission, 10);
        break;
      case 1:
        two += sm.commission && parseInt(sm.commission, 10);
        break;
      case 2:
        three += sm.commission && parseInt(sm.commission, 10);
        break;
      default:
        break;
    }
  });
  return [one, two, three];
};

const users = (arr, col) => {
  const marr = arr.map((sm) => sm[col]);
  return [...new Set(marr)];
};

export {
  users,
  months,
  endpoints,
  fetchData,
  fetchUnit,
  commaSeparated,
  formatDate,
  printTotal,
  commissionByMonth,
};
