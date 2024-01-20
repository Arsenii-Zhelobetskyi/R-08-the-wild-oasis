import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Input from "./ui/Input";
import Button from "./ui/Button";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  const x = 32;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello World</H1>
        <Button onClick={() => alert("check in")}>Click Me</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
