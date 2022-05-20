import { selector } from "recoil"
import {getAllProducts} from "../../requests/product";

export const catalogSelector = selector({
    key: 'catalogSelector',
    get: async () => {
        const response = await getAllProducts();
        return response;
    },
});
