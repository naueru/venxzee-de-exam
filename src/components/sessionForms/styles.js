import { css } from '@emotion/react';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const label = css`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const input = css`
  font-size: 16px;
  margin-bottom: 8px;
  min-width: 300px;
`;

const submit = css`
  background-color: rgb(89, 75, 255);
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  margin: 20px 0 0 0;
  padding: 4px 8px;
  width: fit-content;
`;

const error = css`
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 4px;
  border: solid 1px red;
  color: red;
  padding: 4px 8px;
  font-weight: 500;
`;

const styles = {
  container,
  label,
  input,
  submit,
  error
};

export default styles;
