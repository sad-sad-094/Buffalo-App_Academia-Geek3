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
  justify-content: center;
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
    font-weight: bold;
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
  justify-content: center;
  align-items: center;
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
    -ms-transform:scale(1.1);
    transform:scale(1.1);
  }`;

export const PhysicalTextContainer5 = styled.div`
  width: 440px;
  height: 80px;
  margin: 190px auto;
  background-color:transparent;
  text-align:center;
`;



//days y las siguientes 14 AGOTO NEW CHANGES

export const DaysConatiner = styled.div`
  display:flex;
  width: 400px;
  height:220px;
  margin: 0rem auto;
  justify-content: center;
  align-items: center;
  background-color:transparent;
`
export const DaysImg = styled.img`
   width: 400px;
  height:220px;
`
export const DaysP=styled.p`
  color:whitesmoke;
  font-weight:lighter;
  margin-top:0px;
  
`
export const DayConte=styled.div`
  display:flex;
  width:250px;
  height:33px;
  background-color:transparent;
  column-gap:30px;
  margin-left:-30px;
 
`
export const DayB3=styled.button`
  border-radius:10px;
  color:whitesmoke;
  font-weight:lighter;
  width:65px;
  height:30px;
  background-color:transparent;
  border: 0.2px solid whitesmoke; 
  cursor: pointer; 
  &:hover {
    border: solid 2px #7cb2e97e; 
  }
  z-index:2;
`
export const EnterDay= styled.input`
width:75%;
height:30px;
margin-top:120px;
margin-left:50px;
border-radius:15px;
background-color:transparent;
border:0.001px solid whitesmoke;
`
export const EnterDay2= styled.input`
width:75%;
height:30px;
margin-top:10px;
margin-left:50px;
border-radius:15px;
background-color:transparent;
border:0.001px solid whitesmoke;
`
export const ButtonDay= styled.button`
width: 30%;
height:30px;
margin: 14px 159px auto;
justify-content: center;
align-items: center;
background-color: transparent;
font-size: 14px;
font-weight: lighter;
color: #FFFFFF;
text-decoration: none;
border:none;
cursor: pointer;
transition:0.3s;
&:hover {
  font-size:15px
}`
//SECOND DAY CODE 15 AGOSTO
export const ButtonF5= styled.button`
width: 75%;
height:35px;
padding: 3px 2px;
margin: 140px 55px auto;
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
}`
export const EnterDay6= styled.input`
width:80px;
height:30px;
margin-top:0px;
margin-left:0px;
border-radius:15px;
background-color:transparent;
border:none;
outline:none;

padding-top:10px;
`
export const TitleVideo= styled.div`
  display:flex;
  margin-left:450px;
  width:30%;
  column-gap:245px;
  background-color:transparent;
`
export const PhysicalP2=styled.p`
  color:whitesmoke;
  font-weight:lighter;
  margin-top:0px;
`
export const TitleVideo1= styled.div`
  display:flex;
  margin-left:50px;
  margin-top:10px;
  border-radius:15px;
  width:340px;
  height:35px;
  column-gap:50px;
  background-color:transparent;
  border: solid 2px #7cb2e97e; 
  &:hover {
    background-color: #2BE7E8;
}

`
export const SetTitle= styled.h1`
  font-size:18px;
  margin-left:5px;
color:whitesmoke;
font-weight:lighter;
margin-top:5px;
`
export const Videos=styled.iframe`
  margin-left:0px;
  width:400px;
  height:215px;
  border:none;
    `
export const SetConatiner = styled.div`
display:flex;
width: 400px;
height:220px;
margin: 0rem auto;
justify-content: center;
align-items: center;
background-color:transparent;
border:none;
`
//other page
export const ResumeConte = styled.div`
display:flex;
width: 400px;
height:220px;
margin: 120px auto;
justify-content: center;
align-items: center;
background-color:#7cb2e97e;
border:none;
color:whitesmoke;
font-weight:lighter;
`
export const Star=styled.img`
  width:20px;
  height:20px;
  border: 1px solid blue;
  border-radius:50%;
  margin-left:3px;
`
export const ButtonResume= styled.button`
width: 75%;
height:37px;
padding: 10px 0px 10px 0px;
margin: 70px 55px auto;
border-radius: 15px;
border: 1px solid #2BE7E8;
justify-content: center;
align-items: center;

background-color: #2BE7E8;
font-size: 18px;
font-weight: bold;
color: #FFFFFF;
text-decoration: none;
cursor: pointer;
transition:0.3s;
&:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}`
//17 agosto miercoles

export const EditImg = styled.img`
  width: 100px;
  height:100px;
  border-radius:50%;
  object-fit:cover;
  background-color:transparent;
`

export const EditConte = styled.div`
width: 100px;
height:140px;
margin-top:-60px;
margin-left:545px;
background-color:transparent;
`
export const EditP=styled.p`
  color:whitesmoke;
  font-weight:lighter;
  width:60px;
  margin-top:100px;
  margin-left:20px;
  background-color:transparent;
  `
  export const EditContain=styled.div`
  display:flex;
  width:250px;
  height:33px;
  background-color:transparent;
  column-gap:30px;
  margin-left:-30px;
  margin-top:90px;
`
export const EditContain2=styled.div`
  display:flex;
  width:350px;
  height:35px;
  background-color:transparent;
  column-gap:5px;
  margin-left:-110px;
  margin-top:90px;
`
export const EnterEdit = styled.input`
  width:80px;
  height:33px;
  margin-left:22px;
  border-radius:15px;
  background-color:rgba(61, 46, 170, 0.6);
  border:none;
  outline:none;
  text-align:end;
  padding-right:5px; 
  ::-webkit-input-placeholder { color: whitesmoke; } 
::-moz-placeholder { color: whitesmoke; } 
`
export const EnterE= styled.input`
padding-left:10px;
width:180%;
height:35px;
margin-top:20px;
margin-left:-110px;
border-radius:15px;
background-color:transparent;
border:0.001px solid whitesmoke;
::-webkit-input-placeholder { color: whitesmoke; } 
::-moz-placeholder { color: whitesmoke; } 
`
export const ImgInput=styled.img`
position:absolute;
  width:29px;
  height:29px;
  left:28px;
  top:2px;
`
export const ConteImg= styled.div`
  position:relative;
`
export const ButtonE= styled.button`
width: 180%;
height:37px;
padding: -15px 0px 10px 0px;
margin-left: -110px ;
margin-top:190px;
border-radius: 15px;
border: 1px solid #2BE7E8;
justify-content: center;
align-items: center;
background-color: #2BE7E8;
font-size: 18px;
font-weight: bold;
color: #FFFFFF;
text-decoration: none;
cursor: pointer;
transition:0.3s;
&:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}`