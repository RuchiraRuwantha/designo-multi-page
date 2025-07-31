const ContactForm = () => {
    return (
        <div className="w-full min-h-[480px] grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-28 sm:gap-10 gap-12 lg:px-24 sm:px-[58px] lg:py-14 py-[72px] px-6 lg:bg-[url(/images/contact-us-bg.png)] sm:bg-[url(/images/contact-us-tablet-bg.png)] bg-[url(/images/contact-us-mobile-bg.png)] bg-no-repeat bg-cover bg-center sm:rounded-2xl">
            <div className="lg:pb-[105px] flex flex-col justify-center lg:gap-10 sm:gap-8 gap-6">
                <div className="sm:text-5xl/[48px] text-[32px]/[36px] tracking-normal flex sm:justify-start justify-center items-center w-full">
                    Contact Us
                </div>
                <div className="sm:text-left text-center">
                    Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                </div>
            </div>
            <form className="w-full flex flex-col gap-6">
                <div className="flex items-center border-b border-[#FFFFFF] py-2">
                    <input
                        className="appearance-none font-jost bg-transparent border-none w-full text-[#FFFFFF] mx-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Name"
                        aria-label="Full name"
                    />
                </div>
                <div className="flex items-center border-b border-[#FFFFFF] py-2">
                    <input
                        className="appearance-none font-jost bg-transparent border-none w-full text-[#FFFFFF] mx-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Email Address"
                        aria-label="Email Address"
                    />
                </div>
                <div className="flex items-center border-b border-[#FFFFFF] py-2">
                    <input
                        className="appearance-none font-jost bg-transparent border-none w-full text-[#FFFFFF] mx-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Phone"
                        aria-label="Phone"
                    />
                </div>
                <div className="flex items-center border-b border-[#FFFFFF] py-2">
                    <textarea
                        rows={4}
                        className="resize-none appearance-none font-jost bg-transparent border-none w-full text-[#FFFFFF] mx-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder="Your Message"
                        aria-label="Phone"
                    />
                </div>
                <div className="flex items-center sm:justify-end justify-center sm:pt-0 pt-5">
                    <button className="rounded-[8px] text-[#333136] bg-white md:text-[15px] leading-[auto] tracking-wide font-normal transition hover:text-white hover:bg-[#FFAD9B] py-4 px-12 cursor-pointer">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;