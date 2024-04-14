# Use an official Node.js runtime as a parent image
FROM node:21.3.0 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY . .

# Build the React app for production
RUN npm run build

# Use nginx as the base image for serving the web application
FROM nginx:alpine

# Copy the production build files from the builder stage to the NGINX html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80

# Start NGINX server when the container starts
CMD ["nginx", "-g", "daemon off;"]
