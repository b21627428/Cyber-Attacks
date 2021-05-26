# Buffer Overflow Attack - SHELL

# SQL Injection Attack - BWAPP
### docker run -d -p 80:80 raesene/bwapp <br/>

# Cross Site Scripting Attack - OWASP - MUTILLIDAE
### docker run -d -p 80:80 -p 443:443 --name owasp17 bltsec/mutillidae-docker <br/>

#### For Phpmyadmin 403 Error:

sudo gedit /opt/lampp/etc/extra/httpd-xampp.conf <br/>
<Directory "/opt/lampp/phpmyadmin"> <br/>
  AllowOverride AuthConfig Limit <br/>
  Require all granted <br/>
</Directory> <br/>


#### USENIX Security Symposiums
https://www.usenix.org/conferences/byname/108
