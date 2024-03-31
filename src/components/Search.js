import { FaSearch } from "react-icons/fa";

export default function Search() {
    return (
        <>
        <form className="relative">
            <input type="text" placeholder="ຄົ້ນຫາເພງ" className="w-full p-4 outline-none border-none rounded-full"/>
            <button className="absolute right-3 top-3"><FaSearch size={30}/></button>
        </form>
        </>
    )
}