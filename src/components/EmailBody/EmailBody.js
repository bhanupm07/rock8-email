import { useContext, useState } from "react";
import "./EmailBody.css";
import { Context } from "../../context/emailContext";

export default function EmailBody({ email, body }) {
  const { favoriteEmails, setFavoriteEmails } = useContext(Context);

  const timestamp = email.date; // your provided timestamp
  const date = new Date(timestamp);

  const formattedDate = `${("0" + date.getDate()).slice(-2)}/${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}/${date.getFullYear()} ${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)} ${date.getHours() >= 12 ? "PM" : "AM"}`;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleFavBtnClick = () => {
    if (!favoriteEmails.includes(email)) {
      setFavoriteEmails([...favoriteEmails, email]);
    } else if (favoriteEmails.includes(email)) {
      setFavoriteEmails(
        favoriteEmails.filter((el) => {
          return el.id !== email.id;
        })
      );
    }
  };

  return (
    <div className="email-body-main">
      <div className="card-profile body-avatar">
        {email.from.name[0].toUpperCase()}
      </div>
      <div className="body-data">
        <div className="name-btn">
          <span className="name">{capitalizeFirstLetter(email.from.name)}</span>
          <button onClick={handleFavBtnClick}>
            {!favoriteEmails.includes(email)
              ? "Mark as favorite"
              : "Remove from favorites"}
          </button>
        </div>
        <span>{formattedDate}</span>
        <div dangerouslySetInnerHTML={{ __html: body }} className="body-para" />
      </div>
    </div>
  );
}
