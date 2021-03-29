import React, { useState, useEffect } from "react";
const API = `https://www.omdbapi.com/?apikey=76c14f33`;
const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: "" });
    const [data, setData] = useState(null);
    const fetchMovies = async (url) => {
        setIsLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                setData(data.Search || data)
                setError({ show: false, msg: "" })
            } else {
                setError({ show: true, msg: "movie not found" })
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMovies(`${API} ${urlParams} `)
    }, [urlParams])
    return { isLoading, error, data }
}
export default useFetch;
