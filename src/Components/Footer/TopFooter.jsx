import React from 'react'
import newsletter from '../../images/newsletter.png'
function TopFooter() {
  return (
    <>
    <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group ">
              <input 
                type="text"  
                className="form-control py-1" 
                placeholder="your email address" aria-label="Search Product Here..." 
                aria-describedby="basic-addon2" />
              <span className="input-group-text p-2" id="basic-addon2">
                Suscribe
              </span>
            </div>
            </div>
          
          </div>
        </div>
      </footer>
      </>
  )
}

export default TopFooter