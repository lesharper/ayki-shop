import { selector } from "recoil"
import {getAllProducts} from "../../requests/product";
import {getAllPhotos} from "../../requests/photo";

export const productsSelector = selector({
    key: 'productsSelector',
    get: async () => {

        const photos = await getAllPhotos()
        const products = await getAllProducts();

        const hybrid = new Array(products.length)

        for (let i in products) {
            hybrid[i] = {
                ...products[i],
                photos: products[i].photos[0] ? products[i].photos.map(id => photos.find(item => item.id === id)) : []
            }
        }
        return hybrid;
    },
});
