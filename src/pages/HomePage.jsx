import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import HomePageItem from '@/pages/HomePageItem';

const HomePage = () => {
    const data = useLoaderData();
    return (
        <section className="tickets_block">
            <div className="tickets_block-wrap">
                {data && (
                    <div className="tickets_block-list">
                        {Array.isArray(data) && data.map((user) => {
                            return (
                                <HomePageItem key={user.id} {...user} />
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
export default HomePage;

export async function loader() {
    /*------------ тут не доступны хуки ------------*/
    let axiosParams = {
        //headers: { 'Cache-Control': 'no-cache' }, // НЕ кэшируем
    };
    const url = 'https://jsonplaceholder.typicode.com/users'; // НЕ испл. proxy секцию в конфиге
    try {
        const response = await axios.get(url, axiosParams);
        //console.log(response.status);
        const data = response.data;
        if (!data || typeof data !== 'object') {
            throw new Error; // отправим ошибку в функцию CustomErrorPage ( src/routes.jsx )
        }
        return await data;
    } catch (error) {
        throw new Error("Не удалось получить данные с сервера", { status: 500 }); // Хз как смоделировать
    }
};