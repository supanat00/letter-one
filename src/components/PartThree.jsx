import React, { useState, useEffect } from 'react';
import anime from "animejs";
import map from '../icon/map.svg';
import mapbutton from '../icon/map_button.svg';
import pic_m from '../icon/pic_m.png';
import pic_l from '../icon/pic_l.png';
import pic_r from '../icon/pic_r.png';

function PartThree () {
  const [isNongnutVisible, setIsNongnutVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      const nongnutElement = document.querySelector('.image-6');
      if (nongnutElement) {
        const rect = nongnutElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsNongnutVisible(isVisible);
      }

      const element = document.querySelector('.picture');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 10;
        setIsImageVisible(isVisible);
      }      
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility when component mounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isNongnutVisible) {      
      setTimeout(() => {
      anime({           
        targets: "svg.image-6 path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutCubic",
        duration: 1500,      
        delay: function (el, i) {
          return i * 250;
        },
        fill: "#f16622",        
      });
    }, 3000 );
    }
  }, [isNongnutVisible]);
  


  return (
    <div className='partthree'>   

      {/* Noonut */}
      <svg
          viewBox="0 0 547.72 321.48"
          style={{ fill: "none", stroke: "none" }}
          className={`image-6 ${isNongnutVisible ? 'active' : ''}`}
        >
        <g id="Layer_2" data-name="Layer 2">
           <g id="Hand_Write" data-name="Hand Write">
             <path class="cls-1" d="M150.57,126a9.39,9.39,0,0,0-1.81.17q-5.91,1.23-12.11,8.63a105.37,105.37,0,0,0-6.58,8.82q-19.45,28.59-48.31,95.71c.5-1.43,1.27-3.7,2.33-6.81q2.68-7.92,4.07-12.29,7.8-24.52,5.14-36.62a18.28,18.28,0,0,0-8-12,15,15,0,0,0-7.88-2.25c-.52,0-1,0-1.57.08a11.12,11.12,0,0,0-1.51.24q-6.75,1.43-15.61,8.57a81.65,81.65,0,0,0-17,18.38q-1.47,2.38-2.29,3.8a19.72,19.72,0,0,0-1.57,3.73,7.81,7.81,0,0,0-.36,4.08,6.19,6.19,0,0,0,3.63,4.2,11.51,11.51,0,0,0,5,1,18.23,18.23,0,0,0,3.49-.36A26.89,26.89,0,0,0,53.52,212a1.07,1.07,0,0,0,.65-1,4,4,0,0,0-1.21-1.5,6.14,6.14,0,0,0-3.66-1.46,3.74,3.74,0,0,0-.82.08l-.42.09-.08,0H47.9c-3,1.16-4.6,1.73-4.75,1.73h0a.48.48,0,0,0-.13-.22,6.24,6.24,0,0,1,.84-2.49q3.18-6.51,10.93-15.51,13.49-15.81,24-18a10.49,10.49,0,0,1,1.43-.22c.26,0,.52,0,.77,0q4.8,0,6.29,6,2.74,12.87-9.77,50.31c-.32.92-.56,1.66-.73,2.23Q71.1,248.25,71,253.31a11.08,11.08,0,0,0,.27,2.83q1.18,4.37,6.1,4.37a14,14,0,0,0,2.06-.17c.82-.23,1.28-.35,1.39-.37q0-.57,5.72-13.93,21.93-51.58,40.34-83.71,1.87-3.29,4.19-7.05Q146,131.27,152.2,130l.25-.06a24.66,24.66,0,0,1,3.89,9.35q1.83,8.25,1.21,22-.59,14.7-5.65,48.08c-.15,1.16-.44,3-.84,5.62-.27,1.45-.46,2.55-.58,3.32q-4.12,26.24-2.4,34a13.07,13.07,0,0,0,1.65,3.9q2.36,3.56,5.08,3.55a4.76,4.76,0,0,0,.91-.09l.5-.11a.88.88,0,0,0,.39-1,4.5,4.5,0,0,0-.27-.82c-1-2.25-1.55-3.49-1.61-3.75a20.81,20.81,0,0,1-.41-3.43q-.58-8.13,3.25-32.14c.48-3.08.84-5.29,1.06-6.62q1.78-12.06,2.64-18.4,5-36.82,1.52-52.57a26.84,26.84,0,0,0-4.41-10.51Q155,126,150.57,126Z" transform="translate(-37.33 -75.92)"/>
             <path class="cls-1" d="M203.74,174.88a19.88,19.88,0,0,0-3.92.41,14.94,14.94,0,0,0-4.65,1.78q-5.1,2.91-4.09,7.51l.09.38a1.68,1.68,0,0,1,.18.44,29,29,0,0,0-2.69,3.61q-5.29,8.31-4,14.35c.65,3,2.61,5.08,5.85,6.37a2.42,2.42,0,0,1,.32.25,10,10,0,0,0,3.7.64,17.56,17.56,0,0,0,3.58-.41q10-2.11,15.08-14.86c.51,0,1.29-.19,2.34-.41q11.31-2.38,19.94-12.2a1.05,1.05,0,0,0,.27-.78,3.72,3.72,0,0,0-1.31-1.56,5.59,5.59,0,0,0-3.34-1.47,3.28,3.28,0,0,0-.63.06,1.4,1.4,0,0,0-.7.39,38.7,38.7,0,0,1-15,10.44,14.42,14.42,0,0,0,.09-6.26,10.54,10.54,0,0,0-5.16-7.23,11.8,11.8,0,0,0-6-1.45ZM207,191.53q-6.51,0-8.71-3.74a7.32,7.32,0,0,1,1.11-.88c1-.68,1.39-1.2,1.31-1.55q-.27-.83-2.52-2a5.57,5.57,0,0,1,1.31-1.56,15.74,15.74,0,0,1,6.63-3.08,3.93,3.93,0,0,1,.61-.07.9.9,0,0,1,.44.09,4.9,4.9,0,0,1,1.14,2.4q.91,4.14-1.2,10.34Zm-14.3,15.21a7,7,0,0,1-1.12-.09,8,8,0,0,1-.39-1.77c0-.46-.08-1-.09-1.58q.27-5.42,4.76-12.28a24.24,24.24,0,0,0,9.71,4.12c-.48,1-1,1.92-1.62,2.9q-4.71,7.47-9.86,8.55a6.57,6.57,0,0,1-1.39.15Z" transform="translate(-37.33 -75.92)"/>
             <path class="cls-1" d="M296.92,157.05a10,10,0,0,0-1.86.18,8.6,8.6,0,0,0-1.95.65,12.08,12.08,0,0,0-1.9,1.2Q286,163,274,179.59q4.63-15.61,4.7-15.71a1.24,1.24,0,0,0,0-.55,1.91,1.91,0,0,0-.55-.93,7.43,7.43,0,0,0-3.69-2.18A5.05,5.05,0,0,0,273,160a7.93,7.93,0,0,0-1.4.13c-1.56.32-4.29,1.73-8.22,4.21a112.19,112.19,0,0,1-10.73,6.18,13.88,13.88,0,0,0-9.65-4.11c-.33,0-.67,0-1,0l-.34.07h-.38l-.29.07-.33,0h-.11l-.25,0-.29.06-.29.06a9.87,9.87,0,0,0-1.15.32c-2.56.76-3.65,2-3.26,3.74a4.86,4.86,0,0,0,2.18,2.81h-.17a1.84,1.84,0,0,0-1.22.38,3,3,0,0,0-.41.49q-11.4,11.84-9.61,19.94a8.4,8.4,0,0,0,3.38,5.05,11.74,11.74,0,0,0,7.09,2.24,16.82,16.82,0,0,0,3.5-.39,16,16,0,0,0,6.93-3.3,25.64,25.64,0,0,0,5.61-6.54q4.92-8.07,3.39-15l-.25-1.14a73.09,73.09,0,0,0,14.41-8.08q-7.61,24.64-7.32,26.34c.71,2.06,2.4,3.1,5.07,3.1.29,0,.6,0,.92,0q1-.27,3.33-3,1.44-1.74,10.54-14.14,11.64-15.9,16.29-18.08l.18.85c.22,1,.45,2.57.72,4.81a49.9,49.9,0,0,0,.75,5.36q1.35,6.12,5.91,8.2a8.29,8.29,0,0,0,3.2.6,11.29,11.29,0,0,0,2.11-.2,16.91,16.91,0,0,0,5.55-2.45q5.73-3.6,15-14.52c.92-1.1,1.57-1.85,1.94-2.25a1.27,1.27,0,0,0,.17-.83,3,3,0,0,0-1.22-1.58,5.93,5.93,0,0,0-3.39-1.38,2.81,2.81,0,0,0-.65.07,1.58,1.58,0,0,0-.7.38c-.36.45-1.2,1.37-2.51,2.77q-15,15.87-17.86,16.49H308l-.2,0c-.07,0-.15-.24-.22-.59s-.12-.67-.19-1.25c-.6-5.36-1-8.58-1.26-9.66-.84-3.76-2.12-6.27-3.84-7.51a9.13,9.13,0,0,0-5.37-1.77Zm-53,16.08c-1.24,0-2-.33-2.2-1a1.26,1.26,0,0,1,0-.39,2.25,2.25,0,0,1,2-1.7,3.34,3.34,0,0,1,.62-.06c1.34,0,2.65.8,3.9,2.39-.49.15-1.17.32-2.06.51a11.83,11.83,0,0,1-2.23.25Zm-9.29,25a2.77,2.77,0,0,1-2-.78,4.51,4.51,0,0,1-.88-1.65q-.32-3,3.92-10.6,4.23-7.29,6.63-7.8h.44q3.31.06,5,.06a14.23,14.23,0,0,0,1.78-.05,1.32,1.32,0,0,1,0,.4q-.2,5.4-5.3,12.64-4.84,6.87-8.83,7.7a3.85,3.85,0,0,1-.8.09Z" transform="translate(-37.33 -75.92)"/>
             <path class="cls-1" d="M358.69,141.8a3.53,3.53,0,0,0-.72.08,2.32,2.32,0,0,0-1.39,1.18c-1,2.12-2.17,4.51-3.55,7.14q-9.86,18.88-16.11,22.44a6.59,6.59,0,0,1-.47-1.34,16.74,16.74,0,0,1-.05-5.75,61.59,61.59,0,0,1,5.8-18.26,1,1,0,0,0,.05-.57,4.17,4.17,0,0,0-1.51-1.69,6.69,6.69,0,0,0-3.52-1.26,3.67,3.67,0,0,0-.75.08,1.16,1.16,0,0,0-.83.57q-7.5,16.08-5.56,24.86a9.61,9.61,0,0,0,3.95,6.05,10.06,10.06,0,0,0,5.46,1.8,7.79,7.79,0,0,0,1.44-.13,5.6,5.6,0,0,0,1.53-.56.81.81,0,0,1,.31-.15Q348.3,173,356.1,159.4l.24,1.07c1.06,4.79,3.73,8,8,9.51a11.3,11.3,0,0,0,3.53.54,15.32,15.32,0,0,0,2.8-.27q6.66-1.41,14.53-8.66a55.47,55.47,0,0,0,10.85-13.17,1.48,1.48,0,0,0,.11-.66,4.07,4.07,0,0,0-1.3-1.57,5.93,5.93,0,0,0-3.39-1.38,2.73,2.73,0,0,0-.64.07,1.51,1.51,0,0,0-.75.55q-1.75,3.1-7.33,9-10.53,11-16.19,12.22a5.71,5.71,0,0,1-1.16.13,3.11,3.11,0,0,1-.84-.11c-.56-.21-1-1-1.42-2.51a24.89,24.89,0,0,1-.48-4.14,80.93,80.93,0,0,1,.49-14.34,1.82,1.82,0,0,0,.11-.66,3.48,3.48,0,0,0-1.14-1.61,5.32,5.32,0,0,0-3.45-1.6Z" transform="translate(-37.33 -75.92)"/>
             <path class="cls-1" d="M400.88,75.92c-.77,0-1.21.28-1.3.84l-.59,4q-.58,4-1.72,12.32t-2.16,16.58q-23.78,7.82-48.57,18.15l-.8.33a.5.5,0,0,0-.27.14,2.57,2.57,0,0,0-.21.24.63.63,0,0,0-.11.26.67.67,0,0,0,0,.28,2.36,2.36,0,0,0,.12.34,2.49,2.49,0,0,0,.2.32l.3.33a1.66,1.66,0,0,0,.42.36,2.49,2.49,0,0,1,.47.33l.5.3a6.22,6.22,0,0,0,3,1,2.64,2.64,0,0,0,1.14-.24l2.16-.85c1.49-.63,3.58-1.5,6.3-2.6s5.77-2.32,9.16-3.65,7.37-2.84,11.94-4.52,9-3.28,13.47-4.8q-.7,5.91-2.39,18.74-1.69,13.17-2.53,19.66-5.23,42.87-2.59,51.28a1.68,1.68,0,0,0,.18.44,5.53,5.53,0,0,0,3.72,2.26,7.49,7.49,0,0,0,1.17.15c1.28,0,1.8-.43,1.55-1.28-.78-2.5-1.09-7-.9-13.5q.53-15.39,6.61-61.48,1.77-12.85,2.48-18.68,40-13,60.66-13a46.27,46.27,0,0,1,8.7.73,7.24,7.24,0,0,0,1.09.1l.41,0c.89-.19,1.17-.65.83-1.37a4.07,4.07,0,0,1-.25-.35,5.55,5.55,0,0,0-3.8-2.25,53.54,53.54,0,0,0-9.82-.82q-20.43,0-57.16,11.34,1.53-12,3.53-25.8l.34-2.38a1.39,1.39,0,0,1,0-.41c-.28-1-1.31-1.83-3.07-2.47l-.55-.12a6.68,6.68,0,0,0-1.71-.29Z" transform="translate(-37.33 -75.92)"/>
             
             {/* & */}
             
             <path class="cls-1" d="M200.4,306.22a14.27,14.27,0,0,1-3.17-.36c-4.07-.83-6.88-2.77-8.3-5.74a18.64,18.64,0,0,1-1.85-8.1c0-1.06,0-2.17.16-3.3v-.09a45.18,45.18,0,0,1,4.24-13.4,94.28,94.28,0,0,1,8.78-14.64,125.05,125.05,0,0,1,12.53-14.7,122.89,122.89,0,0,1,14.81-12.73c-5.84-2.33-8.36-4.47-8.51-7.16s-.15-2.75-.15-2.84c0-4,3-8.94,9.08-14.94a61,61,0,0,1,12.45-10c4-2.23,7.22-3.31,9.92-3.31,6,0,6.76,3.27,6.81,4.68l0,.86c0,1,.05,1.56.05,1.64,0,3.35-1.91,7.87-5.83,13.8l-.06.09q-1.16,1.59-2.13,3.06c-.87,1.3-1.11,1.75-1.17,1.86-1.35,2.48-3.07,3-4.28,3a3.84,3.84,0,0,1-3.62-2.69,4.16,4.16,0,0,1-.34-1.72,5,5,0,0,1,.63-2.28,42.9,42.9,0,0,1,2.73-4.24c3.78-5.21,5.07-7.4,5.49-8.32a11.47,11.47,0,0,0,.71-1.91,13.69,13.69,0,0,0-4.5,1.89,58,58,0,0,0-7.56,5.25,53.41,53.41,0,0,0-6.77,6.56,17.84,17.84,0,0,0-3.5,5.43,5.17,5.17,0,0,0-.07.69,1.43,1.43,0,0,0,.51,1.09c.15.14,1.08,1,5.34,2.57s5.21,2.44,5.78,3.39a4.52,4.52,0,0,1,.8,2.31c0,1.7-1,3.21-3.09,4.47l-.19.1a14.6,14.6,0,0,0-1.46.93q-1.22.84-2.43,1.59a79.66,79.66,0,0,0-10.82,8.42,114.64,114.64,0,0,0-10,10.45A121,121,0,0,0,203,269.13,85.4,85.4,0,0,0,196.82,280a36.13,36.13,0,0,0-2.88,7.88,25.52,25.52,0,0,0-.55,4.3,7.23,7.23,0,0,0,.51,2.91,5.7,5.7,0,0,0,5.77,3.65c3.83,0,8.66-2,14.34-6.05,5.94-4.19,12.28-10.27,18.83-18.06,13.41-16,16.23-23.45,16.23-26.9a3.45,3.45,0,0,0-.31-1.56l-.14.1a34.71,34.71,0,0,0-3.6,3.06c-1.55,1.46-3.3,3.26-5.2,5.35s-3.87,4.35-5.93,6.8c-4.72,5.8-6.52,7.45-7.47,8.18-1.83,1.43-3.23,2.06-4.53,2.06a4.09,4.09,0,0,1-1.85-.41l-.38-.23a4.05,4.05,0,0,1-1.59-3.32,9.62,9.62,0,0,1,.83-3.32,26.71,26.71,0,0,1,3.15-5.3,70.93,70.93,0,0,1,5.53-6.74c2.14-2.34,4.32-4.55,6.5-6.57a53.2,53.2,0,0,1,6.6-5.3,18.39,18.39,0,0,1,6-2.85l.12,0a3.55,3.55,0,0,0,1-.35,10.67,10.67,0,0,0,1.92-1.52l.18-.15a64.72,64.72,0,0,1,8.53-5.55,15.35,15.35,0,0,1,6.72-2.11c2.94,0,4.84,1.78,4.84,4.55a8.16,8.16,0,0,1-.6,2.78,3.54,3.54,0,0,1-3.37,2.49,5.47,5.47,0,0,1-1.34-.22,3.15,3.15,0,0,1-2-1.54,19.41,19.41,0,0,0-2.37,1.15,44.44,44.44,0,0,0-5.34,3.58,10.35,10.35,0,0,1,2.16,6.67,31.58,31.58,0,0,1-1.72,8.33c-1.18,3.85-4.71,9.48-10.81,17.2a150.28,150.28,0,0,1-12.84,14.76,100.65,100.65,0,0,1-12.52,10.79,45.19,45.19,0,0,1-10.78,6A24.52,24.52,0,0,1,200.4,306.22Zm21.32-39.49Zm43-33.14v0Zm-19.88-13.85Z" transform="translate(-37.33 -75.92)"/>
             
             <path class="cls-1" d="M351.36,258.39a5.49,5.49,0,0,0-.8.06,5.35,5.35,0,0,0-2.37,1.14q-2.87,2.34-6.09,8.45-4.25,8.23-12.74,32.61-3.76,10.77-5.64,15.8-8.19,22-13.93,26.14-8-11.22-17.61-14.6a20.59,20.59,0,0,0-6.56-1.08,21.5,21.5,0,0,0-4,.39,19.41,19.41,0,0,0-3.59,1.15q-10.07,4.16-19.64,20.84,5.73-18.69,3.47-29.1a17.83,17.83,0,0,0-8.62-11.9,17.2,17.2,0,0,0-6.21-2.07,13.64,13.64,0,0,0-1.45-.08,17.7,17.7,0,0,0-3.57.39,36.31,36.31,0,0,0-10.16,4.09,83.61,83.61,0,0,0-21.59,17.66Q201,338.66,201,344.64a4,4,0,0,0,.14,1q.67,2.58,4,4.12a14,14,0,0,0,5.35,1,18.13,18.13,0,0,0,3.37-.33,37.74,37.74,0,0,0,4.58-1.34,1.09,1.09,0,0,0,.71-1,3.79,3.79,0,0,0-1.28-1.49,6.85,6.85,0,0,0-3.87-1.43,4.23,4.23,0,0,0-.94.1l-.36.07a36.89,36.89,0,0,1-4.52,1.26,13.88,13.88,0,0,1,2-5.7q4.8-8.34,15.82-18.22,12.39-10.95,20-12.52A9.39,9.39,0,0,1,248,310a6.87,6.87,0,0,1,1.66.19,13.12,13.12,0,0,1,5.87,8.47q1.68,7.41-2,20.89-2.1,7.39-9.78,27.44-6.6,17.35-6.85,23.33a10.56,10.56,0,0,0,.26,2.82c.81,2.87,2.93,4.31,6.38,4.31a15.7,15.7,0,0,0,2.37-.19l1.51-.4c.05-.33.42-1.71,1.12-4.15q7.92-26.1,18.29-43c.6-.93,1.23-1.88,1.89-2.87q9.6-14.06,18-15.78a9.66,9.66,0,0,1,5,.25q5.31,1.78,12,11.29c0,.05.05.09.12.13q3.56,5.07,7.68,5.07a7.19,7.19,0,0,0,1.44-.15,9.7,9.7,0,0,0,2.67-1q3.87-2.07,9-12.72,4.28-9,14.14-36,8.94-24.48,12.94-30.9c0,.85,0,1.76,0,2.73q-.24,13.89-4.56,45.48Q345,328.69,344.29,335q-4.44,38.5-2.09,48.89a10.86,10.86,0,0,0,1.67,3.66c1.67,2.38,3.47,3.58,5.42,3.58a5.21,5.21,0,0,0,1-.11l.53-.11a.85.85,0,0,0,.46-.26,1.1,1.1,0,0,0,.25-.37.89.89,0,0,0,0-.4,1.54,1.54,0,0,0-.26-.51,3.51,3.51,0,0,0-.5-.53,8,8,0,0,0-.62-.51,2.52,2.52,0,0,1-.61-1.4,58.21,58.21,0,0,1-1-9.38A253.51,253.51,0,0,1,350,348.93q.31-3.18,4.23-34.86.12-1.14.48-3.69,5.06-37.9,3.05-46.77a5.56,5.56,0,0,0-1.31-2.85,7.57,7.57,0,0,0-5.08-2.37Z" transform="translate(-37.33 -75.92)"/>
             <path class="cls-1" d="M408.29,296.57a10.43,10.43,0,0,0-2.13.23l-.36.07a14.48,14.48,0,0,0-2.77,1.06q-6.5,3.33-11.26,11.75-5.25,9.24-3.67,16.19a8.45,8.45,0,0,0,.56,1.65q2.59,6.38,11.87,6.38c.89,0,1.83,0,2.81-.14.49-.05,1.27-.18,2.35-.4q12.48-2.66,30.06-19.32a93.58,93.58,0,0,0,8.09-8.31,1.63,1.63,0,0,0,.18-.84,3.84,3.84,0,0,0-1.45-1.86,6.14,6.14,0,0,0-3.61-1.59,3.05,3.05,0,0,0-.6.06,1.39,1.39,0,0,0-.67.38q-3.35,3.89-7.91,8.27-17.59,17-28.91,19.32a14.79,14.79,0,0,1-3,.33l-.76,0c-1.21-.13-2.05-1.07-2.52-2.84s-.21-3.13.66-3.74l1.08-.62c.67-.35,1.57-.88,2.7-1.6s2.36-1.52,3.72-2.44,2.78-1.93,4.25-3,2.86-2.21,4.14-3.33a30.67,30.67,0,0,0,3.44-3.51,12.49,12.49,0,0,0,2.1-3.39,5.92,5.92,0,0,0,.25-3,6.52,6.52,0,0,0-2.83-3.82,10.08,10.08,0,0,0-5.77-1.87Zm1.51,4.67q-.54,4.68-11.48,12.45a24.82,24.82,0,0,1,1.38-2.21q5.12-7.77,10.1-10.24Z" transform="translate(-37.33 -75.92)"/>
             <path class="cls-1" d="M470.6,286.45a12.07,12.07,0,0,0-2.13.2,10.88,10.88,0,0,0-2,.66c-.34.17-.73.39-1.17.64q-5.71,3.49-19.81,21.36,5.76-17.34,5.81-17.51a.76.76,0,0,0,.08-.5,3.66,3.66,0,0,0-1.58-1.59,7.73,7.73,0,0,0-3.86-1.27,3.86,3.86,0,0,0-.84.08,1.55,1.55,0,0,0-.88.66Q433,322,433.37,323.56q.94,3.12,4.8,3.12a12,12,0,0,0,1.53-.11c.71-.19,1.92-1.22,3.63-3.06q1.59-1.77,11.53-14.3,12.74-16.06,17.78-18.3l.19.84c.22,1,.45,2.57.71,4.81s.57,4.18.83,5.35q1.38,6.1,6.27,8.14a11,11,0,0,0,3.6.59,13.54,13.54,0,0,0,2.41-.23q5.57-1.14,12.89-7.46,3.15-2.73,10.71-10.85a1.75,1.75,0,0,0,.25-1,4.45,4.45,0,0,0-1.41-2,5.72,5.72,0,0,0-3.5-1.78,1.88,1.88,0,0,0-.47.05,1.3,1.3,0,0,0-.59.28c-.4.45-1.32,1.39-2.75,2.8q-16.3,16.08-19.44,16.73h-.07l-.23,0a.85.85,0,0,1-.31-.57c-.06-.26-.12-.67-.19-1.24q-.75-7.92-1.16-9.68-1.26-5.58-4.13-7.47a10.18,10.18,0,0,0-5.65-1.71Z" transform="translate(-37.33 -75.92)"/>
             <path class="cls-1" d="M539.47,272.15a15.37,15.37,0,0,0-2.74.26,14.2,14.2,0,0,0-2.33.71c-.4.18-.85.4-1.36.67q-6.66,3.65-23.32,21.89,7-17.54,7.1-17.7a.66.66,0,0,0,.1-.51,3.69,3.69,0,0,0-1.79-1.55,9.65,9.65,0,0,0-4.28-1.2,5.52,5.52,0,0,0-1.09.11,1.83,1.83,0,0,0-1,.69q-13.67,33.15-13.28,34.75,1,3,5.21,3a14.53,14.53,0,0,0,2-.15q1.25-.31,4.26-3.16,1.86-1.8,13.62-14.61,15-16.42,20.91-18.79l.19.85a45,45,0,0,1,.71,4.81,50,50,0,0,0,.84,5.34,10.43,10.43,0,0,0,7,8,14,14,0,0,0,3.81.51,17.72,17.72,0,0,0,3.1-.29q6.45-1.27,15-7.79,3.68-2.81,12.58-11.13a1.58,1.58,0,0,0,.31-1,4.23,4.23,0,0,0-1.57-2,6.89,6.89,0,0,0-3.93-1.71,2.91,2.91,0,0,0-.6.06,1.56,1.56,0,0,0-.69.3c-.48.46-1.55,1.43-3.24,2.88q-19.15,16.51-22.79,17.24h-.1l-.24,0a.75.75,0,0,1-.34-.56,8.88,8.88,0,0,1-.19-1.25c-.46-5.28-.84-8.51-1.11-9.68q-1.34-5.56-4.59-7.39a12.61,12.61,0,0,0-6.19-1.6Z" transform="translate(-37.33 -75.92)"/>
             
             </g>
             </g></svg>
      <div className={`w-layout-blockcontainer picture w-container ${isImageVisible ? 'active' : ''}`}>
        <img src={pic_l} alt="" className="pic-l"/>
        <img src={pic_m} alt="" className="pic-m"/>
        <img src={pic_r} alt="" className="pic-r"/>
      </div>
      
      <img src={map} className="image-7"  alt="logo" />

          
      <div className='text-block' >
        Place: Rin at Raintree - Sai Hall
        <br />2 276 soi RAMA IX 17, Bang Kapi, Huai Khwang, Bangkok 10310
      </div>
      

     
  <a
    href="https://maps.app.goo.gl/8cjHCtx6NNNtye7B6?g_st=il"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={mapbutton} className="image-8" alt="logo" />
  </a>



    </div>
  );
}

export default PartThree;
