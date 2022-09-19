import styled from "styled-components";

export const Box = styled.div`
  background-image: url(https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_harry-potter13.jpg?quality=70&strip=info&w=960);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  ul:hover {
    background-color: DarkRed;
    opacity: 30%;
  }
`;
export const Ul = styled.ul`
  width: 100vw;
  height: 100px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  li:hover {
    cursor: pointer;
    color: whitesmoke;
  }
`;
