import axios from 'axios'
import React, { useEffect, useState } from 'react'
import avatar from '../../assets/avataaars.svg'

export default function Home() {

    


  return (
    <>
      <section className="home">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-content  py-5 d-flex flex-column justifiy-content-center align-items-center gap-3">
              <img src={avatar} alt="" width={300} />
              <h1 className='text-white'>START FRAMEWORK</h1>
              <div className='d-flex justify-content-center align-items-center mb-4'>
                <div className="line-h me-3"></div>
                <i className='fa-solid fa-star text-white'></i>
                <div className="line-h ms-3"></div>
              </div>
              <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
