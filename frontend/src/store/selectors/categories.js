import { selector } from "recoil"
import {getAllCategories} from "../../requests/category";

export const categoriesSelector = selector({
    key: 'categoriesSelector',
    get: async () => {
        const response = await getAllCategories();
        return response;
    },
});
