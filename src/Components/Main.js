import React, { useEffect } from "react";
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
} from "./Box/boxElements";

import bookLogo from "../images/book.png";

import Aos from "aos";
import "aos/dist/aos.css";

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

export default Main;
