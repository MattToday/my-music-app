import { styled } from "linaria/react";

export const LoginWrapper = styled.View`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login {
    width: 70%;
  }
  .send-code {
    width: 70%;
    margin-bottom: 20px;
  }
  .qr-wrapper {
    width: 70%;
    padding: 12px;
    box-shadow: 0 0 6px #eee;
  }
  .qr-img {
    width: 100%;
  }
  .qr-text {
    text-align: center;
    color: #666;
    font-size: 24px;
  }
`
