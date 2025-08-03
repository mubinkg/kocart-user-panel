'use client';

import * as React from 'react';
import { ProductCard } from '../ui/product-card';

// A simple star rating component using inline SVG for the stars

export function Products() {
    const products = [
        {
            id: 1,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Denim+Jacket',
            title: 'Oversized Jeans Jacket',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 2,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Plaid+Skirt',
            title: 'Plaid Skirt',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 3,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Red+Sneakers',
            title: 'High-Top Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 4,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=White+Shoes',
            title: 'Minimalist Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 1,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Denim+Jacket',
            title: 'Oversized Jeans Jacket',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 2,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Plaid+Skirt',
            title: 'Plaid Skirt',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 3,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Red+Sneakers',
            title: 'High-Top Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 4,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=White+Shoes',
            title: 'Minimalist Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 1,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Denim+Jacket',
            title: 'Oversized Jeans Jacket',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 2,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Plaid+Skirt',
            title: 'Plaid Skirt',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 3,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Red+Sneakers',
            title: 'High-Top Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 4,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=White+Shoes',
            title: 'Minimalist Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 1,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Denim+Jacket',
            title: 'Oversized Jeans Jacket',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 2,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Plaid+Skirt',
            title: 'Plaid Skirt',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 3,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Red+Sneakers',
            title: 'High-Top Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 4,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=White+Shoes',
            title: 'Minimalist Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 3,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Red+Sneakers',
            title: 'High-Top Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
        {
            id: 4,
            imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=White+Shoes',
            title: 'Minimalist Sneakers',
            price: '$120',
            rating: 4.5,
            reviews: 88,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
}
