import { useMatches, Link } from "react-router-dom";

export default function Breadcrumbs() {
    const matches = useMatches();
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => {
            // при прямом переходе на страницу товара /:parent/:category/:id
			const label = match.handle.crumb(match.loaderData, match);
			return { label, to: match.pathname || '/', match };
        })
		//.filter((crumb) => crumb.label !== null); // убираем крошку если label = null
    
	// Для маршрута /:parent/:category/:id нужно добавить промежуточную крошку категории
    matches.forEach(match => {
        if (match.params?.category && match.params?.id) {
            const parentPath = match.pathname.split('/').slice(0, -2).join('/');
            const parentCrumb = crumbs.find(c => c.to === parentPath);
            const currentCrumb = crumbs.find(c => c.match === match);
            if (parentCrumb && currentCrumb) {
                const parentIndex = crumbs.indexOf(parentCrumb);
                const currentIndex = crumbs.indexOf(currentCrumb);
                if (currentIndex === parentIndex + 1) {
                    const categoryPath = `${parentPath}/${match.params.category}`;
                    crumbs.splice(currentIndex, 0, {
                        label: decodeURIComponent(match.params.category).replace(/-/g, ' '), // заменяем "-" на пробел
                        to: categoryPath,
                        match: null
                    });
                }
            }
        }
    });
    
    if (crumbs.length <= 1) return null; // Не показываем на главной (когда единственная крошка — корень)
	//console.log(crumbs);
	
    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="breadcrumbs-wrap">
                    {crumbs.map((c, index) => (
                        <span key={index}>
                            {index < crumbs.length - 1 ? (
                                <Link to={c.to}>{c.label}</Link>
                            ) : (
                                c.label
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}