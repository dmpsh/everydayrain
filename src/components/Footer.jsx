export const Footer = () => {
	const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrap">
                    <div className="footer-info">
                        <span>&copy; {currentYear} All rights reserved.</span>
                    </div>
                    <div className="footer-socials">
						
                    </div>
                </div>
            </div>
        </footer>
    );
}