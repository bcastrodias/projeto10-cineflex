import styled from "styled-components";

const Bottom = (props) => {
  return (
    <Container data-test="footer">
      <Poster src={props.movie.posterURL} />
      <InfoContainer>
        <p>{props.movie.title}</p>
        {props.session}
      </InfoContainer>
    </Container>
  );
};

export default Bottom;

const Container = styled.div`
  width: 375px;
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Poster = styled.img`
  width: 48px;
  height: 72px;
  border: 2px solid white;
  padding: 15px 16px 50px 16px;
`;

const InfoContainer = styled.div`
  padding-top: 13px;
  padding-right: 70px;
`;
