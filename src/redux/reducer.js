import produce from 'immer';
import createReducer from "./reducerUtils";
import employeesData from '../MOCK_DATA.json';

const initialState = {
    employees: null,
    rowsSelected: null
}
const employeeReducer = {

    setEmployees(state, action) {

        state.employees = [...employeesData];
    },
    updatePayments(state, action) {
        const isPaymented = action.payload;
        if (state.rowsSelected.length)
            state.rowsSelected.forEach(row => {
                state.employees[row - 1].paymented = isPaymented;
            });
    },
    setRowsSelected(state, action) {
        state.rowsSelected = action.payload;
    }

}
export default produce((state, action) => createReducer(state, action, employeeReducer), initialState);