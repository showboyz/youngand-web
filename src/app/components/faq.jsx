"use client"
import { useState } from "react";
import { useI18n } from "@/context/I18nProvider";
import Image from "next/image";

export default function Faq() {
    const { t } = useI18n();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-24">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="https://images.unsplash.com/photo-1722440814495-3d2d3107a7de?q=75&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="FAQ tailwind section"
                            className="w-full rounded-xl"
                            width={800}
                            height={600}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">
                            <div className="mb-6 lg:mb-16">
                                <h6 className="text-lg text-center font-medium text-cyan-400 mb-2 lg:text-left">{t('faq.headingKicker')}</h6>
                                <h2 className="text-4xl text-center font-bold text-gray-100 leading-[3.25rem] mb-5 lg:text-left">{t('faq.headingTitle')}</h2>
                            </div>
                            <div className="accordion-group">
                                {/* FAQ Item 1 */}
                                <div className="accordion pb-7 border-b border-solid border-gray-200">
                                    <button
                                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-100 w-full transition duration-500 hover:text-cyan-400 text-left"
                                        aria-controls="basic-collapse-one"
                                        onClick={() => toggleAccordion(0)}
                                    >
                                        <h5>{t('faq.q1')}</h5>
                                        <svg
                                            className={`text-gray-100 transition duration-500 group-hover:text-cyan-400 ${
                                                activeIndex === 0 ? "rotate-180" : ""
                                            }`}
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div
                                        id="basic-collapse-one"
                                        className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
                                            activeIndex === 0 ? "sm:max-h-auto" : "max-h-0"
                                        }`}
                                        aria-labelledby="basic-heading-one"
                                    >
                                            <p className="text-base font-normal text-gray-400">{t('faq.a1')}</p>
                                    </div>
                                </div>

                                {/* FAQ Item 2 */}
                                <div className="accordion pb-7 pt-7 border-b border-solid border-gray-200">
                                    <button
                                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-100 w-full transition duration-500 hover:text-cyan-400 text-left"
                                        aria-controls="basic-collapse-two"
                                        onClick={() => toggleAccordion(1)}
                                    >
                                        <h5>{t('faq.q2')}</h5>
                                        <svg
                                            className={`text-gray-100 transition duration-500 group-hover:text-cyan-400 ${
                                                activeIndex === 1 ? "rotate-180" : ""
                                            }`}
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div
                                        id="basic-collapse-two"
                                        className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
                                            activeIndex === 1 ? "max-h-auto" : "max-h-0"
                                        }`}
                                        aria-labelledby="basic-heading-two"
                                    >
                                            <p className="text-base font-normal text-gray-400">{t('faq.a2')}</p>
                                    </div>
                                </div>

                                {/* FAQ Item 3 */}
                                <div className="accordion pb-7 pt-7 border-b border-solid border-gray-200">
                                    <button
                                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-100 w-full transition duration-500 hover:text-cyan-400 text-left"
                                        aria-controls="basic-collapse-three"
                                        onClick={() => toggleAccordion(2)}
                                    >
                                        <h5>{t('faq.q3')}</h5>
                                        <svg
                                            className={`text-gray-100 transition duration-500 group-hover:text-cyan-400 ${
                                                activeIndex === 2 ? "rotate-180" : ""
                                            }`}
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div
                                        id="basic-collapse-three"
                                        className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
                                            activeIndex === 2 ? "sm:max-h-auto" : "max-h-0"
                                        }`}
                                        aria-labelledby="basic-heading-three"
                                    >
                                            <p className="text-base font-normal text-gray-400">{t('faq.a3')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}