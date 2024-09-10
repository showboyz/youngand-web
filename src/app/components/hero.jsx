"use client"; // 클라이언트 전용 컴포넌트임을 명시

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Hero({ scrollToContact }) {
    return (
        <section className="body-font text-gray-600">
            <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
                <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                    <Image
                        className="rounded object-cover object-center"
                        alt="hero"
                        src="https://github.com/showboyz/showboyz.github.io/blob/main/Pro%20Display%20XDR%20Front%20View%20Mockup.png?raw=true"
                        width={600}  // 가로 크기 설정
                        height={400} // 세로 크기 설정
                    />
                </div>
                <div
                    className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                        <p className="mb-0 leading-relaxed text-amber-300">
                            Coming this February 2025 – Prepare for the next big thing!
                        </p>
                        <h1 className="title-font mb-4 text-3xl font-medium text-gray-100 sm:text-4xl">
                            Brain Health Playground
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            This digital healthcare solution uses AI and computer vision to detect early signs of
                            dementia and deliver personalized cognitive training programs. Our system provides an
                            effective approach for dementia detection and prevention, helping patients maintain and
                            enhance their cognitive function.
                        </p>
                        <div className="flex justify-center w-full md:justify-start">
                            <button
                                onClick={scrollToContact} // 여기서 onClick 핸들러를 제대로 설정합니다.
                                className="inline-flex items-center rounded-lg bg-gray-100 px-5 py-3 hover:bg-cyan-900 hover:text-white focus:outline-none"
                            >
                                <span className="title-font font-medium">Contact Us</span>
                            </button>
                        </div>
                </div>
            </div>
        </section>

    );
}
