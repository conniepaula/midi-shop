'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

function Button(props: ButtonProps) {
  const { children, icon, iconPosition = 'start', ...rest } = props;
  return (
    <button
      className={`mt-auto cursor-pointer rounded-md border-0 bg-red-900 px-4 py-3 text-md font-bold text-neutral-100 hover:bg-red-800 hover:transition-all disabled:cursor-not-allowed disabled:opacity-60 ${
        !!icon && 'flex items-center justify-center gap-2'
      } ${iconPosition === 'start' ? 'flex-row' : 'flex-row-reverse'}`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
