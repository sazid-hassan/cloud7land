import React from 'react'

export default function AdressCard() {
  return (
    <div>
        <div className="contact-info">
            <div className="contact-info-item">
            <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
                <h4>Location:</h4>
                <p>House 02, Road 10, Block D, Niketon, Gulshan 1, Dhaka 1212</p>
            </div>
            </div>
            <div className="contact-info-item">
            <div className="icon">
                <i className="fas fa-envelope"></i>
            </div>
            <div className="info">
                <h4>Email:</h4>
                <p>
                <a href="mailto: " target="_blank" rel="noreferrer">
                    {""}
                </a>
                </p>
                    </div>
                    </div>
                    </div>


    </div>
  )
}
