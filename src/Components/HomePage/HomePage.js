import React from "react";
import UseFetchApi from "../../Custom Hooks/UseFetchApi";

export default function HomePage() {
  const getURL = "http://localhost:5050/playerdata";
  const { apiResult, isLoading } = UseFetchApi(getURL);

  const handleAddPlayer = () => {};

  return (
    <div>
      <div>
        <button>Add Player</button>
        <button>Add Team</button>
        <AddPlayerPopup />
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {apiResult.data.map((item, pos) => {
            const { description, from, isPlaying, playerName, price, _id } =
              item;
            return (
              <div>
                <h2>{playerName}</h2>
                <h3>{description}</h3>
                <h3>{from}</h3>
                <h3>Rs. {price}</h3>
                <h3>{isPlaying ? "Playing" : "Not Playing"}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const AddPlayerPopup = () => {
  return (
    <div>
      <p>Player Name</p>
      <input type="text" />
      <p>Team Name</p>
      <input type="text" list="teamname" />
      <datalist id="teamname">
        <option value="MI"></option>
        <option value="DC"></option>
        <option value="RCB"></option>
      </datalist>
      <p>Player Role</p>
      <select name="" id="">
        <option value="--select--">--select--</option>
        <option value="Batsman">Batsman</option>
        <option value="Bowler">Bowler</option>
        <option value="Umpire">Umpire</option>
        <option value="Other">Other</option>
      </select>
      <p>Player Price</p>
      <input type="number" name="" id="" />
      <p>Please enter valid details.</p>
      <button>Add Player</button>
    </div>
  );
};
