import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await unstable_getServerSession(req, res, authOptions);
    const {
        taskName,
        taskDesc,
        taskPrio,
        taskDeadline,
        taskStatus,
        selectedProject,
    } = req.body;

    const result = await prisma.ticket.create({
        data: {
            name: taskName,
            desc: taskDesc,
            deadline: new Date(taskDeadline), 
            status: taskStatus,
            priority: taskPrio,
            author: { connect: { email: session?.user?.email! } },
            project: { connect: { id: selectedProject } },
        },
    });
    res.json(result);
}
