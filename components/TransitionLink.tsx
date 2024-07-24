"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkInterface extends LinkProps {
  href: string;
  children: React.ReactNode;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const TransitionLink = ({
  href,
  children,
  ...props
}: TransitionLinkInterface) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("opacity-0 bg-black translate-y-10 blur-md");

    await sleep(500);

    router.push(href);

    await sleep(500);

    body?.classList.remove("opacity-0 bg-black translate-y-10 blur-md");
  };

  return (
    <Link onClick={handleTransition} href={href}>
      {children}
    </Link>
  );
};

export default TransitionLink;
