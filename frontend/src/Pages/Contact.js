import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const [visitorData, setVisitorData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [limit, setLimit] = useState(false);
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Enforce character limit for message
    if (name === "message" && value.length > 250) {
      setLimit(true);
      return;
    }
    setLimit(false);
    setVisitorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    enqueueSnackbar("Sending...", { autoHideDuration: 1000 });
    formData.append("access_key", "ad5392e6-a5c6-4dc4-86a4-0b681c7e983a");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      var data = await response.json();
    } catch (error) {
      console.log(error);
      return enqueueSnackbar("Unable to Sent Message", { variant: "default" });
    }
    if (data.success) {
      enqueueSnackbar("Form Submitted Successfully", {
        autoHideDuration: 3000,
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      return enqueueSnackbar("Unable to Sent Message", { variant: "default" });
    }
  };

  return (
    <div className="h-[80vh] w-full flex justify-center items-center md:px-0 px-4 bg-gradient-to-bl  from-[#F8DAC5] via-[#D8A76D] to-[#FFDFBD] dark:bg-none dark:bg-black">
      <div
        className="md:h-[80%] h-auto md:w-1/2 w-full border-2 dark:border-white border-black rounded-lg p-6 flex md:flex-row flex-col items-center"
        data-aos="flip-right"
      >
        {/* Left Section */}
        <div className="md:w-1/2 md:h-full w-full h-1/4">
          <p className="dark:text-white text-darkbrown md:text-5xl text-3xl font-tommy md:text-left text-center md:w-40">
            Connect with me
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center md:w-1/2 w-full h-full justify-center"
        >
          <input
            type="text"
            name="name"
            placeholder="YOUR NAME *"
            value={visitorData.name}
            onChange={handleChange}
            className="h-11 w-5/6 font-bold text-sm tracking-wider outline-none bg-transparent dark:text-white placeholder:text-gray-600 border-b-[1px] dark:border-gray-600 border-gray-400 dark:focus:border-white focus:border-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL *"
            value={visitorData.email}
            onChange={handleChange}
            className="h-11 w-5/6 mt-4 font-bold text-sm tracking-wider outline-none bg-transparent dark:text-white placeholder:text-gray-600 border-b-[1px] dark:border-gray-600 border-gray-400 dark:focus:border-white focus:border-black"
            required
          />

          <textarea
            name="message"
            placeholder="DROP MESSAGE HERE *"
            value={visitorData.message}
            onChange={handleChange}
            className="h-auto min-h-11 mt-4 w-5/6 font-bold text-sm tracking-wider outline-none bg-transparent dark:text-white placeholder:text-gray-600 border-b-[1px] dark:border-gray-600 border-gray-400 dark:focus:border-white focus:border-black resize-none overflow-hidden"
            rows="1"
            onInput={(e) => {
              e.target.style.height = "auto"; // Reset height
              e.target.style.height = e.target.scrollHeight + "px"; // Adjust to content height
            }}
            spellCheck="false"
          />

          <p
            className={`text-xs self-end pr-6 mt-1 ${
              limit
                ? "text-red-600 opacity-70"
                : "dark:text-white text-black dark:opacity-30 opacity-50"
            }`}
          >
            {visitorData.message.length}/250 characters
          </p>

          {/* Buttons */}
          <div className="flex gap-10 mt-4 self-end pr-6">
            <button
              type="button"
              onClick={() =>
                setVisitorData({ name: "", email: "", message: "" })
              }
              className="dark:text-white font-bold"
            >
              CANCEL
            </button>
            <button type="submit" className="dark:text-white font-bold">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
