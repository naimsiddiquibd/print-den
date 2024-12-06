import React from 'react';
import { motion } from 'framer-motion';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import StickyIcons from '../../Components/StickyIcons/StickyIcons';
import { Helmet } from 'react-helmet';

const Planner = () => {
    return (
        <div>
             <Helmet>
                <title>Strategic Planner Position - Fatmonk</title>
                <meta property="og:title" content="Strategic Planner Position - Fatmonk" />
                <meta property="og:description" content="Client Servicing and Planner at Fatmonk are the foundation of any creative project, and provide the team with information learned from studying markets for relevant data." />
                <meta property="og:image" content="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png" />
                <meta property="og:url" content="https://example.com/planner" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar></Navbar>
            <StickyIcons></StickyIcons>
            <div className='bg-[#000] flex justify-center md:py-20 py-10 md:px-20 relative overflow-y-hidden overflow-x-hidden'>
                <div className='flex items-center mt-44'>
                    <Img
                        className='absolute -left-0 w-[750px] top-24 z-20 left-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                    />
                    <Img
                        className='absolute -right-0 w-[750px] top-24 z-20 right-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                    />
                </div>
                <div className='flex items-center mt-44'>
                    <Img
                        className='absolute -left-0 w-[750px] bottom-24 z-20 left-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                    />
                    <Img
                        className='absolute -right-0 w-[750px] bottom-24 z-20 right-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                    />
                </div>

                <div className='font-poppins z-30 lg:w-[1180px] px-4'>
                    <div className='mt-12 text-center flex items-center gap-3 lg:justify-between justify-center '>
                        <div>
                            <Link to="/career">
                                <ChevronLeftIcon className="h-8 w-8 lg:h-12 lg:w-12 text-blue-500 text-monkwhite" />
                            </Link>
                        </div>
                        <div className='lg:mr-8'>
                            <h1 className='text-monkwhite font-semibold text-3xl lg:text-[60px] lg:leading-[60px]'>Strategic Planner
                            </h1>
                        </div>
                        <div></div>
                    </div>
                    <p className='font-semibold text-monkred text-xl lg:text-3xl my-3 text-center'>Full time</p>
                    <div>
                        <div className='w-full mt-6'>
                            <img className='w-full px-2' src="/job4.png" alt="" />
                        </div>
                    </div>
                    <div className='p-3 mt-6'>
                        <p className='text-sm lg:text-lg text-monkwhite'>
                            Client Servicing and Planner at Fatmonk are the foundation of any creative project, and provide the team with information learned from studying markets for relevant data. The ability to think beyond a project is important, strategic planners must establish where any plan will take a client. Closely following a brief and exploring relevant material ensures a strategic planner knows both the client and the target market, inside out. Once a strategic planner has established themselves as a reliable and integral team member, they will start to create their own clear briefs, combining creativity with insightful overviews. At Fatmonk, we are entrusted to design and build flawless brands and businesses who create a lasting impact. As a Planner for Fatmonk, we are looking for a talented and creative individual having a clear idea about our culture and has a passion for strategic planning.<br></br>

                            At Fatmonk, we are entrusted to design and build flawless brands and businesses who create a lasting impact. As a planner for Fatmonk, we are looking for a talented and creative individual having a clear idea about our culture and has a passion for strategic planning.
                        </p>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Responsibilities</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Researching and gathering data to develop well-informed strategic plans for clients.</li>
                                    <li>Examining clients’ businesses to get to know their brands and understand their objectives and competitor activities in the market.</li>
                                    <li>Conceptualizing ideas based on cohesive and intelligent plans through an understanding of audience psychology and intuitive decision-making.</li>
                                    <li>Discussing the client’s core message and target audience, and developing original ideas brainstorming with other members of the creative team.</li>
                                    <li>Presenting findings and pitching plans to the management, senior team members and clients.</li>
                                    <li>Identifying potential problems and devising ways to rectify them.</li>
                                    <li>Responding to requests from the development team.</li>
                                    <li>Reviewing progress and modifying strategies for improvement based on feedback until the client is satisfied.</li>
                                    <li>Working on multiple campaigns at once, sometimes under pressure and often on tight deadlines.</li>
                                    <li>Work with the Content and Design Team to produce inspiring and detailed implementation plans.</li>
                                    <li>Act as a liaison between clients and Fatmonk as and when needed.</li>
                                    <li>Build relationships and achieve quarterly business goals.</li>
                                    <li>Sell campaigns, digital services, and other products to the existing client base.</li>
                                    <li>Devise and implement marketing and communication strategies, targeted to both national and international markets.
                                    </li>
                                    <li>Write, create and publish engaging content for internal and external channels.</li>
                                    <li>Deliver projects to clients on time and ensure client payment and collections in need.</li>
                                    <li>Meet and exceed financial goals.
                                    </li>
                                    <li>Understand and keep up to date with industry and competitive landscape knowledge.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Required Expertise / Skills</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>The ability to steward brand development.</li>
                                    <li>Strong conceptual thinking abilities with ability to align great ideas to business goals.</li>
                                    <li>Experience (Fresher or any experience) in working in a relevant role, preferably in agencies.</li>
                                    <li>Proficiency in using basic productivity and collaboration tools.</li>
                                    <li>Strong understanding of and curiosity about advertising, branding & digital media.</li>
                                    <li>Fluent in English and Bangla (both orally and written).</li>
                                    <li>Strong strategic concept development and copywriter ability in the discipline, as reflected in a work portfolio.</li>
                                    <li>Excellent written and oral communication skills, with the ability to persuade clients and co-workers.</li>
                                    <li>Stability under pressure and the ability to juggle multiple clients and assignments.</li>
                                    <li>Knowledge of integrated marketing tactics across traditional and digital.</li>
                                    <li>The ability to steward brand development.</li>
                                    <li>Experience creating engaging content for print, mobile, web and video.</li>
                                    <li>Proofing/editing skills and a professional writer’s command of the language.</li>
                                    <li>Native speaker skills in the language of social media, with, at the very least, active Twitter, Instagram, and Facebook accounts.</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Additional Requirements</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Preferable to have certifications in digital marketing and copywriting (but not required).</li>
                                    <li>To have working experience with designers and developers, and other marketing and tech professionals.</li>
                                    <li>Understanding of SEO, website copywriting, blogging etc – and various formats of copywriting.</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Qualifications
                                Compensation & Other Benefits</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Two festival bonuses after probation period</li>
                                    <li>Opportunity to work with a capable, friendly, and award-winning creative team</li>
                                    <li>Conducive work environment to learn about and develop a career in digital marketing.
                                    </li>
                                    <li>Excellent opportunity for exposure to the most prominent sectors of the country and understanding their business models.</li>
                                    <li>Access to training and top networking events in the industry</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Details</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Full-time  </li>
                                    <li>Work Week: Sunday to Thursday</li>
                                    <li>Work Hours: 10:00 AM to 6:00 PM (Flexible)
                                    </li>
                                    <li>Office Location:Banani, Dhaka, Bangladesh</li>
                                    <li>Monthly Salary: Negotiable </li>
                                    <li>6-month probation period</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Application Instructions</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>To apply please send your updated CV to career@fatmonk.studio by mentioning “Junior Developer” in the subject line.</p>
                        </div>


                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Planner;