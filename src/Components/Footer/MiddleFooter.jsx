import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs'

function MiddleFooter() {
  return (
    <>
    <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Conatct Us</h4>
              <div>
                <address className='text-white fs-6'>Hno: 277 Near MAKAUT,<br></br>
                  Haringatha, Naida<br />
                  pincode: 802103
                  </address>
                  <a href="tel:+916203375160" className="mt-3 d-block mb-1 text-white">+91 6203375160</a>
                  <a href="mailto:eshop@eshop.com" className="mt-2 d-block mb-1 text-white">eshop@eshop.com</a>
                  <div className="social icons d-flex align-item-center gap-30">
                    <a className='text-white' href="">
                      <BsLinkedin className='fs-4'/>
                    </a>
                    <a className='text-white' href="">
                      <BsInstagram className='fs-4'/>
                    </a>
                    <a className='text-white' href="">
                      <BsGithub className='fs-4'/>
                    </a>
                    <a className='text-white' href="">
                      <BsYoutube className='fs-4'/>
                    </a>
                  </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping pilocy</Link>
                <Link className='text-white py-2 mb-1'>Terms & condition</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Headphone</Link>
                <Link className='text-white py-2 mb-1'>Tablet</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MiddleFooter