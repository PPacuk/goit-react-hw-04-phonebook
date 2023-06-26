import css from './Filter.module.css';

export const Filter = ({ searchInputHandler }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        onChange={searchInputHandler}
      />
    </>
  );
};
