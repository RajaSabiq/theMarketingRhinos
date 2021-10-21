import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 7px;
  padding: 15px;
  cursor: pointer;
  box-shadow: 0 0px 2px gray;
  background-color: #fff;
  transition: transform 0.5s, background 0.5s;
  border-top: 10px solid
    ${(props) => (props.color ? props.color : 'transparent')};
  &:hover {
    box-shadow: 0 0px 15px
      ${(props) => (props.color ? props.color : 'transparent')};
    transform: scale(1.05);
    z-index: 10;
  }
`;
