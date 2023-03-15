<script setup>
    const route = useRoute();
    const action = route.params.action;
    const id = route.params.id;

    const {data: recipe} = await useFetch('/api/recipe/' + id);

    //Handle the form submit
    const createRecipe = async (fields) => {
        await new Promise((r) => setTimeout(r, 1000))
        alert(JSON.stringify(fields))
    }
</script>

<template>
    <div>
        <!--div>
            <h2>action: {{ action }}</h2><br>
            <h2>id: {{ id }}</h2>
            <h2 v-if="recipe != null">recipe.name: {{ recipe.name }}</h2><br><br>
        </div-->
        <div class="mx-auto w-1/2 p-5 shadow-lg rounded-3xl border-black bg-sky-400 my-10">
            <FormKit type="form" @submit="createRecipe" class="bg-cyan-100" submit-label="Upload Recipe" :submit-attrs="{'suffix-icon':'upload', 'inputClass':'bg-red rounded-lg'}"  >
                <FormKit type="text" name="name" id="name" label="Name" input-class="drop-shadow-md w-full h-8 my-3 px-3 rounded-md" />
                <FormKit type="text" name="description" id="description" label="Description" input-class="drop-shadow-md w-full h-8 my-3 px-3 rounded-md" />
                <FormKit type="text" name="instructions" id="instructions" label="Instructions" input-class="drop-shadow-md w-full h-8 my-3 px-3 rounded-md" />
                <FormKit type="textarea" rows="10" name="ingredients" id="ingredients" label="Ingredients" input-class="w-1/2 drop-shadow-md w-full my-3 px-3 rounded-md" />
            </FormKit>
        </div>
    </div>
</template>