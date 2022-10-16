
<nav>
    <!-- Navigation menu with news sections - see CSS for layout-->
  <!-- Each has a data-source attribute which contains the URI to be requested-->
  <ul id="newsLinks" class="topnav">
    <li><a id="Headlines" href="/" data-sveltekit-prefetch>Irish Times</a></li>
    <li><a id="Headlines" href="/headlines" data-sveltekit-prefetch>Top Headlines</a></li>
    <li><a id="Business" href="/business" data-sveltekit-prefetch>Business</a></li>
    <li><a id="Sport" href="/sport" data-sveltekit-prefetch>Sport</a></li>
  </ul>
</nav>

<slot />

<style>
    /*
    /* https://www.w3schools.com/Css/tryit.asp?filename=trycss_navbar_horizontal_responsive
    */
    ul.topnav {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    }
  
    ul.topnav li {
      float: left;
    }
  
    ul.topnav li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
  
    ul.topnav li a:hover:not(.active) {
      background-color: #111;
    }
  
    ul.topnav li a.active {
      background-color: #04AA6D;
    }
  
    ul.topnav li.right {
      float: right;
    }
  
    @media screen and (max-width: 600px) {
  
      ul.topnav li.right,
      ul.topnav li {
        float: none;
      }
    }
  </style>