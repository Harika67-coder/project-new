import React from 'react'

import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
const Footer = () => {
  return (
    <footer class="section footer">
    <PageLinks parentclass="footer-links" smallclass="footer-link"/>
    <SocialLinks parentclass="footer-links" smallclass="footer-link"/>
    <p class="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer