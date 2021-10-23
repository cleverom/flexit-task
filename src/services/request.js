import axios from 'axios';

const baseUrl = 'https://api.unsplash.com';

const getRequest = async (url, base = baseUrl) => {
  try {
    const r = await axios.get(`${base}/${url}`);

    console.log(r, 'res');
    return r;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export { getRequest };
