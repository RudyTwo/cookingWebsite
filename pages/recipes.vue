<script setup>
    const { data: recipes } = await useFetch('/api/recipes')
</script>

<template>
    <div>
        <br><br>
        <div v-for="recipe in recipes" :key="recipe.id" class="w-1/4 mx-auto hover:animate-[pulse_0.5s]">
            <NuxtLink :to="`recipe/${recipe.id}`">
                <p class="bg-sky-200 shadow-lg hover:brightness-95 hover:drop-shadow-xl py-5 ">
                    <h2 style="font-weight: bolder; margin-left: 10px;">{{ recipe.name }}</h2>
                    <h3 style="margin-left: 35px;">
                        {{ recipe.description }}
                    </h3>
                </p>
            </NuxtLink>
            <br><br>
        </div>
    </div>
</template>
