import { useState, useEffect } from 'react';

import ArticleCard from './ArticleCard.jsx';
import ArticleList from './ArticleList.jsx';
import Form from './Form.jsx';
import SearcBar from './Searchbar.jsx';


export default function AppMain() {

    const initialFormData = {
        title: "",
        image: "",
        content: "",
        tags: [],
    };

    const api_server = "http://localhost:3001"
    const end_point = "/posts"

    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState("");
    const [modifyArticle, setModifyArticle] = useState("");
    const [currentIndex, setCurrentIndex] = useState(null);
    const [formData, setFormData] = useState(initialFormData);

    const [postsData, setPostsData] = useState([])


    function fetchData(url = `${api_server}${end_point}`) {
        fetch(url)

            .then(res => res.json())

            .then(data => {

                console.log(data);

                setPostsData(data)

            }).catch(err => {
                console.error(err.message);
            })
    }

    // esegue subito al caricamento della pagina, ma una volta sola perché non ha dipendenze
    useEffect(fetchData, [])


    function handleFormField(e) {
        const { name, value, checked, type } = e.target;

        if (name === "slug") {
            formData.slug = formData.title.toLowerCase()
        }

        const newValue = type === 'checkbox' ? checked : value;

        if (name === 'tags') {
            const tags = formData.tags.includes(value)
                ? formData.tags.filter(tag => tag !== value)
                : [...formData.tags, value];
            setFormData({ ...formData, tags });
        } else {
            setFormData({
                ...formData,
                [name]: newValue
            });
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        console.log(e.target);


        const newItem = {
            slug: formData.title.toLowercase().split(" ").join("-"),
            ...formData
        }

        fetch(api_server + end_point, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log("result", result);
                setPostsData(result.data)
            })
        setFormData(initialFormData);
    }

    function handleDeleteClick(e) {
        e.preventDefault()

        const slug = e.target.getAttribute("data.slug")

        console.log(slug);

        fetch(api_server + end_point + slug, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log("result", result);
                setPostsData(result.data)
            })



    }


    return (
        <main>
            <div className="container">
                <Form formData={formData} handleFormField={handleFormField} handleFormSubmit={handleFormSubmit} />

                <SearcBar fetchData={fetchData} postsData={postsData} setPostsData={setPostsData} />

                <ArticleList>
                    {postsData.data ? postsData.data.map((post, index) => (
                        <ArticleCard key={index} data={post} index={index} api_server={api_server} handleDeleteClick={handleDeleteClick} >
                        </ArticleCard>
                    )) : <p>No data found</p>
                    }
                </ArticleList>
            </div>
        </main>
    )
}