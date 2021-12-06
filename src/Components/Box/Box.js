/* eslint-disable jsx-a11y/alt-text */
import React, { useState, createRef, useEffect } from "react";
import { Route, Routes } from "react-router";
import Main from "../Main";

import video1 from "../../video/1.mp4";
import video2 from "../../video/2.mp4";
import video3 from "../../video/3.mp4";
import video4 from "../../video/4.mp4";
import video5 from "../../video/5.mp4";

import BooksLib from "../Books/BooksLib";

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

  const [bookValueState, setBookValueState] = useState("");
  const [authorValueState, setAuthorValueState] = useState("");
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

export default Box;
