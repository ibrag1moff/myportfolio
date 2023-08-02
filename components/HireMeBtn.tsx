// next
import Link from "next/link";
import Image from "next/image";

// icons
import { BsArrowRight } from "react-icons/bs";

export default function HireMeBtn() {
    return (
        <div className="relative py-6 flex items-center justify-center">
            <Link className="relative group" href="/feedback">
                <Image
                    src={"/rounded-text.svg"}
                    width={141}
                    height={148}
                    alt="Button"
                    className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
                />
                <BsArrowRight
                    size={30}
                    fill="#fff700"
                    className="absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%] group-hover:translate-x-[1px] transition-all duration-300"
                />
            </Link>
        </div>
    );
}
