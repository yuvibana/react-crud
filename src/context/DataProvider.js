import { useState, createContext } from "react";

export const EmployeeContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedData, setSelectedData] = useState([])
    return (
        <EmployeeContext.Provider
            value={{ selectedData, setSelectedData }}
        >{children}</EmployeeContext.Provider>
    )
} 