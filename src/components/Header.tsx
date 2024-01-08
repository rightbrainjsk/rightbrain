import Category from "@/mock/Category";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <ol>
                    {Category.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ol>
            </header>
            <hr />
        </>
    )
}

export default Header
