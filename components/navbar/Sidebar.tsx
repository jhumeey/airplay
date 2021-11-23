import * as React from "react";
import Link from "next/link";
import { sidebarLinks } from "../../utils/nav-menu";
import { useRouter } from "next/router";
import { ToggleProps } from "./types";

const Sidebar = (props: ToggleProps) => {
  const router = useRouter();
  return (
    <div
      id="menu"
      className={`sticky top-0 z-10 flex-col ${
        props.toggleState ? "" : "hidden"
      } h-screen px-4 py-4 bg-black-brand-09 shadow-inner w-full lg:w-60 xl:w-64 2xl:w-80 lg:px-6 xl:px-8 lg:py-6 lg:flex overflow-scroll border-r border-gray-brand-03`}
    >
      <div className="flex-1 py-4">
        <a href="/" className="hidden md:block">
          <span className="sr-only">Fueler Resources</span>
          <svg
            width="139"
            height="20"
            viewBox="0 0 67 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.5C1 5.30653 1.47411 4.16193 2.31802 3.31802C3.16193 2.47411 4.30653 2 5.5 2M10 6.5C10 7.69347 9.52589 8.83807 8.68198 9.68198C7.83807 10.5259 6.69347 11 5.5 11L10 6.5ZM10 6.5C10 5.30653 9.52589 4.16193 8.68198 3.31802C7.83807 2.47411 6.69347 2 5.5 2L10 6.5ZM10 6.5H1H10ZM5.5 11C4.30653 11 3.16193 10.5259 2.31802 9.68198C1.47411 8.83807 1 7.69347 1 6.5L5.5 11ZM5.5 11C6.3285 11 7 8.985 7 6.5C7 4.015 6.3285 2 5.5 2V11ZM5.5 11C4.6715 11 4 8.985 4 6.5C4 4.015 4.6715 2 5.5 2V11Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.27 10L13.3 2.7H14.31L15.96 9.12H16.27L17.61 3H18.86L20.37 9.12H20.68L22.15 2.7H23.13L21.34 10H19.66L18.23 4.3L16.94 10H15.27ZM26.3755 10.18C25.9089 10.18 25.5055 10.1 25.1655 9.94C24.8255 9.78 24.5489 9.57 24.3355 9.31C24.1222 9.04333 23.9622 8.74667 23.8555 8.42C23.7555 8.09333 23.7055 7.76 23.7055 7.42V7.24C23.7055 6.89333 23.7555 6.55667 23.8555 6.23C23.9622 5.90333 24.1222 5.61 24.3355 5.35C24.5489 5.08333 24.8189 4.87333 25.1455 4.72C25.4789 4.56 25.8689 4.48 26.3155 4.48C26.8955 4.48 27.3722 4.60667 27.7455 4.86C28.1255 5.10667 28.4055 5.42667 28.5855 5.82C28.7722 6.21333 28.8655 6.63333 28.8655 7.08V7.51H24.6255C24.6589 8.03667 24.8155 8.47333 25.0955 8.82C25.3755 9.16667 25.8022 9.34 26.3755 9.34C26.7955 9.34 27.1355 9.24667 27.3955 9.06C27.6622 8.87333 27.8222 8.65667 27.8755 8.41H28.7755C28.6622 8.96333 28.3922 9.39667 27.9655 9.71C27.5389 10.0233 27.0089 10.18 26.3755 10.18ZM26.3155 5.32C25.8355 5.32 25.4589 5.45667 25.1855 5.73C24.9122 5.99667 24.7389 6.35 24.6655 6.79H27.9255C27.8655 6.33667 27.7022 5.98 27.4355 5.72C27.1689 5.45333 26.7955 5.32 26.3155 5.32ZM33.0486 10.18C32.5753 10.18 32.1586 10.07 31.7986 9.85C31.4453 9.63 31.1753 9.31333 30.9886 8.9V10H30.2286V2.7H31.1886V5.58C31.3886 5.20667 31.6586 4.93 31.9986 4.75C32.3386 4.57 32.7153 4.48 33.1286 4.48C33.6419 4.48 34.0886 4.60333 34.4686 4.85C34.8486 5.09667 35.1453 5.42667 35.3586 5.84C35.5719 6.25333 35.6786 6.71333 35.6786 7.22V7.4C35.6786 7.9 35.5686 8.36333 35.3486 8.79C35.1286 9.21 34.8219 9.54667 34.4286 9.8C34.0353 10.0533 33.5753 10.18 33.0486 10.18ZM32.9386 9.34C33.2986 9.34 33.6119 9.25333 33.8786 9.08C34.1453 8.90667 34.3519 8.67 34.4986 8.37C34.6453 8.06333 34.7186 7.71 34.7186 7.31C34.7186 6.71 34.5553 6.23 34.2286 5.87C33.9019 5.50333 33.4719 5.32 32.9386 5.32C32.6186 5.32 32.3219 5.39333 32.0486 5.54C31.7753 5.68 31.5553 5.88667 31.3886 6.16C31.2286 6.42667 31.1486 6.75 31.1486 7.13V7.59C31.1486 7.95667 31.2319 8.27 31.3986 8.53C31.5653 8.79 31.7853 8.99 32.0586 9.13C32.3319 9.27 32.6253 9.34 32.9386 9.34ZM39.6331 10.18C39.0265 10.18 38.5098 10.08 38.0831 9.88C37.6565 9.68 37.3298 9.40333 37.1031 9.05C36.8765 8.69667 36.7631 8.29667 36.7631 7.85H37.7431C37.7431 8.07 37.7998 8.29 37.9131 8.51C38.0331 8.73 38.2298 8.91333 38.5031 9.06C38.7831 9.20667 39.1598 9.28 39.6331 9.28C40.0731 9.28 40.4331 9.21667 40.7131 9.09C40.9931 8.95667 41.1998 8.78667 41.3331 8.58C41.4665 8.36667 41.5331 8.13667 41.5331 7.89C41.5331 7.59 41.4031 7.34333 41.1431 7.15C40.8831 6.95 40.5031 6.82667 40.0031 6.78L39.1931 6.71C38.5465 6.65667 38.0298 6.45667 37.6431 6.11C37.2565 5.76333 37.0631 5.30667 37.0631 4.74C37.0631 4.29333 37.1698 3.90333 37.3831 3.57C37.6031 3.23667 37.9065 2.97667 38.2931 2.79C38.6798 2.59667 39.1298 2.5 39.6431 2.5C40.1498 2.5 40.5965 2.59333 40.9831 2.78C41.3698 2.96667 41.6698 3.23 41.8831 3.57C42.1031 3.90333 42.2131 4.30333 42.2131 4.77H41.2331C41.2331 4.53667 41.1765 4.31667 41.0631 4.11C40.9565 3.90333 40.7865 3.73333 40.5531 3.6C40.3198 3.46667 40.0165 3.4 39.6431 3.4C39.2831 3.4 38.9831 3.46333 38.7431 3.59C38.5098 3.71667 38.3331 3.88333 38.2131 4.09C38.0998 4.29 38.0431 4.50667 38.0431 4.74C38.0431 5.00667 38.1465 5.24333 38.3531 5.45C38.5598 5.65667 38.8665 5.77667 39.2731 5.81L40.0831 5.88C40.8298 5.94667 41.4198 6.15333 41.8531 6.5C42.2931 6.84 42.5131 7.30333 42.5131 7.89C42.5131 8.33667 42.3931 8.73333 42.1531 9.08C41.9131 9.42667 41.5765 9.69667 41.1431 9.89C40.7098 10.0833 40.2065 10.18 39.6331 10.18ZM46.3077 10.18C45.8477 10.18 45.4477 10.1 45.1077 9.94C44.7743 9.78 44.4977 9.56667 44.2777 9.3C44.0577 9.02667 43.891 8.72667 43.7777 8.4C43.671 8.07333 43.6177 7.74667 43.6177 7.42V7.24C43.6177 6.9 43.671 6.56667 43.7777 6.24C43.891 5.91333 44.0577 5.62 44.2777 5.36C44.5043 5.09333 44.7843 4.88 45.1177 4.72C45.451 4.56 45.841 4.48 46.2877 4.48C46.7343 4.48 47.1343 4.56333 47.4877 4.73C47.8477 4.89667 48.1343 5.13333 48.3477 5.44C48.5677 5.74 48.691 6.09667 48.7177 6.51H47.7977C47.751 6.17667 47.5977 5.9 47.3377 5.68C47.0777 5.45333 46.7277 5.34 46.2877 5.34C45.9077 5.34 45.591 5.42667 45.3377 5.6C45.0843 5.77333 44.8943 6.01 44.7677 6.31C44.641 6.61 44.5777 6.95 44.5777 7.33C44.5777 7.69667 44.641 8.03333 44.7677 8.34C44.8943 8.64 45.0843 8.88 45.3377 9.06C45.5977 9.23333 45.921 9.32 46.3077 9.32C46.7543 9.32 47.1143 9.20667 47.3877 8.98C47.661 8.74667 47.8177 8.46 47.8577 8.12H48.7777C48.7577 8.54 48.6343 8.90333 48.4077 9.21C48.1877 9.51667 47.8943 9.75667 47.5277 9.93C47.1677 10.0967 46.761 10.18 46.3077 10.18ZM52.5421 10.18C52.0754 10.18 51.6654 10.1 51.3121 9.94C50.9588 9.78 50.6588 9.57 50.4121 9.31C50.1721 9.04333 49.9888 8.74667 49.8621 8.42C49.7421 8.09333 49.6821 7.76 49.6821 7.42V7.24C49.6821 6.9 49.7454 6.56667 49.8721 6.24C49.9988 5.90667 50.1854 5.61 50.4321 5.35C50.6788 5.08333 50.9788 4.87333 51.3321 4.72C51.6854 4.56 52.0888 4.48 52.5421 4.48C52.9954 4.48 53.3988 4.56 53.7521 4.72C54.1054 4.87333 54.4054 5.08333 54.6521 5.35C54.8988 5.61 55.0854 5.90667 55.2121 6.24C55.3388 6.56667 55.4021 6.9 55.4021 7.24V7.42C55.4021 7.76 55.3388 8.09333 55.2121 8.42C55.0921 8.74667 54.9088 9.04333 54.6621 9.31C54.4221 9.57 54.1254 9.78 53.7721 9.94C53.4188 10.1 53.0088 10.18 52.5421 10.18ZM52.5421 9.32C52.9421 9.32 53.2821 9.23333 53.5621 9.06C53.8488 8.88 54.0654 8.64 54.2121 8.34C54.3654 8.04 54.4421 7.70333 54.4421 7.33C54.4421 6.95 54.3654 6.61 54.2121 6.31C54.0588 6.01 53.8388 5.77333 53.5521 5.6C53.2721 5.42667 52.9354 5.34 52.5421 5.34C52.1554 5.34 51.8188 5.42667 51.5321 5.6C51.2454 5.77333 51.0254 6.01 50.8721 6.31C50.7188 6.61 50.6421 6.95 50.6421 7.33C50.6421 7.70333 50.7154 8.04 50.8621 8.34C51.0154 8.64 51.2321 8.88 51.5121 9.06C51.7988 9.23333 52.1421 9.32 52.5421 9.32ZM58.6899 10.16C58.0566 10.16 57.5699 9.95333 57.2299 9.54C56.8899 9.12667 56.7199 8.53 56.7199 7.75V4.65H57.6799V7.94C57.6799 8.36 57.7933 8.69 58.0199 8.93C58.2466 9.16333 58.5533 9.28 58.9399 9.28C59.3399 9.28 59.6666 9.15333 59.9199 8.9C60.1733 8.64 60.2999 8.28667 60.2999 7.84V4.65H61.2599V10H60.4999V8.77C60.3799 9.22333 60.1733 9.57 59.8799 9.81C59.5866 10.0433 59.2033 10.16 58.7299 10.16H58.6899ZM65.1992 10.06C64.7992 10.06 64.4526 10.0033 64.1592 9.89C63.8726 9.77667 63.6492 9.58333 63.4892 9.31C63.3359 9.03 63.2592 8.65333 63.2592 8.18V5.38H62.3392V4.66H63.2592V3.04H64.1792V4.66H66.0192V5.38H64.1792V8.3C64.1792 8.58667 64.2559 8.81 64.4092 8.97C64.5692 9.12333 64.7926 9.2 65.0792 9.2H66.0192V10.06H65.1992Z"
              fill="#3FD080"
            />
          </svg>
        </a>
        <nav className="md:mt-8">
          <ul className="pt-2 space-y-3 text-base side-links">
            {sidebarLinks.map((link) => (
              <li
                key={link.path}
                className={`py-2 text-white pl-4 text-opacity-10 rounded-t list-none `}
              >
                <Link href={link.path}>
                  <a
                    onClick={props.toggleNavBar}
                    className={`text-sm uppercase font-semibold text-center text-gray-brand-01 hover:text-green-brand-01 ${
                      router.asPath === link.path ? `text-green-brand-01` : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
