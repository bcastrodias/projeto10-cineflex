import Top from "./Top";
import Movies from "./Movies";
import { useState } from "react";

const MainScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState();

  console.log(selectedMovie);

  return <Movies setSelectedMovie={setSelectedMovie} />;
};

export default MainScreen;
