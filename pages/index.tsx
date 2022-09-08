import React from 'react';
import styled from 'styled-components';
import colors from '../colors/colors';
import Nav from '../components/Nav/Nav';
import Image from 'next/image';
import myLogo from '../public/trigTutorLogo.svg';
import river from '../public/river.svg';
import beamMeUp from '../public/beamMeUp.svg';
import warpTime from '../public/warpTime.png';
import disappointedTriangle from '../public/disappointedTriangle.png';
import offTheRails from '../public/offTheRails.png';
import Em from '../components/general/Em/Em';
import breakpoints from '../breakpoints/breakpoints';

const Home = () => {
  return (
    <div>
      <Nav />

      <SiteMission>
        <OpeningMessage>
          Trigonometry is a critical subject. I help students get really good at
          it.
        </OpeningMessage>
      </SiteMission>

      <MyImageWrapper>
        <Image src={river} alt="mountain" width={500} height={250} />
      </MyImageWrapper>

      <SiteMission>
        <br />
        <h2>Difference between Trig and Pre-Calc?</h2>
        <p>
          Changes in highschool curricula over the last few decades have
          confusingly fused both subjects in ways where their definitions can
          vary considerably depending on who and when you ask.
          <br />
          <br />
          Strictly speaking, trigonometry is about triangle {'('}trig{')'}{' '}
          measuring {'(metry)'}.
          <br />
          <br />I{"'"}ll use the term trigonometry{' '}
          <RainbowTextContainer>trigonometry</RainbowTextContainer> loosely to
          include{' '}
          <b>
            {' '}
            all topics in both <BlueText>trigonometry </BlueText> and
            <RedText> pre-calculus</RedText>{' '}
          </b>{' '}
          on this website.
        </p>
        <br />
        <h2>Why learn Trig?</h2>
        <br />
        &emsp; There&apos;s actually still a pretty good reason to learn
        trigonometry in the year 2022. Virtually all of modern mathematics and
        physical sciences are underpinned by things we learn when measuring
        triangles. As bizarre as it sounds, the humble act of measuring
        triangles {'('}with a great deal of care{')'}, has led us to both great
        and terrible things like the microwave oven and the current state of
        social media.
        <br /> <br />
        &emsp; If you&apos;re skeptical about my claim, that is entirely
        appropriate. After <em>years </em> of studying and teaching
        trigonometry, that the dinky {"'"}lil shape is some outrageously
        powerful engine of mathematics still feels, way deep down in my bones,{' '}
        <Em>flippin&apos; weird</Em>. For all the complexity present in the
        modern world and the increasingly intricate and specialized trees of
        math and science, it feels like triangles should no longer be relevant
        much less powerful.
        {/* <br /> <br /> */}
        {/* &emsp; Nowadays with smartphones, google translate, and backflipping,
        robots some of our technology is borderline Star Trekian. Maybe one day
        our knowledge of trianlges will power warp-drive engines and
        teleportation beams. */}
        {/* <MyImageWrapper>
          <Image
            src={beamMeUp}
            alt="beam me up image"
            width={500}
            height={500}
          />
        </MyImageWrapper> */}
        <br /> <br />
        {/* &emsp; Highschool students, after studying Algebra and Geometry are
        already mathematically sophisticated. They can do crazy things that down
        to playing with a basic 3 sided shape we understood well in preschool.
        With a great deal of care. Learning this would be a huge let down. We
        collide with another civilization, and the most interesting information
        they can give us is about something already incredibly familiar. Our
        dissappointment would be immeasurable and our days ruined.
        <br /> <br />
        &emsp; If in the distant future, humans approach a primitave group of
        aliens on the far-flung arm of some distant galaxy, I won&apos;t hold it
        against them if they are dissapointed to find so much of our
        mind-bendingly awesome technology based on such an undeniably dinky
        shape.
        <br /> <br />
        &emsp;Nonetheless, the quaint yet powerful triangle paves the way for
        understanding everything from what will happen when two galaxies
        collide, to why certain combinations of musical notes sound good
        together, to how a machine thousands of kilometers away can relay to
        your screen the text you are reading in this very sentence.
        <br /> <br /> */}
        {/* &emsp; To think that so much of our modern society runs on triangles is
        a little strange. */}
        {/* <br /> <br />  */}I mean look at it. Take a quick glance.
        What&apos;s to understand even?
        <MyImageWrapper>
          <Image
            src={disappointedTriangle}
            alt="dissapointed triangle"
            width={350}
            height={350}
          />
        </MyImageWrapper>
        <br /> <br />
        Turns out, quite a lot.
        <br />
        <br />
        Triangles, as simple as they appear, contain a wealth of information.
        Boiled down, triangles are comprised of{' '}
        <Em>6 essential pieces of information</Em>.
        <ul>
          <li> 3 side lengths</li>
          <li>3 angles</li>
        </ul>
        With these you have a triangle{"'"}s fingerprint. Out of all the
        infinite possible triangles that can exist, no other triangle will have
        the same 6 properties as any other.
        <br /> <br />
        Trigonometry comes in 4 parts:
        <ul>
          <li>
            First - Finding these 6 properties of a triangle by measuring them
          </li>
          <li>
            Second - Finding these 6 properties without having to measure so
            much.
          </li>
          <li>
            Third - Spraying out a never-ending firehose of triangles to create
            squiggles or {'"waves"'}.
          </li>
          <li>
            Fourth - Finding out that most of life{"'"}s problems can be solved
            with a sufficient number of these squiggly, never-ending streams of
            triangles.
          </li>
        </ul>
        Each part builds on top of the one before it and gets a little trickier
        than the last one. You definitely want to avoid moving on to another
        part before mastering the previous one. But don{"'"}t worry, with enough
        practice you{"'"}ll get the hang of it.
        <br /> <br />
        Trigonometry already requires you to develop a lot of practical skills
        early on in the first two parts. Triangles are just really nifty like
        that particularly for things involving engineering or design.
        <br /> <br />
        As if that wasn{"'"}t good enough, all of the sudden, trigonometry
        begins to unleash its true power when the squiggles start getting
        involved. It{"'"}s awesome. It{"'"}s an experience.{' '}
        <Em> It{"'"}ll totally blow your mind. </Em>
        <br />
        <br />
        Once you get to the fourth part of trig there is nearly endless amounts
        of stuff to do and learn. You can easily keep studying it throughout
        undergraduate level mathematics and physics.
        <hr />
        {/* <h1>To all the trig haters</h1> */}
        {/* &emsp; You are not alone. When it comes up in conversation that I teach
        math, the most common response I get is &apos; neat, how about the
        weather today? &apos; or something like that. But the second most common
        response is a person confiding in me that they are terrible at math and
        avoid it like the plague. So, I ask them if there was ever a time they
        enjoyed math. Answers vary, but there is no other subject that kills
        people&apos;s math aspirations like trigonometry. I help students
        demystify trigonometry and it&apos;s extension pre-calculus. These
        subjects can and ought be mastered by all highschool students, despite
        their infamy as a graveyard for so many student&apos;s love of math. */}
        <br></br>
        <br></br>
        <h2>Why tutor trig?</h2>
        &emsp; Having taught virtually every core math subject to hundreds of
        students in grades 6-12, trigonometry stands out to me as one of the
        thorniest, most generally misunderstood subjects. When people find out
        that I teach math, very often they confide to me they were terrible at
        math in school and have avoided it like a plague ever since. And, very
        often, they point to trigonometry, as{' '}
        <Em>the class where math went off the rails for them. </Em>
        <br></br>
        <br></br>
        &emsp; There are a lot of good reasons students and teachers struggle
        with trig in the classroom. Learning and teaching trigonometry can be
        jarring and confusing because it poses challenges often very unlike what
        students have experienced previously in geometry and algebra.
        <br /> <br />
        <MyImageWrapper>
          <Image src={offTheRails} alt="warpTime" width={350} height={350} />
        </MyImageWrapper>
        <br />
        <br />
        &emsp; A rapid pile-on of a large number of math skills and ideas both
        new and old in many trigonometry classes can make the learning curve
        look more like a cliff. Too often students are left with a murky,
        mysterious, and dissatisfying view of the subject as a whole.
        <br /> <br />
        &emsp; A few <Em>core ideas </Em>, <Em>skills</Em>, and{' '}
        <Em> best practices</Em> can carve this mysterious murk into something
        that is actually pretty clear and intuitive. I help students reach a
        point where they can not only survive these subjects, but master them,
        creating a solid foundation for calculus and beyond.
        <br /> <br />
      </SiteMission>
    </div>
  );
};

