import React from 'react'
import { FaFacebook, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa6';

function Footer() {
  return <>
  <hr />
  <footer className='py-12'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
      <div className='items-center justify-center flex flex-col'>
        <div className='flex space-x-4'>
          <a href="https://www.facebook.com/profile.php?id=100071805665348" target= "_blank">
          <FaFacebook size={24}/>
          </a>
          <a href="https://www.linkedin.com/in/shiv-bahadur-a09a47288/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={24}/>
          </a>
          <a href="https://github.com/ShivBahadur007" target='_blank' rel="noopener noreferrer">
          <FaGithub size={24}/>
          </a>
          <a href="https://x.com/Shiv85218429711" target='_blank' rel="noopener noreferrer">
          <FaTwitter size={24}/>
          </a>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
          <p>
            &copy; 2025 Shiv. All rights reserved.
          </p>

        </div>
      </div>

    </div>
  </footer>
  </>
}

export default Footer
