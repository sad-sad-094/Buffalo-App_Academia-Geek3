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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
`;

export const UserHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 15%;
  justify-content: space-between;
  align-items: center;
  background-color: #2E3562;
  padding: 1rem 3rem;

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 18px;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export const HorizontalCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 1rem auto;
`;

export const CatCards = styled.div`
  display: flex;
  width: auto;
  padding: 0.1rem 1rem;
  background-color: #2E3562;
  justify-conent: center;
  alig-items: center;
  border: 1px solid #2E3562;
  border-radius: 10px;
`;

export const VerticalCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 1rem auto;
`;

export const Polaroid = styled.div`
  width: 80%;
  background-color: #2E3562;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;

  img {
    width: 100%;
  }
`;

export const PolaroidContainer = styled.div`
  text-align: center;
  padding: 10px 20px;
`;

export const PhysicalDetail = styled.img`
  width: 200px;
  margin: 1rem auto;
`;

export const PhysicalConatiner = styled.div`
  display:flex;
  width: 400px;
  margin: 2rem auto;
  justify-content: center;
  align-items: center;
  background-color:transparent;
`;

export const PhysicalTextContainer = styled.div`
  width: 70%;
  margin: 1rem auto;
  text-align: center;
  justify-content: center;

  p {
    font-weight: bold;
    font-size: 18px
  }
`;

export const PhysicalP = styled.p`

  
`;

export const PhysicalTextContainer2 = styled.div`
  width: 440px;
  height: 80px;
  margin: 130px auto;
  background-color:transparent;
  text-align:center;
`;

export const ButtonF = styled.button`
  width: 80%;
  height:35px;
  padding: 3px 2px;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid #2BE7E8;
  justify-content: center;
  align-items: center;
  background-color: #2BE7E8;
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
  transition:0.3s;

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  `;

export const MainContainerF = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EnterD = styled.input`
  width:50%;
  margin: 0.5rem auto;
  border-radius: 15px;
  padding-left: 2rem;
`;

export const PhysicalTextContainer3 = styled.div`
  width: 150px;
  height: 30px;
  margin: 5px auto;
  background-color:transparent;
  text-align:center;

`;

export const EnterD2 = styled.input`
  width:70px;
  height:20px;
  margin-top:0px;
  margin-left:180px;
`;

export const MaleImg = styled.img`
  width: 7%;
  margin: 1rem auto;
  transition:0.3s;
  
  &:hover {
    -webkit-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
    background-color: #2E3562; 
    border-radius:10px;
    
  }
`;

export const PhysicalTextContainer4 = styled.div`
  width: 190px;
  height: 30px;
  margin: -60px auto;
  background-color:transparent;
  text-align:center;
 
`;

export const SuscriptP = styled.p`
  color:whitesmoke;
  font-weight:lighter;
  font-size:12px;
  margin-top:-12px;
  width: 370px;
  background-color:transparent;
  margin-left:-90px;
  `;

export const EnterD4 = styled.input`
  width:77%;
  height:35px;
  margin-top:105px;
  margin-left:45px;
  border-radius:15px;
  background-color:transparent;
  border:0.001px solid whitesmoke;
  `;

export const ButtonF2 = styled.button`
  width: 80%;
  height:35px;
  padding: 3px 2px;
  margin: 14px 39px auto;
  border-radius: 15px;
  border: 1px solid #2BE7E8;
  justify-content: center;
  align-items: center;
  background-color: #2BE7E8;
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
  transition:0.3s;
  
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }`;

export const PhysicalTextContainer5 = styled.div`
  width: 440px;
  height: 80px;
  margin: 190px auto;
  background-color:transparent;
  text-align:center;
`;

