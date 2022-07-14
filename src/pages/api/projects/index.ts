import { prisma } from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '../auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions)

    const result = await prisma.user.findUnique({
        where: {
            email: session?.user?.email!
        },
        select: {
            projects: true
        }
    });
    res.json(result);
  }