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
//test
import Aos from "aos";
import "aos/dist/aos.css";

const Box = () => {
  const videos = [video1, video2, video3, video4, video5];

  const bookValue = createRef();
  const authorValue = createRef();
  const priorityValue = createRef();
  const genreValue = createRef();

  const [books, setBooks] = useState([]);

  const [nameError, setNameError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [priorityError, setPriorityError] = useState(false);
  const [genreError, setGenreError] = useState(false);

  const [priorityNumber, setPriorityNumber] = useState(0);

  const [bookValueState, setBookValueState] = useState('');
  const [authorValueState, setAuthorValueState] = useState('');
  const [genreValueState, setGenreValueState] = useState();

  const [random, setRandom] = useState();

  const getBook = (e) => {
    e.preventDefault();

    if (bookValue.current.value.length < 1) setNameError(true);

    if (authorValue.current.value.length < 3) setAuthorError(true);

    if (priorityNumber === 0) setPriorityError(true);

    if (genreValueState === undefined || genreValueState === "")
      setGenreError(true);

    if (
      authorValue.current.value.length >= 3 &&
      bookValue.current.value.length >= 1 &&
      priorityNumber !== 0 &&
      genreValueState !== undefined &&
      genreValueState !== ""
    ) {
      setNameError(false);
      setAuthorError(false);
      setPriorityError(false);
      setGenreError(false);

      setBooks((prev) => [
        ...prev,
        {
          name: `${bookValue.current.value}`,
          author: `${authorValue.current.value}`,
          priority: `${priorityNumber}/5`,
          genre: `${genreValue.current.value}`,
        },
      ]);

      const obj = [
        ...books,
        {
          name: `${bookValue.current.value}`,
          author: `${authorValue.current.value}`,
          priority: `${priorityNumber}/5`,
          genre: `${genreValue.current.value}`,
        },
      ];

      localStorage.setItem("book", JSON.stringify(obj));

      setBookValueState("");
      setAuthorValueState("");
      setPriorityNumber(0);
      setGenreValueState("");
    }
  };

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 5));
  }, []);

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
              nameError={nameError}
              authorError={authorError}
              setPriorityNumber={setPriorityNumber}
              bookValueState={bookValueState}
              authorValueState={authorValueState}
              setBookValueState={setBookValueState}
              setAuthorValueState={setAuthorValueState}
              genreValueState={genreValueState}
              setGenreValueState={setGenreValueState}
              random={random}
              priorityError={priorityError}
              genreError={genreError}
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
  getData,
  nameError,
  authorError,
  genreError,
  priorityError,
  setPriorityNumber,
  bookValueState,
  authorValueState,
  setBookValueState,
  setAuthorValueState,
  genreValueState,
  setGenreValueState,
  random,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Content data-aos="zoom-out-down" data-aos-delay="100">
        <ContentBox>
          <VideoBox>
            <TitleBar>
              <Title data-aos="fade-down" data-aos-delay="100">
                Read everywhere, with everyone.
              </Title>
            </TitleBar>
            <Video src={videos[random]} autoPlay={true} muted loop={true} />
          </VideoBox>
          <FormBox>
            <FormContent>
              <LogoBar>
                <Image src={bookLogo} data-aos="zoom-in" data-aos-delay="300" />
              </LogoBar>
              <Form>
                <SmallTitle data-aos="fade-left" data-aos-delay="600">
                  Add the book to your own library.
                </SmallTitle>
                <InputsBox>
                  <InputBar
                    data-aos="fade-right"
                    data-aos-delay="300"
                    style={{ flexDirection: "column" }}
                  >
                    <Label htmlFor="book">
                      <BookIcon />
                      <Input
                        placeholder="Harry Potter..."
                        name="book"
                        type="text"
                        ref={bookValue}
                        value={bookValueState}
                        onChange={(e) => setBookValueState(e.target.value)}
                      />
                    </Label>
                    <InputBar style={{ color: "red" }}>
                      {nameError ? "Minimum 1 character" : null}
                    </InputBar>
                  </InputBar>

                  <InputBar
                    data-aos="fade-left"
                    data-aos-delay="600"
                    style={{ flexDirection: "column" }}
                  >
                    <Label htmlFor="author">
                      <PersonIcon />
                      <Input
                        placeholder="J.K. Rowling..."
                        name="author"
                        type="text"
                        ref={authorValue}
                        value={authorValueState}
                        onChange={(e) => setAuthorValueState(e.target.value)}
                      />
                    </Label>
                    <InputBar style={{ color: "red" }}>
                      {authorError ? "Minimum 3 characters" : null}
                    </InputBar>
                  </InputBar>

                  <InputBar
                    data-aos="fade-right"
                    data-aos-delay="300"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Label
                      style={{
                        backgroundColor: "transparent",
                        padding: "0",
                        justifyContent: "space-around",
                      }}
                    >
                      <span style={{ fontSize: "2.5vmin" }}>Priority</span>
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
                          onClick={() => setPriorityNumber(1)}
                        />
                        <Input
                          type="radio"
                          value="2"
                          name="priority"
                          onClick={() => setPriorityNumber(2)}
                        />
                        <Input
                          type="radio"
                          value="3"
                          name="priority"
                          onClick={() => setPriorityNumber(3)}
                        />
                        <Input
                          type="radio"
                          value="4"
                          name="priority"
                          onClick={() => setPriorityNumber(4)}
                        />
                        <Input
                          type="radio"
                          value="5"
                          name="priority"
                          onClick={() => setPriorityNumber(5)}
                        />
                      </div>
                    </Label>
                    <InputBar style={{ color: "red" }}>
                      {priorityError ? "You have to choose priority" : null}
                    </InputBar>
                  </InputBar>

                  <InputBar
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Select
                      name=""
                      id=""
                      ref={genreValue}
                      value={genreValueState}
                      onChange={(e) => setGenreValueState(e.target.value)}
                    >
                      <option value="">Choose a literary genre...</option>
                      <option value="Thriller/Horror">Thriller/Horror</option>
                      <option value="Romance">Romance</option>
                      <option value="Crime">Crime</option>
                    </Select>
                    <InputBar style={{ color: "red" }}>
                      {genreError ? "Choose one of genre" : null}
                    </InputBar>
                  </InputBar>

                  <InputBar
                    style={{ display: "flex", justifyContent: "space-between" }}
                    id="submit"
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
