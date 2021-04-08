import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Set token
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
    <div className="app">
      {!token && <Login />}
      {token && <h1>im logged</h1>}
    </div>
  );
}

export default App;
