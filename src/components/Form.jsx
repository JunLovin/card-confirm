import { useContext, useState } from 'react'
import { UseCardContext } from '@context/UseCard'
import Successful from '@public/images/icon-complete.svg'

function Form() {
    const [nameError, setNameError] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const [dateError, setDateError] = useState(false)
    const [cvcError, setCvcError] = useState(false)
    const { name, number, month, year, cvc, handleName, handleNumber, handleMonth, handleYear, handleCvc, isConfirmed, setIsConfirmed } = useContext(UseCardContext)

    const limitInputLength = (e, maxDigits) => {
        if (e.target.value > maxDigits) {
            e.target.value = e.target.value.slice(0, maxDigits)
        }
    }

    const handleSubmit = () => {
        let hasErrors = false;

        if (!name || name === '' || name === 'Jhon Doe') {
            setNameError(true);
            hasErrors = true;
        } else {
            setNameError(false);
        }

        if (!number || number === '' || number === '0000 0000 0000 0000') {
            setNumberError(true);
            hasErrors = true;
        } else {
            setNumberError(false);
        }

        if (!month || month === '' || month === '00' || !year || year === '' || year === '00') {
            setDateError(true);
            hasErrors = true;
        } else {
            setDateError(false);
        }

        if (!cvc || cvc === '' || cvc === '123') {
            setCvcError(true);
            hasErrors = true;
        } else {
            setCvcError(false);
        }

        if (!hasErrors) {
            setIsConfirmed(true);
        }
    }

    return (
        <>
        <div className="form w-full h-full flex justify-center items-center max-[1100px]:mt-4">
            {!isConfirmed ? (
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-7 w-[350px]">
                <div className="cardname flex flex-col gap-1">
                    <label htmlFor="name" className="font-bold">CARDHOLDER NAME</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="e.g. Jhon Doe" 
                        className={`border-2 ${nameError ? 'border-red-500' : 'border-neutral-300'} py-2 px-4 rounded-md outline-none`} 
                        onChange={handleName}
                    />
                    {nameError && <span className="text-red-500 text-sm">Can't be blank</span>}
                </div>
                <div className="cardnumber flex flex-col gap-1">
                    <label htmlFor="number" className="font-bold">CARD NUMBER</label>
                    <input 
                        type="text" 
                        id="number" 
                        name="number" 
                        placeholder="e.g. 1234 5678 9123 0000" 
                        className={`border-2 ${numberError ? 'border-red-500' : 'border-neutral-300'} py-2 px-4 rounded-md outline-none appearance-none`} 
                        maxLength={19} 
                        onChange={handleNumber}
                    />
                    {numberError && <span className="text-red-500 text-sm">Can't be blank</span>}
                </div>
                <div className="form-row flex justify-between">
                    <div className="date flex flex-col gap-2">
                        <label htmlFor="month" className="font-bold">EXP. DATE (MM/YY)</label>
                        <div className="flex items-center gap-4">
                            <div className="month flex flex-col gap-1">
                                <input 
                                    type="number" 
                                    id="month" 
                                    name="date" 
                                    placeholder="MM" 
                                    className={`border-2 ${dateError ? 'border-red-500' : 'border-neutral-300'} py-2 px-4 rounded-md w-[80px] outline-none appearance-none`} 
                                    onChange={(e) => {
                                        limitInputLength(e, 2)
                                        handleMonth(e)
                                    }}
                                />
                            </div>
                            <div className="year flex flex-col gap-1">
                                <input 
                                    type="text" 
                                    id="year" 
                                    name="date" 
                                    placeholder="YY" 
                                    className={`border-2 ${dateError ? 'border-red-500' : 'border-neutral-300'} py-2 px-4 rounded-md w-[80px] outline-none appearance-none`} 
                                    onChange={(e) => {
                                        limitInputLength(e, 2)
                                        handleYear(e)
                                    }}
                                />
                            </div>
                        </div>
                        {dateError && <span className="text-red-500 text-sm">Can't be blank</span>}
                    </div>
                    <div className="cvc flex flex-col gap-1">
                        <label htmlFor="cvc" className="font-bold">CVC</label>
                        <input 
                            type="text" 
                            id="cvc" 
                            name="cvc" 
                            placeholder="e.g. 123" 
                            className={`border-2 ${cvcError ? 'border-red-500' : 'border-neutral-300'} py-2 px-4 rounded-md w-[100px] outline-none appearance-none`} 
                            maxLength={3} 
                            onChange={handleCvc} 
                            pattern='\d*'
                        />
                        {cvcError && <span className="text-red-500 text-sm">Can't be blank</span>}
                    </div>
                </div>
                <button type="submit" className="bg-[#21092F] text-white py-3 px-4 rounded-md mt-5 cursor-pointer" onClick={handleSubmit}>Confirm</button>
            </form>
            ) : (
                <div className="successfull w-[350px] flex flex-col items-center gap-5">
                    <img src={Successful} alt=""/>
                    <h2 className="text-3xl">THANK YOU!</h2>
                    <p className="text-neutral-400">We've added your card details</p>
                    <button className="bg-[#21092F] text-white py-3 px-4 rounded-md mt-5 cursor-pointer w-full" onClick={() => {
                        setIsConfirmed(false)
                    }}>Continue</button>
                </div>
            )}
        </div>
        </>
    )
}

export default Form