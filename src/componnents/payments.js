import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import {
    Link
} from "react-router-dom";

import { Button } from './ui'

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        rowSelected: state.rowSelected,
    };
}
const mapDispatchToProps = (dispatch) => ({
    updatePayments: (isPaymented) => dispatch(actions.updatePayments(isPaymented)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function Employees(props) {


    return (
        <div>
            <h1>Payments</h1>
            <Link to="/"><Button onClick={() => props.updatePayments(true)}>Pay</Button></Link>
            <Link to="/"><Button primary onClick={() => props.updatePayments(false)} >Un Pay</Button></Link>
            <Link to="/"><Button>back to Employees</Button></Link>
        </div>
    );

})
