import React from 'react';
import text5 from '../icon/noonut.png';
import map from '../icon/map.png';
import mapbutton from '../icon/map_button.png'
import pic_m from '../icon/pic_m.png';
import pic_l from '../icon/pic_l.png';
import pic_r from '../icon/pic_r.png';

function PartThree ()  {
  return (
    <div className='partthree'>
              
              
                <img src={text5} className='image-6' alt="logo" />      

              <div class="w-layout-blockcontainer picture w-container">
                <img src={pic_l} alt="" class="pic-l"/>
                  <img src={pic_m} alt="" class="pic-m"/>
                    <img src={pic_r} alt="" class="pic-r"/>

                    </div>
              
              
                <img src={map} className='image-7' alt="logo" />
                           

                <div class="text-block">Place: Rin at Raintree - Sai Hall
                <br></br>2 276 soi RAMA IX 17, Bang Kapi, Huai Khwang, Bangkok 10310</div>

              
                <img src={mapbutton} className='image-8' alt="logo"  />
                            

              </div>
  );
}

export default PartThree;
