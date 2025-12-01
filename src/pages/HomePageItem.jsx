const HomePageItem = (props) => {
    const { email, name, phone } = props; // используем деструктуризацию для получения значений из props
    return (
        <div className="tickets_block-item">
            <div className="container">
                <div className="tickets_item-wrap">
                    <div className="date">
                        <div className="date-number">{email}</div>
                        <div className="type">{name}</div>
                    </div>
                    <div className="place">
                        <div className="town">{phone}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePageItem;