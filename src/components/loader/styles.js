import { css, keyframes } from '@emotion/react';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const spinner = css`
  animation: ${spin} 1s ease infinite;
  border-left-color: rgba(128, 255, 0, 1);
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  height: 18px;
  width: 18px;
`;

const styles = {
  spinner,
};

export default styles;
