import React from 'react';
import FilterPanel from "../components/FilterPanel/FilterPanel";
import ProductsList from "../components/Products/ProductsList";

const Catalog = () => {

    return (
        <div className="min-h-screen flex">
            <div className="flex justify-center w-[450px]">
                <FilterPanel/>
            </div>
            <ProductsList/>
        </div>
    );
}

export default Catalog;
