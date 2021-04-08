import { SET_USER, SET_TOKEN, SET_PLAYLIST } from "./action";
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCyjGpznj6Lh1GJioGIKfLywD_EO3Mk92kavEu71rh0CwBUxlt5uR9EmpIfi7Qrt9YZ_vxuDrOAPokeNin6LjCBMzLaTOXsXiC7X82VXt9R9kLJfgUZcE5LhbI5pzTr9tgUJ0Tn8GWyWdfOZEJbrXUg10D-O43-TCwq23EEHc2bVsiVPn3i",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_PLAYLIST:
      return {
        ...state,
        playlists: action.playlist,
      };
    default:
      return state;
  }
};

export default reducer;
