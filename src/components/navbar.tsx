"use client";

import WordMark from "@/components/wordMark";
import ButtonLink from "@/components/buttonLink";

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

interface NavbarProps {
  settings: Content.SettingsDocument;
}

const NavBar = ({ settings }: NavbarProps) => {
  return (
    <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Glisten.ai Home Page</span>
        </Link>
        <ul className="flex gap-6 items-center">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li  key={item.label} >
                  <ButtonLink field={item.link}>
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center"
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
