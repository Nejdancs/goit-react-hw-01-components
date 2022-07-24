import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 200px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 60px;
  margin-right: 20px;
  border: 4px solid #000;
  border-radius: 50%;
  overflow: hidden;
  border-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Images = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