const MyImageWrapper = styled.div`
  /* width: 100%; */
  width: fit-content;
  display: flex;
  justify-content: center;

  @media${breakpoints.tabletAndUp} {
    border-radius: 0% 0% 0px 0px;
    margin: auto;
  }

  overflow: hidden;
`;

const OpeningMessage = styled.div`
  border-radius: 4px;
  font-size: 1.5rem;
  border-radius: 8px;
  color: ${colors.gray_mid};
  padding: 20px;
  max-width: 400px;
  margin: auto;
`;

const RainbowTextContainer = styled.div`
  display: inline;
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  ); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(
    right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  ); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(
    right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  ); /* For Firefox 3.6 to 15 */
  background: linear-gradient(
    to right,
    ${colors.blue},
    ${colors.red},
    ${colors.blue},
    ${colors.red}
  ); /* Standard syntax (must be last) */
  background-size: 300%;
  background-position: left;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: 1.5rem;
`;

const SiteMission = styled.div`
  max-width: 700px;
  padding-top: 0px;
  margin: auto;
  font-size: 1.25rem;
  padding-left: 16px;
  padding-right: 8px;
  line-height: 1.8rem;
  font-size: 1.35rem;
  color: ${colors.black};
  background-color: ${colors.white};
  & b {
    color: ${colors.black};
  }
`;

const NotaBene = styled.div`
  background-color: ${colors.black};
  padding: 16px;
  border-radius: 8px;
  color: ${colors.white};
`;

const BlueText = styled.div`
  display: inline;
  color: ${colors.blue};
`;

const RedText = styled(BlueText)`
  color: ${colors.red};
`;

export default Home;
