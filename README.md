// settings kod do pliku .htaccess w folderze public_html

RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.(._)$ [NC]
RewriteRule ^(._)$ https://%1/$1 [R=301,L]
RewriteCond %{ENV:HTTPS} !on
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
RewriteRule ^index\.html$ / [NC,R,L]
