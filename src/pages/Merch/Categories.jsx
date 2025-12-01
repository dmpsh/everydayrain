import axios from 'axios';
import { useLoaderData, Link } from 'react-router-dom';

const MerchCategories = () => {
    const categories = useLoaderData() || [];
    return (
        <section className="catalog_block">
            <div className="container">
                <div className="catalog_block-wrap">
                    <div className="catalog_block-list">
                        {categories.length ?
                            categories.map((category) => {
                                return (
                                    <div key={category} className="catalog_block-item">
                                        <div className="buttons">
                                            <Link to={`/merch/${encodeURIComponent(category.replace(/\s+/g, '-'))}`} className="button_3">{category}</Link>
                                        </div>
                                    </div>
                                );
                            })
                            :
                            <p>Категории не найдены</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MerchCategories;

export async function loader() {
    try {
        const url = 'https://fakestoreapi.com/products/categories';
        const response = await axios.get(url);
        return response.data || []; // БЕЗ обработки ошибок - возвращаем пустой массив если данных нет
    } catch (e) {
        return []; // БЕЗ обработки ошибок - возвращаем пустой массив если данных нет
    }
}