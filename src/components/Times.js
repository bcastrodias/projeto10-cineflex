import Axios from "axios";
import { useState, useEffect } from "react";

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
                setSelectedSession(showtime.id);
              };
              return <button onClick={onPressSession}>{showtime.name}</button>;
            })}
          </>
        );
      })}
    </>
  );
};

export default Times;
