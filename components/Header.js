import React, { Fragment, useState, useRef } from "react";
import Link from "next/link";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  BanknotesIcon,
  FireIcon,
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  ClipboardIcon,
  ArchiveBoxIcon,
  LinkIcon,
  DocumentIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  DocumentArrowDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import LogoW from "./LogoW";
import LogoB from "./LogoB";

const products = [
  {
    name: "Fundraising Support",
    description:
      "Castle Capital connects you with angel investors and provides support beyond funding for your project.",
    href: "#services",
    icon: BanknotesIcon,
  },
  {
    name: "Marketing Strategy",
    description:
      "Stand out in the DeFi landscape with our dynamic marketing strategies, shaped by keen market insights and user trends, as we craft unique narratives to help you make an impact.",
    href: "#services",
    icon: FireIcon,
  },
  {
    name: "Business Development",
    description:
      "Unlock growth opportunities and scalable operations by leveraging our industry knowledge and established networks to identify strategic partnerships and collaborations.",
    href: "#services",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "On-Chain Analysis",
    description:
      "Gain a strategic advantage with our on-chain data analysis, delivering actionable insights by decoding user behavior, trend movements, and competitive dynamics.",
    href: "#services",
    icon: LinkIcon,
  },
  {
    name: "Documentation",
    description:
      "Our documentation services simplify complex DeFi concepts, fostering community engagement and driving project growth by distilling complexity into comprehension.",
    href: "#services",
    icon: ClipboardIcon,
  },
  {
    name: "Content Creation",
    description:
      "Our ghostwriting service delivers high-quality content tailored to your brand's voice, utilizing an extensive Key Opinion Leader network when necessary, to meet all your content needs.",
    href: "#services",
    icon: ArchiveBoxIcon,
  },
];
const callsToAction = [
  { name: "Subscribe now", href: "#subscribe", icon: DocumentIcon },
  { name: "Contact Us", href: "#contact", icon: EnvelopeIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleScroll = (e) => {
    e.preventDefault();
    console.log(e);
    e.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="isolate bg-gray-900 fixed z-50 w-screen">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 py-3">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Castle Capital</span>
            <LogoW />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-[#6379E9]">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-gray-900 pt-20 shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-indigo-500"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <Popover.Button
                        as={Link}
                        href={item.href}
                        className="mt-6 block font-semibold text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Popover.Button>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-700">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-500"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="#newsletter"
            className="text-sm font-semibold leading-6 text-white hover:text-[#6379E9]"
          >
            Newsletter
          </Link>
          <Link
            href="#aboutus"
            className="text-sm font-semibold leading-6 text-white hover:text-[#6379E9]"
          >
            About Us
          </Link>
          <Link
            href="#vision"
            scroll={false}
            className="text-sm font-semibold leading-6 text-white hover:text-[#6379E9]"
          >
            Vision
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Castle Capital</span>
              <LogoB />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href="#newsletter"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Newsletter
                </a>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href="#vision"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Vision
                </a>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href="#aboutus"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
