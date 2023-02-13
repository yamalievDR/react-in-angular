FROM openresty/openresty:latest
COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY dist/demo /usr/share/nginx/html

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;'"]
