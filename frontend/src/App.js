import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/search";
import Table from "./components/table/table";

const baseUrl = "http://localhost:7000/api/players";

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
        const url = `${baseUrl}?page=${page}&sort=${sort.sort},${
          sort.order
        }&foot=${filterFoot.toString()}&position=${filterPosition.toString()}&search=${search}`;

        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPlayers();
  }, [sort, filterFoot, filterPosition, page, search]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <img src="./images/logo.jpeg" alt="logo" className="logo" />
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className="body">
          <div className="table_container">
            <Table players={obj.players ? obj.players : []} />
          </div>
          <div className="filter_container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
