import React from 'react'

export default function Contacts() {
  return (
    <>
        <h1 className="contacts-heading">CONTACTS</h1>

        <div className='contacts-container'>
            <div className='sub-address-box'>
            <i class="fa-light fa-envelope"></i>
              <div className="head-para-address">
                <h2>Our Address</h2>
                <p>ICELL Room, AB Block, NIT Kurukshetra</p>
              </div>
            </div>

            <div className='sub-contact-box'>
            <i class="fa-light fa-envelope"></i>
              <div className="head-para-email">
                <h2>Email Us</h2>
                <p>icell@nitkkr.ac.in</p>
              </div>
            </div>

            <div className='sub-contact-box'>
            <i class="fa-regular fa-phone"></i>   
              <div className="head-para-call">
                <h2>Call Us</h2>
                <p>+91 9847498554</p>
              </div>
            </div>
        </div>    

        <div className='contacts-container'>

            <div className="map">

            </div>
        </div>
    </>
  )
}
