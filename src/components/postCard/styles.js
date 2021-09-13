import { css } from '@emotion/react';

const container = css`
  border: solid 1px black;
  box-shadow: black 1px 1px 3px;
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  padding: 16px;
`;

const contentContainer = css`
  display: flex;
`;

const leftPane = css`
  border-right: solid 1px black;
  display: flex;
  flex-direction: column;
  min-width: 120px;
`;

const name = css`
  text-align: left;
`;

const rightPane = css`
  padding: 0 16px;
`;

const title = css`
  margin: 0 0 20px 0;
`;

const footer = css`
  display: flex;
  justify-content: space-between;
`;

const navigateButton = css`
  background: none;
  border: none;
  color: blue;
`;

const date = css`
  margin: 0;
`;

const styles = {
  container,
  contentContainer,
  leftPane,
  name,
  rightPane,
  title,
  footer,
  navigateButton,
  date
};

export default styles;
