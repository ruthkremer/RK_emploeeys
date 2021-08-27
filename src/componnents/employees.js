import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/action'

import { DataGrid } from '@material-ui/data-grid';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin-right: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setEmployees: () => dispatch(actions.setEmployees()),
    updatePayments: (rowsSelected) => dispatch(actions.updatePayments(rowsSelected)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function Employees(props) {
    const [rowsSelected, setRowsSelected] = useState([]);
    const columns = [{ field: 'id', width: 100 },
    { field: 'first_name', width: 150 },
    { field: 'last_name', width: 150 },
    { field: 'email', width: 200 },
    { field: 'birthdate', width: 150 },
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
            <Button onClick={() => props.updatePayments({ rowsSelected, isPaymented: true })}>Pay</Button>
            <Button primary onClick={() => props.updatePayments({ rowsSelected, isPaymented: false })} >Un Pay</Button>

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
