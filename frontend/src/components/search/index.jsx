import "./styles.css";

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      className="search"
      placeholder="search player or country"
      onChange={({ currentTarget: input }) => setSearch(input.value)}
    />
  );
};

export default Search;
