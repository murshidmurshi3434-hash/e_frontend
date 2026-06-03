function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-20">

      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-lg p-12">

        <p className="text-gray-500 uppercase tracking-[4px]">
          Contact Us
        </p>

        <h1 className="text-6xl font-bold text-gray-900 mt-4">
          Get In Touch
        </h1>

        <form className="mt-12 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-5 rounded-2xl outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-5 rounded-2xl outline-none focus:border-black"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-5 rounded-2xl outline-none focus:border-black"
          ></textarea>

          <button className="bg-black text-white px-10 py-4 rounded-full hover:scale-105 transition">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;