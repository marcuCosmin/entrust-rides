"use client"

import Image from "next/image"

import { List } from "react-bootstrap-icons"

import { NavItem } from "./NavItem"
import { useMobileNav } from "./useMobileNav"

import { navToggleId, routes } from "./constants"

export const Header = () => {
  const { navIsOpen, toggleMobileNav } = useMobileNav()

  return (
    <header
      role="banner"
      className="flex justify-between sm:justify-normal items-center py-3 px-container sticky top-0 left-0 bg-primary"
    >
      <div className="flex text-center font-bold items-center">
        <Image src="/logo.png" alt="Cool cars logo" width={80} height={65} />
      </div>

      <button
        className="sm:hidden"
        aria-label={`${navIsOpen ? "Close" : "Open"} navigation menu`}
        id={navToggleId}
        type="button"
        onClick={toggleMobileNav}
      >
        <List className="w-10 h-10 text-white" />
      </button>

      <nav
        className={`z-50 fixed sm:static overflow-hidden sm:overflow-visible sm:transition-none top-0 left-0 bg-black sm:bg-transparent h-full ${
          navIsOpen ? "w-1/2" : "w-0"
        } sm:w-[calc(100%-190px)]`}
      >
        <ul className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 p-6 sm:p-0">
          {routes.map((route, index) => (
            <NavItem
              {...route}
              isFocusable={!navIsOpen ? false : true}
              renderBreakline={index !== routes.length - 1}
              key={route.href}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}
