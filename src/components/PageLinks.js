import React from 'react'
import {pagelinks} from '../data.js'
const PageLinks = ({parentclass,smallclass}) => {
  return (
    <ul class={parentclass}>
      {
        pagelinks.map((links)=>{
          const {id,text,href}=links;
          return (
            <li key={id}>
              <a href={href} class={smallclass}>{text}
              </a>
            </li>
          )
        })
      }
     
      <li>
        <a href="#featured" class="footer-link">featured</a>
      </li>
    </ul>
  )
}

export default PageLinks