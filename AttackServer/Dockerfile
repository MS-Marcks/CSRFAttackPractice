FROM nginx:1.18.0-alpine
COPY public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 5000
CMD ["nginx","-g","daemon off;"]