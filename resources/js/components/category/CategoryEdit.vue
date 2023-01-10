<template>
    <div class="text text-warning" v-if="errors !== ''">
        {{ errors }}
    </div>
    <form @submit.prevent="saveCategory">
        <table>
            <tr>
                <th><label for="title">Title</label></th>
                <td><input type="text" name="title" id="title" v-model="category.title"></td>
            </tr>
            <tr>
                <th><label for="slug">Slug</label></th>
                <td><input type="text" name="slug" id="slug" v-model="category.slug"></td>
            </tr>
            <tr>
                <th><label for="description">Description</label></th>
                <td><input type="text" name="description" id="description" v-model="category.description"></td>
            </tr>
            <tr>
                <td colspan="2"><button type="submit" class="btn btn-success">Save</button></td>
            </tr>
        </table>
    </form>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { useCategories } from './../../composables/categories';
export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props) {


        const { errors, category, getCategory, updateCategory } = useCategories();

        const saveCategory = async () => {
            await updateCategory(props.id)
        };

        onMounted(getCategory(props.id))
        return {
            errors,
            category,
            saveCategory
        }
    }
}

</script>