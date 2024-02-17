/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div data-aos="fade-right" className="pb-5" data-aos-delay="400">
      <div className="flex w-full mt-32 items- justify-center flex-wrap-reverse gap-8">
        <div style={{
          width: '45%'
        }} className="flex flex-col items- justify-center abt gap-11 ">
          <h2 className="text-red-600 text-4xl text-center">About us</h2>
          <img className="h-28 object-cover" src="https://res.cloudinary.com/pitz/image/upload/v1708016832/pic2-removebg-preview_lqtz9f.png" alt="" />
          <p className="text-slate-500 text-xl ">
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
      <div className="flex w-full  items- justify-center flex-col mt-20 gap-2">
        <div className="flex w-full  items- justify-center flex-wrap gap-8 ">
          <div style={{ width: '45%' }} className=" flex flex-col border rounded-lg abt shadow-slate-900">
            <h2 className="text-red-600 text-4xl">Our People</h2>

            <div className="flex flex-wrap abt p-5 items-center w-full justify-center gap-5">
              <img src="https://res.cloudinary.com/pitz/image/upload/v1708149890/3_kfjttq.png" alt="" />
              <p>Our colleagues within the continent are the cornerstone of our success. They have helped us
                in impacting the industry, our projects, and the communities where we operate through their
                talent, commitment, and dedication. In addition, our colleagues have spent thousands of
                hours volunteering for local charities at project sites at and also in different CSR Projects that
                we take part in.</p>
            </div>
            <h2 className="text-red-600 text-4xl">Development</h2>
            <div className="flex flex-wrap abt p-5 items-center w-full justify-center gap-5">
              <img src="https://res.cloudinary.com/pitz/image/upload/v1708149911/2_eoduxr.png" alt="" />
              <p>At 21 Knights Engineering Group We constantly encourage our
                employees on the basis of personal development whereby they take
                professional courses to upgrade their skills which translate to
                personal development and aids the company in being more efficient.
                With regular interchange programs and retreats between employees
                we constantly give them a chance to brainstorm more ideas and aids
                in creating trusting teams in the organization.</p>
            </div>


          </div>

          <div style={{ width: '45%' }} className=" flex flex-col border rounded-lg abt shadow-slate-900">
            <h2 className="text-red-600 text-center text-4xl">Our Core Value and Development</h2>

            <img src="https://res.cloudinary.com/pitz/image/upload/v1708149919/Capture_nx5vmv.png" alt="" />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Page;
