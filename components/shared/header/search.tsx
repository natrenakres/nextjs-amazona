import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

import { APP_NAME } from "@/lib/constant";
import { SearchIcon } from "lucide-react";

const categories = [
 "men", "woman", "kids", "accessories"
]

export default async function Search() {
    return (
        <form className="flex items-stretch h-10">
            <Select name="category">
                <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r  rounded-r-none rounded-l-md">
                    <SelectValue placeholder="All" />                    
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="all">All</SelectItem>
                    {
                        categories.map((category) => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
            <Input
                className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
                placeholder={`Search site ${APP_NAME}`}
                name="q"
                type="search"
             />
             <button 
                type="submit"
                className="bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2">
                <SearchIcon className="w-6 h-6" />
             </button>
        </form>
    )
}