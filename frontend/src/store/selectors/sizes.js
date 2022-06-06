import { selector } from "recoil"
import {getAllSizes} from "../../requests/size";

export const sizesSelector = selector({
    key: 'sizesSelector',
    get: async () => {
        const response = await getAllSizes();
        return response;
    },
});
