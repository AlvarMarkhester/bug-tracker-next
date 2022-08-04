import { prisma } from "../lib/prisma";

const ProjectRepo = {
    getProjects: async (session: any) => {
        const result = await prisma.user.findUnique({
            where: {
                email: session?.user?.email!,
            },
            select: {
                projects: true,
            },
        });
        return result;
    },
    createProject: async (body: any, session: any) => {
        const { name } = body;

        const result = await prisma.project.create({
            data: {
                name: name,
                author: { connect: { email: session?.user?.email! } },
            },
        });
        return result;
    },
};
export default ProjectRepo;
