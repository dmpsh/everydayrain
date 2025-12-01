import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import ProductItem from "@/pages/Merch/ProductItem";

const MerchList = () => {
	const products = useLoaderData(); // т.к. используется ф-ция loader
    //console.log(products);
    return (
        <>
            <section className="catalog_block">
                <div className="container">
                    <div className="catalog_block-wrap">
                        <div className="catalog_block-list">
                            {products ?
                                products.map((product) => {
                                    return (
                                        <ProductItem key={product.id} {...product} />
                                    );
                                })
								:
								<p>Список товаров пуст...</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MerchList;

export async function loader() {
	/*------------ тут не доступны хуки ------------*/
    let axiosParams = {
		//headers: { 'Cache-Control': 'no-cache' }, // НЕ кэшируем
	};
    const url = 'https://fakestoreapi.com/products'; // НЕ испл. proxy секцию в конфиге
    const response = await axios.get(url, axiosParams);
    const data = response.data;
    if (!data || typeof data !== 'object') {
        throw new Error; // отправим ошибку в функцию ( src/routes.jsx )
    }
    return await data;
};