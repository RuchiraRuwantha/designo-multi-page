import { Link } from "react-router-dom"
import { Pages } from "../../../../utils/constants";

type NavItemsProps = {
    color?: string,
    className: string
}

const NavItems: React.FC<NavItemsProps> = ({ color = 'white', className }) => {
    return (
        <ul className={`flex sm:flex-row flex-col ${className} tracking-widest cursor-pointer font-jost text-[${color}]`}>
            {
                Pages.map((item, index) => {
                    return (
                        <li key={index} className='hover:underline'>
                            <Link to={item.href}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default NavItems