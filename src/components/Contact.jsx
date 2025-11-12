import React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities
        </p>
        
        {/* Contact Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center justify-center gap-3">
              <FaPaperPlane className="text-blue-400" />
              Let's Connect
            </h3>
            
            {/* Link to socials */}
            <div className="flex justify-center gap-4 mb-8">
              <a href="https://www.linkedin.com/in/derick-tabios" className="bg-gray-800 hover:bg-blue-600 p-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <FaLinkedin className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://github.com/DgenR-8" 
                className="bg-gray-800 hover:bg-purple-600 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <FaGithub className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Contact Details*/}
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group">
                <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">dtabios0002@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group">
                <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/30 transition-colors">
                  <FaPhone className="text-green-400 text-xl" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">07425291597</p>
                </div>
              </div>
            </div>

            {/* Email Button*/}
            <div className="mt-8 text-center">
              <a href="mailto:dtabios0002@gmail.com?subject=Portfolio Inquiry&body=Hi Derick, I saw your portfolio and would like to connect about...
              "className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <FaEnvelope />
                Send Me an Email
              </a>
              
              <p className="text-gray-400 text-sm mt-4"> Prefer to call? 
                <span className="text-green-400"> 07425291597 </span>
              </p>
            </div>
            {/* Quick Action Buttons*/}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href="tel:07425291597" className="flex items-center gap-2 bg-gray-800 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <FaPhone />
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact