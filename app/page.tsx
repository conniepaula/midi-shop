import Image from 'next/image';
import Button from './components/Button';
import Product from './components/Product';
import CarouselContainer from './components/CarouselContainer';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export default async function Home() {
  const products: Array<Product> = await getProducts();
  return (
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
  );
}

async function getProducts() {
  const res = await fetch(`${process.env.APP_URL}/api/getproducts`, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}
