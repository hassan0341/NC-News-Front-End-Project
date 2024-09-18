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
    <header className="dropdown">
      <button htmlFor="sort-by-select">Sort by</button>
      <section className="content">
        <select
          id="sort-by-select"
          onChange={handleSortChange}
          value={currentSortBy}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
        </select>

        <select
          id="order-by-selector"
          onChange={handleOrderChange}
          value={currentOrderBy}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </section>
    </header>
  );
}

export default DropDown;
