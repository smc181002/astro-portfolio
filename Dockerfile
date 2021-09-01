RUN httpd:2.4-alpine
LABEL io.github.smc181002.authors="smc181002"

COPY $PWD/dist /usr/local/apache2/htdocs/
