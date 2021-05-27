import React, {Component, useState} from 'react';
import '../../Stylesheets/Book.css'
import {Button, Navbar, Nav, ListGroup, Tab, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css'


function BookList({books, loading}) {

    const columns = books[0] && Object.keys(books[0])

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <Table responsive striped bordered hover variant="dark">
            <thead align="center">
            {/*<tr>{books[0] && columns.map((heading) => <th>{heading}</th>)}</tr>*/}
            <tr className="w-auto">
                <th className="col-1">ID</th>
                <th>TITLE</th>
                <th>AUTHOR</th>
                <th>TYPE</th>
            </tr>
            </thead>
            <tbody>
            {books.map(row => <tr>
                {columns.map(column => <td>{row[column]}</td>)}
            </tr>)}
            </tbody>
        </Table>
    );
}

export default BookList;
