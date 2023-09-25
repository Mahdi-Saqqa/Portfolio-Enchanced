import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    const words = ['A full stack developer', 'A Web Developer', 'A UI/UX Designer', 'A Branding Expert', 'A Freelancer'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
    let wordTimeout;

    const typeWords = () => {
    const currentWord = words[currentWordIndex];
    setCurrentText((prevText) => {
        if (isDeleting) {
            return currentWord.substring(0, prevText.length - 1);
        } else {
            return currentWord.substring(0, prevText.length + 1);   
        }
    });

    if (!isDeleting && currentText === currentWord) {
        clearTimeout(wordTimeout);
        wordTimeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
        clearTimeout(wordTimeout);
        wordTimeout = setTimeout(typeWords, 500);
    } else {
        wordTimeout = setTimeout(typeWords, 200);
    }
    };

    wordTimeout = setTimeout(typeWords, 200);

    return () => {
    clearTimeout(wordTimeout);
    };
}, [currentText, currentWordIndex, isDeleting, words]);

return (
    <p className="px-3 text-center">
    <span className="typed-text">{currentText}</span>
    <span className="typed-cursor">|</span>
    </p>
);
};

export default TypingEffect;
