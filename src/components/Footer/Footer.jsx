import React from 'react';
import footerLogo from '../../assets/logo-xl.png'
import instagramLogo from '../../assets/instagram.png'
import facebookLogo from '../../assets/facebook.png'
import twitterLogo from '../../assets/twitter.png'

const Footer = () => {
    return (
        <section className='bg-green-24 pt-20 pb-7.5'>
            <div className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 flex flex-col items-center text-center'>
                <div className='mb-4'>
                    <img src={footerLogo} alt="" />
                </div>

                <p className='leading-6 text-white mb-6 w-9/10'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <h3 className='font-medium text-xl leading-7 text-white mb-4'>Social Links</h3>

                <div className='flex items-center gap-3 mb-10'>
                    <img src={instagramLogo} alt="" />
                    <img src={facebookLogo} alt="" />
                    <img src={twitterLogo} alt="" />
                </div>

                <hr className='border-[#1A8862]/20 w-full' />

                <div className='flex flex-col md:flex-row items-center justify-between gap-4 w-full mt-7.5'>
                    <p className='leading-6 text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <p className='leading-6 text-[#FAFAFA]'>Privacy Policy</p>
                        <p className='leading-6 text-[#FAFAFA]'>Terms of Service</p>
                        <p className='leading-6 text-[#FAFAFA]'>Cookies</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;