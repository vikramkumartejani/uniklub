import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
    return (
        <div className='bg-color h-full'>
            <Navbar />
            <div className='container text-white'>
                <div className='max-w-[940px] w-full px-[10px] md:px-[20px] pb-[66px] mx-auto'>
                    <h2 className='pt-[25px] md:pt-[66px] text-[27px] md:text-[50px] leading-[60.51px] font-semibold'>Privacy Policy</h2>
                    <div className='font-semibold text-[18px] md:text-[22.5px] leading-[27.23px] pt-[25px] md:pt-[60px]'>

                        <p className=''>This Privacy Policy describes how UniKlub collects, uses, and discloses personal information when you use our website, mobile applications, and any other products or services offered by us. By accessing or using the Services, you agree to the terms of this Privacy Policy.</p>

                        <h3 className='my-[20px]'>1. Information We Collect</h3>

                        <p>1.1. Information You Provide: We collect information that you voluntarily provide when you use the Services, including when you register for an account, submit forms, or communicate with us. This may include your name, email address, contact information, payment information, and any other information you choose to provide.</p>

                        <p className='my-[20px]'>1.2. Automatically Collected Information: We may automatically collect certain information about your device and usage of the Services, including your IP address, browser type, operating system, device identifiers, and usage data. We may use cookies and similar tracking technologies to collect this information.</p>

                        <h3>2. Use of Information</h3>

                        <p className='mt-[20px]'>2.1. We may use the information we collect for various purposes, including to:</p>
                        <ul className='ml-8'>
                            <li className=' list-disc'>Provide, maintain, and improve the Services;</li>
                            <li className=' list-disc'>Process transactions and fulfill requests;</li>
                            <li className=' list-disc'>Communicate with you about the Services;</li>
                            <li className=' list-disc'>Customize and personalize your experience;</li>
                            <li className=' list-disc'>Analyze usage trends and user interactions;</li>
                            <li className=' list-disc'>Detect, prevent, and address technical issues or fraud;</li>
                            <li className=' list-disc'>Comply with legal and regulatory obligations.</li>
                        </ul>

                        <h3 className='my-[20px]'>3. Sharing of Information</h3>

                        <p>3.1. We may share your information with third parties for the following purposes:</p>
                        <ul className='ml-8'>
                            <li className=' list-disc'>Service Providers: We may engage third-party service providers to assist us in providing and maintaining the Services, such as hosting providers, payment processors, and analytics providers.</li>
                            <li className=' list-disc'>Business Partners: We may share information with business partners, affiliates, or other third parties for joint marketing efforts or other business purposes.</li>
                            <li className=' list-disc'>Legal Compliance: We may disclose information if required to do so by law or in response to valid legal requests, such as subpoenas, court orders, or law enforcement inquiries.</li>
                            <li className=' list-disc'>Business Transfers: We may transfer information in connection with a merger, acquisition, reorganization, or sale of assets, or in the event of bankruptcy or dissolution.</li>
                        </ul>

                        <h3 className='my-[20px]'>4. Data Security</h3>

                        <p>4.1. We take reasonable measures to protect the security of your information and prevent unauthorized access, disclosure, or alteration. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                        <h3 className='my-[20px]'>5. Your Choices</h3>

                        <p>5.1. You may have certain choices regarding the collection, use, and sharing of your information. For example, you may choose not to provide certain information or adjust your browser settings to block cookies. However, please note that some features of the Services may not function properly if you disable cookies.</p>

                        <h3 className='my-[20px]'>6. Children's Privacy</h3>

                        <p>6.1. The Services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.</p>

                        <h3 className='my-[20px]'>7. Changes to this Privacy Policy</h3>

                        <p>7.1. We reserve the right to modify or revise this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by posting the updated policy on our website or through other means. Your continued use of the Services after any such changes constitutes your acceptance of the revised Privacy Policy.</p>

                        <h3 className='my-[20px]'>8. Contact Us</h3>

                        <p>8.1. If you have any questions about this Privacy Policy or our privacy practices, please contact us at Info@uniklub.com.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page