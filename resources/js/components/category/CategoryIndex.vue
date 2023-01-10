<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <router-link :to="{ name: 'category.create' }" class="btn btn-primary text text-white">create
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Slug</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="category in categories" :key="category.id">
                            <tr>
                                <th scope="row">1</th>
                                <td>{{ category.title }}</td>
                                <td>{{ category.slug }}</td>
                                <td>{{ category.description }}</td>
                                <td>
                                    <button @click="deleteCategory(category.id)" class="btn btn-warning">Delete</button>
                                    <router-link :to="{ name: 'category.edit', params: { id: category.id } }"
                                        class="btn btn-primary text text-white">Edit
                                    </router-link>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue'
import { useCategories } from './../../composables/categories'

export default {
    setup() {
        const { categories, getCategories, destroyCategory } = useCategories();

        onMounted(getCategories);

        const deleteCategory = async (id) => {
            if (!window.confirm('Are you sure to delete')) {
                return
            }
            await destroyCategory(id);
            await getCategories();
        }

        return {
            categories,
            deleteCategory,
        }
    }
}
</script>