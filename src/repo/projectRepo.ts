import { prisma } from "../lib/prisma";

const ProjectRepo = {
    getProjects: (session: any) => {
        const result = prisma.user.findUnique({
            where: {
                email: session?.user?.email!,
            },
            select: {
                projects: true,
            },
        });
        return result;
    },
    createProject: (body: any, session: any) => {
        const { name } = body;

        const result = prisma.project.create({
            data: {
                name: name,
                author: { connect: { email: session?.user?.email! } },
            },
        });
        return result;
    },
};
export default ProjectRepo;
