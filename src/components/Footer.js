import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1e3d58;
  color: #f0f8ff;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0.3rem 0;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const IconLink = styled.a`
  color: #f0f8ff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #a8dadc;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 密西根滑雪碎念 | All Rights Reserved</FooterText>
      <FooterText>Contact me: ru040708@gmail.com | Tel: 517-312-7484</FooterText>
      <IconContainer>
        <IconLink href="https://www.facebook.com/profile.php?id=100001451916966" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </IconLink>
        <IconLink href="https://www.instagram.com/ru040708" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
      </IconContainer>
    </FooterContainer>
  );
}

export default Footer;
