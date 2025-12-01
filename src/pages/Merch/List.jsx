import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import ProductItem from "@/pages/Merch/ProductItem";

const MerchList = () => {
    const data = useLoaderData();
    const products = data?.products || [];
    return (
        <section className="catalog_block">
            <div className="container">
                <div className="catalog_block-wrap">
                    <div className="catalog_block-list">
                        {products.length === 0 && <p>Список товаров пуст...</p>}
                        {products.map((product) => (
                            <ProductItem key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MerchList;

export async function loader({ params }) {
    const { category } = params || {};
    if (!category) {
        return { category: null, products: [] };
    }
    try {
        const categoryName = category.replace(/-/g, ' '); // заменяем "-" на пробел
        const url = `https://fakestoreapi.com/products/category/${categoryName}`;
        const response = await axios.get(url);
        return { category, products: response.data || [] };
    } catch (e) {
        return { category, products: [] };
    }
}