<script setup>

    const route = useRoute();
    const id = route.params.id;
    const { data: recipe } = await useFetch('/api/recipe/' + id);

    //Handle the form submit
    const createRecipe = async (fields) => {
        await new Promise((r) => setTimeout(r, 1000))
        //alert(JSON.stringify(fields))
        const {data: recipe} = await useFetch('/api/recipe/' + id, {
            method: 'PUT',
            body: fields
        })
        const router = useRouter();
        router.push({
           path: '../' + id
        });
    }
</script>

<template>
    <div>
        <div class="mx-auto w-1/2 p-5 shadow-lg rounded-3xl border-black bg-sky-100 my-10">
            <FormKit type="form" @submit="createRecipe" class="bg-cyan-100" submit-label="Update Recipe" :submit-attrs="{'prefix-icon':'fileDoc'}"  >
                <FormKit type="text" name="name" id="name" label="Name" :value=recipe.name input-class="rounded-md bg-white" />
                <FormKit type="text" name="description" id="description" label="Description" :value=recipe.description input-class="rounded-md bg-white" />
                <FormKit type="text" name="instructions" id="instructions" label="Instructions" :value=recipe.instructions input-class="rounded-md bg-white" />
                <FormKit type="text" name="image" id="image" label="image" :value=recipe.image input-class="rounded-md bg-white" />
                <FormKit type="textarea" rows="10" name="ingredients" id="ingredients" label="Ingredients" input-class="rounded-md bg-white" />
            </FormKit>
        </div>
    </div>
</template>