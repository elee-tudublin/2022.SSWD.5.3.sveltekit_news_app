// add dependency using npm install dotenv first
import 'dotenv/config'

// The load function executes before the page is displayed
export const load = async () => {


    // This async function will fetch and return articles from the Irish Times
    const fetchNews = async () => {
        
        const source = 'the-irish-times';
        const api_key = process.env.VITE_NEWS_API_KEY

        const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api_key}`);
        const data = await response.json();
        console.log(data);
        return data.articles;

    }

    // Return articles - which calls fetchNews()
    return {
        articles: fetchNews(),
    }
}
