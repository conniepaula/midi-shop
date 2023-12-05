import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { getCheckoutData } from '@/utils/getCheckoutData';
interface SuccessPageProps {
  searchParams: {
    session_id: string;
  };
}

const page: FC<SuccessPageProps> = async (props) => {
  const { searchParams } = props;
  const sessionId = searchParams.session_id;
  const { customerName, product } = await getCheckoutData(sessionId);

  return (
    <main className='mx-auto my-0 mt-6 flex flex-col items-center justify-start px-5 md:mt-16 md:min-h-[576px]'>
      <h2 className='text-center text-xl font-bold text-red-900 md:text-2xl'>
        Thank You for Your Purchase!
      </h2>
      <span className='mt-2 max-w-xl text-center text-md text-neutral-700 md:text-lg'>
        Congratulations, <strong>{customerName}</strong>! Your order was successful.
      </span>
      <div className='items mt-8 flex h-[200px] w-[100%] max-w-[200px] rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 p-1 md:mt-16'>
        <Image
          src={product?.images[0]}
          alt={product?.name}
          width={200}
          height={200}
          className='object-contain'
        />
      </div>
      <span className='mt-8 text-center text-md'>
        Your <strong>{product?.name}</strong> will be delivered within 5 working days.
      </span>
      <Link
        href='/'
        className='mt-10 font-bold text-red-900 no-underline hover:text-red-700 hover:transition-colors md:mt-20'
      >
        Go Back
      </Link>
    </main>
  );
};

export const revalidate = 0;

export default page;
