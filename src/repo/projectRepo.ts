import { prisma } from '../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'



const ProjectRepo = {
    getProjects:  async (req: NextApiRequest, res: NextApiResponse, session: any) => {
        const result = await prisma.user.findUnique({
            where: {
                email: session?.user?.email!
            },
            select: {
                projects: true
            }
        });
        res.json(result);
    },
    createProject:  async (req: NextApiRequest, res: NextApiResponse, session: any) => {
        const { name } = req.body;

        const result = await prisma.project.create({
            data: {
                name: name,
                author: { connect: { email: session?.user?.email! } },
            },
        });
        res.json(result);
    }
}
export default ProjectRepo;