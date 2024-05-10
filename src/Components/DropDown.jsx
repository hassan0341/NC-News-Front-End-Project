import "../CSS/DropDown.css";

function DropDown({ onSortChange, onOrderChange }) {
  const handleSortChange = (event) => {
    const { value } = event.target;
    onSortChange(value);
    onOrderChange("desc");
  };

  const handleOrderChange = (event) => {
    const { value } = event.target;
    onOrderChange(value);
  };

  return (
    <div className="dropdown">
      <button>Sort by</button>
      <div className="content">
        <select onChange={handleSortChange}>
          <option value="date">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
        </select>

        <select onChange={handleOrderChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
}

export default DropDown;
