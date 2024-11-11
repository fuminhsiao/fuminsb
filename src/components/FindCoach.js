import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pic1 from '../assets/images/coaches/fumin.jpeg';

const CoachContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #1e3d58;
  text-align: center;
  margin-bottom: 1rem;
`;

const CoachList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

const CoachCard = styled.div`
  display: flex;
  background-color: #f0f8ff;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const CoachImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 1rem;
`;

const CoachInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const CoachName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const CoachSpecialty = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ContactButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #1e3d58;
  color: #f0f8ff;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: #163042;
  }
`;

function FindCoach() {
  // 靜態數據
  const coach = {
    id: 1,
    name: "Fumin Hsiao",
    specialty: "Snowboarding",
    experience: "5 years",
    image: pic1,
    bio: "Fumin Hsiao has been snowboarding professionally for over 5 years and specializes in freestyle snowboarding. His passion for the sport is contagious."
  };

  return (
    <CoachContainer>
      <Title>找滑雪教練</Title>
      <CoachList>
        <CoachCard>
          <CoachImage src={coach.image} alt={coach.name} />
          <CoachInfo>
            <CoachName>{coach.name}</CoachName>
            <CoachSpecialty>專長: {coach.specialty}</CoachSpecialty>
            <CoachSpecialty>經驗: {coach.experience}</CoachSpecialty>
            <ContactButton to={`/coach/${coach.id}`}>查看詳情</ContactButton>
          </CoachInfo>
        </CoachCard>
      </CoachList>
    </CoachContainer>
  );
}

export default FindCoach;
