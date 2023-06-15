import "./styles.css";

const Sort = ({ sort, setSort }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };

  return (
    <div className="containersort">
      <p className="sort_by">Sort By :</p>

      <select
        aria-label="select"
        id="select"
        onChange={onSelectChange}
        className="select"
        defaultValue={sort.sort}
      >
        <option value="age">Age</option>
        <option value="valueInMillions">Value</option>
        <option value="foot">Foot</option>
      </select>

      <button className="arrow_btn" onClick={onArrowChange}>
        <p className="up_arrow">&uarr;</p>
        <p className="down_arrow">&darr;</p>
      </button>
    </div>
  );
};

export default Sort;
