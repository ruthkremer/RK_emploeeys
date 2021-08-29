import produce from 'immer';
import createReducer from "./reducerUtils";
import employeesData from '../MOCK_DATA.json';
import employees from '../componnents/employees';

const initialState = {
    employees: null,
    rowsSelected: null
}

const employeeReducer = {

    setEmployees(state, action) {

        state.employees = [...employeesData];
        state.employees = state.employees.map((employee) => {
            if (employee.birthdate) {
                const newDate = employee.birthdate.split("/");
                employee.birthdate = new Date(newDate[2], newDate[1]-1, newDate[0]);
            }
            return employee
        })
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