import Link from "next/link";

export default function Features() {
    return (
        <section className="body-font text-gray-100">
            <div className="container mx-auto px-5 py-24">
                <div className="mb-20 flex w-full flex-col text-center">
                    <h1 className="title-font mb-4 text-2xl font-medium text-gray-100 sm:text-3xl">Key Features</h1>
                </div>
                <div className="-m-4 flex flex-wrap text-center">
                    <div className="w-full p-4 sm:w-1/2 md:w-1/4">
                        <div className="rounded-lg border-2 border-gray-200 px-4 py-6 h-full">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="mb-3 inline-block h-12 w-12 text-cyan-400"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" />
                                <circle cx="12" cy="13" r="3" />
                            </svg>
                            <p className="leading-relaxed">Motion Tracking</p>
                        </div>
                    </div>
                    <div className="w-full p-4 sm:w-1/2 md:w-1/4">
                        <div className="rounded-lg border-2 border-gray-200 px-4 py-6 h-full">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="mb-3 inline-block h-12 w-12 text-cyan-400"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 4L12 20" />
                                <path d="M8 9L8 15" />
                                <path d="M20 10L20 14" />
                                <path d="M4 10L4 14" />
                                <path d="M16 7L16 17" />
                            </svg>
                            <p className="leading-relaxed">Voice Recognition</p>
                        </div>
                    </div>
                    <div className="w-full p-4 sm:w-1/2 md:w-1/4">
                        <div className="rounded-lg border-2 border-gray-200 px-4 py-6 h-full">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="mb-3 inline-block h-12 w-12 text-cyan-400"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M19,7c-0.6,0-1-0.4-1-1c0-2.2-1.8-4-4-4c-1.3,0-2.4,0.6-3.2,1.6c-0.4,0.5-1.2,0.5-1.6,0C8.4,2.6,7.3,2,6,2C3.8,2,2,3.8,2,6c0,0.6-0.4,1-1,1S0,6.6,0,6c0-3.3,2.7-6,6-6c1.5,0,2.9,0.6,4,1.5c1.1-1,2.5-1.5,4-1.5c3.3,0,6,2.7,6,6C20,6.6,19.6,7,19,7z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M9.3,19.7c-0.1-0.1-3.2-2.8-5.7-6.1c-0.3-0.4-0.3-1.1,0.2-1.4c0.4-0.3,1.1-0.3,1.4,0.2c1.8,2.3,3.8,4.3,4.8,5.3c1-1,3.1-3,4.9-5.3c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4c-2.6,3.3-5.6,6-5.8,6.1C10.3,20.1,9.7,20.1,9.3,19.7z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M11,14C11,14,11,14,11,14c-0.4,0-0.7-0.2-0.9-0.6L7.9,9l-1,1.6C6.6,10.8,6.3,11,6,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.5l1.7-2.6C7.4,6.1,7.7,6,8.1,6c0.4,0,0.7,0.2,0.8,0.6l2.2,4.5l1-1.6C12.4,9.2,12.7,9,13,9h6c0.6,0,1,0.4,1,1s-0.4,1-1,1h-5.5l-1.7,2.6C11.6,13.8,11.3,14,11,14z"
                                />
                            </svg>
                            <p className="leading-relaxed">Health Monitoring</p>
                        </div>
                    </div>
                    <div className="w-full p-4 sm:w-1/2 md:w-1/4">
                        <div className="rounded-lg border-2 border-gray-200 px-4 py-6 h-full">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="mb-3 inline-block h-12 w-12 text-cyan-400"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 3V21" />
                                <path d="M23 21H3" />
                                <path d="M7 16L12.25 10.75L15.75 14.25L21 9" />
                            </svg>
                            <p className="leading-relaxed">Data Analysis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
