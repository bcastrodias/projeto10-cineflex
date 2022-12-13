import styled from "styled-components";

const Success = (props) => {
  return (
    <>
      <div>Sua reserva foi efetuada!</div>
      <div>{props.movie.title}</div>
      <div>{props.session}</div>
      <div>{props.success.name}</div>
      <div>{props.success.cpf}</div>
      {props.success.seats.map((seat) => (
        <div>Assento {seat}</div>
      ))}
      <Button onClick={props.home}> Voltar pra home </Button>
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
