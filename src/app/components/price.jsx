import Link from "next/link";

export default function Pricing() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
                    <h1 className="title-font mb-4 text-2xl font-medium text-gray-100 sm:text-3xl">Pricing</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">
                        Choose the Subscription Plan that Best Fits Your Needs.
                    </p>
                </div>
                <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
                    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 p-6 text-center text-white shadow xl:p-8 hover:scale-105">
                        <h3 className="mb-4 text-2xl font-semibold text-gray-100">Basic</h3>
                        <p className="font-light text-gray-400 sm:text-lg">
                            The ideal option for personal use in the comfort of your home.
                        </p>
                        <div className="my-8 flex items-baseline justify-center">
                            <span className="mr-2 text-5xl font-extrabold text-white">$29</span>
                            <span className="text-gray-400">/month</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left text-white">
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Real-time training monitoring</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Free updates</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 p-6 text-center text-white shadow xl:p-8 hover:scale-105">
                        <h3 className="mb-4 text-2xl font-semibold text-gray-100">Premium</h3>
                        <p className="font-light text-gray-400 sm:text-lg">
                            The perfect solution for personal use and remote counseling.
                        </p>
                        <div className="my-8 flex items-baseline justify-center">
                            <span className="mr-2 text-5xl font-extrabold text-white">$99</span>
                            <span className="text-gray-400">/month</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left text-white">
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Real-time training monitoring</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Video health counseling & training</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Free updates</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 p-6 text-center text-white shadow xl:p-8 hover:scale-105">
                        <h3 className="mb-4 text-2xl font-semibold text-gray-100">Enterprise</h3>
                        <p className="font-light text-gray-400 sm:text-lg">
                            Relevant for multiple users, extended & premium support.
                        </p>
                        <div className="my-8 flex items-baseline justify-center">
                            <span className="mr-2 text-5xl font-extrabold text-white">$999</span>
                            <span className="text-gray-400">/month</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left text-white">
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>User size: <span className="font-semibold">100+ Users</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Premium support: <span className="font-semibold">24 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="h-5 w-5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span>Free updates</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
