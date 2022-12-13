import Movies from "./Movies";
import { useState } from "react";
import Times from "./Times";
import Seats from "./Seats";
import Success from "./Success";
import Bottom from "./Bottom";

const MainScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedSession, setSelectedSession] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [successInfo, setSuccessInfo] = useState();
  const [sessionName, setSessionName] = useState();

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
      <>
        <Seats
          session={selectedSession.id}
          setIsSuccess={setIsSuccess}
          setSuccessInfo={setSuccessInfo}
        />
        <Bottom movie={selectedMovie} session={sessionName} />
      </>
    );
  }

  if (selectedMovie) {
    return (
      <>
        <Times
          setSessionName={setSessionName}
          id={selectedMovie.id}
          setSelectedSession={setSelectedSession}
        />
        <Bottom movie={selectedMovie} />
      </>
    );
  }

  return <Movies setSelectedMovie={setSelectedMovie} />;
};

export default MainScreen;
