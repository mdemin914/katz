import React from "react";
import { Cart } from "../cart/Cart";
import { Toolbar } from "./Toolbar";

interface PageProps {
  children: React.ReactNode;
}

/**
 * A page that is shown to the user, includes the Toolbar and the Cart.
 */
export const Page = ({ children }: PageProps) => {
  return (
    <>
      <Toolbar />
      <Cart />
      {children}
    </>
  );
};
