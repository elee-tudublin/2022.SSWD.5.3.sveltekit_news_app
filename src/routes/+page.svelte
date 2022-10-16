<script>
    // import the formateDate function defined in clientFunctions.js
    import { formatDate } from '$lib/clientFunctions.js';
    
    // This allows access to the data exported from +page.server.js 
    export let data;
	const { articles } = data;    

</script>

<h2>Irish Times</h2>
<div id="stories" />
<p>
    Powered by <a href="https://newsapi.org/">https://newsapi.org/</a>
</p>
<div id="articles">
    <!-- a Svelete for each to iterate through articles -->
    {#each articles as article }
    <article>
        <h4>{article.title}</h4>
        <p>{article.author}</p>
        <!-- format the date using function -->
        <p>{formatDate(article.publishedAt)}</p>
        <img src={article.urlToImage} alt="caption">
        <p>{article.description}</p>
        <p><a href='{article.url}'>Read More</a></p>
      </article>
{/each}
</div>
