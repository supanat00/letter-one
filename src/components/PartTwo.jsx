import React from 'react';
import symbol2 from '../icon/symbol_2.png';
import symbol3 from '../icon/symbol_3.png';
import text3 from '../icon/dear_people_we_love.png';
import text4 from '../icon/hope_you_all_make_it.png';
import { motion, useAnimation } from 'framer-motion';

function PartTwo ()  {  
  const controls = useAnimation();

  const handleScroll = () => {
    const yOffset  = window.pageYOffset;

    if (yOffset >= 200 )  {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0, opacity: 0 });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='parttwo'>
    
    <img src={symbol2} className='symbol-two' alt="logo" />    

    <div className="date-time">
      Date : &nbsp;&nbsp;&nbsp;Saturday November 18, 2023
        <br></br>
      Time :&nbsp;&nbsp;&nbsp;18:00 - Midnight
    </div>

      <img src={text3} className='image-3' alt="logo" />

      <motion.img
        src={text4}
        className='image-4'
        alt='logo'
        initial={{ scale: 1, opacity: 0.5 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      />

      <div className="w-layout-blockcontainer container-3 w-container">

        <p className="paragraph-1">It's such a long time, we haven't met.
        <br></br>This is a good chance and it might surprise you.
        <br></br>I met someone that I think I'm gonna introduce to you.
        <br></br>A normal person that you would see with me
        <br></br>from now on till I'm getting old.</p>
        
        <p className="paragraph-1">We'll get married! Finally!
        <br></br>The wait is really over.
        <br></br>Pleas come to meet us, be our guest.
        <br></br>I belive that we miss each other.</p>
        
        <p className="paragraph-1">We're looking forward to sharing
        <br></br>our good time and the beginning
        <br></br>of the next chapter with you all.</p>
        
      </div>   

        <div className="note-one">PS. Please come with the way you are in
        <br></br>BLACK/DARK CHARCOAL.</div>
    
      <img src={symbol3} className='image-5' alt="logo" />    

    </div>
  );
}

export default PartTwo;
