import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
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
    if (event.req.method === "PUT")
    {
      const {name} = await readBody(event);
      var myName = name + " and RudyTwo";
      return {myName};
    }
})