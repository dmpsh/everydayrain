import ProductItem from '@/pages/Merch/ProductItem';
import { useFavoritesContext } from "@/contexts/FavoritesContext"

const FavoritesPage = () => {
    const { favorites } = useFavoritesContext();
    return (
        <section className="catalog_block">
            <div className="container">
                <div className="catalog_block-wrap">
                    <div className="catalog_block-list">
                        {favorites.length > 0
                            ?
                            favorites.map((product) => (
                                <ProductItem key={product.id} {...product} />
                            ))
                            :
                            <h2>В избранном ничего нет!</h2>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
export default FavoritesPage;