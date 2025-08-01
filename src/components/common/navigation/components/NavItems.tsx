import { Link, useLocation } from "react-router-dom"
import { Pages } from "../../../../utils/constants";

type NavItemsProps = {
    color?: string,
    className: string
}

const NavItems: React.FC<NavItemsProps> = ({ color = 'white', className }) => {

    const location = useLocation();

    return (
        <ul className={`flex sm:flex-row flex-col ${className} tracking-widest cursor-pointer font-jost text-[${color}]`}>
            {
                Pages.map((item, index) => {
                    return (
                        <li key={index} className='hover:underline' style={{ color: location.pathname === item.href ? '#E7816B' : 'inherit' }}>
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