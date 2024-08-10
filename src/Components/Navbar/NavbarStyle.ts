import styled from "styled-components";

export const NavbarStyle = styled.div`
  padding: 12px 48px;
  border-bottom: 1px solid green;

  .logoContainer {
    gap: 8px;
  }

  .navLinksContainer {
    gap: 16px;

    .navLinks {
      ul {
        display: flex;
        gap: 16px;
        list-style: none;

        li {
          cursor: pointer;
        }
      }
    }
  }

  .buttonContainer {
  gap: 16px;

  button {
  padding: 4px 48px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  height: 40px;
  }

  .loginBtn {
  border: 1px solid #068353;
  color: #068353;
  background-color: #fff;
  }
  .signUpBtn {
  background-color: #068353;
  color: #fff;
  }
  }
`;
