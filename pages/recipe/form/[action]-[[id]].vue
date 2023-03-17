<script setup>
    const route = useRoute();
    const action = route.params.action;
    const id = route.params.id;

    //const {data: recipe} = await useFetch('/api/recipe/' + id);

    //Handle the form submit
    const createRecipe = async (fields) => {
        await new Promise((r) => setTimeout(r, 1000))
        //alert(JSON.stringify(fields))
        const {data} = await useFetch('/api/recipe/603ed8635049205e0cff52c0', {
            method: 'POST',
            body: fields
        })
        alert(data)
    }
</script>

<template>
    <div>
        <!--div>
            <h2>action: {{ action }}</h2><br>
            <h2>id: {{ id }}</h2>
            <h2 v-if="recipe != null">recipe.name: {{ recipe.name }}</h2><br><br>
        </div-->
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