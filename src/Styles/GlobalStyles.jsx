/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import styled from 'styled-components';


export const LandingImg = styled.img`
  width: 30%;
  margin: 1rem auto;
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 60%;
  margin: auto;
`;

export const Button = styled.button`
  width: 70%;
  padding: 3px 2px;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid #2BE7E8;
  justify-conent: center;
  align-items: center;
  background-color: #2BE7E8;
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const BasicContainer = styled.div`
  display:flex;
  width: 70%;
  margin: 2rem auto;
  justify-content: center;
  align-items: center;
`;

export const WelcomeContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: felx-end;

  a {
    text-decoration: underline;
    cursor: pointer;
    font-width: bold;
    color:#ffffff;
  }
`;

export const WelcomeTextContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

export const SingUp = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 90%;
  height: auto;
  padding: 4px 6px;
  margin: 2px auto;
  border: #BFC3FC;
  border-radius: 15px;
  font-size: 14px;
`;

export const GoogleLogo = styled.img`
  width: 20%;
`;
