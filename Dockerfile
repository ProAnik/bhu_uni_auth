# Use PHP 8.3 FPM base image
FROM php:8.2-fpm

# Set Composer memory limit globally
ENV COMPOSER_MEMORY_LIMIT=-1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    nginx \
    zip \
    unzip \
    git \
    curl \
    default-mysql-client \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libssl-dev \
    zlib1g-dev \
    pkg-config \
    g++ \
    make \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install \
        pdo_mysql \
        mbstring \
        exif \
        pcntl \
        bcmath \
        zip \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . /var/www/html


# Install Composer dependencies
RUN composer install --no-interaction --optimize-autoloader

# Configure Nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY site.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start PHP-FPM + Nginx in foreground
CMD ["sh", "-c", "php-fpm -F & nginx -g 'daemon off;'"]
