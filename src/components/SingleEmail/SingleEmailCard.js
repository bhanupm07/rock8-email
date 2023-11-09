import { useContext } from "react";
import "./SingleEmailCard.css";
import { Context } from "../../context/emailContext";
import classNames from "classnames";

export default function SingleEmailCard({ email }) {
  const {
    showBody,
    emails,
    setEmails,
    readEmails,
    setReadEmails,
    favoriteEmails,
    setFavoriteEmails,
    bodyContent,
  } = useContext(Context);

  const timestamp = email.date;
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

  const handleEmailClick = () => {
    showBody(email);
    if (!readEmails.includes(email)) {
      setEmails(
        emails.filter((el) => {
          return el.id !== email.id;
        })
      );
      console.log(readEmails.includes(email));
      setReadEmails([...readEmails, email]);
    }
  };

  const classes = classNames("card-main", {
    "opened-email": bodyContent[0]?.id === email.id,
  });

  return (
    <div className={classes} onClick={handleEmailClick}>
      <div className="card-profile">{email.from.name[0].toUpperCase()}</div>
      <div className="card-info">
        <span className="name-email-main">
          From:{" "}
          <span className="bold-text">
            {capitalizeFirstLetter(email.from.name)} {email.from.email}
          </span>
        </span>
        <span>
          Subject: <span className="bold-text">{email.subject}</span>
        </span>
        <span className="short-descp">{email.short_description}</span>
        <div>
          <span>{formattedDate}</span>
          {favoriteEmails.includes(email) && (
            <span className="favorite">Favorite</span>
          )}
        </div>
      </div>
    </div>
  );
}
