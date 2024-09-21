import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'; // Import custom CSS module

export default function Home() {
  const [index, setIndex] = useState(0);
  const urls = ["/1.jpeg", "/3.jpg"]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % urls.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [urls.length]);

  return (
    <div className={styles.mainContainer}>
      {/* Background Sliding Section */}
      <div className={styles.sliderContainer} style={{ backgroundImage: `url('${urls[index]}')` }}>
        {urls.map((url, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
        ))}
      </div>

      {/* Foreground Content Section with Fade-in Effect */}
      <div className={styles.overlayContent}>
        <h1 className={`${styles.fadeInText} text-white text-5xl font-bold text-center uppercase`}>
          Welcome to
        </h1>
        <p className={`${styles.fadeInText} ${styles.delay} text-white text-7xl font-bold text-center uppercase`}>
          Gawsia International Trade
        </p>
      </div>
    </div>
  );
}
