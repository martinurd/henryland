import React from 'react';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-[#F5F5F5] pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-[#013220] mb-8">Privacy Policy</h1>
                    
                    {/* Add your privacy policy text here */}
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4">
                            Henry Capital Solution Inc (“we,” “us,” or “our”) values your privacy and is committed to protecting the personal information of our website visitors and users of our services. This Privacy Policy outlines how we collect, use, and safeguard your personal data when you visit https://www.henrycap.com (the “Site”) or interact with us.
                        </p>
                        
                        {/* Example sections - replace with your actual content */}
                        <h2 className="text-2xl font-semibold text-[#013220] mt-8 mb-4">Information We Collect</h2>
                        <p className="text-gray-600 mb-4">
                        Information You Provide: When you fill out a form (e.g., “Send Us a Message” form), we may collect your email address, name, and any additional details you include in the message. Application Details (if applicable): If you apply for a loan or other services, we may collect additional information such as financial data or identification details. Cookies and Tracking Technologies: We may use cookies and similar technologies to enhance user experience and analyze Site traffic. You can usually set your browser to refuse some or all browser cookies.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#013220] mt-8 mb-4">How We Use Your Information</h2>
                        <p className="text-gray-600 mb-4">
                        To Provide Services: We use your information to respond to your inquiries, process applications, and provide our liquidity solutions.
To Improve Our Site: We analyze how users interact with our Site to improve functionality, user experience, and service offerings.
Marketing and Communications: We may send you updates, newsletters, or promotions related to Henry Capital, but only if you have provided the necessary consent.
Legal and Compliance: We may use and disclose information as required by law or court order, or to protect our rights and comply with legal obligations.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#013220] mt-8 mb-4">Information Sharing</h2>
                        <p className="text-gray-600 mb-4">
                        Service Providers: We may share your information with trusted third-party service providers who assist us in operating the Site or conducting our business. These providers are obligated to keep your information confidential.
Business Transfers: In the event of a merger, acquisition, or any form of sale of some or all of our assets, your information may be transferred as part of that transaction.
Legal Requirements: We may disclose your personal information if required to do so by law or if we believe such action is necessary to protect our rights, property, or safety.
                        </p>
                        
                        <h2 className="text-2xl font-semibold text-[#013220] mt-8 mb-4">Data Security</h2>
                        <p className="text-gray-600 mb-4">
                        We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security
                        </p>

                        <h2 className="text-2xl font-semibold text-[#013220] mt-8 mb-4">Your Choices and Rights</h2>
                        <p className="text-gray-600 mb-4">
                        We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security
                        </p>

                        <h2 className="text-2xl font-semibold text-[#013220] mt-8 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-4">
                            If you have any questions about our Privacy Policy, please contact us:
                            <br />
                            <br />
                            Henry Capital Solutions Inc
                            <br />
                            Email: contact@henrycap.com
                            <br />
                            Phone: +1 (917) 767-4317
                            <br />
                            <br />
                            Effective Date: 2/6/2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
