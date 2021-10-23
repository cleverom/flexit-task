import { PHOTOS } from '../actionTypes';

const initialState = {
  photoType: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PHOTOS:
      return { photoType: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
