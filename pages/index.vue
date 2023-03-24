<script setup>
    import { Icon } from '@iconify/vue';

    const { data: recipes } = await useFetch('/api/recipes')

    async function deleteRecipe(id) {
        var delRec = await useFetch('../api/recipe/' + id, {method: "DELETE"});
        window.location.reload(true);
    }

</script>

<template>
    <div>
        <br><br>
        <!--div v-for="recipe in recipes" :key="recipe.id" class="w-1/4 mx-auto hover:animate-[pulse_0.5s]"-->
        <div v-for="recipe in recipes" :key="recipe.id" class="w-1/4 mx-auto hover:animate-quickPulse">
                <p class="bg-sky-200 shadow-lg hover:brightness-95 hover:drop-shadow-xl py-5 relative">
                    <button name="delRecipe" class="absolute right-1 top-1" @click="$event => deleteRecipe(recipe.id)">
                        <Icon icon="material-symbols:delete-outline" color="red" width="24" height="24" name="scan-delete" class="inline-flex items-end ml-1" />
                    </button>
                    <NuxtLink :to="`recipe/${recipe.id}`">
                        <h2 style="font-weight: bolder; margin-left: 10px;">{{ recipe.name }}</h2>
                        <h3 style="margin-left: 35px;">
                            {{ recipe.description }}
                        </h3>
                    </NuxtLink>
                </p>
            <br><br>
        </div>
    </div>
</template>

