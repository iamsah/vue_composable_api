import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useCategories = () => {
    const categories = ref([]);
    const category = ref([]);
    const router = useRouter();
    const errors = ref("");

    const getCategories = async () => {
        let response = await axios.get("/api/categories");
        categories.value = response.data.data;
    };

    const getCategory = async (id) => {
        let response = await axios.get("/api/categories/" + id);
        category.value = response.data.data;
    };

    const storeCategory = async (data) => {
        try {
            await axios.post("/api/categories", data);
            await router.push({ name: "category.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };
    const updateCategory = async (id) => {
        try {
            await axios.put("/api/categories/"+id, category.value);
            await router.push({ name: "category.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };
    const destroyCategory = async (id) => {
        await axios.delete("/api/categories/" + id);
    };

    return {
        categories,
        category,
        errors,
        getCategories,
        getCategory,
        storeCategory,
        updateCategory,
        destroyCategory,
    };
};
