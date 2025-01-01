"use client";

import { APP_NAME } from "@/lib/constant";
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


export function Footer() {


    return (
        <div className="bg-black text-white underline-link">
            <div className="w-full">
                <Button variant={'ghost'} className="bg-gray-800 w-full rounded-none">
                    <ChevronUp />
                    Back to top
                </Button>
            </div>
            <div className="p-4">
                <div className="flex justify-center gap-3 text-sm">
                    <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                    <Link href='/page/privacy-policy'> Privacy Notice</Link>
                    <Link href='/page/help'>Help</Link>
                </div>
                <div className='flex justify-center text-sm'>
                    <p> © 2000-2024, {APP_NAME}, Inc. or its affiliates</p>
                </div>
                <div className='mt-8 flex justify-center text-sm text-gray-400'>
                    123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
                </div>
            </div>
        </div>
    )
}