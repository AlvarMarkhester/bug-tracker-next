import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import ProjectRepo from "../../../repo/projectRepo";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await unstable_getServerSession(req, res, authOptions);
    switch (req.method) {
        case "POST":
            const result = ProjectRepo.createProject(req.body, session)
            res.send(result)
            break;
        default:
            break;
    }
}
