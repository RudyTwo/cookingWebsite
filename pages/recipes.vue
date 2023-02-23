<script setup>
    const { data: recipes } = await useFetch('/api/recipes')
</script>

<template>
    <div>
        <br><br>
        <div v-for="recipe in recipes" :key="recipe.id" class="w-1/3 mx-auto">
            <!--NuxtLink to="../api/603edbbc4b5f5158f85d11ae"-->
            <NuxtLink :to="`../api/${recipe.id}`">
                <p class="bg-sky-200 shadow-xl" style="padding-top: 20px; padding-bottom: 20px;">
                    <h2 style="font-weight: bolder; margin-left: 10px;">{{ recipe.name }}</h2>
                    <h3 style="margin-left: 35px;">
                        {{ recipe.description }}
                        <p style="font-style: italic;">{{ recipe.instructions }}</p>
                    </h3>
                </p>
            </NuxtLink>
            <br><br>
        </div>
    </div>
</template>
