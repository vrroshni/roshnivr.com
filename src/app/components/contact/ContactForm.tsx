"use client"
import axios from "axios";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
});
const [loading, setLoading] = useState(false);


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
        toast.warning("Empty Fields!")
        return false;
    }

    setLoading(true);
    axios.post("/api/mail", {
        name: values.name,
        email: values.email,
        message: values.message,
    }).then((res) => {
        if (res.status === 200) {
            setValues({ name: "", email: "", message: "" });
            setLoading(false);
            toast.success(res.data.message)
        } else {
            setLoading(false);
            toast.error(res.data.message)
        }
    }).catch((err) => {
        setLoading(false);
        toast.error(err.message)
    });
};

const handleChange = (e: | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues((prevInput) => ({
        ...prevInput,
        [e.target.name]: e.target.value,
    }));
};

  return (
    <div id="contactform" className="scroll-mt-20">
            <ToastContainer />
            <div className="w-full lg:w-5/6 2xl:w-4/6 mt-10 md:mt-16 mx-auto  rounded-xl ">
                <div className="flex-1">
                    <h3 className="text-2xl">Get in touch</h3>
                    <p className="text-gray-400 mb-4 mt-2 text-sm md:text-base">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl">
                        <input onChange={handleChange} required value={values.name} name="name" type="text" placeholder='Full Name *' className="outline-none bg-textGreen/10  placeholder-gray-500 rounded-lg py-3 px-4" />
                        <input onChange={handleChange} required value={values.email} name="email" type="email" placeholder='Email *' className="outline-none bg-textGreen/10  placeholder-gray-500 rounded-lg py-3 px-4" />
                        <textarea onChange={handleChange} required value={values.message} name="message" rows={4} placeholder='Message *' className="outline-none resize-none bg-textGreen/10  placeholder-gray-500 rounded-lg py-3 px-4" />
                        <button disabled={loading} className="px-4 py-2 bg-gradient-to-r from-textGreen/40 to-textGreen transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end">
                            {loading ? <span className="flex items-center gap-2">Say Hello <BiLoaderAlt className="animate-spin" /></span> : "Lets Connect 👋"}
                        </button>
                    </form>
                </div>
            </div>
            </div>
  )
}

export default ContactForm