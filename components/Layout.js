import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { Menu } from "@headlessui/react";
import { Store } from "@/utils/Store";
import Cookies from "js-cookie";
import DropdownLink from "./DropdownLink";
import { signOut, useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");

    dispatch({ type: "CART_RESET" });
    signOut({ callbbackUrl: "/login" });
  };

  return (
    <>
      <Head>
        <title>{title ? title + " -Sugar momma" : "Sugar momma"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center p-12 text-black text-xl shadow-2xl justify-between ">
            <Link href="/" className="text-2xl text-red-200 font-bold">
              Sugar Momma
            </Link>


            <div className="flex px-12 text-gray-300 font-bold">
            <Link href="/" className="p-4">
                Home
              </Link>

              <Link href="/about" className="p-4">
                About
              </Link>

              <Link href="/cart" className="p-4">
                Cart
                {cartItemsCount > 0 && (
                  <div className=" flex ml-3 w-6 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </div>
                )}
              </Link>


              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative px-4 mt-4 inline-block">
                  <Menu.Button className="text-red-600 mt-4">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>

                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" className="mt-4" >
                  Login
                </Link>
              )}

              <Link href="/contact" className="p-4">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
      </div>
    </>
  );
}
