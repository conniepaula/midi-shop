import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <button className="rounded-md border-0 px-2 py-1 ">
      {children}
    </button>
  );
}

export default Button;
