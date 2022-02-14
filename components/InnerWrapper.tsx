import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  h2 {
    width: 100%;
    margin: 0;
    margin-bottom: 1.5em;
    text-align: center;
    color: var(--overlayHeading);
    transition: color 0.3s;
  }
  .settings {
    font-size: 0.9rem;
  }
  input[type='radio'],
  input[type='checkbox'] {
    opacity: 0;
    position: fixed;
    width: 0;
    &:focus + label {
      border-color: var(--checkIconColor);
      color: var(--checkIconLabel);
    }
    &:checked + label {
      border-color: var(--checkIconColor);
      color: var(--checkIconLabel);
      .circle,
      .square {
        background: var(--checkIconColor);
        border-color: var(--checkIconColor);
      }
    }
    &:checked + label .circle,
    &:checked + label .square {
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5.5 7L12 1' stroke='%23FFF' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
      background-size: 11px;
      background-position: center;
      background-repeat: no-repeat;
      border-color: #39b3ca;
      overflow: visible;
    }
    &[disabled] + label {
      color: #999;
      cursor: default;
    }
  }

  .square,
  .circle {
    background: #fff;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    margin-right: 7px;
    display: inline-block;
    border: 1px solid #bbb;
  }
  .square {
    border-radius: 3px;
  }
  .fieldRow,
  label {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
  .fieldRow {
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .fieldRow + .fieldRow {
    margin-top: 10px;
  }
  h3 {
    margin: 0;
    font-size: 1em;
    padding-top: 1em;
    flex: 0 0 90px;
    font-weight: 700;
    color: var(--formLabelText);
  }
  .option,
  .singleOption {
    border-radius: 4px 0 0 4px;
    flex: 1;
    background: var(--formFieldBg);
    padding: 10px 0 10px 20px;
    label {
      cursor: pointer;
    }
    &:nth-of-type(2) {
      border-radius: 0 4px 4px 0;
      padding-left: 0;
    }
  }

  .singleOption {
    flex: 1;
    border-radius: 4px;
    padding: 10px 20px;
    flex-wrap: wrap;
    .dev-note {
      color: var(--missingField);
    }
  }
  .auth {
    margin: 10px 0px;
    background: white;
    border: none;
    padding: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 1;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    color: #202020;
    border-radius: 10px;
    font-size: 14px;
    svg {
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }
    &[disabled] {
      opacity: 0.6;
      color: var(--disabledButtonColor);
    }
  }
  .data-reset {
    margin-top: 30px;
    background: var(--modalSubsectionBg);
    border: 1px solid var(--modalSubsectionBorder);
    padding: 20px;
    color: var(--modalSubsectionText);
    transition: all 0.3s;
    border-radius: 4px;
    h4 {
      margin: 0;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      color: var(--missingField);
      font-size: 17px;
    }
    svg {
      width: 22px;
      height: 22px;
      margin-right: 10px;
    }
    p {
      margin: 10px 0 10px;
      font-size: 16px;
      font-weight: 400;
      em {
        font-weight: 600;
      }
    }
  }
`;

export default Wrapper;
