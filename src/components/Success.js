import styled from "styled-components";

const Success = (props) => {
  return (
    <>
      <div>Sua reserva foi efetuada!</div>
      <div data-test="movie-info">
        <div>{props.movie.title}</div>
        <div>{props.session}</div>
      </div>
      <div data-test="client-info">
        <div>{props.success.name}</div>
        <div>{props.success.cpf}</div>
      </div>
      {props.success.seats.map((seat) => (
        <div data-test="seats-info">Assento {seat}</div>
      ))}
      <Button data-test="book-seat-btn" onClick={props.home}>
        {" "}
        Voltar pra home{" "}
      </Button>
    </>
  );
};

export default Success;

const Button = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
`;
