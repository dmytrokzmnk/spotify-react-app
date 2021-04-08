import React, { useEffect } from "react";
import Login from "./Login";
import { getTokenFromResponse } from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "../Context/StateProvider";
import { SET_USER, SET_TOKEN } from "../Context/action";
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      dispatch({
        type: SET_TOKEN,
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: SET_USER,
          user,
        });
      });
    }
  }, [dispatch]);
  console.log(token);
  return <>{token ? <Player spotify={spotify} /> : <Login />}</>;
}

export default App;
