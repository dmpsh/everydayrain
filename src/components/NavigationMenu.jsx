import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
/*
    1. Проблема
			при переходах по ссылкам - меню не закрывается
		FIX
			добавить onClick на ссылки в меню, который будет вызывать toggleMenu
*/
const NavigationMenu = () => {
    const [toggledNav, setToggledNav] = useState(false);
    const toggleMenu = () => setToggledNav((isOpen) => !isOpen);
	
    return (
        <nav className={toggledNav ? "nav opened" : "nav"}>
            <div className="container">
                <div className="nav-wrap">
                    <div className="nav-logo">
                        <NavLink to='/'></NavLink>
                    </div>
                    <div className="nav-menu">
                        <AnimatePresence>
                            {toggledNav && (
                                <motion.div className="menu"
                                    initial={{ opacity: 0, x: 0 }}
                                    animate={{ display: 'block', opacity: 1, x: 25 }}
                                    exit={{ display: 'none', opacity: 0, x: -50 }}
                                >
                                    <div className="menu-wrap">
                                        <div className="menu-item active">
                                            <NavLink to='/' onClick={toggleMenu}>
                                                Главная
                                            </NavLink>
                                        </div>
                                        <div className="menu-item">
                                            <NavLink to="contacts" onClick={toggleMenu}>
                                                Контакты
                                            </NavLink>
                                        </div>
                                        <div className="menu-item">
                                            <NavLink to="merch" onClick={toggleMenu}>
                                                Мерч
                                            </NavLink>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className="burger_button" onClick={toggleMenu}><span></span></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavigationMenu;