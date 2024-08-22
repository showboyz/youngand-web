"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navi() {
    const [language, setLanguage] = useState('KOR');

    const toggleLanguage = () => {
        setLanguage(language === 'KOR' ? 'ENG' : 'KOR');
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">youngand</span>
                        <Image
                            className="h-8 w-auto"
                            src="https://github.com/showboyz/showboyz.github.io/blob/main/logo4.png?raw=true"
                            alt="youngand"
                            width={32}
                            height={32}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 items-center">
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-100 hover:text-cyan-400 hover:scale-105">
                        Product
                    </Link>
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-100 hover:text-cyan-400 hover:scale-105">
                        About
                    </Link>

                    {/* Language toggle button */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center text-sm font-semibold leading-6 text-gray-100 hover:scale-105 hover:text-cyan-400"
                    >
                        {language === 'KOR' ? (
                            <>
                                <Image
                                    src="https://flagcdn.com/w320/kr.png"
                                    alt="Korean Flag"
                                    width={20}
                                    height={16}
                                    style={{ objectFit: 'cover' }}
                                />
                                <span className="ml-2">KOR</span>
                            </>
                        ) : (
                            <>
                                <Image
                                    src="https://flagcdn.com/w320/us.png"
                                    alt="US Flag"
                                    width={20}
                                    height={16}
                                    style={{ objectFit: 'cover' }}
                                />
                                <span className="ml-2">ENG</span>
                            </>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}
