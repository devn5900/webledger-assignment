require('dotenv').config();


const makeQueryParams=(query,paths)=>{
    const queryString = Object.keys(query)
  .map((key) => `${key}=${query[key]}`)
  .join('&');

return `${process.env.API_BASE_URL}/${paths}?${queryString}`;
}

const headers={
    "x-api-key":process.env.RECIPE_API_KEY,
    'Content-Type': 'application/json'
}

module.exports={
    makeQueryParams,
    headers
}