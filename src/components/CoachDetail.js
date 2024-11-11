import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CoachDetailContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CoachImage = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const CoachName = styled.h2`
  font-size: 2rem;
  color: #1e3d58;
  margin-bottom: 1rem;
`;

const CoachSpecialty = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const CoachBio = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-top: 1rem;
`;

function CoachDetail() {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);

  useEffect(() => {
    fetch('/coaches.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedCoach = data.find((coach) => coach.id === parseInt(id, 10));
        setCoach(selectedCoach);
      });
  }, [id]);

  if (!coach) return <p>正在加載...</p>;

  return (
    <CoachDetailContainer>
      <CoachImage src={coach.image} alt={coach.name} />
      <CoachName>{coach.name}</CoachName>
      <CoachSpecialty>專長: {coach.specialty}</CoachSpecialty>
      <CoachSpecialty>經驗: {coach.experience}</CoachSpecialty>
      <CoachBio>{coach.bio}</CoachBio>
    </CoachDetailContainer>
  );
}

export default CoachDetail;
