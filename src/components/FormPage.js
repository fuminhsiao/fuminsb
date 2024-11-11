import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #1e3d58;
  text-align: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  display: block;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const CheckboxContainer = styled.div`
  margin-top: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #1e3d58;
  color: #f0f8ff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #163042;
  }
`;

const EntryContainer = styled.div`
  margin-top: 2rem;
`;

const EntryCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  padding: 0.5rem;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

function FormPage() {
  const [name, setName] = useState('');
  const [canSki, setCanSki] = useState(false);
  const [hasCar, setHasCar] = useState(false);
  const [email, setEmail] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      name,
      canSki,
      hasCar,
      email,
    };

    setEntries([...entries, newEntry]);

    // 清空表單
    setName('');
    setCanSki(false);
    setHasCar(false);
    setEmail('');
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <Container>
      <Title>滑雪者資訊表單</Title>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">姓名：</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="canSki"
            checked={canSki}
            onChange={(e) => setCanSki(e.target.checked)}
          />
          <Label htmlFor="canSki" style={{ display: 'inline' }}>是否會滑雪</Label>
        </CheckboxContainer>

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="hasCar"
            checked={hasCar}
            onChange={(e) => setHasCar(e.target.checked)}
          />
          <Label htmlFor="hasCar" style={{ display: 'inline' }}>是否有車</Label>
        </CheckboxContainer>

        <Label htmlFor="email">Email：</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <SubmitButton type="submit">提交</SubmitButton>
      </form>

      <EntryContainer>
        <h3>儲存的資料</h3>
        {entries.map((entry) => (
          <EntryCard key={entry.id}>
            <p><strong>姓名：</strong>{entry.name}</p>
            <p><strong>是否會滑雪：</strong>{entry.canSki ? '是' : '否'}</p>
            <p><strong>是否有車：</strong>{entry.hasCar ? '是' : '否'}</p>
            <p><strong>Email：</strong>{entry.email}</p>
            <DeleteButton onClick={() => handleDelete(entry.id)}>刪除</DeleteButton>
          </EntryCard>
        ))}
      </EntryContainer>
    </Container>
  );
}

export default FormPage;
