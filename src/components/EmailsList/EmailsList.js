import { useContext } from "react";
import { Context } from "../../context/emailContext";
import SingleEmailCard from "../SingleEmail/SingleEmailCard";
import "./EmailsList.css";

export default function EmailsList() {
  const {
    emails,
    unreadSec,
    readSec,
    favoriteSec,
    readEmails,
    favoriteEmails,
  } = useContext(Context);

  console.log(emails);

  let data;
  if (unreadSec) {
    data = emails;
  } else if (readSec) {
    data = readEmails;
  } else if (favoriteSec) {
    data = favoriteEmails;
  }

  const renderedEmails = data?.map((email) => {
    return <SingleEmailCard email={email} key={email.id} />;
  });

  return <div className="emails-list-div">{renderedEmails}</div>;
}
