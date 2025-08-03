import { Filter, Products } from "@/components/category";

export default function page() {
    return (
        <div className="grid grid-cols-12 my-10 gap-10">
            <div className="col-span-3 border-[1px] rounded-lg p-2 border-black relative">
                <Filter />
            </div>
            <div className="col-span-9">
                <Products />
            </div>
        </div>
    )
}