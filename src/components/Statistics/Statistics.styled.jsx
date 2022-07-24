import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #656666;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-content: center; */
  padding: 10px;
  min-width: 60px;

  text-align: center;
  font-weight: 500;
  color: #000;

  background-color: ${p => getRandomHexColor()};
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
