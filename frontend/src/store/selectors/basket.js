import { selector } from "recoil"
import {getAllProductsFromUser} from "../../requests/basket";
import {isAuth} from "../atoms/user";
import {getAllPhotos} from "../../requests/photo";

export const basketSelector = selector({
    key: 'basketSelector',
    get: async ({get}) => {
        const auth = get(isAuth)
        if (auth) {

            const photos = await getAllPhotos()
            const basket = await getAllProductsFromUser();
            const hybrid = new Array(basket.length)

            for (let i in basket) {
                hybrid[i] = {
                    ...basket[i],
                    photos: basket[i].photos[0] ? basket[i].photos.map(id => photos.find(item => item.id === id)) : []
                }
            }
            return hybrid;
        } else {
            return []
        }


    },
});
