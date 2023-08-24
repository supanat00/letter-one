import React from 'react';

import { MusicLoopButton, AutoScroll } from '../components';
import { PartOne, PartTwo, PartThree } from '../components';

function HomePage() {
    return (            
            <div className='HomePage'>              
              < MusicLoopButton />
              < AutoScroll />
                                     
              {/* ส่วนที่ 1 */}
              < PartOne />
              {/* ส่วนที่ 2 */}
              < PartTwo />
              {/* ส่วนที่ 3 */}            
              < PartThree />
              </div>   
            
          
      );
    }

export default HomePage;
