import ProductsGrid from "@/components/products/ProductsGrid";

export default function Home() {
    return (
        <div
       
            className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center  gap-16 sm:p-20 my-50">
            <ProductsGrid/>
        </div>
    );
}
