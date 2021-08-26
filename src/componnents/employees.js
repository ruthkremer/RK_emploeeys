import React, { useEffect, useState } from 'react';
import employeesData from '../MOCK_DATA.json';
import { DataGrid } from '@material-ui/data-grid';

export const Employees = () => {
    // Declare a new state variable, which we'll call "count"
    const [employees, setEmployees] = useState(employeesData);
    const [rowsSelected, setRowsSelected] = useState([]);
    let columns;
    const rows = [{ "id": 1, "first_name": "Babita", "last_name": "Attwoull", "email": "battwoull0@istockphoto.com", "gender": "Female", "birthdate": "31/08/1989", "salary": "€2751,61" }]
    useEffect(() => {
        console.log(employees);
        columns = employees ? employees : []
    })
    const payments = (rowsSelected) => {
        setRowsSelected(rowsSelected)
        // payments=[]
        // rowsSelected.forEach(row => {
        //     employees[row-1].paymented = true
        // });
    }
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <button >Payments</button>
            <div style={{ width: "100%" }}>
                <DataGrid autoHeight
                    columns={[{ field: 'id', width: 150 },
                    { field: 'first_name', width: 150 },
                    { field: 'last_name', width: 150 },
                    { field: 'email', width: 200 },

                    { field: 'birthdate', width: 150 },
                    { field: 'salary', width: 150 },
                    { field: 'paymented', width: 150 },
                    ]}
                    rows={employees}
                    pageSize={10}
                    checkboxSelection
                    onSelectionModelChange={(rowsSelected) => payments(rowsSelected)}
                />
            </div>
        </div>
    );
}
