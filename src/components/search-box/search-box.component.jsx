import './search-box-styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div className='searchbox-div'>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
  />
  </div>
);

export default SearchBox;
