import Movies from "./Movies";
import { useState } from "react";
import Times from "./Times";
import Seats from "./Seats";
import Success from "./Success";

const MainScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedSession, setSelectedSession] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [successInfo, setSuccessInfo] = useState();

  const goHome = () => {
    setSelectedMovie(undefined);
    setSelectedSession(undefined);
    setIsSuccess(false);
    setSuccessInfo(undefined);
  };

  if (isSuccess) {
    return (
      <Success
        movie={selectedMovie}
        session={selectedSession.name}
        success={successInfo}
        home={goHome}
      />
    );
  }

  if (selectedSession) {
    return (
      <Seats
        session={selectedSession.id}
        setIsSuccess={setIsSuccess}
        setSuccessInfo={setSuccessInfo}
      />
    );
  }

  if (selectedMovie) {
    return (
      <Times id={selectedMovie.id} setSelectedSession={setSelectedSession} />
    );
  }

  return <Movies setSelectedMovie={setSelectedMovie} />;
};

export default MainScreen;
