import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>The street markets of Bali are a treat for the senses. 
            Colourful silks, sparkling artisanal jewellery…even the sizzling street food is pure eye candy.
             I've checked out almost all of the markets on the island and these are my top five recs that are so worth braving the crowds to visit. 
             Be sure to bring your appetite, and an extra bag for your loot.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>After more years writing about them than I care to admit, 
            I can spot a good London pub faster than you can say “Pint, please.” 
            What's the secret? Big or small, central or suburban, it comes down to the person behind the bar. 
            And of course, the place itself needs to have some personality, too. Here are my favourite pubs.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Lia Franklin</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>
             Trip to Bali
           Firstly, villa was not upto the mark. The private pool was for namesake only as it was outside of the room and very unclean. 
           Secondly, the hotel was not so good. Thirdly, candle light dinner was for namesake only and we were given a normal restaurant and no special arrangements were made. 
           Overall I am disappointed with the arrangements made by ALS travels. Only good thing was that the driver was very polite and experienced.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Loves the overall experience and the time invested by Ashwin in explaining and helping me plan the overall trip. 
            The cab driver was professional and helpful and followed the itiernrary to the T.
             Overall a great experience. What could make this even better is a full disclosure of the local charges that are to be
              paid when and before doing any excursion. It helps plan even better. 
              I would still give the travel agent a complete 5/5 for the personalisation and extreme professionalism
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials