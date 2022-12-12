import styled from "styled-components";
import { useEffect, useState } from "react";
import Axios from "axios";

const Seats = (props) => {
  const APISEATS = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${props.session}/seats`;

  const [seats, setSeats] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [username, setUsername] = useState("");
  const [CPF, setCPF] = useState("");

  const onChangeName = (e) => {
    setUsername(e.target.value);
  };
  const onChangeCPF = (e) => {
    setCPF(e.target.value);
  };

  const isButtonDisabled = !username || !CPF || selectedSeats.length === 0;

  const onPressButton = () => {
    Axios.post(
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
      {
        ids: selectedSeats,
        name: username,
        cpf: CPF,
      }
    ).then((result) => {
      console.log(result);
      // setIsSuccessful(true)
    });
  };

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
      <label for="name">Nome do comprador:</label>
      <Usuario id="name" value={username} onChange={onChangeName}></Usuario>
      <label for="cpf">CPF do comprador:</label>
      <Usuario id="cpf" value={CPF} onChange={onChangeCPF}></Usuario>
      <button onClick={onPressButton} disabled={isButtonDisabled}>
        Reservar assento(s)
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 375px;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(10, 26px);
  grid-template-rows: repeat(5, 26px);
  column-gap: 10px;
  row-gap: 10px;
`;

const Seat = styled.div`
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
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
  width: 150px;
  border-radius: 3px;
`;
