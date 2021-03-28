import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
    const { query, setQuery, error } = useGlobalContext();
    return (
        <form onSubmit={e => e.preventDefault()}>
            <h1>search movies</h1>
            <input
                className="search-form"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    )
}
export default SearchForm;