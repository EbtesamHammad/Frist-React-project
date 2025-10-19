import React from 'react'
import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {
  return (
    <>
      <section className='portfolio'>
        <div className="container">
          <h1 className='text-center pt-4 fw-bold'>PORTFOLIO SECTION</h1>
          <div className='d-flex justify-content-center align-items-center mb-4'>
            <div className="line me-3"></div>
            <i className='fa-solid fa-star'></i>
            <div className="line ms-3"></div>
          </div>
          <div className="row gy-5 mb-5">
            <div className="col-lg-4">
              <div className="portfolio-content position-relative overflow-hidden">
                <img src={port1} alt="" className='w-100 rounded-3'/>
                <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <i class="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="portfolio-content position-relative overflow-hidden">
                <img src={port2} alt="" className='w-100 rounded-3'/>
                <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <i class="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="portfolio-content position-relative overflow-hidden">
                <img src={port3} alt="" className='w-100 rounded-3'/>
                <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <i class="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="portfolio-content position-relative overflow-hidden">
                <img src={port1} alt="" className='w-100 rounded-3'/>
                <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <i class="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="portfolio-content position-relative overflow-hidden">
                <img src={port2} alt="" className='w-100 rounded-3'/>
                <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <i class="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="portfolio-content position-relative overflow-hidden">
                <img src={port3} alt="" className='w-100 rounded-3'/>
                <div className='layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
                  <i class="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
