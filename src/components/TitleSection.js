import React, { useEffect } from 'react';
import './TitleSection.css';

const TitleSection = () => {
  useEffect(() => {
    const words = ["Software Engineer", "Data Scientist", "AI Enthusiast"];
    let i = 0;
    let timer;

    // Function to start the typing effect
    function typingEffect() {
      let word = words[i].split('');
      const loopTyping = function() {
        if (word.length > 0) {
          document.getElementById('word').innerHTML += word.shift();
        } else {
          deletingEffect();
          return false;
        }
        timer = setTimeout(loopTyping, 200); // Increased speed for typing
      };
      loopTyping();
    }

    // Function to start the deleting effect
    function deletingEffect() {
      let word = words[i].split('');
      const loopDeleting = function() {
        if (word.length > 0) {
          word.pop();
          document.getElementById('word').innerHTML = word.join('');
        } else {
          if (words.length > (i + 1)) {
            i++;
          } else {
            i = 0;
          }
          typingEffect();
          return false;
        }
        timer = setTimeout(loopDeleting, 100); // Increased speed for deleting
      };
      loopDeleting();
    }

    typingEffect(); // Start typing effect

    // Cleanup timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="title-section" className="title-section">
      <h1 className="title">Hi, I'm Francis Tumba</h1>
      <div className="subtitle">
        <span>I'm a </span>
        <span className="animated-title">
          <span id="word"></span>
        </span>
        <span className="blink">|</span>
      </div>
    </section>
  );
};

export default TitleSection;