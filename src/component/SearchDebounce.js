import React, { useState, useEffect, useCallback, useRef } from 'react';

const searchData = ["Manoj S", "Chetan S", "Gowtham", "Machanna"];

const SearchDebounce = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [enteredName, setEnteredName] = useState("");
    const timer = useRef(null);

    const handleSearch = useCallback(() => {
        setFilteredData(
            searchData.filter((data) => 
                data.toLowerCase().includes(enteredName.toLowerCase())
            )
        );
    }, [enteredName]);

    const debounce = (func, delay) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(func, delay);
    };

    useEffect(() => {
        if (enteredName.trim() === "") {
            setFilteredData([]);
            return;
        }
        debounce(handleSearch, 1000);
        return () => clearTimeout(timer.current);
    }, [enteredName, handleSearch]);

    return (
        <div>
            <p>Search Name</p>
            <input
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
            />

            {filteredData.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchDebounce;
