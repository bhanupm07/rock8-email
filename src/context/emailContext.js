import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function EmailContext({ children }) {
  const [emails, setEmails] = useState([]);
  const [isBodyVisible, setIsBodyVisible] = useState(false);
  const [bodyContent, setBodyContent] = useState([]);
  const [unreadSec, setUnreadSec] = useState(true);
  const [readSec, setReadSec] = useState(false);
  const [favoriteSec, setFavoriteSec] = useState(false);
  const [readEmails, setReadEmails] = useState([]);
  const [favoriteEmails, setFavoriteEmails] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(async () => {
    const response = await fetch("https://flipkart-email-mock.now.sh/?page=1");
    const data = await response.json();
    // console.log(data.list);
    setEmails(data.list);
  }, []);

  const showBody = async (email) => {
    const response = await fetch(
      `https://flipkart-email-mock.now.sh/?id=${email.id}`
    );
    const data = await response.json();
    setIsBodyVisible(true);
    setBodyContent([email, data.body]);
    // console.log(data);
  };

  const handleBtnClick = (e) => {
    if (e.target.textContent === "Unread") {
      setUnreadSec(true);
      setReadSec(false);
      setFavoriteSec(false);
    } else if (e.target.textContent === "Read") {
      setReadSec(true);
      setUnreadSec(false);
      setFavoriteSec(false);
    } else {
      setFavoriteSec(true);
      setUnreadSec(false);
      setReadSec(false);
    }
  };

  return (
    <Context.Provider
      value={{
        emails,
        setEmails,
        showBody,
        isBodyVisible,
        setIsBodyVisible,
        bodyContent,
        setBodyContent,
        unreadSec,
        readSec,
        favoriteSec,
        handleBtnClick,
        readEmails,
        setReadEmails,
        favoriteEmails,
        setFavoriteEmails,
        pageNo,
        setPageNo,
      }}
    >
      {children}
    </Context.Provider>
  );
}
