import prisma from '../../../lib/prisma';

// const handler = async () => {
//   console.log('handling');
//   const feed = await prisma.session.findMany({
//     include: {
//       student: {
//         select: { name: true },
//       },
//     },
//   });
//   return { feed };
// };

// export default handler;

export default async function handler(req: any, res: any) {
  const feed = await prisma.session.findMany({
    include: {
      student: {
        select: { name: true, email: true },
      },
    },
  });

  res.status(200).json({ feed });
}
