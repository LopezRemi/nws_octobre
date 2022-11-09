import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable, TableHeader, TableHead, TableRow, TableBody, TableData } from "react-table"
import { useMemo } from 'react';


export function Table(props) {
 
    const [materials, setMaterials] = useState([]);
    const API_URL = 'http://localhost:3001'

    const fetchProducts = async () => {
        const response =  await axios.get(`${API_URL}/materials/getMaterials`).catch( err => {console.log()})

        if (response) {
            const materials = response.data

            console.log("Materials: ", materials)
            setMaterials(materials);
        }
    };


    const data = useMemo(()=>(
        [
             [
    {
      "_id": "636c09024ada2a5fcd1aba18",
      "name": "rj45",
      "type": "cable",
      "createdAt": "2022-11-09T20:09:38.585Z",
      "updatedAt": "2022-11-09T20:09:38.585Z"
      
    },
    {
      "_id": "636c09264ada2a5fcd1aba1a",
      "name": "benQ",
      "type": "écran",
      "createdAt": "2022-11-09T20:10:14.566Z",
      "updatedAt": "2022-11-09T20:10:14.566Z"
      
    }
  ]
          ]
    ), [])

    const columns = useMemo(
        ()=> [
        {
            Header: "id",
            accessor: "id"
        },
        {
            Header: "name",
            accessor: "name"
        },
        {
            Header: "type",
            accessor: "type"
        },
        {
            Header: "createdAt",
            accessor: "createdAt"
        },
        {
            Header: "updatedAt",
            accessor: "updatedAt"
        },
    ], []);

    const tableInstance = useTable({ columns, data });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;

    useEffect(() => {
        fetchProducts();
    }, []);

    return  <Table {...getTableProps()}>
        <TableHead>
            {headerGroups.map((headerGroup) =>(
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <TableHeader {...column.getHeaderProps()}>
                            { column.render("Header")}
                            </TableHeader>
                    ))}
                </TableRow>
            ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
                {rows.map((row)=> {
                    prepareRow(row);

                    return row.cells.map((cell, idx) => (
                        <TableData {...cell.getCellProps()}>
                            {cell.render('cell')}
                            </TableData>
                    ));
                })}
        </TableBody>

    </Table>;
};

export default Table

