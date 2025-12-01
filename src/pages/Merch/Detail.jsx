import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const MerchDetail = () => {
    const productDetail = useLoaderData(); // т.к. используется ф-ция loader
    const { id, title, price, description, image } = productDetail || {};
    const displayTitle = title || 'Без названия';
    const displayPrice = (price !== undefined && price !== null) ? price : null;
    const displayDescription = description || null;
    
    return (
        <section className="catalog_index_block" key={id}>
            <div className="container">
                <div className="catalog_index_block-wrap">
                    <div className="catalog_index_block-gallery">
                        <div className="img">
                            <img src={image} alt={displayTitle} />
                        </div>
                    </div>
                    <div className="catalog_index_block-info">
                        <h3 className="name">{displayTitle}</h3>
                        {displayPrice !== null && (
                            <span className="price">{displayPrice} ₽</span>
                        )}
                        <a href="#" className="button_4">В корзину</a>
                        {displayDescription && (
                            <div className="about">{displayDescription}</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default MerchDetail;

export async function loader({ request, params }) {
	/*------------ тут не доступны хуки ------------*/
    //console.log(request);
    const { id, category } = params || {};
    const url = `https://fakestoreapi.com/products/${id}`; // НЕ испл. proxy секцию в конфиге
    try {
        const response = await axios.get(url);
        const data = response.data;
        if (!data || typeof data !== 'object') {
            throw new Error; // отправим ошибку в функцию ( src/routes.jsx )
        }
        return {
            id: data.id ?? id,
            title: data.title ?? 'Без названия',
            price: data.price ?? null,
            description: data.description ?? '',
            image: data.image ?? null,
            category: category || data.category || null,
        };
    } catch (error) {
        throw new Error(error.message || 'Error fetching product');
    }
}