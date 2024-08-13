import React from 'react'
import logo from '../images/logo.svg'
import SocialLinks from './SocialLinks';
import PageLinks from './PageLinks';
const Navbar = () => {
  return  (<nav class="navbar">
    <div class="nav-center">
      <div class="nav-header">
        <img src={logo} class="nav-logo" alt="backroads" />
        <button type="button" class="nav-toggle" id="nav-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      {/*<!-- left this comment on purpose -->*/}
      <PageLinks parentclass="nav-links" smallclass="nav-link"/>
      <SocialLinks parentclass="nav-links" smallclass="nav-link"/>
    </div>
  </nav>
  )
}

export default Navbar