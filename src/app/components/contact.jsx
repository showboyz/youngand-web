"use client";
import { useState, forwardRef } from 'react';

// Contact 컴포넌트를 forwardRef로 수정
const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('Email sent successfully!');
                // 폼 데이터를 초기화하여 텍스트 필드를 비움
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                setStatus('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send email.');
        }
    };

    return (
        <section ref={ref} className="py-24">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-gray-100 text-4xl font-bold">Get in Touch</h1>
                        <p className="text-sm text-gray-500 mt-4">
                            Interested in our product? Feel free to reach out anytime. We welcome your inquiries and are here to assist you with whatever you need!
                        </p>

                        <div className="mt-12">
                            <h2 className="text-gray-100 text-base font-bold">Email</h2>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#67e8f9'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                    <a href="#" onClick={(e) => e.preventDefault()} className="text-cyan-300 text-sm ml-4">
                                        <strong>info@youngandx.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-gray-100 text-base font-bold">Office</h2>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#67e8f9' viewBox="0 0 473.806 473.806">
                                        <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z" data-original="#000000" />
                                        <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" data-original="#000000" />    
                                    </svg>
                                    <a href="#" onClick={(e) => e.preventDefault()} className="text-cyan-300 text-sm ml-4">
                                        <strong>150, Donggycheon-ro, Dong-gu, Gwangju, I-PLEX #108, South Korea</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-cyan-200 focus:bg-gray-100"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-cyan-200 focus:bg-gray-100"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-cyan-200 focus:bg-gray-100"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="6"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-cyan-200 focus:bg-gray-100"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="submit"
                                className="text-white bg-cyan-400 hover:bg-cyan-900 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                            >
                                Send
                            </button>
                            {status && <p className="mt-4 text-sm text-gray-500">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";

export default Contact;
