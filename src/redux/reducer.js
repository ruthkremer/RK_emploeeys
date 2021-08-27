import produce from 'immer';
import createReducer from "./reducerUtils";
import employeesData from '../MOCK_DATA.json';

const initialState = {
    employees: null
}
const employeeReducer = {

    setEmployees(state, action) {

        state.employees = [...employeesData];
    },
    updatePayments(state, action) {
        const isPaymented = action.payload.isPaymented
        const rowsSelected = action.payload.rowsSelected;
        if (rowsSelected.length)
            rowsSelected.forEach(row => {
                state.employees[row - 1].paymented = isPaymented;
            });
    }

}
export default produce((state, action) => createReducer(state, action, employeeReducer), initialState);