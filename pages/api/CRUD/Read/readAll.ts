import prisma from '../../../../lib/prisma';

export default async function handler(req: any, res: any) {
  // let { sessionByDateTime } = req.query;
  // sessionByDateTime = new Date(JSON.parse(sessionByDateTime));
  if (req.method === 'GET') {
    const allSessions = await prisma.session.findMany();
    res.status(200).json({ reservedSessions: allSessions });
    // let matchingSession;
    // matchingSession = await prisma.session.findUnique({
    //   where: {
    //     meetTime: sessionByDateTime,
    //   },
    // });
    // if (matchingSession) {
    //   console.log('match! ', matchingSession.meetTime, sessionByDateTime);
    //   res.status(200).json({ match: true, userId: matchingSession.studentId });
    // } else {
    //   res.status(200).json({ match: false, userId: null });
    // }
  }
}
