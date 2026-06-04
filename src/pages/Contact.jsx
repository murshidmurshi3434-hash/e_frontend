function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto px-4 py-12">

        <div className="max-w-3xl mx-auto bg-white rounded-[20px] shadow-lg p-6 sm:p-10">

          <p className="text-gray-500 uppercase tracking-[4px] text-sm">
            Contact Us
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Get In Touch
          </h1>

          <form className="mt-8 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 sm:p-4 rounded-2xl outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 sm:p-4 rounded-2xl outline-none focus:border-black"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 sm:p-4 rounded-2xl outline-none focus:border-black"
            ></textarea>

            <button className="w-full bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;