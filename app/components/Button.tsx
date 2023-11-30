interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <button className='text-md mt-auto cursor-pointer rounded-md border-0 bg-red-900 px-4 py-3 font-bold text-neutral-100 hover:bg-red-950/80 hover:transition-all'>
      {children}
    </button>
  );
}

export default Button;
