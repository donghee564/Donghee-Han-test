import { useState, useEffect } from "react";
import "./app.css";
import Detail from "./components/detail/detail";
import Header from "./components/header/header";
import IssueList from "./components/issueList/issueList";

function App({ issues }) {
  const [items, setItems] = useState([]);
  const [clickedIssue, setClickedIssue] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    issues
      .getIssues() //
      .then((result) => {
        setItems(result);
      });
  }, [issues]);

  const handleShowDetail = (item) => {
    setClickedIssue(item);
    setIsClicked(true);
  };

  const handleCloseDetail = () => {
    setIsClicked(false);
  };

  const showDetail = isClicked && (
    <Detail handleCloseDetail={handleCloseDetail} item={clickedIssue} />
  );

  return (
    <div className="App">
      <Header />
      {showDetail}
      <IssueList items={items} handleShowDetail={handleShowDetail} />
    </div>
  );
}

export default App;
