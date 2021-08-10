import React from 'react'
import  '../Style/Card.css'
import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const NurseCard = ({item}) => {
  return (
    <div className="swiperContainer"> <Swiper
        spaceBetween={-250}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}

      >
          {item.map((content, index) => {
              return (
                  <SwiperSlide>
                      <div className="nurseCard">

                          <div>
                              <div className="content">
                                  <div className="name-info">
                                      <img src={'https://picsum.photos/200'} className="image"/>
                                      <div>
                                          <div className="text">{content.first_name} {content.last_name}</div>
                                          <div className="text qualification-text">Nurse</div>
                                      </div>
                                  </div>
                                  <div className="experience-info">
                                      <div><FontAwesomeIcon icon={faMapMarker} /> Montreal</div>
                                      <div><FontAwesomeIcon icon={faBriefcase} /> 20 yrs Exp </div>
                                  </div>
                                  <div className="button_container">
                                      <button className="button">View Details</button>
                                      <button className="button">Book Appointment</button>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </SwiperSlide>)
          })
          }
      </Swiper></div> );
}

export default  NurseCard;