import { useContext } from "react";
import "./Pagination.css";
import { Context } from "../../context/emailContext";

export default function Pagination() {
  const {
    setEmails,
    pageNo,
    setPageNo,
    setIsBodyVisible,
    setReadEmails,
    setFavoriteEmails,
    setBodyContent,
  } = useContext(Context);

  const handlePrevClick = async () => {
    // console.log("yo");
    if (pageNo == 1) {
      alert("No previous pages available! Press Next");
      console.log("working");
    } else if (pageNo > 1) {
      setPageNo((prev) => prev - 1);
      const response = await fetch(
        `https://flipkart-email-mock.now.sh/?page=${pageNo}`
      );
      const data = await response.json();
      setEmails(data.list);
      setIsBodyVisible(false);
      setReadEmails([]);
      setFavoriteEmails([]);
      setBodyContent([]);
    }
  };

  const handleNextClick = async () => {
    // console.log("yo");
    setPageNo((prev) => prev + 1);
    const response = await fetch(
      `https://flipkart-email-mock.now.sh/?page=${pageNo}`
    );
    const data = await response.json();
    setEmails(data.list);
    setIsBodyVisible(false);
    setReadEmails([]);
    setFavoriteEmails([]);
    setBodyContent([]);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}
