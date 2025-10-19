import React from 'react'

export default function About() {
  return (
    <>
      <section className='about  '>
        <div className="container py-5">
          <div className="about-contant  py-5 d-flex flex-column justifiy-content-center align-items-center ">
            <h1 className='text-center mt-5 text-white'>ABOUT COMPONENT</h1>
            <div className='d-flex justify-content-center align-items-center mb-4'>
            <div className="line-h me-3"></div>
            <i className='fa-solid fa-star text-white'></i>
            <div className="line-h ms-3"></div>
          </div>
          <div>
            <div className="row mt-5 pb-5">
              <div className="col-lg-6 pb-5">
                <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-lg-6 pb-5">
                <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
