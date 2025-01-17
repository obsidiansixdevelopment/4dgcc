import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import React from 'react'
import { rubik } from '@/app/fonts'
import { Icons } from '@/components/icons/icons'
import HeroSection from '@/components/hero-section'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MotionDiv } from '@/components/motion-div'
import type { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Projects : Fourth Dimension General Contracting LLC Abu Dhabi, UAE",
  description: "Trust our skills for timeless construction. Your project, our priority.",
};


export default function Page({ params: { locale } }: { params: { locale: any } }) {

    unstable_setRequestLocale(locale);
    const t = useTranslations('projectPage');

    const projects = [
        {
            imageName: "project-1.jpg",
            text: "Warehouses in ICAD - Plots 7A & 8A",
            delay: 0.3,
        },
        {
            imageName: "project-9.jpg",
            text: "WEDDING HALL MOHD BIN RASHED AL MAKTOOM HUMANITARIAN SHARITIES EST",
            delay: 0.6,
        },
        {
            imageName: "project-8.jpg",
            text: "UNION COOP UM AL QUWAIN",
            delay: 0.3,
        },
        {
            imageName: "project-6.jpg",
            text: "MOSQUE EMMAM HOUSE ABLUTION FOR MINISTRY OF AWQUAF ISLAMIC AFFAIRS",
            delay: 0.6,
        },
        {
            imageName: "project-5.jpg",
            text: "G6-2NOS COMMERCIAL-RESIDENTIAL BUILDING MS METAL INVESTMENT",
            delay: 0.3,
        },
        {
            imageName: "project-4.jpg",
            text: "G2 AMINA BUILDING",
            delay: 0.6,
        },
        {
            imageName: "project-7.png",
            text: "ROYAL MAIN",
            delay: 0.3,
        },
        {
            imageName: "project-3.jpg",
            text: "COMM-RESD BUILD-G-3PARK-TYP Mohammad Almlaihi Scaled",
            delay: 0.6,
        },
        {
            imageName: "project-2.jpg",
            text: "32 Villa Project Goverment of UAE",
            delay: 0.3,
        },
    ]

    const aboutVariants = {
        hiddenBottom: {
            x: 200,
            opacity: 0,
        },
        visibleBottom: {
            x: 0,
            opacity: 1,
        },
    }

    return (
        <main className='flex flex-col gap-10 sm:gap-20 h-full w-full overflow-hidden'>

            {/*  Hero Section  */}
            <HeroSection heading={`${t('heading')}`} img={"project-page-img.jpg"} subHeading={`${t('subheading')}`} />

            <section className='px-8 mb-20'>

                <div className='h-full w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-9 lg:gap-y-12 md:px-8'>
                    {projects.map((project, index) => (
                        <Dialog key={index}>
                            <DialogTrigger>
                                <MotionDiv variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} transition={{ duration: 0.3, delay: project.delay }} className='relative rounded-lg  border-secondary-main h-[200px] sm:h-[250px] lg:h-[350px] w-full overflow-hidden flex justify-start items-end p-4'>
                                    <Image src={`/assets/projects/${project.imageName}`} alt='project img' fill className='object-cover' />
                                    <div className='h-full w-full bg-black/60 absolute top-0 left-0' />
                                    <h2 className={cn("text-xl sm:text-2xl lg:text-3xl leading-tight font-medium relative text-white overflow-hidden text-nowrap overflow-ellipsis", rubik.className)}>{project.text}</h2>
                                    <Icons.arrowRight className='absolute h-7 w-8 top-4 right-4' />
                                </MotionDiv>
                            </DialogTrigger>
                            <DialogContent className='bg-white'>
                                <div className='flex flex-col gap-6'>
                                    <h2 className={cn('text-secondary-main sm:text-2xl lg:text-3xl font-medium text-center', rubik.className)}>{project.text}</h2>
                                    <div className='relative h-[200px] sm:h-[320px]'>
                                        <Image src={`/assets/projects/${project.imageName}`} alt={project.imageName} fill className='object-contain' />
                                    </div>
                                </div>
                            </DialogContent>

                        </Dialog>
                    ))}
                </div>
            </section>
        </main>
    )
}
