import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import colors from '../../../../colors/colors';
import { useSession, signIn, signOut } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// const public_key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;

// const stripePromise = loadStripe(public_key);

// const handleClick = async () => {
//   // const result = await fetch('/api/CRUD/Read/' + JSON.stringify(timeDate), {
//   //   method: 'GET',
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //   },
//   // });

//   const result = await fetch('/api/CRUD/Read/readAll', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const data = await result.json();

//   // const data = await result.json();
//   // setIsReserved(match.match);
//   // return allSessions
// };

interface PayButtonProps {
  daysToBook: Date[];
}

const price = 28;

const PayButton = ({ daysToBook }: PayButtonProps) => {
  const [publishableKey, setPublishableKey] = useState('');

  useEffect(() => {
    fetch('api/keys', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setPublishableKey(data.publishableKey);
      });
  }, []);

  const { data: session } = useSession();

  if (!publishableKey) {
    return 'Loading...';
  }

  const stripe = loadStripe(publishableKey);

  const bookDays = async (daysToBook: Date[]) => {
    const daysToBookStringified = JSON.stringify(daysToBook);
    console.log(daysToBookStringified);
    const result = await fetch(
      '/api/sessions/week/' +
        daysToBookStringified +
        '--:' +
        session?.user?.email +
        '--:' +
        session?.user?.name,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const json = await result.json();
    console.log('result: ', json);
  };

  const myAction =
    '/api/sessions/checkout_sessions/' + '--' + JSON.stringify(daysToBook);

  const handlePayClick = () => {
    // console.log('handling');
    // localStorage.setItem('timeSlotsSelectedForBooking', JSON.stringify([]));
    // bookDays(daysToBook);
    console.log('payClick');
  };

  if (false) {
    return (
      <WrapperInactive>
        <ButtonCaption>Step 2</ButtonCaption>
        <ButtonAreaInactive>
          Pay ${daysToBook.length * price}
        </ButtonAreaInactive>

        <ButtonCaption></ButtonCaption>
      </WrapperInactive>
    );
  } else {
    return (
      <Wrapper>
        <ButtonCaption></ButtonCaption>

        {/* <ButtonArea onClick={handlePayClick}>Pay</ButtonArea> */}
        <form action={myAction} method="POST">
          <section onClick={handlePayClick}>
            <CheckoutButton type="submit" role="link">
              <CssCreditCard>
                <CreditCardStrip />
              </CssCreditCard>
              ${daysToBook.length * price}
            </CheckoutButton>
          </section>
        </form>
      </Wrapper>
      // <form action="/api/sessions/checkout_sessions/123" method="POST">
      //   <section>
      //     <button type="submit" role="link">
      //       Checkout
      //     </button>
      //   </section>
      //   <style jsx>
      //     {`
      //       section {
      //         background: #ffffff;
      //         display: flex;
      //         flex-direction: column;
      //         width: 400px;
      //         height: 112px;
      //         border-radius: 6px;
      //         justify-content: space-between;
      //       }
      //       button {
      //         height: 36px;
      //         background: #556cd6;
      //         border-radius: 4px;
      //         color: white;
      //         border: 0;
      //         font-weight: 600;
      //         cursor: pointer;
      //         transition: all 0.2s ease;
      //         box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
      //         width: 350px;
      //       }
      //       button:hover {
      //         opacity: 0.8;
      //       }
      //     `}
      //   </style>
      // </form>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
`;

const WrapperInactive = styled(Wrapper)`
  opacity: 0.4;
`;

const ButtonArea = styled.button`
  position: relative;
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  width: 120px;
  flex: 1;
  min-height: 60px;

  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${colors.white};
  cursor: pointer;
  background-color: ${colors.red};
`;

const CheckoutButton = styled.button`
  background-color: ${colors.red};
  border-radius: 8px;
  width: 160px;
  height: 60px;
  color: ${colors.white};
  font-size: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const CssCreditCard = styled.div`
  background-color: ${colors.white};
  height: 30px;
  width: 40px;
  border-radius: 3px;
  position: relative;
`;

const CreditCardStrip = styled.div`
  width: 100%;
  background: linear-gradient(
    to right,
    ${colors.red},
    ${colors.red},
    ${colors.blue},
    ${colors.blue},
    ${colors.blue_light},
    ${colors.blue_light},
    ${colors.blue},
    ${colors.blue},
    ${colors.red},
    ${colors.red}
  );
  background-size: 2000%;

  height: 8px;
  position: absolute;
  top: 8px;

  @keyframes strip-animation {
    0% {
      bacgkround-position: left;
    }
    100% {
      background-position: right;
    }
  }

  animation: strip-animation 5s infinite alternate;
`;

const Price = styled.div`
  position: absolute;
  color: ${colors.blue};
  font-size: 1.25rem;
  bottom: 8px;
  width: 100%;
`;

const ButtonAreaInactive = styled(ButtonArea)`
  cursor: auto;
`;

const LogoImage = styled(Image)`
  background-color: inherit;
`;

const PayLabel = styled.div`
  padding-top: 20px;
  background-color: ${colors.black};
  color: ${colors.white};
  display: flex;
  justify-content: center;
`;

const ButtonCaption = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: ${colors.white};
`;

export default PayButton;
