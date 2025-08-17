// src/components/TypingLine.js
import React, { useEffect, useState } from "react";

const TypingLine = ({ text, speed = 100, eraseSpeed = 60, delay = 1500 }) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (!isDeleting && index < text.length) {
      // Gõ chữ
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      // Xóa chữ
      timer = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, eraseSpeed);
    } else if (index === text.length && !isDeleting) {
      // Đợi trước khi xóa
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (index === 0 && isDeleting) {
      // Bắt đầu gõ lại
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, eraseSpeed, delay]);

  return (
    <span className="typed-line">
      {displayed}
      <span className="caret">|</span>
    </span>
  );
};

export default TypingLine;
