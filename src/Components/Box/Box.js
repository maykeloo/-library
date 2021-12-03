/* eslint-disable jsx-a11y/alt-text */
import React, { useState, createRef, useEffect } from "react";
import { Route, Routes } from "react-router";
import {
  BookIcon,
  BookLink,
  Books,
  Content,
  ContentBox,
  Form,
  FormBox,
  FormContent,
  Input,
  InputBar,
  InputsBox,
  InputSubmit,
  Label,
  LogoBar,
  PersonIcon,
  Select,
  SmallTitle,
  Title,
  TitleBar,
  Video,
  VideoBox,
  Image,
} from "./boxElements";

import video1 from "../../video/1.mp4";
import video2 from "../../video/2.mp4";
import video3 from "../../video/3.mp4";
import video4 from "../../video/4.mp4";
import video5 from "../../video/5.mp4";

import bookLogo from "../../images/book.png";
import BooksLib from "../Books/BooksLib";

import Aos from "aos";
import "aos/dist/aos.css";

const Box = () => {


  const videos = [video1, video2, video3, video4, video5];

  const bookValue = createRef();
  const authorValue = createRef();
  const priorityValue = createRef();
  const genreValue = createRef();

  const [books, setBooks] = useState([]);

  const getBook = (e) => {
    e.preventDefault();

    setBooks((prev) => [
      ...prev,
      {
        name: `${bookValue.current.value}`,
        author: `${authorValue.current.value}`,
        priority: `${priorityValue.current.value}`,
        genre: `${genreValue.current.value}`,
      },
    ]);

    let obj = [...books, {
      name: `${bookValue.current.value}`,
      author: `${authorValue.current.value}`,
      priority: `${priorityValue.current.value}`,
      genre: `${genreValue.current.value}`,
    }];

    localStorage.setItem("book", JSON.stringify(obj));
    console.log(localStorage);
    console.log(priorityValue.current.value);
  };


  return (
    <>
      <Routes>
        <Route path="/books" element={<BooksLib books={books} />} />
        <Route
          path="/"
          element={
            <Main
              videos={videos}
              getBook={getBook}
              authorValue={authorValue}
              bookValue={bookValue}
              priorityValue={priorityValue}
              genreValue={genreValue}
            />
          }
        />
      </Routes>
    </>
  );
};

const Main = ({
  videos,
  getBook,
  authorValue,
  bookValue,
  priorityValue,
  genreValue,
  getData
}) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
      
  return (
    <>
      <Content data-aos="zoom-out-down"
     data-aos-delay="100">
        <ContentBox>
          <VideoBox>
            <TitleBar>
              <Title data-aos="fade-down"
     data-aos-delay="100">Read everywhere, with everyone.</Title>
            </TitleBar>
            <Video
              src={videos[Math.floor(Math.random() * 5)]}
              autoPlay={true}
              muted
              loop={true}
            />
          </VideoBox>
          <FormBox>
            <FormContent>
              <LogoBar>
                <Image src={bookLogo} data-aos="zoom-in"
     data-aos-delay="300"/>
              </LogoBar>
              <Form>
                <SmallTitle data-aos="fade-left"
     data-aos-delay="600">Add the book to your own library.</SmallTitle>
                <InputsBox >
                  <InputBar data-aos="fade-right"
     data-aos-delay="300">
                    <Label htmlFor="book">
                      <BookIcon />
                      <Input
                        placeholder="Book title"
                        name="book"
                        type="text"
                        ref={bookValue}
                      />
                    </Label>
                  </InputBar>

                  <InputBar data-aos="fade-left"
     data-aos-delay="600">
                    <Label htmlFor="author">
                      <PersonIcon />
                      <Input
                        placeholder="Book author"
                        name="author"
                        type="text"
                        ref={authorValue}
                      />
                    </Label>
                  </InputBar>

                  <InputBar data-aos="fade-right"
     data-aos-delay="300">
                    <Label
                      style={{
                        backgroundColor: "transparent",
                        padding: "0",
                        justifyContent: "space-around",
                      }}
                    >
                      <span>Priority</span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        <Input
                          type="radio"
                          value="1"
                          name="priority"
                          ref={priorityValue}
                        />
                        <Input
                          type="radio"
                          value="2"
                          name="priority"
                          ref={priorityValue}
                        />
                        <Input
                          type="radio"
                          value="3"
                          name="priority"
                          ref={priorityValue}
                        />
                        <Input
                          type="radio"
                          value="4"
                          name="priority"
                          ref={priorityValue}
                        />
                        <Input
                          type="radio"
                          value="5"
                          name="priority"
                          ref={priorityValue}
                        />
                      </div>
                    </Label>
                  </InputBar>

                  <InputBar
                    style={{ display: "flex", justifyContent: "flex-start" }}
                    data-aos="fade-up"
     data-aos-delay="300"
                  >
                    <Select name="" id="" ref={genreValue}>
                      <option value="">Choose a literary genre...</option>
                      <option value="Thriller/Horror">Thriller/Horror</option>
                      <option value="Romance">Romance</option>
                      <option value="Crime">Crime</option>
                    </Select>
                  </InputBar>

                  <InputBar
                    style={{ display: "flex", justifyContent: "space-between" }}
                    id='submit'
                    data-aos="fade-up"
     data-aos-delay="500"
                  >
                    <InputSubmit
                      placeholder="Book title"
                      type="submit"
                      value="Send"
                      onClick={getBook}
                    />
                    <Books to="/books" onClick={getData}>
                      Your books <BookLink />
                    </Books>
                  </InputBar>
                </InputsBox>
              </Form>
            </FormContent>
          </FormBox>
        </ContentBox>
      </Content>
    </>
  );
};

export default Box;
