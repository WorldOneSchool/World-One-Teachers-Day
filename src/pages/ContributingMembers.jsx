import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Utility function to capitalize first letter of each word
function toTitleCase(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Role to color mapping
const roleColor = {
  "school captain boys": "#ff6565",       // red
  "school capain girls": "#ff6565",       // red (typo kept as per your request)
  "school captain girls": "#ff6565",
  "school vice captain boys": "#ff6565",
  "school vice captain girls": "#ff6565",

  "discipline captain boys": "#ffe066",   // yellow
  "discipline vice captain boys": "#ffe066",
  "discipline captain girls": "#ffe066",
  "discipline vice captain girls": "#ffe066",

  "sports captain boys": "#ffb3e6",       // pink
  "sports vice captain boys": "#ffb3e6",
  "sports captain girls": "#ffb3e6",
  "sports vice captain girls": "#ffb3e6",

  "clubs captain boys": "#ffb566",        // orange
  "clubs vice captain boys": "#ffb566",
  "clubs captain girls": "#ffb566",
  "clubs vice captain girls": "#ffb566",

  "literature captain boys": "#66faff",   // aqua
  "literature vice captain boys": "#66faff",
  "literature captain girls": "#66faff",
  "literature vice captain girls": "#66faff",

  "events captain boys": "#ae7aff",       // purple
  "events vice captain boys": "#ae7aff",
  "events captain girls": "#ae7aff",
  "events vice captain girls": "#ae7aff",

  "technical manager": "#23243a",         // black

  "head boy": "#fff",                     // white
  "head girl": "#fff",
};

const Container = styled(motion.div)`
  max-width: 1050px;
  margin: 0 auto;
  padding: 110px 2.5vw 3rem 2.5vw;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  color: #00A0E3;
  text-align: center;
  font-weight: 800;
  margin-bottom: 2rem;
  text-shadow: 0 1px 8px #0005;
`;

const MemberGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MemberCard = styled(motion.li)`
  background: ${({ $bgcolor, theme }) => $bgcolor ? $bgcolor : theme.colors.surface};
  color: ${({ $bgcolor }) => {
    if ($bgcolor === "#23243a") return "#fff";
    if ($bgcolor === "#fff") return "#23243a";
    if ($bgcolor) return "#23243a";
    return "inherit";
  }};
  border-radius: 14px;
  box-shadow: 0 4px 24px #0003;
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
  transition: box-shadow 0.2s, transform 0.2s, background 0.18s;
  &:hover {
    box-shadow: 0 8px 40px #00A0E370;
    transform: translateY(-5px) scale(1.012);
    filter: brightness(1.06);
  }
  ${({ $bgcolor }) =>
    $bgcolor === "#fff" &&
    css`
      border: 2px solid #e6e6e6;
      color: #23243a;
    `}
`;

const Name = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: inherit;
`;

const Role = styled.div`
  font-size: 1.05rem;
  color: inherit;
  font-style: italic;
  min-height: 1.3em;
`;

const members = [
  { name: "Pradyumuna", role: "head boy" },
  { name: "Eva", role: "head girl" },
  { name: "Anish", role: "technical manager" },

  { name: "Prajwal", role: "school captain boys" },
  { name: "Yashashvi", role: "school capain girls" },
  { name: "Deekshith", role: "school vice captain boys" },
  { name: "Anaya", role: "school vice captain girls" },

  { name: "Akhil", role: "discipline captain boys" },
  { name: "Abdul", role: "discipline vice captain boys" },
  { name: "Noopura", role: "discipline captain girls" },
  { name: "A Sreshta", role: "discipline vice captain girls" },

  { name: "Nishanth", role: "sports captain boys" },
  { name: "Ahmed", role: "sports vice captain boys" },
  { name: "D Sreshta", role: "sports captain girls" },
  { name: "Manya", role: "sports vice captain girls" },

  { name: "Srinikesh", role: "clubs captain boys" },
  { name: "Satyajit", role: "clubs vice captain boys" },
  { name: "Srihitha", role: "clubs captain girls" },
  { name: "Laasya", role: "clubs vice captain girls" },

  { name: "Monish", role: "literature captain boys" },
  { name: "Pratheek", role: "literature vice captain boys" },
  { name: "Manasvi", role: "literature captain girls" },
  { name: "Aadya", role: "literature vice captain girls" },

  { name: "Advith", role: "events captain boys" },
  { name: "Zayaan", role: "events vice captain boys" },
  { name: "Sahasra", role: "events captain girls" },
  { name: "Akanksha", role: "events vice captain girls" }
];

export default function ContributingMembers() {
  return (
    <Container
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
    >
      <Title>Contributing Members</Title>
      <MemberGrid>
        {members.map((member, idx) => {
          const color =
            member.role && roleColor[member.role.trim().toLowerCase()]
              ? roleColor[member.role.trim().toLowerCase()]
              : undefined;
          return (
            <MemberCard
              key={member.name + idx}
              $bgcolor={color}
              whileHover={{ scale: 1.02, boxShadow: "0 12px 44px #00A0E380" }}
              transition={{
                type: 'spring',
                stiffness: 320,
                damping: 22,
                delay: idx * 0.03
              }}
            >
              <Name>{toTitleCase(member.name)}</Name>
              <Role>
                role: {member.role ? toTitleCase(member.role) : "none"}
              </Role>
            </MemberCard>
          );
        })}
      </MemberGrid>
    </Container>
  );
}