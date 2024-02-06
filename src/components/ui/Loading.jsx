import React from 'react';
import './Loading.css';
import weatherIcon from '../images/Loading.jpg'; // 날씨 이미지 파일 경로

function Loading() {
  return (
    <div className="loading-container">
      <img src={weatherIcon} alt="로딩 중" className="loading-image" />
      <p className="loading-text">오늘의 날씨</p>
    </div>
  );
}

export default Loading;
