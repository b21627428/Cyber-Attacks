# Buffer Overflow Attack - SHELL

# SQL Injection Attack - BWAPP
```bash
docker run -d -p 80:80 raesene/bwapp 
```

# Cross Site Scripting Attack - OWASP - MUTILLIDAE
```bash
docker run -d -p 80:80 -p 443:443 --name owasp17 bltsec/mutillidae-docker 
```

#### For Phpmyadmin 403 Error:

```bash
sudo gedit /opt/lampp/etc/extra/httpd-xampp.conf
```
<Directory "/opt/lampp/phpmyadmin"> <br/>
  AllowOverride AuthConfig Limit <br/>
  Require all granted <br/>
</Directory> <br/>


#### [USENIX Security Symposiums](https://www.usenix.org/conferences/byname/108)
