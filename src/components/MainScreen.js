import Movies from "./Movies";
import { useState } from "react";
import Times from "./Times";
import Seats from "./Seats";

const MainScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedSession, setSelectedSession] = useState();

  if (selectedSession) {
    return <Seats session={selectedSession} />;
  }

  if (selectedMovie) {
    return (
      <Times id={selectedMovie.id} setSelectedSession={setSelectedSession} />
    );
  }

  return <Movies setSelectedMovie={setSelectedMovie} />;
};

export default MainScreen;
