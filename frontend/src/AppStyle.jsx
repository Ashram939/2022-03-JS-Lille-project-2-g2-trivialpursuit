import styled from "styled-components";

export default styled.body`
  --main-color: #13293e;
  --back-color: rgba(77, 4, 195, 0.5);
  --white-color: #e8f0ed;

  main {
    height: 70vh;
    display: flex;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--back-color);
  width: 100vw;
  min-height: 100vh;
  background-image: url("../src/assets/pictures/background-image.svg");
  background-size: 100%;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Arial, Helvetica, sans-serif;
  }
  p {
    font-size: 1em;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.8em;
  }
  h4 {
    font-size: 1.6em;
  }
  h5 {
    font-size: 1.5em;
  }
  h6 {
    font-size: 1.2em;
  }
`;
