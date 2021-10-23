import { PHOTOS } from '../actionTypes';
import { getRequest } from '../../services/request';

console.log(process.env.REACT_APP_ACCESS_URL, 'lll');

function showPhotos(payload) {
  return { type: PHOTOS, payload };
}

function getValues(value) {
  console.log(value);

  return async (dispatch) => {
    if (value.length > 0) {
      const getAll = await getRequest(
        `search/photos?client_id=${process.env.REACT_APP_ACCESS_URL}&query=${value}`
      );
      console.log(getAll?.data?.results, 'search');
      dispatch({ type: 'PHOTOS', payload: getAll?.data?.results });
    } else {
      const getAll = await getRequest(`photos?client_id=${process.env.REACT_APP_ACCESS_URL}`);
      console.log(getAll?.data, 'actions');
      dispatch({ type: 'PHOTOS', payload: getAll?.data });
    }
  };
}
export { getValues, showPhotos };
