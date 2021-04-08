import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromResponse } from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "../Context/StateProvider";
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);

  return (
    <div>
      {!token && <Login />}
      {token && <Player />}
    </div>
  );
}

export default App;
