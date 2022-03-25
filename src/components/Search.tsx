type Props = {
  setSearch: (value: string) => void;
};
function Search({ setSearch }: Props) {
  return (
    <div className="search-wrapper">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="search"
        placeholder="Search..."
      ></input>
    </div>
  );
}
export default Search;
