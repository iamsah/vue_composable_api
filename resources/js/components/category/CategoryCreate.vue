<template>
    <div class="text text-warning" v-if="errors !== ''">
        {{ errors }}
    </div>
    <form @submit.prevent="saveCategory">
        <table>
            <tr>
                <th><label for="title">Title</label></th>
                <td><input type="text" name="title" id="title" v-model="form.title"></td>
            </tr>
            <tr>
                <th><label for="slug">Slug</label></th>
                <td><input type="text" name="slug" id="slug" v-model="form.slug"></td>
            </tr>
            <tr>
                <th><label for="description">Description</label></th>
                <td><input type="text" name="description" id="description" v-model="form.description"></td>
            </tr>
            <tr>
                <td colspan="2"><button type="submit" class="btn btn-success">Save</button></td>
            </tr>
        </table>
    </form>
</template>
<script>
import { reactive } from 'vue';
import { useCategories } from './../../composables/categories';
export default {
    setup() {
        const { errors, storeCategory } = useCategories();

        const form = reactive({
            'title': '',
            'slug': '',
            'description': ''
        });

        const saveCategory = async () => {
            await storeCategory({ ...form })
        };

        return {
            form,
            errors,
            saveCategory
        }
    }
}

</script>