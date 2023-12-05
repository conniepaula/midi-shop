import { FC, cache } from 'react';
import Image from 'next/image';

import { Product } from '@/types/productTypes';
import BuyButton from '@/app/components/BuyButton';
import { getProductById } from '@/utils/getProductById';
import stripe from '@/lib/stripe';

interface ProductPageProps {
  params: { id: string };
}

const page: FC<ProductPageProps> = async (props) => {
  const { params } = props;
  const { id } = params;

  const product: Product = await getProductById(id);

  return (
    <main className='mx-auto my-0 mt-5 flex min-h-[576px] flex-col items-stretch overflow-hidden px-2 md:grid md:grid-cols-2 md:gap-10'>
      <div className='relative flex min-h-[367px] items-center justify-center rounded-lg bg-white bg-gradient-to-br from-neutral-900 to-neutral-800 p-5'>
        <Image src={product.imageUrl} alt={product.name} width={500} height={500} />
      </div>
      <div className='flex max-w-xl flex-col justify-between gap-3 p-2 md:gap-5 '>
        <div className='flex flex-col items-center gap-3 md:items-start md:gap-5'>
          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-xl font-bold md:text-2xl'>{product.name}</h2>
            <span className='mt-1 text-xl text-red-900 md:text-2xl'>{product.price}</span>
          </div>
          <span className='text-center text-md leading-7 text-neutral-800 md:text-left'>
            {product.description}
          </span>
        </div>
        <BuyButton priceId={product.priceId!} />
      </div>
    </main>
  );
};

export const generateStaticParams = cache(async () => {
  const res = await stripe.products.list({ expand: ['data.default_price'] });
  const productIds = res.data.map((product) => product.id);

  return productIds.map((id) => ({ id }));
});

export const revalidate = 60 * 60 * 1;

export default page;
