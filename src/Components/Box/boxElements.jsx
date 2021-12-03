import styled from "styled-components";
import { BsBook, BsStarHalf } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Link } from "react-router-dom";

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  box-shadow: 8px 8px 24px 0px rgba(50, 50, 57, 0.72);
  border-radius: 15px;
  display: flex;
  overflow: hidden;
`;

export const VideoBox = styled.div`
  width: 55%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 1200px)
  {
    display: none;
  }
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  position: absolute;
`;

export const FormBox = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
    justify-content: center;
  }
`;

export const TitleBar = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  z-index: 10;
  flex-direction: column;
  position: absolute;
  left: 40px;
  bottom: 20px;
`;

export const LogoBar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 25px;
  font-weight: 500;
  justify-content: center;

`;

export const Title = styled.h1`
  margin-top: 10px;
  font-size: 4em;
  color: white;

  @media screen and (max-width: 1200px)
  {
    font-size: 2em;
  }
`;

export const FormContent = styled.div`
  width: 100%;
`;
export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SmallTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 2em;
  font-weight: 700;
  color: #83c5be;
  justify-content: center;

  
  @media screen and (max-width: 1200px)
  {
    font-size: 1em;
  }
`;
export const InputsBox = styled.div`
  height: 50vh;
  width: 70%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  #submit {
    @media screen and (max-width: 1200px)
  {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  }
  
  @media screen and (max-width: 1200px)
  {
    width: 90%;
  }
`;

export const InputBar = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;


`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  background-color: transparent;
  outline: none;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;

  &::placeholder {
    letter-spacing: 2px;
    font-size: 18px;
  }

  &[type="radio"] {
    position: relative;
    


    &:hover {
      cursor: pointer;
    }

    &:checked {
        &:after {
        transition: 0.2s;
        background-color: #00afb9;
      }
    }
    &::after {
      position: absolute;
      content: "";
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 11px;
      height: 11px;
      border-radius: 50%;
      border: 1px solid black;
      z-index: 100;
    }
  }
`;

export const InputSubmit = styled.input`
  padding: 10px 40px;
  font-size: 22px;
  color: white;
  background-color: #00afb9;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
`;

export const BookIcon = styled(BsBook)`
  font-size: 18px;
`;

export const PersonIcon = styled(MdOutlinePerson)`
  font-size: 18px;
`;

export const StarIcon = styled(BsStarHalf)``;

export const Label = styled.label`
  background-color: #dcdfe5;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Books = styled(Link)`
  color: blue;
`;

export const Select = styled.select`
  padding: 10px 40px;
  font-size: 22px;
  color: #00afb9;
  background-color: white;
  border: 2px solid #00afb9;
  outline: none;
  cursor: pointer;
  

  > option {
    cursor: pointer;
  }

  
  @media screen and (max-width: 1200px)
  {
    padding: 0;
    width: 100%;
    font-size: 16px;
  }
`;

export const BookLink = styled(HiOutlineExternalLink)`
  color: blue;
`;
export const Image = styled.img`
  width: 10vw;

  
  @media screen and (max-width: 1200px)
  {
    width: 20vw;
  }
`

export const SubmitBar = styled.div`

`