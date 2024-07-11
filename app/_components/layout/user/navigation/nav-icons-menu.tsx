'use client';

import { AUTH, CART } from '@/app/_config/routes';
import { setCartState } from '@/app/lib/redux/features/cart/cart-slice';
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import { loadFromLocalStorage } from '@/app/lib/redux/store';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Route } from 'next';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BsCart4 } from 'react-icons/bs';
import { SlMenu } from 'react-icons/sl';

type Props = {
  navbar: boolean;
  setNavbar: Dispatch<SetStateAction<boolean>>;
};
export const NavIconsMenu = ({ navbar, setNavbar }: Props) => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartState = loadFromLocalStorage();
    if (cartState) {
      dispatch(setCartState(cartState));
    }
  }, [dispatch]);

  return (
    <nav className="nav-icons-menu ">
      <Link href={CART} className="relative">
        <BsCart4 className="nav-icon" />
        <span className="absolute -right-4 -top-3 rounded-full bg-red-600 px-1 text-sm font-bold text-white">
          {items.length}
        </span>
      </Link>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href={AUTH as Route}>
          <BsPerson className="nav-icon" />
        </Link>
      </SignedOut>
      <SlMenu
        className="nav-icon hamburger-icon"
        onClick={() => setNavbar(!navbar)}
      />
    </nav>
  );
};
