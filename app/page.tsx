import Image from 'next/image';

import Button from '@/components/Button';
import Product from '@/components/Product';
import CarouselContainer from '@/components/CarouselContainer';
import { Product as ProductType } from '@/types/productTypes';

export default async function Home() {
  const products: Array<ProductType> = await getProducts();
  return (
    <div className='flex w-screen items-end p-2 md:p-0'>
      <CarouselContainer>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            sx='keen-slider__slide'
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </CarouselContainer>
    </div>
  );
}

async function getProducts() {
  const res = await fetch(`${process.env.APP_URL}/api/getproducts`, {
    next: { revalidate: 60 * 60 * 1 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}
