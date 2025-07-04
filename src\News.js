import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://api.pap.com/news')
            .then(response => {
                setNews(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>News</h1>
            <ul>
                {news.map(newsItem => (
                    <li key={newsItem.id}>{newsItem.title} ({newsItem.date})</li>
                ))}
            </ul>
        </div>
    );
}

export default News;
```

This is a basic structure for a professional website for Pakistan Atomic Power with a modern UI. The backend is built using Django, and the frontend is built using React. The website has four main sections: Home, Power Plants, Employees, and News. Each section displays relevant information fetched from the API.