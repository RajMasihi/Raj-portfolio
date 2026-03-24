# Step 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build


# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy build files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]