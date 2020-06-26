const axios = require('axios');

module.exports = axios.create({
  baseURL: 'http://localhost:1337/parse',
  headers: {
    'X-Parse-Application-Id': 'PARSELOCAL',
  }
});
