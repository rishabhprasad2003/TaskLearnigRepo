import React from 'react'

export default function Contributors() {
  return (
    <>
    <div className="contri-flex-box">
        <div className="social-w-heading">
            <h1>Industry and <br /> Entrepreneurship Cell</h1>
            <p>
                National Institute of Technology
                <br />
                Kurukshetra, India
            </p>
            <button className="social-media-circle">i</button>
            
            <button className="social-media-circle">ln</button>

            <button className="social-media-circle">f</button>
            
            <button className="social-media-circle">d</button>

            <button className="social-media-circle">t</button>
        </div>

        <div className="email-box">
             <h4>Our Newsletter</h4>

             <p>Subscribe to our newsletter to get latest <br />updates</p>

             <div className="email-flex-box">
                <input type="text" placeholder='E-mail address' />
                <div className="subscribe">Subscribe</div>
             </div>
        
        <div className="mini-navlinks">
             <div className="mini-navbar">
                <a href="">Home</a>
             </div>
             <div className="mini-navbar">
                <a href="">About</a>
             </div>
             <div className="mini-navbar">
                <a href="">Events</a>
             </div>
             <div className="mini-navbar">
                <a href="">Teams</a>
             </div>
             <div className="mini-navbar">
                <a href="">Contacts</a>
             </div>
             <div className="mini-navbar">
                <a href="">Blogs</a>
             </div>
             <div className="mini-navbar">
                <a href="">Contributors</a>
             </div>
        </div>
        </div>
    </div>  
    </>
  )
}


