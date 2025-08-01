import type React from "react"
import { Logo } from "../../images/image"
import NavItems from "../../navigation/components/NavItems"

type FooterNavProps = {
    color?: string
}

const FooterNav: React.FC<FooterNavProps> = ({ color = 'white' }) => {
    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-row sm:justify-between flex-col sm:mb-0 mb-6 items-center">
                <Logo color={color} />
                <hr className="my-8 h-[1px] w-full border-t-0 bg-[#333232] dark:bg-white/10 sm:hidden z-50" />
                <NavItems className="text-sm/[14px] items-center gap-8" />
            </div>
            <hr className="my-8 h-[1px] border-t-0 bg-[#333232] dark:bg-white/10 sm:block hidden" />
        </div>
    )
}

export default FooterNav