import React, {Suspense} from 'react';
import FilterPanel from "../components/FilterPanel/FilterPanel";
import ProductsList from "../components/Products/ProductsList";
import Loader from "../components/Loader/Loader";

const Catalog = () => {

    return (
        <div className="min-h-screen flex">
            <div className="flex justify-center w-[450px]">
                <FilterPanel/>
            </div>
            <Suspense fallback={<Loader/>}>
                <ProductsList/>
            </Suspense>
        </div>
    );
}

export default Catalog;
