import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    await prisma.$connect();

    //GET SINGLE RECIPE FOR VIEWING METHOD
    if (event.req.method === "GET")
    {
        const Recipe = await prisma.recipes.findUnique({
          where: {
            id: id,
          }, 
        });
        return Recipe;
    }

    //NEW RECIPE METHOD
    if (event.req.method === "POST")
    {
      const body = await readBody(event);

      //Get the information to be written to the database
      const {name} = await readBody(event);
      const {description} = await readBody(event);
      const {instructions} = await readBody(event);
      const {ingredients} = await readBody(event);
      const {image} = await readBody(event);
      
      //Write to the database
      await prisma.recipes.create({
        data: {
          name: name,
          description: description,
          instructions: instructions,
          image: image,
          v: 0,
          ingredients: ingredients
        },
      })

      return {body};
    }

    //EDIT RECIPE METHOD
    if (event.req.method === "PUT")
    {
      const body = await readBody(event);

      //Get the information to be written to the database
      const {name} = await readBody(event);
      const {description} = await readBody(event);
      const {instructions} = await readBody(event);
      const {ingredients} = await readBody(event);
      const {image} = await readBody(event);
      
      //Write to the database
      await prisma.recipes.create({
        data: {
          name: name,
          description: description,
          instructions: instructions,
          image: image,
          v: 0,
          ingredients: ingredients
        },
      })

      return {body};
    }

    //GET SINGLE RECIPE FOR VIEWING METHOD
  if (event.req.method === "DELELE")
    {
        const Recipe = await prisma.recipes.delete({
          where: {
            id: id,
          }, 
        });
        return Recipe;
    }

})