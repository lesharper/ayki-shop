import { selector } from "recoil"
import {getAllCategories} from "../../requests/category";
import {getAllSubcategories} from "../../requests/subcategory";

export const categories_subcategoriesSelector = selector({
    key: 'categories_subcategoriesSelector',
    get: async () => {
        const categories = await getAllCategories();
        const subcategories = await getAllSubcategories();
        const hybrid = new Array(categories.length)

        for (let i in categories) {
            hybrid[i] = {
                ...categories[i],
                subcategories: categories[i].subcategories[0] ? categories[i].subcategories.map(id => subcategories.find(item => item.id === id)) : []
            }
        }
        return hybrid;
    },
});
