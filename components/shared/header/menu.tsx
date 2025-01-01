import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex justify-end">
            <nav className="flex gab-3 w-full">
                <Link href="/sign-in" className="flex items-centr header-button">
                    Hello, Sign in                    
                </Link>
                <Link href="/cart" className="header-button">
                    <div className="flex items-end">
                        <ShoppingCart className="h-8 w-8" />
                        Cart
                    </div>
                </Link>
            </nav>
        </div>
    )

}
