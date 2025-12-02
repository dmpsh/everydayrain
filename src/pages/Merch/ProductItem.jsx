import { Link } from 'react-router-dom';
import FavsButton from '@/components/FavsButton/FavsButton';
import { useFavoritesContext } from "@/contexts/FavoritesContext";

const ProductItem = (props) => {
    //console.log(props);
	if (!props) return null;
    const { id, title, image, price, category } = props; // используем деструктуризацию для получения значений из props
    //const baseLink = category ? `/merch/${encodeURIComponent(category.replace(/\s+/g, '-'))}/${id}` : `/merch/${id}`;
    const baseLink = `/merch/${category ? encodeURIComponent(category.replace(/\s+/g, '-')) + '/' : ''}${id}`;
    const {isFavorite, addToFavorites, removeFromFavorites} = useFavoritesContext()
    const favorite = isFavorite(id)
    function onFavoriteClick() {
        if(favorite)
        {
            removeFromFavorites(id)
        } else {
            addToFavorites(props)
        }
    }
    return (
        <div className="catalog_block-item">
            <div className="main">
                <FavsButton initialState={favorite} onClick={onFavoriteClick} />
                <Link to={baseLink}>
                    <div className="img">
                        <img src={image} alt={title} />
                    </div>
                </Link>
                <div className="another_info">
                    <div className="name">{title}</div>
                    <div className="buttons">
                        <Link to={baseLink} className="button_3">Подробнее</Link>
                        <Link to="#" className="button_4">В корзину</Link>
                    </div>
                </div>
            </div>
            <div className="info">
                <h3 className="name">{title}</h3>
				{price && <span className="price">{price}</span>}
            </div>
        </div>
    );
}
export default ProductItem;