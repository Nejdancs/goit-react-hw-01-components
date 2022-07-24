import styled from 'styled-components';

export const Transaction = styled.table`
  width: 500px;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  font-size: 20px;
  background-color: #00d5ff;
  color: #fff;
`;

export const BodyRow = styled.tr`
  :nth-child(2n) {
    background-color: #ebe8e8;
  }
`;

export const BodyData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  color: #828282;
  font-weight: 500;
`;

export const HeadData = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
`;
