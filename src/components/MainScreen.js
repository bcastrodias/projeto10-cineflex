import Top from "./Top";
import Movies from "./Movies";
import { useState } from "react";
import Times from "./Times";

const MainScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedSession, setSelectedSession] = useState();

  console.log(selectedMovie);

  return (
    <>
      {selectedMovie ? (
        <Times id={selectedMovie.id} setSelectedSession={setSelectedSession} />
      ) : (
        <Movies setSelectedMovie={setSelectedMovie} />
      )}
    </>
  );
};

export default MainScreen;
