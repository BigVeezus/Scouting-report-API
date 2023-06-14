import { useEffect, useState } from "react";
import "./App.css";

const baseUrl = process.env.REACT_APP_API_URL;

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "valueInMillions", order: "desc" });
  const [filterPosition, setFilterposition] = useState([]);
  const [filterFoot, setFilterFoot] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllPlayers = async () => {
      try {
      } catch (err) {}
    };
  });

  return <h1>HELLO</h1>;
}

export default App;
