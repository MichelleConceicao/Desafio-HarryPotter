import styled from "styled-components";

export const Box = styled.div`
  background-image: url(https://1.bp.blogspot.com/-vkG0CjoS0I0/YG8kU_tQHkI/AAAAAAAADMM/ZZHt3UHGMmoo4TVQ2GfTR2bMoJ20CzV6gCLcBGAsYHQ/s2048/EONb4ENU4AIipTP.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

export const Wrap = styled.ul`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  @media only screen and (min-width: 1280px) and (max-width: 3000px) {
    width: 50%;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-family: "sans-serif";
  width: 40%;
  margin: 0 auto 3rem;
  color: #b0c4de;
  text-align: center;
`;
export const ul = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  li:hover {
    cursor: pointer;
  `;
export const Card = styled.li`
  width: 15rem;
  height: 25rem;
  margin: 2rem;
  border: 1px solid #b0c4de;
  border-radius: 15px;
  background-image: url(https://loscafeinomanos.files.wordpress.com/2014/07/fanfiction-1.png?w=720);
  background-size: cover;
  background-position: center;
  transition: all 0.9s;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 20rem;
    height: 25rem;
    margin: 2rem 0;
  }
`;
export const Name = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #b0c4de;
`;
export const Data = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
  color: #b0c4de;
`;
export const Wand = styled.h3`
  width: 100vw;
`;
export const Figure = styled.figure`
  width: 15.5rem;
  height: 15rem;
  margin-top: 4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 12rem;
  height: 15rem;
  object-fit: contain;
  object-position: top;
  margin-right: 5px;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    margin-left: 50px;
  }
`;
