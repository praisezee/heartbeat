import React,{useRef} from "react";
import emailjs from '@emailjs/browser'
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate()
  let form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault()
    emailjs.sendForm('service_b87lkqr','template_sm3nd1j',form.current, 'iK07lkHSzkkt56FFy')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  navigate('/')

  };
  return (
    <main className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white mt-2">
        Contact me
      </h2>
      <hr className="mx-auto bg-black dark:bg-white w-1/6" />
      <form className="max-w-4xl mx-auto text-xl sm:text-1xl flex flex-col item-left gap-4 mb-3" ref={form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          minLength="3"
          placeholder="Enter your name"
          className="w-full text-black text-xl sm:text-1xl rounded-xl border border-solid border-slate-900 dark:border-none p-4"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your message"
          required
          className="w-full text-black text-xl sm:text-1xl rounded-xl border border-solid border-slate-900 dark:border-none p-4"
        />
        <button
          className="bg-pink-700 hover:bg-pink-600 active:bg-pink-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none"
          type="submit"
          
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
