import { ReactNode } from "react";
import { cn } from "../lib/utils";

type ContainerProps = {
  className?: string;
  children?: ReactNode;
};

function Container({ className, children }: ContainerProps) {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
}

export default Container;
