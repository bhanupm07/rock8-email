import { useContext } from "react";
import EmailsList from "./components/EmailsList/EmailsList";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import { Context } from "./context/emailContext";
import EmailBody from "./components/EmailBody/EmailBody";
import Pagination from "./components/Pagination/Pagination";

export default function App() {
  const { isBodyVisible, bodyContent } = useContext(Context);

  return (
    <div className="main">
      <FilterButtons />
      <div className="list-and-body">
        <EmailsList />
        {isBodyVisible && (
          <EmailBody email={bodyContent[0]} body={bodyContent[1]} />
        )}
      </div>
      <Pagination />
    </div>
  );
}
