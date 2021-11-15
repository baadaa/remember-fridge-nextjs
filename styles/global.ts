import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --bodyBg: var(--cyan);
    --cyan: #00a2d9;
    --berry: #b7295a;
    --green: #7ab800;
    --yellow: #f2af00;
    --black: #202020;
    --paleGray: #eee;
    --almostWhite: #f4f4f4;
    --cardLarge: 150px;
    --cardSmall: 140px;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    position: relative;
  }
  body {
    background-color: var(--bodyBg);
    color: #222;
    color: var(--content);
    font-family: "Work sans", sans-serif;
    letter-spacing: -.025em;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    transition: transform .5s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  *, * > * {
    box-sizing: border-box;
  }
  .lightMode {
    --bodyBg: var(--cyan);
    --containerBg: #fff;
    --addButton: var(--green);
    --content: var(--black);
    --settingOverlayBg: #fff;
    --settingsContent: var(--black);
    --navBg: #004f6a;
    --overlayHeading: var(--black);
    --formFieldBg: var(--paleGray);
    --formLabelText: #999;
    --saveButton: var(--green);
    --cancelButton: var(--green);
    --removeButton: var(--berry);
    --removeCancelButton: var(--berry);
    --checkIconColor: var(--cyan);
    --checkIconLabel: var(--black);
    --uncheckedIconLabel: #777;
    --missingField: var(--berry);
    --disabledButtonBg: var(--paleGray);
    --disabledButtonColor: #999;
    --modalSubsectionBg: #fff1f6;
    --modalSubsectionBorder: var(--berry);
    --modalSubsectionText: #333;
    --shoppingListBg: #fff;
    --shoppingListBorder: #e6e6e6;
    --closeButtonStroke: #000;
    --noIconColor: var(--green);
  }

  .darkMode {
    --bodyBg: #000;
    --containerBg: #1b1b1b;
    --addButton: #3f3f3f;
    --content: var(--almostWhite);
    --settingOverlayBg: #1b1b1b;
    --settingsContent: var(--almostWhite);
    --navBg: #3f3f3f;
    --overlayHeading: var(--almostWhite);
    --formFieldBg: #333;
    --formLabelText: #999;
    --saveButton: var(--green);
    --cancelButton: var(--almostWhite);
    --removeButton: var(--berry);
    --removeCancelButton: var(--almostWhite);
    --checkIconColor: var(--cyan);
    --checkIconLabel: var(--almostWhite);
    --uncheckedIconLabel: #777;
    --missingField: var(--yellow);
    --disabledButtonBg: var(--paleGray);
    --disabledButtonColor: #999;
    --modalSubsectionBg: #333;
    --modalSubsectionBorder: var(--yellow);
    --modalSubsectionText: var(--yellow);
    --shoppingListBg: #333;
    --shoppingListBorder: #444;
    --closeButtonStroke: #fff;
    --noIconColor: #fff;
  }

  #root, #__next {
    border: .1px solid transparent;
    position: relative;
  }

  .noscroll {
    overflow: hidden;
  }
`;
