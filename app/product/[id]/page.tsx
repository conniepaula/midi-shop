import Image from 'next/image';
import { FC } from 'react';
import Button from '@/app/components/Button';
import { ShoppingCartSimple } from '@/app/components/phosphor-icons';

interface pageProps {
  params: { id: string };
}

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const page: FC<pageProps> = async ({ params }) => {
  const product: Product = await getProduct(params.id);
  console.log(product);
  return (
    <main className='mx-auto my-0 mt-5 flex min-h-[576px] flex-col items-stretch overflow-hidden px-2 md:grid md:grid-cols-2 md:gap-10'>
      <div className='relative flex min-h-[367px] items-center justify-center rounded-lg bg-white bg-gradient-to-br from-neutral-900 to-neutral-800 p-5'>
        <Image src={product.imageUrl} alt='' width={500} height={500} />
      </div>
      <div className='flex max-w-xl flex-col justify-between gap-3 p-2 md:gap-5 '>
        <div className='flex flex-col items-center gap-3 md:items-start md:gap-5'>
          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-xl font-bold md:text-2xl'>{product.name}</h2>
            <span className='mt-1 text-xl text-red-900 md:text-2xl'>{product.price}</span>
          </div>
          <span className='text-md text-center leading-7 text-neutral-800 md:text-left'>
            {product.description}
          </span>
        </div>
        <Button icon={<ShoppingCartSimple size={24} />}> Add to cart</Button>
      </div>
    </main>
  );
};

export async function getProduct(productId: string) {
  const headers = new Headers();
  headers.append('id', productId);
  const res = await fetch(`${process.env.APP_URL}/api/getproductbyid`, {
    next: { revalidate: 60 },
    headers,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  const data = await res.json();

  return data;
}

export default page;
