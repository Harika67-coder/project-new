import React from 'react'
import {Servicesdata} from '../data';
const Service = () => {
  return (
    <div className="section-center services-center">
      {
        Servicesdata.map((data)=>{
          return(
            <article className="service" key={data.id}>
            <span className="service-icon"><i className={data.className}></i></span>
            <div className="service-info">
              <h4 className="service-title">{data.text}</h4>
              <p className="service-text">
                {data.para}
              </p>
            </div>
            </article>
          )
        })
      }
      

    </div>
  )
}

export default Service