import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-content d-flex flex-column justifiy-content-center align-items-center">
                <h2 className='text-white'>LOCATION</h2>
                <p className='text-white'>2215 John Daniel Drive</p>
                <p className='text-white'>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="footer-content d-flex flex-column justifiy-content-center align-items-center">
                <h2 className='text-white'>AROUND THE WEB</h2>
                <div className="footer-icons d-flex justifiy-content-center align-items-center gap-3">
                  <div className="icon rounded-circle  border border-1 d-flex justify-content-center align-items-center ">
                    <i class="fa-brands fa-facebook-f text-white  "></i>
                    
                  </div>
                  <div className="icon rounded-circle border border-1 d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-twitter text-white  "></i>
                  </div>
                  <div className="icon rounded-circle border border-1 d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-linkedin text-white  "></i>
                    
                  </div>
                  <div className="icon rounded-circle border border-1 d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-globe text-white "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-content d-flex flex-column justifiy-content-center align-items-center text-center">
                <h2 className='text-white'>ABOUT FREELANCER</h2>
                <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec-footer text-center py-3'>
        <p className='text-white'>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
