import "./styles.css";

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      className="search"
      placeholder="search"
      onChange={({ currentTarget: input }) => setSearch(input.value)}
    />
  );
};

export default Search;
