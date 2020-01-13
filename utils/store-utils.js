export const getData = async function (url, axios, cookie) {
  return axios({
    method: 'GET',
    url: url,
    headers: {
      'Authorization': `${cookie.get('auth._token.local')}`,
      'Accept': 'application/json'
    }
  })
  
}