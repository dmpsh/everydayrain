import { useMatches, Link } from "react-router-dom";

export default function Breadcrumbs() {
    const matches = useMatches();
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => {
            const label = match.handle.crumb(match.loaderData);
            return { label, to: match.pathname || '/' };
        })
		//.filter((crumb) => crumb.label !== null); // убираем крошку если label = null
	
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