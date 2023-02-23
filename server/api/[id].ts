import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    //const body = await readBody(event);
    const id = getRouterParam(event, 'id');
    await prisma.$connect();

    if (event.req.method === "GET")
    {
        const Recipe = await prisma.recipes.findUnique({
          where: {
            id: id,
          }, 
        });
        return Recipe;
    }
    //return {body};
})