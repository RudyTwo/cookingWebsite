import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    await prisma.$connect();

    //GET SINGLE RECIPE FOR VIEWING METHOD
    if (event.node.req.method === "GET")
    {
        const Recipe = await prisma.recipes.findUnique({
          where: {
            id: id,
          }, 
        });
        return Recipe;
    }

    //NEW RECIPE METHOD
    if (event.node.req.method === "POST")
    {
      const body = await readBody(event);

      //Get the information to be written to the database
      const {name} = await readBody(event);
      const {description} = await readBody(event);
      const {instructions} = await readBody(event);
      const {ingredients} = await readBody(event);
      const {image} = await readBody(event);
      
      //Write to the database
      const recipe = await prisma.recipes.create({
        data: {
          name: name,
          description: description,
          instructions: instructions,
          image: image,
          v: 0,
          ingredients: ingredients
        },
      })

      console.log('ID: ' + recipe.id + '\nName: ' + recipe.name)
      return {recipe};
    }

    //EDIT RECIPE METHOD
    if (event.node.req.method === "PUT")
    {
      const body = await readBody(event);

      //Get the information to be written to the database
      const {name} = await readBody(event);
      const {description} = await readBody(event);
      const {instructions} = await readBody(event);
      const {ingredients} = await readBody(event);
      const {image} = await readBody(event);
      
      //Update to the database
      await prisma.recipes.update({
        data: {
          name: name,
          description: description,
          instructions: instructions,
          image: image,
          v: 0,
          ingredients: ingredients
        },
        where: {
          id: id
        },
      })

      return {body};
    }

    //DELETE RECIPE METHOD
  if (event.node.req.method === "DELETE")
    {
      //Testing
      console.log(id + " has been deleted.");

      //Delete the recipe from the database
      await prisma.recipes.delete({
        where: {
          id: id,
        }, 
      });
        return id + " has been deleted.";
    }

})