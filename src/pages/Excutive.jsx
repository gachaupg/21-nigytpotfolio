import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";


const Excutive = () => {
    return (
        <div data-aos="fade-right" data-aos-delay="400" className="flex w-full justify-center mt-5 gap-8 main-why  flex-wrap items-center">
            <div className='ex-image flex items-center justify-center'>
                <h1 className='text-red-500'>Excutive Message</h1>
            </div>
            <p style={{ width: '65%' }} className=" flex flex-col abt">
                <ImQuotesLeft color="black" size={35} />
                <p className='text-justify text-lg'>
                    “As we continue to adapt to
                    changing market dynamics,
                    our core values remain
                    unshaken. In addition to
                    creating solid partnerships
                    with other Companies,
                    Investors and different
                    stakeholders, we are
                    committed to delivering
                    high-quality projects that
                    have a good impact on
                    communities all over Africa sincerely,

                </p>
                <ImQuotesRight color="brown" size={35} />
                <p style={{ width: '65%' }} className="flex flex-col justify-end items-end abt">
                    <h1 className=''>PATRICK NDIRANGU
                    </h1>
                    <p className='text-justify text-lg text-red-500 text-brown-500'>CHAIRMAN | CEO</p>

                </p>
            </p>
        </div>
    )
}

export default Excutive