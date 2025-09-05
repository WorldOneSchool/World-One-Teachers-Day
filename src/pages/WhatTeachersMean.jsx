import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WhatTeachersMean.css";

// Helper function to extract video ID from full YouTube URL
const getYouTubeID = (url) => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }
    return urlObj.searchParams.get("v");
  } catch (e) {
    return url; // fallback (in case already just an ID)
  }
};

// Student tribute videos (replace URLs with your actual YouTube links)
const tributeVideos = [
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_1", name: "Varshini 5E", message: "Your support made all the difference." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_2", name: "Dharvik 6A", message: "You taught me to believe in myself." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_3", name: "Rudhvika 4A", message: "Thank you for always encouraging us!" },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_4", name: "Dhruti 6B", message: "You inspire us to dream bigger." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_5", name: "Manyata 7A", message: "Your patience is truly appreciated." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_6", name: "Parnika 7C", message: "You make learning fun every day!" },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_7", name: "Ritanya 5C", message: "Thanks for guiding us with kindness." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_8", name: "Chaitanya 9B", message: "We will always remember your lessons." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_9", name: "Ananya", message: "You taught us to never give up." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_10", name: "Anika", message: "You inspire us to reach for the stars." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_11", name: "Akhil Jain 9A", message: "You showed us the value of hard work." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_12", name: "Noopura 9C", message: "Your kindness makes a big difference." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_13", name: "Parthu 8A", message: "You taught us lessons for life, not just for exams." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_14", name: "Dharvik 6D", message: "You always encourage us to do better." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_15", name: "Sree Akshaya 8B", message: "You helped us believe in ourselves." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_16", name: "Ananya 2A", message: "We feel lucky to have your guidance." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_17", name: "Sreeyansh Karthik", message: "Your support makes us stronger." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_18", name: "Srehan", message: "We admire your dedication to teaching." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_19", name: "Ananya 2A", message: "You have been our constant motivation." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_20", name: "Anika", message: "We’ll cherish your lessons forever." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_21", name: "Student 21", message: "Your guidance lights our way." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_22", name: "Student 22", message: "We’re thankful for your patience." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_23", name: "Student 23", message: "Your lessons stay with us forever." },
  { url: "https://www.youtube.com/watch?v=VIDEO_ID_24", name: "Student 24", message: "You inspire us daily." },
  { url: "https://youtu.be/nvGy2V-7Qx0?si=TrbUhIwSMrAfJ0Ha", name: "Student 25", message: "We’re proud to be your students." },
];

const messages = [
  "Teachers inspire us to dream, learn, and grow.",
  "Their encouragement opens doors to new possibilities.",
  "Thank you for believing in us, always!",
];

export default function WhatTeachersMean() {
  const [modalIdx, setModalIdx] = useState(null);

  return (
    <div className="teachers-meaning-bg">
      {/* Background video = first tribute */}
      <iframe
        className="teachers-meaning-video-bg"
        src={`https://www.youtube.com/embed/${getYouTubeID(tributeVideos[0].url)}?autoplay=1&loop=1&mute=1&controls=0&playlist=${getYouTubeID(tributeVideos[0].url)}`}
        title="Background Tribute"
        frameBorder="0"
        allow="autoplay; loop; muted"
      />

      {/* Overlay */}
      <div className="teachers-meaning-overlay" />

      <motion.div
        className="teachers-meaning-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="teachers-meaning-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Teachers Mean to Us
        </motion.h1>
        <motion.p
          className="teachers-meaning-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A heartfelt tribute from students expressing their gratitude, admiration, and love for our amazing teachers.
        </motion.p>

        {/* Heartfelt messages */}
        <div className="teachers-messages">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              className="teachers-message"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.2 }}
            >
              <span role="img" aria-label="heart">💖</span> {msg}
            </motion.div>
          ))}
        </div>

        {/* Tribute video grid */}
        <div className="teachers-tribute-videos">
          <h2>Student Video Tributes</h2>
          <div className="teachers-tribute-grid">
            {tributeVideos.map((vid, i) => (
              <motion.div
                key={i}
                className="teachers-tribute-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.08 }}
                onClick={() => setModalIdx(i)}
                tabIndex={0}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeID(vid.url)}?modestbranding=1&rel=0`}
                  title={vid.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="card-details">
                  <div className="card-name">{vid.name}</div>
                  <div className="card-message">{vid.message}</div>
                </div>
                <span className="card-icon" role="img" aria-label="heart">❤️</span>
              </motion.div>
            ))}
          </div>
          <span className="teachers-popup-hint">Click a student to watch their tribute video!</span>
        </div>
      </motion.div>

      {/* Floating hearts */}
      <motion.div
        className="floating-hearts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`heart heart${i + 1}`} role="img" aria-label="heart">💗</span>
        ))}
      </motion.div>

      {/* Modal popup */}
      <AnimatePresence>
        {modalIdx !== null && (
          <motion.div
            className="teachers-modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalIdx(null)}
          >
            <motion.div
              className="teachers-modal-video-wrap"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeID(tributeVideos[modalIdx].url)}?autoplay=1`}
                title={tributeVideos[modalIdx].name}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="teachers-modal-video"
              />
              <button className="teachers-modal-close" onClick={() => setModalIdx(null)}>×</button>
              <div style={{ marginTop: "0.6rem", fontWeight: "600", color: "#263c62", fontSize: "1.08rem" }}>
                {tributeVideos[modalIdx].name}
              </div>
              <div style={{ fontSize: "0.99rem", color: "#0077c2", fontStyle: "italic" }}>
                {tributeVideos[modalIdx].message}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
