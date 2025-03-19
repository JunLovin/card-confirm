import { createContext, useState } from 'react'

export const UseCardContext = createContext()

function UseCard({ children }) {
    const [name, setName] = useState('Jhon Doe')
    const [number, setNumber] = useState('0000 0000 0000 0000')
    const [month, setMonth] = useState('00')
    const [year, setYear] = useState('00')
    const [cvc, setCvc] = useState('123')
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleNumber = (e) => {
        const value = e.target.value.replace(/\s/g, '').replace(/\D/g, '')

        const formattedValue = value.replace(/(.{4})/g, '$1 ').trim()

        setNumber(formattedValue || '0000 0000 0000 0000')
        e.target.value = formattedValue
    }

    const handleMonth = (e) => {
        setMonth(e.target.value || '00')
    }

    const handleYear = (e) => {
        setYear(e.target.value || '00')
    }

    const handleCvc = (e) => {
        const value = e.target.value.replace(/\D/g, '')

        const limitedvalue = value.slice(0, 3)

        setCvc(limitedvalue)
    }

    return (
        <>
        <UseCardContext.Provider value={{ name, number, month, year, handleName, handleNumber, handleYear, handleMonth, cvc , handleCvc, isConfirmed, setIsConfirmed }}>
            {children}
        </UseCardContext.Provider>
        </>
    )
}

export default UseCard