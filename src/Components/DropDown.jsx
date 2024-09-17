import "../CSS/DropDown.css";

function DropDown({
  onSortChange,
  onOrderChange,
  currentSortBy,
  currentOrderBy,
}) {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  const handleOrderChange = (event) => {
    onOrderChange(event.target.value);
  };

  return (
    <div className="dropdown">
      <button>Sort by</button>
      <div className="content">
        <select onChange={handleSortChange} value={currentSortBy}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
        </select>

        <select onChange={handleOrderChange} value={currentOrderBy}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
}

export default DropDown;
