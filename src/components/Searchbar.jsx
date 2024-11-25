import { useState, useEffect } from 'react'


export default function SearcBar({ fetchData, postsData, setPostsData }) {

    const [searchText, setSearchText] = useState('')

    function search() {

        console.log(postsData);


        const searchPosts = postsData.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()))

        setPostsData(searchPosts)

        if (searchText.length === 0) {
            fetchData()
        }
    }

    useEffect(search, [searchText])


    return (
        <input type="search"
            className='form-control mt-5'
            placeholder='search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
    )
}

