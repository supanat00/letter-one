import React from 'react';

import { MusicLoopButton } from '../components';
import { PartOne, PartTwo, PartThree } from '../components';

function HomePage() {
    return (            
            <div className='HomePage'>
              <div>
              < MusicLoopButton />
              </div>                          
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
