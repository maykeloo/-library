/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect} from "react";
import { Title, Books, BookLink } from "../Box/boxElements";
import {
  BookBox,
  BoxLabel,
  Content,
  ContentBox,
  Data,
  TitleOnBook,
} from "./booksLibElements";

import Aos from "aos";
import "aos/dist/aos.css";

const BooksLib = () => {
  let data = [JSON.parse(localStorage.getItem("book"))];

  console.log(data);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Content data-aos="fade-right"
     data-aos-delay="100">
        <div style={{display: 'flex', width: '80%', justifyContent: 'space-around', alignItems: 'center'}}>
        <Title data-aos="fade-right"
     data-aos-delay="300">Your books</Title>
        <Books to="/" data-aos="zoom-in"
     data-aos-delay="100">
          Back to form <BookLink />
        </Books>
        </div>
        <ContentBox>
          {data[0].map((book) => (
            <a
              style={{ cursor: "pointer", textDecoration: "none" }}
              href={`https://www.google.com/search?q=${book.name}`}
              target="_blank"
            >
              <BookBox key={book.name}>
                <BoxLabel>
                  <TitleOnBook>Title:</TitleOnBook>
                  <Data>{book.name}</Data>
                </BoxLabel>

                <BoxLabel>
                  <TitleOnBook>Author: </TitleOnBook>
                  <Data>{book.author}</Data>
                </BoxLabel>

                <BoxLabel>
                  <TitleOnBook>Priority: </TitleOnBook>
                  <Data>{book.priority}</Data>
                </BoxLabel>

                <BoxLabel>
                  <TitleOnBook>Genre: </TitleOnBook>
                  <Data>{book.genre}</Data>
                </BoxLabel>
              </BookBox>
            </a>
          ))}
        </ContentBox>
      </Content>
    </>
  );
};

export default BooksLib;
