import styled from "styled-components";

const Top = () => {
  return <Logo> Cineflex </Logo>;
};

export default Top;

const Logo = styled.div`
  width: 100%;
  height: 67px;
  left: 0px;
  top: 0px;
  background: #c3cfd9;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  text-align: center;
  color: #e8833a;
`;
