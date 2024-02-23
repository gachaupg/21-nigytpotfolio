
const data = [
  { image: 'https://res.cloudinary.com/pitz/image/upload/v1708110217/3_tf61mn.png' },
  { image: 'https://res.cloudinary.com/pitz/image/upload/v1708110092/12_mt0s6f.png' },
  { image: "https://res.cloudinary.com/pitz/image/upload/v1708110584/7_hmzkcb.png" },
  { image: "https://res.cloudinary.com/pitz/image/upload/v1708110571/9_ky60wk.png" },
  { image: "https://res.cloudinary.com/pitz/image/upload/v1708110537/10_ow06ae.png" },
  { image: "https://res.cloudinary.com/pitz/image/upload/v1708110311/1_holpmb.png" },
  { image: "https://res.cloudinary.com/pitz/image/upload/v1708110217/3_tf61mn.png" },
  { image: "https://res.cloudinary.com/pitz/image/upload/v1708110092/12_mt0s6f.png" },
  { image: "https://res.cloudinary.com/pitz/image/upload/v1708111216/5_u5xgrb.png" },
  { image: "https://res.cloudinary.com/pitz/image/upload/v1708111216/5_u5xgrb.png" },
  { image: 'https://res.cloudinary.com/pitz/image/upload/v1708111209/9_dwbafq.png' }
];

const Clients = () => {
  return (
    <>     
     <h2 className="text-red-600 text-center mt-2 text-4xl">Our clients</h2>
      <div data-aos="fade-right" data-aos-delay="400" className="clients-container h-64 w-full flex flex-col items-center justify-center">
        <div className="cards-wrapper gap-7">
          {data.map((item) => (
            // <div className="w-full " key={index}>
            <img key={item.image} className="h-36 w-36 object-contain" src={item.image} alt="" />
            // </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default Clients;
