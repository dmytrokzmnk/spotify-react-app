export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "action":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
