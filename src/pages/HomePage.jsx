import React, { useState, useEffect } from 'react';
import symbol1 from '../icon/symbol_1.png';
import symbol2 from '../icon/symbol_2.png';
import symbol3 from '../icon/symbol_3.png';
import text3 from '../icon/dear_people_we_love.png';
import text4 from '../icon/hope_you_all_make_it.png';
import text5 from '../icon/noonut.png';
import map from '../icon/map.png';
import mapbutton from '../icon/map_button.png'
import pic_m from '../icon/pic_m.png';
import pic_l from '../icon/pic_l.png';
import pic_r from '../icon/pic_r.png';

import { MusicLoopButton } from '../components';

function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleOrientation = (event) => {
    const angle = event.beta;
    const parallaxAmount = angle * 0.1; // Adjust this value as needed
    setScrollY(-parallaxAmount);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('deviceorientation', handleOrientation);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

    return (  
          
            <div className='App-main'>
              <MusicLoopButton />              
              {/* ส่วนที่ 1 */}
              <div className='part-1' style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
                <p>You are invited to</p>
                <p>THE WEDDING OF</p>
                <img src={symbol1} className='symbol1' alt="logo" />
              </div>

              {/* ส่วนที่ 2 */}
              <div className='part-2'>

                <div style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
                  <img src={symbol2} className='symbol2'  alt="logo" />
                </div>                

              <div className='date-time'>
                <p>Date: <span> Saturday November 18,2023</span></p>
                <p>Time: <span> 18:00 - Midnight</span></p>
              </div>

              <div className='dear-people'>
              <img src={text3} className='text3' alt="logo" />
              </div>              

              <div className='long-text'>              
                <p className='t1'>
                  It's such a long time, we haven't met.                  
                  This is a good chance and it might surprise you.
                  I met someone that I think I'm gonna introduce to you.
                  A normal person that you would see with me
                  from now on till I'm getting old.                  
                </p>
                <p className='t2'>
                  We'll get married! Finally!
                  The wait is really over.
                  Pleas come to meet us, be our guest.
                  I belive that we miss each other.
                </p>
                <p className='t3'>
                  We're looking forward to sharing
                  our good time and the beginning
                  of the next chapter with you all.
                </p>
              </div> 

              <div className='hope-you' style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
                <img src={text4} className='text4' alt="logo" />
              </div>            

                <p className= 'note1'>
                  PS. Please come with the way you are in <span>BLACK/DARK CHARCOAL.</span> 
                </p>             

              <img src={symbol3} className='symbol3' alt="logo" />

              </div>


              {/* ส่วนที่ 3 */}
              <div className='part-3'>
              
              <div className='noonut' style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
                <img src={text5} className='text5' alt="logo" />
              </div>

              <div className='picture' style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
                <img src={pic_l} className='pic_l' alt="logo" />
                <img src={pic_m} className='pic_m' alt="logo" />
                <img src={pic_r} className='pic_r' alt="logo" />
              </div>              
              
              <div style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
                <img src={map} className='map' alt="logo" />
              </div>              

              <p className='note-2'>
                Place: Rin at Raintree - Sai Hall
              <span>
                276 soi RAMA IX 17, Bang Kapi, Huai Khwang, Bangkok 10310
              </span>
              </p>

              <img src={mapbutton} className='mapbutton' style={{ transform: `translateY(-${scrollY * 0.5}px)` }} alt="logo" />

              </div>
            
            </div>
          
      );
    }

export default HomePage;
