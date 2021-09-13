import { css } from '@emotion/react';

const curtain = css`
  align-items: center;
  background-color: rgba(0,0,0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const modalContainer = css`
  background-color: white;
  border-radius: 5px;
  box-shadow: black 2px 2px 9px;
  max-height: 80vh;
  max-width: 800px;
  padding: 16px;
`;

const modalHeader = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const modalTitle = css`
  font-size: 20px;
  margin: 0 20px 0 0;
`;
const modalClose = css`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  padding: 0;
`;

const modalContentContainer = css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const styles = {
  curtain,
  modalContainer,
  modalHeader,
  modalTitle,
  modalClose,
  modalContentContainer
};

export default styles;
