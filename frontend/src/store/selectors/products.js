import { selector } from "recoil"
import {getAllProducts} from "../../requests/product";

export const productsSelector = selector({
    key: 'productsSelector',
    get: async () => {
        const response = await getAllProducts();
        return response;
    },
});
