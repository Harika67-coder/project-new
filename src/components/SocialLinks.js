import React from 'react'
import {sociallinks } from '../data.js';
const SocialLinks = ({parentclass,smallclass}) => {
  return (
    <ul class={parentclass}>
      {
        sociallinks.map((link)=>{
          const {id,href,icon}=link;
          return (
            <li key={id}>
                <a href={href} target="_blank" rel='noreferrer' class={smallclass}>
                    <i class={icon}></i>
                </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default SocialLinks