import Link from "next/link";
import { raleway } from "./Fonts";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <section className="flex flex-col items-center h-[370px]">
      {/* header */}
      <h2 className="mt-14 font-bold tracking-tight text-4xl">article pal.</h2>
      {/* links */}
      <ul className={cn("flex space-x-5 mt-5", raleway.className)}>
        {footerLinks.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href}>
                <span className="hover:border-b-2 pb-1 border-foreground transition">
                  {link.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* footer's footer */}
      <Separator className="w-[800px] my-10 bg-foreground" />
      <p className={(cn("text-foreground/50 "), raleway.className)}>
        © 2024 ethancreates. All rights reserved.
      </p>
    </section>
  );
};

const footerLinks = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "How-To",
    href: "/#howto",
  },
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "FAQs",
    href: "/#faqs",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
  {
    title: "Sign-Up",
    href: "/#signup",
  },
  {
    title: "Sign-In",
    href: "/#signin",
  },
];
export default Footer;
