import * as Styled from './app.styles'


function App() {
  return (
    <Styled.wrapper>
      <Styled.details>
        <Styled.connection />
        <p>
          Wellcome to the Light-Weight mysql client
        </p>
      </Styled.details>
      <Styled.data></Styled.data>
    </Styled.wrapper>
  );
}

export default App;
