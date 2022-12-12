import styled from "styled-components";
import { useEffect, useState } from "react";
import Axios from "axios";

const Seats = (props) => {
  const APISEATS = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${props.session}/seats`;

  const [seats, setSeats] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [username, setUsername] = useState("");
  const [CPF, setCPF] = useState("");

  const onChangeName = () => {};
  const onChangeCPF = () => {};

  // id, name, isAvailable

  useEffect(() => {
    if (props.session) {
      Axios.get(APISEATS)
        .then((result) => {
          if (result.data.seats) {
            setSeats(result.data.seats);
          }
        })
        .catch((error) => {});
    }
  }, [props.session]);

  return (
    <Container>
      {seats?.map((seat) => {
        const isSelected = selectedSeats.includes(seat.id);
        const onSelect = () => {
          if (!seat.isAvailable) {
            return;
          }
          if (isSelected) {
            setSelectedSeats(selectedSeats.filter((item) => item !== seat.id));
          } else {
            setSelectedSeats([...selectedSeats, seat.id]);
          }
        };
        return (
          <Seat
            onClick={onSelect}
            isAvailable={seat.isAvailable}
            isSelected={isSelected}
          >
            {seat.name}
          </Seat>
        );
      })}
      Nome do comprador:
      <Usuario value={username} onChange={onChangeName}></Usuario>
      CPF do comprador:
      <Usuario value={CPF} onChange={onChangeCPF}></Usuario>
      <button>Reservar assento(s)</button>
    </Container>
  );
};

const Container = styled.div`
  width: 375px;
  height: 100px;
  display: grid;
  grid-template-columns: 26px 26px 26px;
  grid-template-rows: 26px 26px 26px;
  column-gap: 10px;
  row-gap: 15px;
`;

const Seat = styled.div`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  border: 1px solid #808f9d;
  border-radius: 12px;
  background-color: ${(props) =>
    props.isAvailable ? (props.isSelected ? "#0E7D71" : "#c3cfd9") : "#F7C52B"};
`;

export default Seats;

const Usuario = styled.input`
  height: 51px;
  width: 327px;
  border-radius: 3px;
`;
