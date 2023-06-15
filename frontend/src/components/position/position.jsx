import "./styles.css";

const Position = ({ positions, filterPosition, setFilterPosition }) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterPosition, input.value];
      setFilterPosition(state);
    } else {
      const state = filterPosition.filter((val) => val !== input.value);
      setFilterPosition(state);
    }
  };

  return (
    <div className="containerFilter">
      <h1 className="headingFilter">Filter By Position</h1>
      <div className="genre_container">
        {positions.map((position) => (
          <div className="genre" key={position}>
            <input
              className="genre_input"
              type="checkbox"
              value={position}
              onChange={onChange}
            />
            <p className="genre_label">{position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Position;
