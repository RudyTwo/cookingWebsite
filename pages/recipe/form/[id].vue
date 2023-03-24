<script setup>
    import {ref} from 'vue';
    import {token} from '@formkit/utils';
    import { Icon } from '@iconify/vue';

    const route = useRoute();
    const id = route.params.id;
    const { data: recipe } = await useFetch('/api/recipe/' + id);

    //Values for Ingredients list
    const values = ref([]);
    const ingredients = ref([token()])

    //Add a new Ingredient to the list
    const addIngredient = () => {
        ingredients.value.push(token());
        console.log(token() + '\ningredients: ' + JSON.stringify(ingredients))
    }

    //Remove Ingredients
    const removeIngredient = (e) => {
        e.preventDefault()
        const key = e.target.getAttribute('data-key')
        console.log([...ingredients.value])
        ingredients.value = ingredients.value.filter(item => item !== key)
        console.log([...ingredients.value])
    }

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
                <FormKit type="list" v-model="values">
                    <FormKit type="text" name="ingredients" label="Ingredient" input-class="rounded-md bg-white"
                        v-for="key in ingredients"
                        :key="key"
                        :id="key"
                        :sections-schema="{
                            suffix: {
                                $el: 'a',
                                attrs: {
                                    class: '$classes.remove',
                                    'data-key': '$id',
                                    href: '#',
                                    onClick: removeIngredient
                                },
                                children: 'Remove'
                            }
                        }"
                    />
                    <button type="button" @click.prevent="addIngredient"><Icon icon="material-symbols:add-box" color="green" width="48" height="48" name="add-box" /></button>
                    <hr>
                </FormKit>
                <!--FormKit type="textarea" rows="10" name="ingredients" id="ingredients" label="Ingredients" :value=recipe.ingredients input-class="rounded-md bg-white" /-->
            </FormKit>
        </div>
    </div>
</template>