import axios from 'axios'


const API_KEY =  'e19f75e76d37b0d62aa855403d7492475fa62db8'


export const FETCH_GITHUB = 'FETCH_GITHUB'

export function fetchGithub(user) {
    /* const url = `${ROOT_URL}`;
    const request = axios.get(url); */

   const request = axios.get('https://api.github.com/' + API_KEY)
    .then(function(response){
      console.log(response.data); 
      console.log(response.status); 
    });
    return {
        type: FETCH_GITHUB,
        payload: request
    }
}


