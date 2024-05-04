"use client";
import { MdEmail } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const ContactMeSection = () => {
  const handleContactForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
    <form name="form-contact" onSubmit={handleContactForm}>
      {/* For project section ----> */}
      <div className="min-h-screen max-w-6xl mx-auto flex flex-wrap gap-x-16 pt-8">
        <div className="grow">
          {/* Title */}
          <div className="text-purple font-semibold -rotate-12 origin-bottom-left -ml-2">
            Contact
          </div>
          <div className="font-bold text-5xl md:text-7xl break-words">
            Let&#39;s Connect
          </div>
          {/* Information */}
          <div className="mt-4 md:mt-12 mb-8 w-fit md:w-auto">
            <div className="flex items-start gap-4 py-4 md:py-8 border-t-2">
              <div>
                <MdEmail className="text-5xl bg-white text-black p-2 rounded-full" />
              </div>
              <div>
                <p className="mb-2">Email</p>
                <input
                  placeholder="What's your email address?"
                  type="email"
                  name="email"
                  id="email"
                  className="text-xl w-52 sm:w-80 bg-transparent"
                  required
                />
              </div>
            </div>
            <div className="flex items-start gap-4 pt-4 md:pt-8 border-t-2">
              <div>
                <MdAlternateEmail className="text-5xl bg-white text-black p-2 rounded-full" />
              </div>
              <div>
                <p className="mb-2">Message</p>
                <textarea
                  name="message"
                  placeholder="Write you message!"
                  cols="42"
                  rows={"3"}
                  className="text-xl w-52 sm:w-80 bg-transparent"
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <button
          className="flex justify-center grow"
          type="submit"
          onClick={() => {
            document.forms["form-contact"].requestSubmit();
          }}
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 flex flex-col justify-center items-center">
            <div className="w-full flex justify-around items-center">
              <div>
                <p className="text-2xl font-bold">
                  <span className="text-4xl">👋</span> Send Message
                </p>
              </div>
              <div>
                <GoArrowUpRight className="text-8xl bg-purple text-white p-6 rounded-full" />
              </div>
            </div>
            <div className="w-4/5 border  rotate-6"></div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactMeSection;
