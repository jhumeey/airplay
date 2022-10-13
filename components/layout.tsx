import { Dialog, Transition } from "@headlessui/react";
import { HomeIcon, MenuIcon, XIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Fragment, useState } from "react";

import Logo from "../public/images/airplay-logo.svg";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: false },
  { name: "Trending", href: "/trending", icon: StarIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="h-full flex min-h-screen">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black-play-01 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <Image src={Logo} width={150} height={100} />
                  </div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="px-2 space-y-1 border border-b border-[#282828]">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-play-04"
                              : "text-gray-play-04 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-play-04"
                                : "text-gray-play-04 group-hover:text-gray-500",
                              "mr-4 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="b">

                    </div>
                  </nav>
                </div>
                {/* <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          Whitney Francis
                        </p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-play-06 bg-black-play-01">
              <div className="flex-1 flex flex-col pt-1 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <Image src={Logo} width={150} height={100} />
                </div>
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1 py-4 border-b border-[#282828]">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-black-play-03 text-gray-play-04"
                            : "text-gray-play-04 hover:bg-black-play-06 hover:text-gray-play-07",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-play-04"
                              : "text-gray-play-04 group-hover:text-gray-play-07",
                            "mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-4 px-4 space-y-1 flex flex-col gap-4">
                    <a className="text-gray-play-04 hover:bg-black-play-06 hover:text-gray-play-07 text-sm" href="/heart-break">Heartbreak Songs</a>
                    <a className="text-gray-play-04 hover:bg-black-play-06 hover:text-gray-play-07 text-sm" href="/love">Love Songs</a>
                    <a className="text-gray-play-04 hover:bg-black-play-06 hover:text-gray-play-07 text-sm" href="/sad">Sad Songs</a>
                    <a className="text-gray-play-04 hover:bg-black-play-06 hover:text-gray-play-07 text-sm" href="/workout">Workout Songs</a>
                    <a className="text-gray-play-04 hover:bg-black-play-06 hover:text-gray-play-07 text-sm" href="/workout">Chill Songs</a>
                  </div>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-play-06 p-4">
                <div className="flex-shrink-0 w-full group block">
                  <div className="flex items-center h-[300px]">
                    <div className="rounded-md bg-black-play-06 p-4 text-center h-full flex flex-col gap-3">
                      <h3 className="text-lg text-white py-6">
                        Got Suggestions for this app ?
                      </h3>
                      <a
                        className="text-base text-white border border-[#472510] p-4 rounded-md"
                        href="https://twitter.com/yakubu_jumoke"
                        target="_blank"
                      >
                        Say Hi on Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-black-play-01 border-b border-gray-play-05 px-4 py-1.5">
              <div>
                <Image src={Logo} width={150} height={100} />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative z-0 flex overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
