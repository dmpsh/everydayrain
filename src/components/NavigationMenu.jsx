import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive })=>isActive ? 'active' : ''}>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts' className={({ isActive })=>isActive ? 'active' : ''}>Контакты</NavLink>
                </li>
				<li>
                    <NavLink to='/merch' className={({ isActive })=>isActive ? 'active' : ''}>Мерч</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default NavigationMenu;