import styles from 'assets/styles/components/SearchItem.module.scss';
export const SearchItem = ({ search, setSearch }) => {
  return (
    <form className={styles.searchForm} onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" role="searchbox" placeholder="Search Items" value={search} onChange={(event) => setSearch(event.target.value)} />
    </form>
  );
};
