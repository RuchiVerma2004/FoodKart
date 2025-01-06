import { useState } from "react";
const Contact = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted: ", formData);
        alert("Thank you for reaching out! We’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      };
    
      return (
        <div className="contact-us-container bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 text-center mb-8">
              Have questions, feedback, or suggestions? We’re here to help! Fill out
              the form below, and we’ll get in touch as soon as possible.
            </p>
    
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-black"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
              </div>
    
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-600-600 text-white px-6 py-2 rounded font-medium hover:bg-black transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
    
            <div className="mt-10 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                You can also reach us at:
              </h3>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:support@foodkart.com"
                  className="text-black hover:underline"
                >
                  support@fooKcart.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +91 123-456-7890
              </p>
            </div>
          </div>
        </div>
      );
};

export default Contact;
