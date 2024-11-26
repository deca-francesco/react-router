import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function ArticleDetails({ api_server, end_point }) {

    const navigate = useNavigate()
    const [article, setArticle] = useState(null)
    const { slug } = useParams()
    // console.log(slug, useParams())
    const url = `${api_server}${end_point}/${slug}`
    console.log(url);

    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const keys = Object.keys(data)
                    console.log(keys);

                    if (keys.includes("error")) {
                        navigate("/404")
                    } else {
                        setArticle(data.data)
                    }
                }).catch(err => {
                    console.log(err);
                })
        }, [])



    return (
        <>
            {article ? (
                <div>
                    <section className="article_details">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <img src={`${api_server}/${article.image}`} className="card-img-top" />
                                    </div>
                                </div>
                                <div className="col">
                                    <h3>{article.title}</h3>
                                    <div>
                                        <p>{article.content}</p>
                                        <p>Tags: {article.tags}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            ) : (
                <div>Caricamento...</div>
            )}
        </>
    )
}
