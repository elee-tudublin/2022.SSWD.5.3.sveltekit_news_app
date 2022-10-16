export const load = async () => {


    const fetchNews = async () => {

        const api_key = import.meta.env.VITE_NEWS_API_KEY;
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ie&category=business&apiKey=${api_key}`);
        const data = await response.json();
        console.log(data);
        return data.articles;

    }

    return {
        articles: fetchNews(),
    }
}
