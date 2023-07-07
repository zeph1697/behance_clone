import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";
import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={88} height={28} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.text}
              className="hover:text-primary-blue-variant"
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <Link href="/create-project">
              <Button
                title="Share your work"
                textColor="text-black"
                bgColor="bg-white hover:bg-black/5 border-black/10"
              />
            </Link>

            <ProfileMenu session={session} />

            <Link
              href="https://adobe.com"
              target="_blank"
              className="hover:opacity-75"
            >
              <Image
                src="/adobe-logo.svg"
                width={72}
                height={20}
                alt="adobe"
                className="hidden sm:flex"
              />
            </Link>
          </>
        ) : (
          <Link href="/login">
            <Button title="Sign In" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
