import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'


function Pagination({booksPerPage, totalBooks, paginate}) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }


    return (<div>
                {pageNumbers.map(number => (
                    <Link to={number}>
                        <Button onClick={() => paginate(number)}>{number}</Button>
                    </Link>
                ))}
        </div>
    );
}

export default Pagination;
