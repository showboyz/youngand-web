import Link from "next/link";
import { useI18n } from "@/context/I18nProvider";

export default function Pricing() {
    const { t } = useI18n();
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
                    <h1 className="title-font mb-4 text-2xl font-medium text-gray-100 sm:text-3xl">{t('pricing.title')}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">{t('pricing.desc')}</p>
                </div>
                <div className="space-y-8 sm:gap-4 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-6">
                    {/* Standard Plan */}
                    <div className="flex h-full w-full flex-col rounded-2xl border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center text-white shadow-xl transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                        <h3 className="mb-2 text-3xl font-bold text-white">Standard</h3>
                        <p className="mb-6 text-sm font-light text-gray-400">
                            Monthly Subscription
                        </p>
                        <div className="mb-8 flex items-baseline justify-center">
                            <span className="mr-2 text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$50</span>
                            <span className="text-gray-400 text-lg">/month</span>
                        </div>
                        <ul role="list" className="mb-8 flex-grow space-y-4 text-left">
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Includes around <span className="font-semibold text-white">30 contents</span></span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Basic AI reports</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Up to <span className="font-semibold text-white">2 admins / 20 users</span></span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Admin Web Tool</span>
                            </li>
                        </ul>
                    </div>

                    {/* Professional Plan */}
                    <div className="flex h-full w-full flex-col rounded-2xl border-2 border-cyan-500 bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center text-white shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/50 hover:-translate-y-2 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Popular
                        </div>
                        <h3 className="mb-2 text-3xl font-bold text-white">Professional</h3>
                        <p className="mb-6 text-sm font-light text-gray-400">
                            Monthly Subscription
                        </p>
                        <div className="mb-8 flex items-baseline justify-center">
                            <span className="mr-2 text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$100</span>
                            <span className="text-gray-400 text-lg">/month</span>
                        </div>
                        <ul role="list" className="mb-8 flex-grow space-y-4 text-left">
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Includes around <span className="font-semibold text-white">110 contents</span></span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Detailed AI reports</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Up to <span className="font-semibold text-white">5 admins / 50 users</span></span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Advanced analytics features</span>
                            </li>
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex h-full w-full flex-col rounded-2xl border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center text-white shadow-xl transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                        <h3 className="mb-2 text-3xl font-bold text-white">Enterprise</h3>
                        <p className="mb-6 text-sm font-light text-gray-400">
                            Monthly Subscription
                        </p>
                        <div className="mb-8 flex items-baseline justify-center">
                            <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Custom</span>
                        </div>
                        <ul role="list" className="mb-8 flex-grow space-y-4 text-left">
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">All Professional features</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">SSO (Single Sign-On)</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Enhanced security</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">Customization options</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="h-6 w-6 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-200">API integration</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
