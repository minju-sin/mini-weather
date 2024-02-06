import React, { useEffect } from 'react';
import './Error.css';

function Error({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // 일정 시간 후에 에러 메시지를 자동으로 닫습니다.
    }, 5000); // 5초 후에 닫기

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 제거합니다.
  }, [onClose]);

  return (
    <div className="error-container">
      <p className="error-message">{message}</p>
    </div>
  );
}

export default Error;
