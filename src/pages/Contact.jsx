
const Contact = () => {
    return (
        <div data-aos="fade-right" data-aos-delay="400" className="flex w-full mt-32 items-center justify-center flex-col gap-8">
            <h2 className="text-red-600 text-4xl">Contact us</h2>

            <div className="flex flex-wrap w-full gap-6 p-4 justify-between">
                <div style={{ width: '45%' }} className="abt">
                    <img src="https://res.cloudinary.com/pitz/image/upload/v1708112796/five-removebg-preview_ohiqtr.png" alt="" />
                    <img src="https://res.cloudinary.com/pitz/image/upload/v1708112799/four_nbbr20.png" alt="" />
                </div>
                <form action="" style={{ width: '45%' }} className="abt border shadow-2xl p-2 rounded-lg gap-6 flex flex-col items-center justify-center">
                    <h3 className="text-2xl text-red-600">Quick Message</h3>
                    <div className="flex flex-col w-full">
                        <label htmlFor="name">Name/Company</label>
                        <input type="text" id="name" className="border border-red-200 h-10 w-full rounded-lg" placeholder="Enter your name/company" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="name">Email</label>
                        <input type="text" id="name" className="border border-red-200 h-10 w-full rounded-lg" placeholder="Email" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="name">Subject</label>
                        <input type="text" id="name" className="border border-red-200 h-10 w-full rounded-lg" placeholder="Enter your subject" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="border border-red-200 h-20 w-full rounded-lg" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="bg-red-600 text-white w-full mt-7 rounded-lg px-4 py-2 mt-4">Send</button>
                </form>

            </div>
        </div>
    )
}

export default Contact