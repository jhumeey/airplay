import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Navbar from "../components/navbar/LandingNavbar";
import css from "../public/images/css.svg";
import cylinder from "../public/images/cylinder.svg";
import ellipse from "../public/images/Ellipse.svg";
import job from "../public/images/job.svg";
import podcast from "../public/images/podcast.svg";
import settings from "../public/images/settings.svg";
import web from "../public/images/web.svg";
import youtube from "../public/images/youtube.svg";

const LandingPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="web-resources" key="ogtitle" />
        <meta
          property="og:description"
          content="free resources for web development"
          key="ogdesc"
        />
        <title>Web Dev</title>
      </Head>
      <main className="flex flex-col w-full bg-black-brand-01 overflow-hidden">
        <div className="container px-4 mx-auto my-4">
          <Navbar />
        </div>
        <div className="text-gray-600 body-font h-100 container md:px-4 mx-auto">
          <section className="text-center py-20 relative">
            <h1 className="text-3xl md:text-6xl text-white py-4">
              Unlock Over 500+ FREE Web Resources
            </h1>
            <p className="text-xl text-gray-brand-02 py-4">
              Discover amazing web development resources packed in one place.
            </p>
            <Link href="/resources">
              <a className="font-medium text-lg transition duration-500 ease-in-out bg-green-brand-01 rounded text-black-brand-01 px-7 py-3 my-4 inline-block hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110 ">
                Browse Resources
              </a>
            </Link>
            <div className="absolute top-5 right-5 w-10 h-10">
              <Image src={cylinder} />
            </div>
            <div className="absolute top-5 left-1 w-10 h-10">
              <Image src={job} />
            </div>
            <div className="absolute bottom-8 left-32 md:bottom-5 md:left-40 w-10 h-10">
              <Image src={youtube} />
            </div>
            <div className="absolute bottom-5 right-40 w-10 h-10">
              <Image src={settings} />
            </div>
            <div className="absolute  top-80 md:top-auto right-auto w-10 h-10">
              <Image src={podcast} />
            </div>
            <div className="absolute bottom-1 right-80 w-10 h-10">
              <Image src={web} />
            </div>

            <div className="absolute md:top-1 md:right-96 w-10 h-10">
              <Image src={css} />
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="container px-2 md:px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-medium title-font py-4 text-green-400">
                  What you get
                </h1>
                <p className="lg:w-1/2 w-full text-2xl leading-relaxed text-gray-500">
                  Fueler web resources is packed with amazing and robust
                  features
                </p>
              </div>
              <section className="relative py-20 2xl:py-40 overflow-hidden">
                <div className="relative container px-4 mx-auto">
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -m-6">
                      <div className="w-full p-6">
                      <div className="p-8 border border-gray-brand-04 rounded-lg h-[400px]">
                          <span className="flex mb-14 justify-center items-center w-20 h-20 bg-blue-500 rounded-lg">
                            <svg
                              className="w-8 h-8"
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0)">
                                <path
                                  d="M22.6042 34.9999H2.1875C0.981458 34.9999 0 34.0185 0 32.8124V12.3958C0 11.1897 0.981458 10.2083 2.1875 10.2083H22.6042C23.8102 10.2083 24.7917 11.1897 24.7917 12.3958V32.8124C24.7917 34.0185 23.8102 34.9999 22.6042 34.9999ZM2.1875 11.6666C1.78646 11.6666 1.45833 11.9933 1.45833 12.3958V32.8124C1.45833 33.2149 1.78646 33.5416 2.1875 33.5416H22.6042C23.0052 33.5416 23.3333 33.2149 23.3333 32.8124V12.3958C23.3333 11.9933 23.0052 11.6666 22.6042 11.6666H2.1875Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M34.2702 5.83333C33.8677 5.83333 33.541 5.50667 33.541 5.10417V3.64583C33.541 2.43979 32.5596 1.45833 31.3535 1.45833H29.8952C29.4927 1.45833 29.166 1.13167 29.166 0.729167C29.166 0.326667 29.4927 0 29.8952 0H31.3535C33.3646 0 34.9993 1.63625 34.9993 3.64583V5.10417C34.9993 5.50667 34.6727 5.83333 34.2702 5.83333Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M6.56217 5.83333C6.15967 5.83333 5.83301 5.50667 5.83301 5.10417V3.64583C5.83301 1.63625 7.4678 0 9.47884 0H10.9372C11.3397 0 11.6663 0.326667 11.6663 0.729167C11.6663 1.13167 11.3397 1.45833 10.9372 1.45833H9.47884C8.2728 1.45833 7.29134 2.43979 7.29134 3.64583V5.10417C7.29134 5.50667 6.96467 5.83333 6.56217 5.83333Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M24.0618 1.45833H16.7702C16.3677 1.45833 16.041 1.13167 16.041 0.729167C16.041 0.326667 16.3677 0 16.7702 0H24.0618C24.4643 0 24.791 0.326667 24.791 0.729167C24.791 1.13167 24.4643 1.45833 24.0618 1.45833Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M31.3535 29.1666H29.8952C29.4927 29.1666 29.166 28.8399 29.166 28.4374C29.166 28.0349 29.4927 27.7083 29.8952 27.7083H31.3535C32.5596 27.7083 33.541 26.7268 33.541 25.5208V24.0624C33.541 23.6599 33.8677 23.3333 34.2702 23.3333C34.6727 23.3333 34.9993 23.6599 34.9993 24.0624V25.5208C34.9993 27.5303 33.3646 29.1666 31.3535 29.1666Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M34.2702 18.9583C33.8677 18.9583 33.541 18.6316 33.541 18.2291V10.9374C33.541 10.5349 33.8677 10.2083 34.2702 10.2083C34.6727 10.2083 34.9994 10.5349 34.9994 10.9374V18.2291C34.9994 18.6316 34.6727 18.9583 34.2702 18.9583Z"
                                  fill="white"
                                ></path>
                              </g>
                            </svg>
                          </span>
                          <h3 className="mt-12 mb-6 text-3xl font-bold font-heading text-white">
                            Frequently updated resources
                          </h3>
                          <p className="text-lg text-gray-200">
                            The brown me quam, sagittis porttitor lorem vel,
                            commodo fringilla nisl.
                          </p>
                        </div>
                      </div>
                      <div className="w-full p-6">
                        <div className="p-8  border border-gray-brand-04 rounded-lg h-[400px]">
                          <span className="flex mb-14 justify-center items-center w-20 h-20 bg-purple-500 rounded-lg">
                            <svg
                              className="w-8 h-8"
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0)">
                                <path
                                  d="M24.0625 18.9583C23.7402 18.9583 23.431 18.8927 23.1467 18.7615L17.5 16.1175L11.8592 18.7585C11.569 18.8927 11.2598 18.9583 10.9375 18.9583C9.73146 18.9583 8.75 17.9769 8.75 16.7708C8.75 16.4529 8.81417 16.1583 8.94833 15.8681L15.5079 1.28917C15.8419 0.510417 16.6265 0 17.5 0C18.3735 0 19.1581 0.510417 19.4965 1.30083L26.0546 15.874C26.1858 16.1583 26.25 16.4529 26.25 16.7708C26.25 17.9769 25.2685 18.9583 24.0625 18.9583ZM17.5 14.5833C17.605 14.5833 17.7115 14.6067 17.8092 14.6519L23.7592 17.4373C24.166 17.6225 24.7917 17.2856 24.7917 16.7708C24.7917 16.6629 24.7712 16.5754 24.7275 16.4763L18.1621 1.88854C17.9346 1.35771 17.061 1.36792 16.8423 1.87833L10.2754 16.4719C10.2287 16.5754 10.2083 16.6629 10.2083 16.7708C10.2083 17.2856 10.8092 17.6327 11.2467 17.4358L17.1908 14.6533C17.2885 14.6067 17.395 14.5833 17.5 14.5833Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M17.4997 35C8.65488 35 1.45801 27.8031 1.45801 18.9583C1.45801 12.9194 4.7903 7.46227 10.154 4.71769C10.507 4.53685 10.9518 4.6754 11.1355 5.0356C11.3193 5.3929 11.1763 5.83331 10.8176 6.0156C5.94384 8.50936 2.91634 13.4691 2.91634 18.9583C2.91634 26.9996 9.45842 33.5417 17.4997 33.5417C25.5409 33.5417 32.083 26.9996 32.083 18.9583C32.083 13.4794 29.0613 8.51956 24.1963 6.0156C23.8376 5.83185 23.6961 5.39144 23.8813 5.03414C24.0665 4.67539 24.507 4.53539 24.8628 4.7206C30.2163 7.47394 33.5413 12.931 33.5413 18.9583C33.5413 27.8031 26.3445 35 17.4997 35Z"
                                  fill="white"
                                ></path>
                              </g>
                            </svg>
                          </span>
                          <h3 className="mt-12 mb-6 text-3xl font-bold font-heading text-white">
                            Categorized Resources
                          </h3>
                          <p className="text-lg text-gray-200">
                            It’s over, maecenas tincidunt malesuada dolor sit
                            amet malesuada.
                          </p>
                        </div>
                      </div>
                      <div className="w-full p-6">
                        <div className="p-8 border border-gray-brand-04 rounded-lg h-[400px]">
                          <span className="flex mb-14 justify-center items-center w-20 h-20 bg-green-500 rounded-lg">
                            <svg
                              className="w-8 h-8"
                              width="36"
                              height="35"
                              viewBox="0 0 36 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0)">
                                <path
                                  d="M32.25 35H5.25C3.183 35 1.5 33.3638 1.5 31.3542V3.64588C1.5 3.24338 1.836 2.91672 2.25 2.91672C2.664 2.91672 3 3.24338 3 3.64588V31.3542C3 32.5603 4.0095 33.5417 5.25 33.5417H31.5V6.56255C31.5 6.16005 31.836 5.83338 32.25 5.83338C32.664 5.83338 33 6.16005 33 6.56255V34.2709C33 34.6734 32.664 35 32.25 35Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M32.25 7.29167H5.25C3.183 7.29167 1.5 5.65542 1.5 3.64583C1.5 1.63625 3.183 0 5.25 0H29.25C29.664 0 30 0.326667 30 0.729167V5.83333H32.25C32.664 5.83333 33 6.16 33 6.5625C33 6.965 32.664 7.29167 32.25 7.29167ZM5.25 1.45833C4.0095 1.45833 3 2.43979 3 3.64583C3 4.85187 4.0095 5.83333 5.25 5.83333H28.5V1.45833H5.25Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M12.9868 27.7055C12.2338 27.7055 11.6158 27.4897 11.1718 27.0566C10.2898 26.1991 10.2808 24.6838 11.1478 22.7866C11.9158 21.1051 13.3018 19.2443 15.0478 17.5482C16.7938 15.8507 18.7063 14.5047 20.4358 13.7565C22.3858 12.9122 23.9443 12.9209 24.8278 13.7799C25.7098 14.6374 25.7188 16.154 24.8518 18.0499C24.0838 19.7313 22.6978 21.5922 20.9518 23.2882C19.2058 24.9857 17.2933 26.3318 15.5638 27.0799C14.5963 27.4955 13.7263 27.7055 12.9868 27.7055ZM23.0143 14.582C22.5043 14.582 21.8188 14.754 21.0448 15.088C19.4803 15.7647 17.7268 17.0043 16.1068 18.5778C14.4868 20.1513 13.2148 21.8561 12.5188 23.3772C11.9488 24.627 11.8378 25.6405 12.2323 26.024C12.6268 26.4076 13.6693 26.2997 14.9548 25.7455C16.5193 25.0688 18.2728 23.8293 19.8928 22.2557C21.5128 20.6822 22.7863 18.9774 23.4823 17.4549C24.0523 16.2051 24.1633 15.1916 23.7688 14.808C23.6113 14.6563 23.3503 14.582 23.0143 14.582Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M23.0128 27.7054C22.2733 27.7054 21.4033 27.4969 20.4358 27.0784C18.7063 26.3317 16.7923 24.9842 15.0478 23.2867C13.3018 21.5892 11.9173 19.7298 11.1478 18.0484C10.2808 16.1525 10.2898 14.6359 11.1718 13.7784C12.0523 12.9209 13.6138 12.9121 15.5638 13.755C17.2933 14.5017 19.2073 15.8492 20.9518 17.5467C22.6978 19.2442 24.0823 21.1036 24.8518 22.785C25.7188 24.6823 25.7098 26.1975 24.8278 27.055C24.3838 27.4882 23.7658 27.7054 23.0128 27.7054ZM12.9853 14.5819C12.6478 14.5819 12.3898 14.6563 12.2323 14.8094C11.8378 15.1929 11.9488 16.2065 12.5188 17.4563C13.2148 18.9773 14.4898 20.6821 16.1083 22.2571C17.7268 23.8321 19.4803 25.0702 21.0463 25.7469C22.3318 26.3025 23.3743 26.4075 23.7688 26.0254C24.1633 25.6419 24.0523 24.6284 23.4823 23.3786C22.7863 21.8575 21.5113 20.1527 19.8928 18.5777C18.2743 17.0027 16.5208 15.7646 14.9548 15.0879C14.1808 14.754 13.4953 14.5819 12.9853 14.5819ZM11.7013 14.2932H11.7163H11.7013Z"
                                  fill="white"
                                ></path>
                              </g>
                            </svg>
                          </span>
                          <h3 className="mt-12 mb-6 text-3xl font-bold font-heading text-white">
                            Documents
                          </h3>
                          <p className="text-lg text-gray-200">
                            The brown me quam, sagittis porttitor lorem vel,
                            commodo fringilla nisl.
                          </p>
                        </div>
                      </div>
                      <div className="w-full p-6">
                        <div className="p-8 border border-gray-brand-04 rounded-lg h-[400px]">
                          <span className="flex mb-14 justify-center items-center w-20 h-20 bg-pink-500 rounded-lg">
                            <svg
                              className="w-8 h-8"
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clip-rule="evenodd"
                                d="M24.0618 13.1252C24.0618 12.8938 23.952 12.6761 23.766 12.5386C23.5797 12.4012 23.3394 12.3602 23.1183 12.4282L14.3682 15.1206C14.0623 15.2147 13.8535 15.4974 13.8535 15.8175V21.5363C13.4245 21.288 12.9264 21.146 12.3952 21.146C10.7844 21.146 9.47852 22.4518 9.47852 24.0627C9.47852 25.6735 10.7844 26.9793 12.3952 26.9793C14.0044 26.9793 15.3092 25.676 15.3118 24.0673V24.0627V16.356L22.6035 14.1124V20.0779C22.1745 19.8297 21.6765 19.6877 21.1452 19.6877C19.5343 19.6877 18.2285 20.9935 18.2285 22.6043C18.2285 24.2152 19.5343 25.521 21.1452 25.521C22.7545 25.521 24.0592 24.2177 24.0618 22.609V22.6043V13.1252ZM22.6035 22.6043C22.6035 21.7989 21.9506 21.146 21.1452 21.146C20.3397 21.146 19.6868 21.7989 19.6868 22.6043C19.6868 23.4098 20.3397 24.0627 21.1452 24.0627C21.9506 24.0627 22.6035 23.4098 22.6035 22.6043ZM12.3952 22.6043C11.5898 22.6043 10.9368 23.2572 10.9368 24.0627C10.9368 24.8681 11.5898 25.521 12.3952 25.521C13.2006 25.521 13.8535 24.8681 13.8535 24.0627C13.8535 23.2572 13.2006 22.6043 12.3952 22.6043Z"
                                fill="white"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clip-rule="evenodd"
                                d="M10.208 3.646C8.19447 3.646 6.56217 5.27829 6.56217 7.29183V8.09393C4.89804 8.43172 3.64551 9.903 3.64551 11.6668V27.7085C3.64551 29.722 5.27781 31.3543 7.29134 31.3543H27.708C29.7215 31.3543 31.3538 29.722 31.3538 27.7085V11.6668C31.3538 9.903 30.1013 8.43172 28.4372 8.09393V7.29183C28.4372 5.27829 26.8049 3.646 24.7913 3.646H10.208ZM26.9788 8.021V7.29183C26.9788 6.0837 25.9994 5.10433 24.7913 5.10433H10.208C8.99988 5.10433 8.02051 6.0837 8.02051 7.29183V8.021H26.9788ZM7.29134 9.47933C6.08321 9.47933 5.10384 10.4587 5.10384 11.6668V27.7085C5.10384 28.9166 6.08321 29.896 7.29134 29.896H27.708C28.9161 29.896 29.8955 28.9166 29.8955 27.7085V11.6668C29.8955 10.4587 28.9161 9.47933 27.708 9.47933H7.29134Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                          <h3 className="mt-12 mb-6 text-3xl font-bold font-heading text-white">
                            Weekly updates
                          </h3>
                          <p className="text-lg text-gray-200">
                            Again and again vehicula libero at nibh volutpat
                            lacinia non in.
                          </p>
                        </div>
                      </div>
                      <div className="w-full p-6">
                        <div className="p-8 border border-gray-brand-04 rounded-lg h-[400px]">
                          <span className="flex mb-14 justify-center items-center w-20 h-20 bg-yellow-500 rounded-lg">
                            <svg
                              className="w-8 h-8"
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M28.6406 14.1483H28.6691V10.4266C28.6691 4.48283 23.8661 0 17.4994 0C11.1326 0 6.32965 4.48283 6.32965 10.4266V14.1483H6.36011C4.93069 16.2796 4.0957 18.8415 4.0957 21.5948C4.0957 28.9869 10.1087 35 17.4994 35C24.8908 35 30.9046 28.987 30.9053 21.5948C30.9053 18.8415 30.0702 16.2796 28.6406 14.1483ZM7.81895 10.4266C7.81895 5.24826 11.8892 1.4893 17.4994 1.4893C23.1096 1.4893 27.1798 5.24826 27.1798 10.4266V12.3318C24.7379 9.78162 21.3013 8.19113 17.5001 8.19113C13.6979 8.19113 10.2608 9.78244 7.81895 12.3336V10.4266ZM17.5001 33.5107C10.93 33.5107 5.585 28.1649 5.585 21.5948C5.585 15.0256 10.9293 9.68043 17.4994 9.68043C24.071 9.68043 29.4153 15.0256 29.416 21.5948C29.416 28.1649 24.0717 33.5107 17.5001 33.5107Z"
                                fill="white"
                              ></path>
                              <path
                                d="M17.4996 14.8931C15.4466 14.8931 13.7764 16.5633 13.7764 18.6163C13.7764 19.7802 14.3378 20.8808 15.2657 21.5793V24.5735C15.2657 25.8052 16.268 26.8074 17.4996 26.8074C18.7305 26.8074 19.7336 25.8052 19.7336 24.5735V21.5793C20.6613 20.88 21.2229 19.7802 21.2229 18.6163C21.2229 16.5633 19.5518 14.8931 17.4996 14.8931ZM18.6136 20.5383C18.3842 20.6709 18.2443 20.9173 18.2443 21.1816V24.5735C18.2443 24.9846 17.9099 25.3181 17.4996 25.3181C17.0894 25.3181 16.755 24.9846 16.755 24.5735V21.1816C16.755 20.9173 16.6142 20.6723 16.3849 20.5383C15.6841 20.1302 15.2657 19.4116 15.2657 18.6163C15.2657 17.3847 16.268 16.3824 17.4996 16.3824C18.7305 16.3824 19.7336 17.3847 19.7336 18.6163C19.7336 19.4116 19.315 20.1302 18.6136 20.5383Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                          <h3 className="mt-12 mb-6 text-3xl font-bold font-heading text-white">
                            Internal security
                          </h3>
                          <p className="text-lg text-gray-200">
                            Again and again vehicula libero at nibh volutpat
                            lacinia non in.
                          </p>
                        </div>
                      </div>
                      <div className="w-full p-6">
                        <div className="p-8 border border-gray-brand-04 rounded-lg h-[400px]">
                          <span className="flex mb-14 justify-center items-center w-20 h-20 bg-orange-500 rounded-lg">
                            <svg
                              className="w-8 h-8"
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0)">
                                <path
                                  d="M19.6875 21.8752C19.5009 21.8752 19.3142 21.8038 19.1713 21.6623L10.4213 12.9123C10.1369 12.6279 10.1369 12.1656 10.4213 11.8813C10.7057 11.5969 11.168 11.5969 11.4523 11.8813L20.2023 20.6313C20.4867 20.9156 20.4867 21.3779 20.2023 21.6623C20.0609 21.8038 19.8742 21.8752 19.6875 21.8752Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M0.728731 32.0832C0.537689 32.0832 0.351023 32.0074 0.212481 31.8703C0.0403977 31.6982 -0.0339773 31.4503 0.0126894 31.2111L2.92936 16.6278C3.00519 16.2486 3.35811 15.989 3.74748 16.0488C6.71373 16.4732 9.75727 15.4597 11.8791 13.3393C12.1635 13.0549 12.6258 13.0549 12.9102 13.3393C13.1946 13.6236 13.1946 14.0859 12.9102 14.3703C10.6294 16.6511 7.41665 17.8207 4.22873 17.5684L1.65769 30.4251L14.5144 27.8541C14.2635 24.6559 15.4316 21.4534 17.7125 19.1726C17.9969 18.8882 18.4591 18.8882 18.7435 19.1726C19.0279 19.457 19.0279 19.9193 18.7435 20.2036C16.6216 22.3255 15.6096 25.3647 16.0339 28.3353C16.0894 28.7188 15.8341 29.0776 15.455 29.1534L0.871648 32.0701C0.823523 32.0788 0.776856 32.0832 0.728731 32.0832Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M0.729531 32.0834C0.542865 32.0834 0.356198 32.0119 0.213281 31.8705C-0.0710938 31.5861 -0.0710938 31.1238 0.213281 30.8394L6.4112 24.6415C6.69557 24.3571 7.15787 24.3571 7.44224 24.6415C7.72661 24.9259 7.72661 25.3882 7.44224 25.6725L1.24432 31.8705C1.10286 32.0119 0.916198 32.0834 0.729531 32.0834Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M8.74967 26.2498C7.14113 26.2498 5.83301 24.9417 5.83301 23.3332C5.83301 21.7246 7.14113 20.4165 8.74967 20.4165C10.3582 20.4165 11.6663 21.7246 11.6663 23.3332C11.6663 24.9417 10.3582 26.2498 8.74967 26.2498ZM8.74967 21.8748C7.94613 21.8748 7.29134 22.5296 7.29134 23.3332C7.29134 24.1367 7.94613 24.7915 8.74967 24.7915C9.55322 24.7915 10.208 24.1367 10.208 23.3332C10.208 22.5296 9.55322 21.8748 8.74967 21.8748Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M18.2295 20.4167C18.0181 20.4167 17.8081 20.3248 17.6637 20.1484C17.4085 19.8378 17.4552 19.3784 17.7672 19.1217L33.8089 5.99671C34.1195 5.7415 34.5789 5.78817 34.8356 6.10025C35.0908 6.41088 35.0441 6.87025 34.732 7.12692L18.6904 20.2519C18.5562 20.3628 18.3929 20.4167 18.2295 20.4167Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M12.3962 14.5833C12.2401 14.5833 12.0826 14.5337 11.9485 14.4302C11.6306 14.1822 11.5737 13.7243 11.8201 13.4064L22.0285 0.281413C22.2749 -0.0335872 22.7343 -0.0948372 23.0522 0.154538C23.3701 0.400996 23.427 0.858913 23.1791 1.17829L12.9708 14.3033C12.8279 14.487 12.612 14.5833 12.3962 14.5833Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M31.8412 34.5831H7.72917C7.32667 34.5831 7 34.2564 7 33.8539C7 33.4514 7.32667 33.1247 7.72917 33.1247H31.8412C32.6171 33.1247 33.25 32.4918 33.25 31.716C33.25 31.121 32.8737 30.5887 32.3137 30.3874L24.9258 27.7493C23.7985 27.3468 23.0417 26.2706 23.0417 25.0747C23.0417 23.9066 23.7417 22.8712 24.8267 22.4381L30.7912 20.0522C31.1602 19.9035 31.5904 20.0828 31.7392 20.4591C31.8894 20.8324 31.7071 21.2568 31.3323 21.407L25.3677 23.7928C24.8412 24.0028 24.5 24.506 24.5 25.0747C24.5 25.6566 24.869 26.1801 25.4173 26.377L32.8052 29.0151C33.9442 29.4206 34.7083 30.507 34.7083 31.716C34.7083 33.2968 33.4221 34.5831 31.8412 34.5831Z"
                                  fill="white"
                                ></path>
                              </g>
                            </svg>
                          </span>
                          <h3 className="mt-12 mb-6 text-3xl font-bold font-heading text-white">
                            Creative Tools
                          </h3>
                          <p className="text-lg text-gray-200">
                            Again and again vehicula libero at nibh volutpat
                            lacinia non in.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="text-gray-brand-01 body-font">
            {/* <div className="container md:px-5 py-24 mx-auto">
              <h2 className="text-green-brand-01 text-3xl md:text-4xl font-medium text-center py-2 mb-4">
                WebScout In Numbers
              </h2>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 text-center py-4">
                <div className="p-4">
                  <h2 className="title-font text-white font-medium sm:text-4xl text-3xl">
                    500+
                  </h2>
                  <p className="leading-relaxed">Resources</p>
                </div>
                <div className="p-4">
                  <h2 className="title-font text-white font-medium sm:text-4xl text-3xl">
                    100+
                  </h2>
                  <p className="leading-relaxed">Contributions</p>
                </div>
              </div>
            </div> */}
            <div className="py-20 px-6 2xl:container 2xl:mx-auto">
            <div className="flex flex-wrap justify-between">
                <div className="lg:w-1/3 flex flex-col lg:items-center lg:justify-center">
                    <h1 className="md:text-5xl text-2xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-gray-800">Statistics is the Grammer of science</h1>
                    <p className="text-base leading-normal text-gray-600 mt-4">It's important to understand what all the costs associated with a product or service are, because you need to know that you're making a reasonable margin</p>
                </div>
                <div className="xl:w-1/2 lg:w-7/12 w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:justify-center sm:items-center  lg:mt-0 mt-8">
                    <div className="bg-indigo-700 shadow rounded xl:w-72  w-full h-72 flex justify-center items-center">
                        <div className="text-center">
                            <p className="text-5xl font-semibold leading-10 text-white">50+</p>
                            <p className="text-base font-medium leading-none text-white mt-4">loss per month</p>
                        </div>
                    </div>
                    <div className="bg-indigo-700 shadow rounded xl:w-72  w-full h-72 flex justify-center items-center">
                        <div className="text-center">
                            <p className="text-5xl font-semibold leading-10 text-white">200+</p>
                            <p className="text-base font-medium leading-none text-white mt-4">Revenue generated per month</p>
                        </div>
                    </div>

                    <div className="bg-indigo-700 shadow rounded xl:w-72  w-full h-72 flex justify-center items-center">
                        <div className="text-center">
                            <p className="text-5xl font-semibold leading-10 text-white">150+</p>
                            <p className="text-base font-medium leading-none text-white mt-4">Profit Generated</p>
                        </div>
                    </div>
                    <div className="bg-indigo-700 shadow rounded xl:w-72  w-full h-72 flex justify-center items-center">
                        <div className="text-center">
                            <p className="text-5xl font-semibold leading-10 text-white">200+</p>
                            <p className="text-base font-medium leading-none text-white mt-4">Revenue generated per month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </section>

          <section className="text-gray-600 body-font container mx-auto">
            <div className="container mx-auto flex px-2 md:px-5 py-6 mb-12 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full md:p-6 border border-black-brand-06 rounded-lg">
                <h1 className="text-3xl md:text-4xl mb-3 font-medium text-white py-4">
                  Got ideas on how to improve this project ?
                </h1>
                <p className="mb-8 leading-relaxed text-xl">
                  Send us a mail at fueler.com
                </p>
              </div>
            </div>
          </section>

          <footer className="grid gap-4 grid-cols-2 md:grid-cols-3">
            <ul className="space-y-1 text-gray-brand-02">
              <li className="pb-4 text-green-brand-01">Social networks</li>
              <li>
                <a href="https://twitter.com/" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
            <ul className="space-y-1 text-gray-brand-02">
              <li className="pb-4 text-green-brand-01">Products</li>
              <li>
                <a href="#" className="hover:underline">
                  Dope UI
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fueler
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Excuse Me
                </a>
              </li>
            </ul>
            <ul className="space-y-1 text-gray-brand-02">
              <li className="pb-4 text-green-brand-01">Credits</li>
              <li>
                <a href="#" className="hover:underline">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Images
                </a>
              </li>
            </ul>
          </footer>
          <div className="text-center">
            <p className="text-lg font-medium py-6">Developed by Minna ❤️ </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
