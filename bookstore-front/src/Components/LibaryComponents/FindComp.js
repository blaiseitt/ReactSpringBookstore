import React, {Component, useState, useEffect} from 'react';
import {Button} from "react-bootstrap";


function FindComp({apiChanger}) {

    const [search, setSearch] = useState("")

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getQuery = e => {
        e.preventDefault()
        if(search === ""){
            apiChanger('/all')
        }else {
            apiChanger('/type?type=' + search)
        }
    }
    return (
        <div>
            <form onSubmit={getQuery}>
                <input placeholder="Enter type" type="text" value={search} onChange={updateSearch}/>
                <Button type="submit">SEARCH</Button>
            </form>
        </div>
    );
}

export default FindComp;
