import './App.css';
import Employees from './componnents/employees';
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 0.8em;
  background: papayawhip;
`;


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Employees></Employees>
      </Wrapper>
    </div>
  );
}

export default App;
