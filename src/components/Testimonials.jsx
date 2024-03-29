import React, { useState } from 'react';
import styled from 'styled-components';
import prevArrow from '../images/icons/prev-arrow.svg';
import nextArrow from '../images/icons/next-arrow.svg';

const ClientTestimonials = [
  {
    id: 1,
    quote: 'Pamela is a special lady who cared for my dad during the last few weeks of his life. Dad was always very independent and self-sufficient, so when his condition deteriorated he resented having to be looked after. Being on full time oxygen with catheter and waning strength, Pamela coaxed him to eat, clean and stay positive. She helped him through very dark moments and gave him the strength to live properly until the inevitable end. There’s a photo that shows them both smiling, a testament to a lovely lady from a tough and gruff man in his twilight days.',
    name: 'Peter',
  },
  {
    id: 2,
    quote: 'I wish to express my deep appreciation for your sterling help regarding the situation last night. You helped resolve the problem within minutes and I will highly recommend you and the HFN Agency and staff for the dedication and professional work and caring attitude displayed. Doctor Stodel saw Jenny yesterday and her regular Doctor saw her this morning. Her condition has worsened. She is comfortable and in no pain. Frances is with Jenny and being exceptionally caring. I suggest we carry on the same until Jenny passes away.',
    name: 'Prady',
  },
  {
    id: 3,
    quote: 'HFN and especially Karen Wienand needs special mention. Karen was flexible and accommodated several schedule changes around my dad’s condition. There was formal paperwork to be done, but it was never Karen’s focal point and I appreciated that tremendously. Dad never wanted help from anyone, but Karen and the carers from HFN provided the minimum that dad was comfortable with. Karen’s advice and guidance assisted me greatly during a difficult time, particularly because they were in Cape Town and I live in Durban. We managed to keep Dad comfortable and safe until he was admitted to hospital for the last time, two days before he passed. Thank you Pamela and Karen, you are a credit to your profession.',
    name: 'Peter',
  },
  {
    id: 4,
    quote: 'I’m very impressed with Crystal. She was a big help and made my breakfast and helped me in and out of the shower. We went food shopping as well and again a great help. Especially when I almost fell she was a strong hand to catch me. I would like to have her tomorrow from 12pm to 6pm and for the rest of my time before my operation.',
    name: 'Hunter',
  },
  {
    id: 5,
    quote: 'Beauty was excellent. She bonded very well with my mom and got on well with the other carer.',
    name: 'Barry',
  },
  {
    id: 6,
    quote: 'It has been 11 years since I signed up with HFN as the agency which would be taking over the care of my daughter. In this time we have come to feel as if we are part of the HFN “family”. The staff really try to fit the carer to the patient, not an easy task at times. The nursing staff are really patient, kind, & helpful, & advice is given in a really caring & professional manner. The carers we have had have been really caring, kind people, willing to learn the way of the household, & any caring methods required by/for the patient. On the whole, very professional. The admin staff are good & extremely helpful when dealing with medical aid matters, which takes a load off my mind - I am extremely grateful to them. I would highly recommend HFN, and I thank them sincerely for all they have done, and are doing, to make our lives a little more comfortable.',
    name: 'Sue',
  },
];

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #daf3ff;
  max-width: 100vw;
  height: 380px;
  margin-top: 20px;

  @media (max-width: 1450px) {
    height: 400px;
  }

  @media (max-width: 1290px) {
    height: 420px;
  }

  @media (max-width: 1250px) {
    height: 450px;
  }

  @media (max-width: 1185px) {
    height: 470px;
  }

  @media (max-width: 1070px) {
    height: 490px;
  }

  @media (max-width: 1060px) {
    height: 400px;
  }

  @media (max-width: 705px) {
    height: 420px;
  }

  @media (max-width: 660px) {
    height: 450px;
  }

  @media (max-width: 645px) {
    height: 460px;
  }
`;

const QuotesContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const QuoteBlock = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px 25px 10px 25px;
  margin: 30px;
  border: solid 2px #eef6ff;
  flex: 0 0 40%;

  @media (max-width: 1240px) {
    margin: 20px;
  }

  @media (max-width: 1060px) {
    flex: 0 0 90%;
  }

  @media (max-width: 970px) {
    flex: 0 0 85%;
  }

  @media (max-width: 730px) {
    flex: 0 0 80%;
  }

  @media (max-width: 615px) {
    max-height: 400px;
    overflow: scroll;
  }

  @media (max-width: 600px) {
    flex: 0 0 75%;
  }
`;

const ArrowButton = styled.img`
  padding: 10px;
  margin: 35px;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  cursor: pointer;
  background-color: #fff;
  z-index: 1;

  &:hover {
    background-color: #fcfcfc;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ClientTestimonials.length - 2 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ClientTestimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const testimonials = ClientTestimonials.slice(currentIndex).map((item) => (
    <QuoteBlock key={item.id}>
      <p>{item.quote}</p>
      <p>{item.name}</p>
    </QuoteBlock>
  ));

  return (
    <Container>
      <ArrowButton onClick={handlePrevClick} src={prevArrow} />
      <QuotesContainer>
        {testimonials}
      </QuotesContainer>
      <ArrowButton onClick={handleNextClick} src={nextArrow}/>
    </Container>
  )
}
