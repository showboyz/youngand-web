import Script from 'next/script';

const GoogleAnalytics = () => (
    <>
        {/* Google Analytics 스크립트 로드 */}
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-RLYQRMD8CJ"
            strategy="afterInteractive" // 상호작용 이후 로드되도록 설정
        />
        {/* Google Analytics 설정 */}
        <Script
            id="google-analytics"
            strategy="afterInteractive" // 상호작용 이후 실행되도록 설정
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-RLYQRMD8CJ');
                `,
            }}
        />
    </>
);

export default GoogleAnalytics;
