import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      key={id}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#fffffff26]"
      onClick={() => playWithId(id)}
    >
      <img src={image} alt="song-cover" className="rounded" />
      <p className="font-bold mt-2 mb-2">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
