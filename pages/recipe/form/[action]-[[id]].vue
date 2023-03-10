<script setup>
    const route = useRoute();
    const action = route.params.action;
    const id = route.params.id;

    const {data: recipe} = await useFetch('/api/recipe/' + id);
</script>

<template>
    <div>
        <h2>action: {{ action }}</h2><br>
        <h2>id: {{ id }}</h2>
        <h2 v-if="recipe != null">recipe.name: {{ recipe.name }}</h2>
    </div>
</template>