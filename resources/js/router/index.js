import { createRouter, createWebHistory } from "vue-router";

import CategoryIndex from "../components/category/CategoryIndex.vue";
import CategoryCreate from "../components/category/CategoryCreate.vue";
import CategoryEdit from "../components/category/CategoryEdit.vue";

const routes = [
    {
        path: "/home",
        name: "category.index",
        component: CategoryIndex,
    },
    {
        path: "/category/create",
        name: "category.create",
        component: CategoryCreate,
    },
    {
        path: "/category/:id/edit",
        name: "category.edit",
        component: CategoryEdit,
        props: true,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
