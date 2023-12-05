import { FC } from 'react';

import Product from '@/components/Product';
import CarouselContainer from '@/components/CarouselContainer';
import { Product as ProductType } from '@/types/productTypes';
import { getProducts } from '@/utils/getProducts';

const page: FC = async () => {
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
};

export const revalidate = 60 * 60 * 1;

export default page;
