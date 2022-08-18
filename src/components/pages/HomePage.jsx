/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import React, { useEffect } from 'react'
import { CatCards, ColumnContainer, HorizontalCards, MainContainer, Polaroid, PolaroidContainer, UserHeader, VerticalCards } from '../../Styles/GlobalStyles';
import { GrNotification } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function HomePage() {

  const userName = useSelector(state => state.userLogin.name);
  const userPhyData = useSelector(state => state.physicalData.height);
  const navigation = useNavigate()

  useEffect(() => {
    if (!userPhyData) {
      navigation('/physicaldata');
    }
  })

  return (

    <MainContainer>

      <UserHeader>
        <ColumnContainer>
          <h2>Hi!</h2>
          <p>{userName}</p>
        </ColumnContainer>
        <CgProfile style={{ color: '#2BE7E8', fontSize: '26px' }} onClick={() => navigation('/profile')} />
        <GrNotification style={{ color: '#2BE7E8', fontSize: '26px' }} />
      </UserHeader>

      <Carousel style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660521046/BuffaloApp/slider2_jkwixo.jpg"
            alt="Warm up"
          />
          <Carousel.Caption>
            <h3>Warm Up</h3>
            <p>Before training be sure to warm up, give it 5-10 minutes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660521045/BuffaloApp/slider1_wvfqh3.jpg"
            alt="Gain"
          />
          <Carousel.Caption>
            <h3>Gain</h3>
            <p>Build the body you dream with.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660521049/BuffaloApp/slider3_mpurp7.jpg"
            alt="Crossfit"
          />
          <Carousel.Caption>
            <h3>Crossfit</h3>
            <p>Keep your body healthy and fit training.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <HorizontalCards>

        <CatCards style={{cursor: 'pointer'}} onClick={() => navigation('/days')}><p>All Body</p></CatCards>
        <CatCards style={{cursor: 'pointer'}} onClick={() => navigation('/days')}><p>Triceps</p></CatCards>
        <CatCards style={{cursor: 'pointer'}} onClick={() => navigation('/days')}><p>Biceps</p></CatCards>
        <CatCards style={{cursor: 'pointer'}} onClick={() => navigation('/days')}><p>Breast</p></CatCards>
        <CatCards style={{cursor: 'pointer'}} onClick={() => navigation('/days')}><p>Back</p></CatCards>
        <CatCards style={{cursor: 'pointer'}} onClick={() => navigation('/days')}><p>Legs</p></CatCards>

      </HorizontalCards>

      <VerticalCards>

        <Polaroid>
          <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660520454/BuffaloApp/card1_mt0nka.jpg" alt="" />
          <PolaroidContainer>
            <h2>All body training</h2>
            <p>Workout all your body.</p>
          </PolaroidContainer>
        </Polaroid>

        <Polaroid>
          <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660520460/BuffaloApp/card6_srjjlr.jpg" alt="" />
          <PolaroidContainer>
            <h2>Only triceps training</h2>
            <p>Workout your triceps.</p>
          </PolaroidContainer>
        </Polaroid>

        <Polaroid>
          <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660520454/BuffaloApp/card3_fdzrka.jpg" alt="" />
          <PolaroidContainer>
            <h2>Only biceps training</h2>
            <p>Workout your biceps.</p>
          </PolaroidContainer>
        </Polaroid>

        <Polaroid>
          <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660520458/BuffaloApp/card4_mdyvcv.jpg" alt="" />
          <PolaroidContainer>
            <h2>Only breast training</h2>
            <p>Workout your breast.</p>
          </PolaroidContainer>
        </Polaroid>

        <Polaroid>
          <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660520461/BuffaloApp/card5_xaj5yt.jpg" alt="" />
          <PolaroidContainer>
            <h2>Only back training</h2>
            <p>Workout your back.</p>
          </PolaroidContainer>
        </Polaroid>

        <Polaroid>
          <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660520454/BuffaloApp/card2_qko7yy.jpg" alt="" />
          <PolaroidContainer>
            <h2>Only legs training</h2>
            <p>Workout your legs.</p>
          </PolaroidContainer>
        </Polaroid>

      </VerticalCards>

    </MainContainer>

  )

}

export default HomePage;
