import React, { useState, useEffect } from "react";
import styles from "./Ticker.module.css";

const Ticker = () => {
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    // Update Date & Time every second
    const updateTime = () => {
      const now = new Date();
      setDateTime(now.toLocaleString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Fetch Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation("Location access denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          <span>📅 {dateTime}</span>
          <span>📍 {location}</span>
        </div>
        <div className={styles.tickerContent} aria-hidden="true">
          <span>📅 {dateTime}</span>
          <span>📍 {location}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
