import { reactive } from "vue";

export const store = reactive({
    charactersList: [],
    loading: false,
    searchNameKey: "",
    error: false,
});