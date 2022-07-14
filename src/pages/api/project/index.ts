import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await unstable_getServerSession(req, res, authOptions);
    const { name } = req.body;

    const result = await prisma.project.create({
        data: {
            name: name,
            author: { connect: { email: session?.user?.email! } },
        },
    });
    res.json(result);
}
