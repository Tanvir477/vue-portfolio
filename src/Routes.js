import { createWebHistory, createRouter } from "vue-router"
import MainCard from "./components/MainCard.vue" 


const routes=[
    {
        name: "Protfolio",
        path: "/portfolio",
        component: MainCard
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;