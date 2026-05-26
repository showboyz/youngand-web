import { useI18n } from "@/context/I18nProvider";

export default function Pricing({ scrollToContact }) {
    const { t } = useI18n();
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
                    <h1 className="title-font mb-4 text-2xl font-medium text-gray-100 sm:text-3xl">{t('pricing.title')}</h1>
                </div>
                <div className="rounded-2xl border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-10 text-center shadow-xl transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20 sm:p-14 lg:p-16">
                    <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Flexible Pricing for Every Organization</h3>
                    <p className="mx-auto mb-8 max-w-xl leading-relaxed text-gray-400">
                        Our plans are tailored to your organization&apos;s size and goals. Get in touch and we&apos;ll put together the right plan for you.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/30 focus:outline-none">
                        Contact us for pricing
                    </button>
                </div>
            </div>
        </section>
    );
}
