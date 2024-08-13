import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    fromMail: "",
    subject: "",
  });

  const handleChange = async (e) => {
    const { value, name } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4001/user/send", formData);

      setFormData({
        ...formData,
        name: "",
        fromMail: "",
        subject: "",
      });

      console.log(res.data);
      toast.success("Mail Sent Successfully");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-screen-sm container mx-auto md:px-20 px-4 mt-32 space-y-5 mb-16">
      <div className="text-center">
        <h1 className="text-4xl">
          <span className="font-semibold">Get in </span>
          <span className="text-accent font-extrabold">Touch!</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="input input-accent input-bordered items-center gap-2 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className=""
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="input input-bordered input-accent flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="fromMail"
            value={formData.fromMail}
            onChange={handleChange}
            required
          />
        </label>
        <label className="input input-bordered input-accent flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="textarea" className="grow" placeholder="Username" />
        </label>

        <textarea
          className="textarea textarea-accent w-full h-full text-lg"
          placeholder="💬Message"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        ></textarea>

        <div className="flex justify-center">
          <button className="btn btn-accent">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
