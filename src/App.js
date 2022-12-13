import React from "react";
import MainScreen from "./components/MainScreen";
import Top from "./components/Top";
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <Top />
      <MainContainer>
        <MainScreen />
      </MainContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
