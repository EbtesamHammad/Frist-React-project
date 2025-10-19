import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h1 className='text-center pt-4'>CONTACT SECTION</h1>
          <div className='d-flex justify-content-center align-items-center mb-4'>
            <div className="line me-3"></div>
            <i className='fa-solid fa-star'></i>
            <div className="line ms-3"></div>
          </div>

          <div className="my-form mt-5">
            <div className='mb-5'>
            <input type="text" className='form-control border-0 border-bottom' placeholder='userName' id='exampleFormControlInput1'/>
            </div>
            <div className='mb-5 '>
            <input type="number" className='form-control border-0 border-bottom' placeholder='userAge' id='exampleFormControlInput1'/>
            </div>
            <div className='mb-5 '>
            <input type="email" className='form-control border-0 border-bottom' placeholder='userEmail' id='exampleFormControlInput1'/>
            </div>
            <div className='mb-5 '>
            <input type="password" className='form-control border-0 border-bottom' placeholder='userPassword' id='exampleFormControlInput1'/>
            </div>

            <button className='btn text-white mb-5'>Send Message</button>
          </div>
          
        </div>
        
        

      </div>
    </>
  )
}
