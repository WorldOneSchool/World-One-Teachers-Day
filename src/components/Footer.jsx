import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 2rem 0 1rem 0;
  text-align: center;
  font-size: 1rem;
  margin-top: 2rem;
`;

const Socials = styled.div`
  margin-bottom: 1rem;
  a {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 0.6rem;
    transition: color 0.2s, transform 0.2s;
    font-size: 1.6rem;
    &:hover { color: ${({ theme }) => theme.colors.secondary}; transform: scale(1.2) rotate(-7deg);}
  }
`;

export default function Footer() {
  return (
    <FooterWrap>
      <Socials>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram" />
        </a>
      </Socials>
      &copy; Prajwal,Srinikesh,Anish.co  All rights reserved.
    </FooterWrap>
  );
}