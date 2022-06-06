import { selector } from "recoil"
import {getAllSubcategories} from "../../requests/subcategory";

export const subcategoriesSelector = selector({
    key: 'subcategoriesSelector',
    get: async () => {
        const response = await getAllSubcategories();
        return response;
    },
});
