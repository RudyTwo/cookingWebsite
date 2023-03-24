<script setup>
    import { Icon } from '@iconify/vue';

    const route = useRoute();
    const id = route.params.id;
    const { data: recipe } = await useFetch('/api/recipe/' + id);
</script>

<template>
    <div>
        <br><br>
        <p class="mx-auto text-center">
            <h1 class="text-amber-800 font-extrabold text-6xl mx-auto">
                <NuxtLink :to="'../'" class="inline-flex">
                    <Icon name="ListAll" icon="fluent-mdl2:backlog-board" color="blue" width="24" height="24" class="inline-flex items-end mr-1 my-3" />
                </NuxtLink>
                <NuxtLink :to="`form/${id}`" class="inline-flex">
                    {{ recipe.name }}
                    <Icon icon="material-symbols:edit" color="green" width="24" height="24" name="scan-delete" class="inline-flex items-end ml-1 my-3"/>
                </NuxtLink>
            </h1> 
            <h3 class="text-lg italic mx-auto my-2">{{ recipe.description }}</h3>
        </p>
        <br>
        <div class="w-1/2 mx-auto flex flex-row">
            <div class="w-1/4 mx-auto bg-blue-300 py-20 px-5 shadow-xl" >
                <p>
                    <h2 class="text-rose-700 font-bold text-xl">Ingredients</h2>
                </p>
                <p v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                    <h2 class="font-bold">{{ ingredient }}</h2>
                </p>
            </div>
            <div class="w-3/4 mx-auto bg-blue-200 shadow-xl py-20 px-10">
                <p>
                    <h2 class="text-rose-700 font-bold text-xl">Instructions</h2>
                </p>
                <p>
                    <h3 style="margin-left: 35px;">
                        <p style="font-style: italic;">{{ recipe.instructions }}</p>
                    </h3>
                </p>
                <br>
                <p>
                    <h2 class="text-rose-700 font-bold text-xl">Image</h2>
                </p>
                <p>
                    <h3 style="margin-left: 35px;">
                        <p style="font-style: italic;">{{ recipe.image }}</p>
                    </h3>
                </p>
            </div>
            <br><br>
        </div>
    </div>
</template>