import React from 'react';
import FilterPanel from "../components/FilterPanel/FilterPanel";
import ProductsList from "../components/Products/ProductsList";

const Catalog = () => {
    return (
        <div className="min-h-screen flex">
            <FilterPanel/>
            <ProductsList/>
        </div>
    );
}

export default Catalog;
