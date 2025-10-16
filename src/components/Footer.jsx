import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>More ways to shop: Find an Apple Store orother retailer near you. Or call 000800 040 1966.
        </p>
        <img src={import.meta.env.BASE_URL + 'logo.svg'} alt="Apple Logo" />
      </div>
      
      <hr/>

      <div className="links">
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({label , link}) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

    </footer>
  )
}

export default Footer