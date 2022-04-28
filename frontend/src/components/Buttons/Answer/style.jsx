import styled from "styled-components";

export default styled.div`
  .answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 27vh;
  }

  .smileyWrong,
  .smileyRight {
    display: none;
    position: absolute;
    left: 93%;
  }

  .answer {
    border-radius: 10px;
    width: 40vh;
    height: 5vh;
    background-color: var(--white-color);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    &:hover {
      font-weight: bold;
      color: var(--white-color);
      background-color: var(--main-color);
    }
  }

  .right.selected {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #78d133;
    color: var(--white-color);
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 3px solid var(--right-answer-border);
    .smileyRight {
      display: block;
    }
  }
  .wrong.selected {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #f70e0e;
    color: var(--white-color);
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 3px solid var(--wrong-answer-border);

    .smileyWrong {
      display: block;
    }
  }
  .none {
    background-color: #b8b5a9;
  }

  .right.selected {
    background-color: green;
  }
  .wrong.selected {
    background-color: #802d00;
  }
  .none {
    background-color: #b8b5a9;
  }
`;
