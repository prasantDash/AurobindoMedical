"use client";
import ProductStatus from "./pages/MainContent/ProductStatus/page";


export default function Home() {


  return (
    <div classNameName="flex-1 p-6">
      <div className="grid grid-cols-1 gap-4">
        <div className="...">
          <div classNameName="box  p-4 shadow-lg bg-white dark:bg-gray-900">
            <ProductStatus/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className=""><div classNameName="box  p-4 shadow-lg bg-white dark:bg-gray-900">
          {/* <ProductStatus/> */}Area 2
        </div>
        </div>
        <div className="..."><div classNameName="box p-4 shadow-lg bg-white dark:bg-gray-900">
          {/* <ProductStatus/> */} Area 3
        </div>
      </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="...">
          <div classNameName="box  p-4 shadow-lg bg-white dark:bg-gray-900">
            {/* <ProductStatus/> */}Area 4
          </div>
        </div>
      </div>
    </div>
  );
}