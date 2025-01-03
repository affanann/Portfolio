import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
         
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=madleyaffan@gmail.com"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                > madleyaffan@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="https://wa.me/+6282269676766"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                > +62 822-6967-6766
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                 {/* LinkedIn */}
                <div onClick={() => window.open('https://linkedin.com/in/affanmadley', '_blank')} style={{ cursor: 'pointer' }}>
                  <FaLinkedin className="text-blue-400" />
                </div>
                {/* Github */}
                <div onClick={() => window.open('https://github.com/affanann', '_blank')} style={{ cursor: 'pointer' }}>
                  <FaGithub className="text-blue-400" />
                </div>
                {/* Instagram */}
                <div onClick={() => window.open('https://instagram.com/affanmadley', '_blank')} style={{ cursor: 'pointer' }}>
                  <FaInstagram className="text-blue-400" />
                </div>
              </div>
            </div>
          </div>

            {/* contact */}
            <div className='bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8'>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
                <form action="" className='space-y-6'>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-300'>Email</label>
                        <input 
                        type="email" 
                        id='email' 
                        className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Your Email' 
                        autoComplete="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Name</label>
                        <input 
                        type="text" 
                        id='name' 
                        className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Your Name' 
                        autoComplete="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                        <textarea 
                        id="message" 
                        rows={5} 
                        className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
                        placeholder='Your Message'
                        autoComplete="off"
                        >
                      </textarea>
                    </div>
                    <button type='submit' className='w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>Send Message</button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
