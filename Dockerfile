# ========================
# 🧱 Stage 1: Build the app
# ========================
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# ✅ Install all dependencies (including devDependencies for build)
RUN npm install

# Copy source code
COPY . .

# ✅ Build the React app
RUN npm run build


# ========================
# 🚀 Stage 2: Serve with Nginx
# ========================
FROM nginx:alpine

# ✅ Copy built files to Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# ✅ Optional: If you have a custom Nginx config, copy it too
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ✅ Expose HTTP port
EXPOSE 80

# ✅ Run Nginx
CMD ["nginx", "-g", "daemon off;"]
