import React from "react";
import Button from "react-bootstrap/Button";
import "primeicons/primeicons.css";
import { BsChevronRight } from "react-icons/bs";
import "./Customers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore ,{Autoplay} from 'swiper'
import { FreeMode } from "swiper";
import "swiper/css";
import 'swiper/css/autoplay'

export function Customers() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h6 className="h6">Our customer says</h6>
          </div>
          <div className="col-6">
            <Button variant="light" className="fifthContainerButton">
              Button <BsChevronRight />
            </Button>
          </div>
        </div>
        <Swiper
       slidesPerView={4}
       spaceBetween={50} autoplay={{
         "delay": 0,
         "disableOnInteraction": false
       }} pagination={{
         "clickable": true
       }} navigation={true} className="mySwiper"
        >
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula.
              </p>
              <p className="name">Name and Surname</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula.
              </p>
              <p className="name">Name and Surname</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula.
              </p>
              <p className="name">Name and Surname</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula.
              </p>
              <p className="name">Name and Surname</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula.
              </p>
              <p className="name">Name and Surname</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula.
              </p>
              <p className="name">Name and Surname</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula.
              </p>
              <p className="name">Name and Surname</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
