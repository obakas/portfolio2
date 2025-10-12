import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      alert('✅ Thank you! Your message has been sent successfully.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('❌ Failed to send your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // sign up on emailjs.com (select the gmail service and connect your account).
  //   //click on create a new template then click on save.
  //   emailjs
  //     .send(
  //       "service_pom4gqb",  // paste your ServiceID here (you'll get one when your service is created).
  //       "template_n1i293y", // paste your TemplateID here (you'll find it under email templates).
  //       {
  //         from_name: form.name,
  //         to_name: "Obaka", // put your name here.
  //         from_email: form.email,
  //         to_email: "velcre@gmail.com", //put your email here.
  //         message: form.message,
  //       },
  //       "6aR0c9lrmoc31RYsj" //paste your Public Key here. You'll get it in your profile section.
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert('Thank you. I will get back to you as soon as possible.');

  //         setForm({
  //           name: '',
  //           email: '',
  //           message: '',
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.log(error);
  //         alert('Something went wrong. Please try again.');
  //       }
  //     );
  // };

  return (
    <div className=" -mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-[#cfc7c4] p-8 rounded-2xl">
        <p className={`${styles.sectionSubText} text-black`}>Get in touch</p>
        {/* <h3 className={styles.sectionHeadTextLight}>Contact.</h3> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins ">
          <label className="flex flex-col">
            <span className="text-blue-900 font-medium mb-4 text-black">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-black
              text-red-900 rounded-lg outline-none
              border-4 border-black font-medium bg-gradient-to-r from-[#d6d0cc] to-[#cfc7c4]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-blue-900 font-medium mb-4 text-black">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-black
              text-red-900 rounded-lg outline-none
              font-medium bg-gradient-to-r from-[#d6d0cc] to-[#cfc7c4] border-4 border-black"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-blue-900 font-medium mb-4 text-black">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-black
              text-red-900 rounded-lg outline-none
              font-medium resize-none bg-gradient-to-r from-[#d6d0cc] to-[#cfc7c4] border-4 border-black"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
