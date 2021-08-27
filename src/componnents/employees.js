import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/action'

import { DataGrid } from '@material-ui/data-grid';
import CheckIcon from '@material-ui/icons/Check';


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

    useEffect(() => {
        if (!props.employees){
            props.setEmployees();
        }
    })
    
    const selectedRow = (rowsSelected) => {
        setRowsSelected(rowsSelected)
    }
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <button onClick={()=>props.updatePayments({rowsSelected,isPaymented:true})} >Payments</button>
            <button onClick={()=>props.updatePayments({rowsSelected,isPaymented:false})} >cancel Payments</button>
            <div style={{ width: "100%" }}>
                <DataGrid autoHeight
                    columns={[{ field: 'id', width: 150 },
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
                    ]}
                    rows={props ? props.employees ? props.employees : [] : []}
                    pageSize={10}
                    checkboxSelection
                    onSelectionModelChange={(rowsSelected) => selectedRow(rowsSelected)}
                />
            </div>
        </div>
    );

})
