import styled from "styled-components";

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentBox = styled.div`
  width: 90%;
  min-height: 100px;
  background-color: white;
  box-shadow: 8px 8px 24px 0px rgba(50, 50, 57, 0.72);
  border-radius: 15px;
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
  align-items: flex-end;
  gap: 10px;
  padding: 0 10px;
  flex-wrap: wrap;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    > a {
      width: 100%;
    }
  }
`;

export const BookBox = styled.div`
  width: 25vw;
  height: 20%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #cddafd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  transition: 0.3s;

  &:hover {
    background-color: #83c5be;
    box-shadow: inset 3px 3px 12px -1px rgba(66, 68, 90, 1);
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 10px 0;
    align-items: center;
  }
`;

export const BoxLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;

export const TitleOnBook = styled.span`
  color: #264653;
  font-size: 20px;
  font-weight: bold;
`;

export const Data = styled.span`
  color: black;
  margin-left: 30px;
`;
