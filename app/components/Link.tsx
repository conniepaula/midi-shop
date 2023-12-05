import NextLink from 'next/link';
import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}
function Link(props: LinkProps) {
  const { href, children } = props;
  return (
    <NextLink
      href={href}
      className='mt-10 font-bold text-red-900 no-underline hover:text-red-700 hover:transition-colors md:mt-20'
    >
      {children}
    </NextLink>
  );
}

export default Link;
