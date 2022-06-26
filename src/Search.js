export default function Search() {
  return (
    <div className="search">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="City name"
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-secondary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
