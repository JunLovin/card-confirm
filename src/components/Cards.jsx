import { useContext } from 'react'
import { UseCardContext } from '@context/UseCard'
import bgCardFront from '@public/images/bgCardFront.png'
import bgCardBack from '@public/images/bgCardBack.png'
import cardLogo from '@public/images/card-logo.svg'

function Cards() {
    const { name, number, month, year, cvc } = useContext(UseCardContext)

    return (
        <>
        <div className="cards-container h-full w-[35%] bg-[url(/images/bgMainDesktop.png)] bg-cover bg-center bg-no-repeat relative max-[1100px]:w-full">
            <div className="card-front absolute top-[33%] left-[85%] translate-[-50%] z-10 w-max h-max max-[1100px]:left-[45%] max-[1100px]:top-[60%]">
                <img src={cardLogo} alt="" className="absolute top-4 left-6"/>
                <img src={bgCardFront} alt="" className="w-[480px] h-[260px] max-[1500px]:w-[400px] max-[1500px]:h-[200px] shadow-2xl max-[480px]:w-[350px]"/>
                <div className="card-number absolute bottom-14 w-full left-6 text-white font-semibold">
                    <p className="text-4xl mb-3 max-[1500px]:text-3xl max-[480px]:text-2xl">{number}</p>
                    <span className="absolute text-xl max-[1500px]:text-[1rem]">{name}</span>
                    <span className="absolute right-12 text-xl max-[1500px]:text-[1rem]">{month}/{year}</span>
                </div>
            </div>
            <div className="card-back absolute top-[67%] left-[100%] translate-[-50%] z-10 w-max h-max max-[1100px]:left-[55%] max-[1100px]:top-[30%] max-[1100px]:-z-0">
                <img src={bgCardBack} alt="" className="max-[1500px]:w-[400px] max-[1500px]:h-[200px] shadow-2xl max-[480px]:w-[350px]" />
                <p className="absolute top-27 right-13 text-white max-[1500px]:top-21.5">{cvc}</p>
            </div>
        </div>
        </>
    )
}

export default Cards