
const Footer = () => {

  return (
    <div className="bg-slate-300 w-full flex flex-wrap items-center justify-around p-3 " >
      <div className="flex flex-col items-center ">
        <img className="w-36" src="https://res.cloudinary.com/pitz/image/upload/v1708016832/pic2-removebg-preview_lqtz9f.png" alt="" />
        <img src="https://res.cloudinary.com/pitz/image/upload/v1708112796/five-removebg-preview_ohiqtr.png" alt="" />
      </div>
      <div className="flex flex-col items-">
        <h3 className="text-2xl text-red-600">Quick Links</h3>
        <ol>
          <li className="underline un">Home</li>
          <li className="underline un">About</li>
          <li className="underline un">Blog</li>
          <li className="underline un">Projects</li>
          <li className="underline un">Contact</li>
        </ol>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl text-red-600">Subscribe to our news letter</h3>
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
