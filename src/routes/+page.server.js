import 'dotenv/config'

export const load = async () => {


    const fetchNews = async () => {
        
        const source = 'the-irish-times';
        const api_key = process.env.VITE_NEWS_API_KEY

        const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api_key}`);
        const data = await response.json();
        console.log(data);
        return data.articles;

    }

    return {
        articles: fetchNews(),
    }
}
