// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   console.log('the api is happening for stripe');
//   if (req.method === 'POST') {
//     try {

//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: '{{price_1L47VXAu4BvCeixjPt01XpHL}}',
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const orderInfo = req.query.queryOrderInfo;

      const orderedSessionsString = orderInfo.split('--')[1];
      const orderedSesssions = await JSON.parse(orderedSessionsString);
      orderedSesssions.forEach((session) => (session = new Date(session)));

      // console.log(
      //   'orderedSessions: ',
      //   orderedSesssions,
      //   typeof orderedSesssions
      // );

      const quantity = orderedSesssions.length || 0;

      let description = '';
      orderedSesssions.forEach(
        (session, index) =>
          (description =
            description +
            ` (${index + 1}) ` +
            new Date(session).toLocaleDateString('en-US', {
              hour: 'numeric',
            }))
      );

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            // price: process.env.PRICE_ID,
            quantity: quantity,
            currency: 'usd',
            amount: 2800,
            name: '45 min session',
            description: description,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/successfully_booked?orderInfo=${orderInfo}`,
        cancel_url: `${req.headers.origin}/book/?canceled=true`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
