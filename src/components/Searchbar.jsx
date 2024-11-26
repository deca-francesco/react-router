import { useState, useEffect } from 'react'

export default function SearcBar({ fetchData, postsData, setPostsData }) {


    function search(searchQuery) {

        const searchPosts = postsData.data.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

        setPostsData({ data: searchPosts })

        if (searchQuery.length === 0) {
            fetchData()
        }
    }


    return (
        <input type="search"
            className='form-control mt-5'
            placeholder='search'
            onChange={(e) => search(e.target.value)}
        />
    )
}

