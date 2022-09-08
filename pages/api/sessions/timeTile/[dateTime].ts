import prisma from '../../../../lib/prisma';

export default async function handler(req: any, res: any) {
  console.log(req.query);
  if (req.method === 'GET') {
    let currentUser = await prisma.user.findUnique({
      where: {
        email: 'emaihl',
      },
    });

    const sessions = await prisma.session.findMany({
      include: {
        student: {
          select: { name: true, email: true },
        },
      },
    });

    res.status(200).json({ sessions });
  } else if (req.method === 'POST') {
    const { postInfo } = req.query;
    const daysToBookString = postInfo.split('--:')[0];
    const daysToBook = JSON.parse(daysToBookString);
    const daysToBookasDateObjects = daysToBook.map(
      (string: string | number | Date) => {
        return new Date(string);
      }
    );

    console.log('booking day objects', daysToBookasDateObjects);
    const email = postInfo.split('--:')[1];
    const name = postInfo.split('--:')[2];

    let currentUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!currentUser) {
      //create a user
      currentUser = await prisma.user.create({
        data: {
          email: email,
          name: name,
        },
      });
    }

    // let currentDate = await prisma.session.findUnique({
    //   where: {
    //     meetTime: daysToBook[0],
    //   },
    // });

    if (currentUser && currentUser.id) {
      let id = currentUser.id;
      daysToBookasDateObjects.forEach(async (element: any) => {
        const session = await prisma.session.create({
          data: {
            meetTime: new Date(element),
            studentId: id,
          },
        });
      });
    }

    res.status(200).json({
      status: 'succesfully posted!',
      daysToBook: daysToBook,
      userEmail: email,
      name: name,
    });
    // res.status(204).json({ status: 'succesfully posted!' });
  }
}
