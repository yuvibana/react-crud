import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmpList from './components/employees/EmpList';
import NotFound from './components/NotFound';
import { DataProvider } from './context/DataProvider';
import EmpForm from './components/employees/EmpForm';

function App() {
  return (
    <div className="App" style={{ width: '50vw', margin: '0 auto', padding: '15px 0' }}>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EmpList />} />
            <Route path='/EmpForm' element={<EmpForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
