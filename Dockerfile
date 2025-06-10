# Use Nginx for serving static files
FROM nginx:alpine

# Clean default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your site into nginx's html folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
