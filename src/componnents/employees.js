import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import {
    Link
} from "react-router-dom";
import { DataGrid } from '@material-ui/data-grid';
import CheckIcon from '@material-ui/icons/Check';
import { Button } from './ui'

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setEmployees: () => dispatch(actions.setEmployees()),
    setRowsSelected: (rowsSelected) => dispatch(actions.setRowsSelected(rowsSelected)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function Employees(props) {
    const [rowsSelected, setRowsSelected] = useState([]);
    const columns = [{ field: 'id', width: 100 },
    { field: 'first_name', width: 150 },
    { field: 'last_name', width: 150 },
    { field: 'email', width: 200 },
    {
        field: 'birthdate',
        width: 150,
        valueFormatter: (params) => {
            let date = params.row.birthdate;
            return  date ? `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`:null;
        }

    },
    { field: 'salary', width: 150 },
    { field: 'gender', width: 150 },
    {
        field: 'paymented', width: 150,
        renderCell: (params) => (
            <strong>
                {params.row.paymented ? <CheckIcon></CheckIcon> : "X"}
            </strong>)
    },
    ]
    useEffect(() => {
        if (!props.employees) {
            props.setEmployees();
        }
    })

    const selectedRow = (rowsSelected) => {
        setRowsSelected(rowsSelected)
    }
    return (
        <div>
            <Link to="/payments">
                <Button primary
                    onClick={() => props.setRowsSelected(rowsSelected)}>
                    Payments</Button>
            </Link>

            <div>
                <DataGrid autoHeight
                    columns={columns}
                    rows={props ? props.employees ? props.employees : [] : []}
                    pageSize={10}
                    checkboxSelection
                    onSelectionModelChange={(rowsSelected) => selectedRow(rowsSelected)}
                />
            </div>
        </div>
    );

})
