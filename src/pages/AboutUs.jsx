/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import Certs from "./Certs";
import WhyChooseUs from "../components/WhyChooseUs"
const Page = () => {
  return (
    <div  data-aos="fade-right" data-aos-delay="400" className="w-full">
      <div className="sus-top flex justify-center   w-full items-center ">
        <h1>
        About us
        </h1>
      </div>
   
    <div data-aos="fade-right" className="pb-5" data-aos-delay="400">
      <div className="flex w-full mt-10 items- justify-center flex-wrap-reverse gap-8">
        <div style={{
          width: '45%'
        }} className="flex flex-col items- justify-center abt gap-11 ">
          {/* <h2 className="text-red-600 text-xl text-center">About us</h2> */}
          <img className="h-28 object-cover" src="https://res.cloudinary.com/pitz/image/upload/v1708692038/Capture-removebg-preview_1_uhlkrr.png" alt="" />
          <p className="text-slate-500  ">
            At 21 Knights we aim to be Africa's leading Engineering, Construction, and Project
            Management organization. our pledge is to deliver extraordinary results for our
            customers and our team. This pledge is underpinned by our ability to design for the
            world, inscribe our commitment with our actions, and construct with boundless
            imagination.

          </p>
          <Link to='/contact'>
            <button className="bg-red-500 w-full text-white p-2 border rounded-lg">
              Contact us
            </button>
          </Link>

        </div>
        <div className="abt" style={{
          width: '45%'
        }}>
          <img src="https://emiconstructionph.com/wp-content/uploads/2023/12/5.jpg" alt="" />
        </div>

      </div>
   
      <WhyChooseUs />
      <Certs/>
    </div>
   </div>
  );
};

export default Page;
