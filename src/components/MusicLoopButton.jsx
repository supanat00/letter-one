import React, { useState, useEffect } from 'react';
import music from '../sound/music.mp4';
import Pause from '../icon/music_on.svg';
import Play from '../icon/music_mute.svg';

function MusicLoopButton() {
  const [isPlaying, setIsPlaying] = useState(false); // เริ่มต้นให้เล่นเพลงเป็น false
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    // เริ่มเล่นเพลงเมื่อโหลดเสร็จ
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error(error);
      });
    }

    return () => {
      audioElement.pause(); // หยุดเล่นเมื่อถูก unmount
      setIsPlaying(false);
    };
  }, [audioRef]);

  return (
    <div className="music-loop-button top-right">
      {/* Music Button */}
      <button onClick={togglePlay} className="music-button">
        {isPlaying ? (
          <img src={Pause} alt="Pause" className="play" />
        ) : (
          <img src={Play} alt="Play" className="pause" />
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
