import Axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Times = (props) => {
  const APItimes = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${props.id}/showtimes`;
  const [days, setDays] = useState();

  useEffect(() => {
    Axios.get(APItimes).then((result) => {
      console.log(result);
      setDays(result.data.days);
    });
  }, []);

  return (
    <>
      {days?.map((day) => {
        return (
          <>
            <div>
              {day.weekday} - {day.date}
            </div>
            {day.showtimes.map((showtime) => {
              const onPressSession = () => {
                props.setSelectedSession(showtime.id);
              };
              return (
                <Horario onClick={onPressSession}>{showtime.name}</Horario>
              );
            })}
          </>
        );
      })}
    </>
  );
};

export default Times;

const Horario = styled.button`
  height: 43px;
  width: 83px;
  left: 23px;
  top: 227px;
  border-radius: 3px;
  background-color: orange;
`;
