import { GiRotaryPhone } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

<div className="flex justify-center gap-6 items-center">
            <MdEmail fontSize="35" size={36} className="text-orange-900 text-3xl"/> 
            <p  className="text-orange-900 text-2xl">www.21kinghts.com</p>
          </div>
const Footer = () => {

  return (
    <div className="bg-slate-300 w-full flex flex-wrap items- justify-around p-1 " >
      <div className="flex flex-col items- ">
        <img className="w-36" src="https://res.cloudinary.com/pitz/image/upload/v1708692038/Capture-removebg-preview_1_uhlkrr.png" alt="" />
        <div className="flex mr-16 flex-col w-full items-start object-contain justify-center">
          <div className="flex justify-center gap-6  items-center">
            <GiRotaryPhone fontSize="35" size={36} className="text-orange-900 text-3xl"/> 
            <p  className="text-orange-900 ">+254 727-399-196</p>
          </div>
          <div className="flex justify-center gap-6 items-center">
            <TfiWorld fontSize="35" size={36} className="text-orange-900 text-3xl"/> 
            <p  className="text-orange-900  underline">www.21kinghts.com</p>
          </div>
          <div className="flex justify-center gap-6 items-center">
            <MdEmail fontSize="35" size={36} className="text-orange-900 text-3xl"/> 
            <p  className="text-orange-900  underline">contact@21knights.com</p>
          </div>
          <div className="flex justify-center gap-6 items-center">
            <FaLocationDot fontSize="35" size={36} className="text-orange-900 text-3xl"/> 
            <p  className="text-orange-900 ">Muthaiga Square 2nd Floor</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 i-footer items-start object-contain justify-center pl-4">
        <h3 className="text-xl text-red-600">Quick Links</h3>
        <ol className="flex flex-col items-start">
          <li className="underline un">Home</li>
          <li className="underline un">About</li>
          <li className="underline un">Blog</li>
          <li className="underline un">Projects</li>
          <li className="underline un">Contact</li>
        </ol>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl text-red-600">Subscribe to our news letter</h3>
        <div className="w-80 border rounded-lg flex flex-col gap-4 bg-slate-100 p-3 pb-2">
          <label htmlFor=""> Email</label>
          <input className="border rounded-lg h-10 border-slate-500" type="text" />
          <button className="border rounded-lg h-10 bg-red-600 mb-5 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
