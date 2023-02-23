import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async event => {
    await prisma.$connect();

    if (event.req.method === "GET")
    {
        const allRecipes = await prisma.recipes.findMany({
            orderBy: [
                {name: 'asc',}
            ]
        });
        return allRecipes;
    }
})