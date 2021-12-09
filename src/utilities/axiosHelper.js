import axios from 'axios';

export const axiosHelper = ({
  method,
  route,
  data = {},
  token = '',
  successMethod = r => console.log(r),
  failureMethod = e => console.log(e)
}) => {
  return axios({
    method,
    url: "https://laravel-jiayichen.codeanyapp.com/" + route,
    data,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Credentials": true,
      "Authorization": "Bearer " + token,
    }
  })
    .then(response => {
      successMethod(response.data);
      console.log(response.data);
    })
    .catch(error => failureMethod(error));
}