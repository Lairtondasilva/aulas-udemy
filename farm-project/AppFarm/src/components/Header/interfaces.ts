import { ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode | string;
  arrow?: boolean;
}

export interface NavbarProps {
  arrow: boolean;
}
