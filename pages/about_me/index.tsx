import React from 'react';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';
import colors from '../../colors/colors';
import Image from 'next/image';
import Link from 'next/link';
import LinkARoo from '../../components/general/LinkARoo/LinkARoo';
import breakpoints from '../../breakpoints/breakpoints';

const about_me = () => {
  return (
    <div>
      <Nav />

      <Wrapper>
        <AboutMeText>
            For more than 7 years I have taught math, physics, and programming
          courses. I have worked with hundreds of students in grades 6 to 12. I
          also tutor undergraduate students in introductory physics and math
          courses.
          <br /> <br />
          For me, math is best learned with lots of visuals, practice,
          questions, and pauses for thought . So, I make every effort to
          incorporate those things into my teaching.
          <br />
          <br />
          <AboutBanner>
            <MyImageWrapper>
              <MyImage
                src="/about_photo.jpg"
                alt="photo of me"
                height={200}
                width={200}
              />
            </MyImageWrapper>

            <ContactInfo>
              <a type="email"> forrest@trig-tutor.com </a>
            </ContactInfo>

            <p>Don&apos;t hesitate to reach out! I check my email daily.</p>
          </AboutBanner>
          <br />
          <br />
          <b> math courses taught: </b>
          <CourseList>
            <li>pre-algebra</li>
            <li>algebra 1</li>
            <li>algebra 2</li>
            <li>geometry</li>
            <li>trigonometry &amp; precalculus</li>
            <li>probability &amp; statistics</li>
          </CourseList>
          <b> non-math courses taught: </b>
          <CourseList>
            <li>introduction to programming</li>
            <li>introduction to JavaScript</li>
            <li>animation with JavaScript</li>
            <li>highschool physics</li>
            <li>english as a second language</li>
          </CourseList>
          <b> undergraduate courses tutored: </b>
          <CourseList>
            <li>physics 101</li>
            <li>newtonian mechanics</li>
            <li>calculus</li>
          </CourseList>
          <b>education</b>
          <CourseList>
            <li>
              I hold a bachelor’s degree in physics with minors in mathematics
              and rhetoric from Bates College.{' '}
              <a href="https://drive.google.com/file/d/1NT0I81oToID3GDm3-nQNv0i50zcWQSDM/view?usp=sharing">
                {' '}
                My thesis{' '}
              </a>
              was a theoretical approach to understand advances in artificial
              leaf technology 🍃 .{' '}
            </li>
          </CourseList>
        </AboutMeText>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  font-size: 1.25rem;
  padding: none;
  background-color: ${colors.white};
  /* padding-bottom: 40px; */
`;

const ContactInfo = styled.div`
  background-color: inherit;
  & a {
    background-color: inherit;
    color: ${colors.white};
  }
`;

const DarkBanner = styled.div`
  background-color: ${colors.black};
  height: 100px;
`;

const MyImage = styled(Image)`
  border-radius: 50%;
  background-color: inherit;
`;

const MyImageWrapper = styled.div`
  background-color: inherit;
  padding: 20px;
`;

const AboutBanner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.black};
  color: ${colors.black};
  /* border-bottom: 2px solid ${colors.black}; */
  border-left: none;
  border-right: none;
  padding: 16px;
  padding-top: 32px;

  margin: -16px;
  @media ${breakpoints.tabletAndUp} {
    margin: -16px;
    border-radius: 8px;
  }
  & p {
    background-color: inherit;
    color: ${colors.white};
  }
`;

const LightLi = styled.li`
  color: ${colors.gray_light};
`;

// const LinkARoo = styled.a`
//   color: ${colors.purpleBlue};
//   text-decoration: underline;
// `;

const AboutMeText = styled.div`
  max-width: 700px;
  padding-top: 32px;
  margin: auto;
  font-size: 1.25rem;
  padding-left: 16px;
  padding-right: 8px;
  line-height: 2rem;
  color: ${colors.black};
  background-color: inherit;

  & ul li {
    color: ${colors.black};
    font-weight: 400;
  }
`;

const CourseList = styled.ul`
  list-style: none;
`;

export default about_me;
