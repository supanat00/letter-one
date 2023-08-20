import React, { useState, useEffect } from 'react';
import music from '../sound/music.mp4'
import Pause from '../icon/music_on.svg';
import Play from '../icon/music_mute.svg';

function MusicLoopButton () {
  const [isPlaying, setIsPlaying] = useState(false);  
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.play(); // เริ่มเล่นเมื่อโหลดเสร็จ
    setIsPlaying(true);
  }, []);

  return (
    <div className="music-loop-button top-right">   
      {/* Music Button */}
      <button onClick={togglePlay} className="music-button">
        {isPlaying ? (
          <img src={Pause} alt="Pause" className='play' />
        ) : (
          <img src={Play} alt="Play" className='pause' />
        )}
      </button>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MusicLoopButton;
