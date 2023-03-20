<script setup>

    //Handle the form submit
    const createRecipe = async (fields) => {
        await new Promise((r) => setTimeout(r, 1000))
        //alert(JSON.stringify(fields))
        const {data: recipe} = await useFetch('/api/recipe/603ed8635049205e0cff52c0', {
            method: 'POST',
            body: fields
        })
        //alert(JSON.stringify(recipe.value.recipe, null, 4))
        const router = useRouter();
        router.push({
           path: '../' + recipe.value.recipe.id
            //path: '../../recipes' 
        });
    }
</script>

<template>
    <div>
        <div class="mx-auto w-1/2 p-5 shadow-lg rounded-3xl border-black bg-sky-100 my-10">
            <FormKit type="form" @submit="createRecipe" class="bg-cyan-100" submit-label="Upload Recipe" :submit-attrs="{'prefix-icon':'upload'}"  >
                <FormKit type="text" name="name" id="name" label="Name" input-class="rounded-md bg-white" />
                <FormKit type="text" name="description" id="description" label="Description" input-class="rounded-md bg-white" />
                <FormKit type="text" name="instructions" id="instructions" label="Instructions" input-class="rounded-md bg-white" />
                <FormKit type="text" name="image" id="image" label="image" input-class="rounded-md bg-white" />
                <FormKit type="textarea" rows="10" name="ingredients" id="ingredients" label="Ingredients" input-class="rounded-md bg-white" />
            </FormKit>
        </div>
    </div>
</template>