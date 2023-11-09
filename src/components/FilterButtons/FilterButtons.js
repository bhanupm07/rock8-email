import { useContext, useState } from "react";
import "./FilterButtons.css";
import { Context } from "../../context/emailContext";

export default function FilterButtons() {
  const { readSec, unreadSec, favoriteSec, handleBtnClick } =
    useContext(Context);

  return (
    <div className="filter-div-main">
      <span>Filter By:</span>
      <button
        className={unreadSec ? "selected-filter-btn" : "filter-btns"}
        onClick={handleBtnClick}
      >
        Unread
      </button>
      <button
        className={readSec ? "selected-filter-btn" : "filter-btns"}
        onClick={handleBtnClick}
      >
        Read
      </button>
      <button
        className={favoriteSec ? "selected-filter-btn" : "filter-btns"}
        onClick={handleBtnClick}
      >
        Favorites
      </button>
    </div>
  );
}
