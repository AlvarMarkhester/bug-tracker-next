import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '../auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import ProjectRepo from '../../../repo/projectRepo'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions)
    switch (req.method) {
        case "GET":
            const result = await ProjectRepo.getProjects(session)
            res.json(result)
            break;
        default:
            break;
    }
}