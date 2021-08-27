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
})

export default connect(mapStateToProps, mapDispatchToProps)(function Employees(props) {
    const [rowsSelected, setRowsSelected] = useState([]);

    useEffect(() => {
        if (!props.employees){
            props.setEmployees();
        }
    })
    
 
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <button onClick={()=>props.updatePayments({rowsSelected,isPaymented:true})} >Payments</button>
         
        </div>
    );

})
