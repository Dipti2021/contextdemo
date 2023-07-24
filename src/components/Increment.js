import styled from "styled-components";
import { CountContext } from "../context/CountContext";
import { useContext } from "react";

const Increment = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <h2> Click the Button!!!</h2>
      <>
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </>
    </>
  );
};

const Button = styled.button`
  cursor: pointer;
  color: blue;
  border: 1px solid grey;
  font-weight: bold;
  margin-left: 20px;
`;

export default Increment;
