import React, {Suspense} from 'react';
import AddProduct from "../components/Controls/AddProduct";
import Loader from "../components/Loader/Loader";
import TCategories from "../components/Tables/TCategories";
import AdminTabs from "../components/AdminTabs/AdminTabs";

const Admin = () => {

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Suspense fallback={<Loader/>}>
                <AdminTabs/>
                {/*<TCategories/>*/}
            </Suspense>
        </div>
    );
}

export default Admin;
