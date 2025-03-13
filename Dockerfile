
# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the compiled React Vite project from the dist folder to the Nginx HTML directory
COPY dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
