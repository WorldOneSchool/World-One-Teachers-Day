import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import all images dynamically from ChartsGallery folder
function importAll(r) {
  return r.keys().map((key) => {
    const fileName = key.replace("./", "");
    const label = fileName
      .replace(/\.(jpe?g|png|webp)$/i, "")
      .replace(/[_-]/g, " ")
      .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    return {
      src: r(key),
      label,
    };
  });
}

const IMAGES = importAll(
  require.context(
    "../../assets/images/gallery/ChartsGallery",
    false,
    /\.(jpe?g|png|webp)$/i
  )
);

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 20px #0002;
  padding: 1.2rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.06) translateY(-8px);
    box-shadow: 0 10px 30px #00a0e380, 0 4px 14px #0003;
  }
`;

const Pic = styled(motion.img)`
  width: 100%;
  max-width: 320px;
  height: 220px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px #0002;
`;

export default function ChartsGallery() {
  return (
    <>
      <motion.h2
        style={{ textAlign: "center", margin: "2rem 0 0.5rem 0" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Chart Making
      </motion.h2>

      <Grid
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {IMAGES.map((img, i) => (
          <Card
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 40 },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.6, type: "spring" },
              },
            }}
            whileHover={{ rotate: 1 }}
          >
            <Pic
              src={img.src}
              alt={img.label}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 180 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                fontWeight: 600,
                color: "#00A0E3",
                fontSize: "1.1rem",
              }}
            >
              {img.label}
            </motion.div>
          </Card>
        ))}
      </Grid>
    </>
  );
}
