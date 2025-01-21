"use client"

import AnimatedText from "@/components/AnimatedText";
import { AnimatedNumbers } from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { motion } from "framer-motion";

export default function page() {
    return (
        <>
        <main className="w-full flex flex-col items-center justify-center">
            
            <AnimatedText text="my greatest journey" className="mb-16"/>

            <div className="lg:grid w-11/12 grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-16 flex flex-col">
                <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring" }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{once: true}}
                className="lg:col-span-3 col-span-4 text-center lg:text-left flex flex-col justify-start order-2 lg:order-none p-6 lg:p-0 antialiased">
                    <h2 className="mb-4 font-semibold lg:text-left text-dark/60">Driven To Secure</h2>
                    <p className="font-medium">
                        Hi!<br/>&nbsp;&nbsp;&nbsp;&nbsp;Thank you for checking out my portfolio. I'm super grateful you're diving deeper into my work. Two things about me:
                        troubleshooting I.T. and helping people make up a lot of who I am. My educational experience in computers begins much further back from college, 
                        towards the beginning of middle school when I was gifted a children's STEM kit with the fun lil' lights and switches. Soon after I was gifted a PSP, where I 
                        learned how to downgrade firmware and exploit it to do things like boot up as an xbox 360.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;As of late, I consider myself to be "matured" and spend my 
                        time gaining practical knowledge like applying best security practices to my family's lan, committing to earning CompTIA's certificates, and lastly spending 
                        quality time on hackthebox.com to advance my understanding of how actors find their way into private networks. One trait you can expect to see from me is my 
                        consistent willingness to learn. My lack of work experience brought me to Google's Cybersecurity certificate and that's where I found that I.T. is the place for me.
                        I rarely get bored in this world, but when I'm in between projects or feeling impartial, I have an adventurous side and a musical side that recharges me. It's all about balance, after all.
                    </p>
                </motion.div>

                <div className="col-span-9 lg:col-span-3 flex flex-row lg:flex-col items-start lg:items-end justify-center lg:justify-between order-3">
                    <div className="flex flex-col items-center justify-center">
                        <span className="flex justify-center text-4xl md:text-6xl lg:text-7xl font-bold">
                            <AnimatedNumbers value={20} />+
                        </span>
                        <h2 className="text-md md:text-lg lg:text-xl text-center w-[70%] lg:w-full font-medium capitalize text-dark/75 dark:text-light">projects completed</h2>
                    </div>
                        
                    <div className="flex flex-col items-center justify-center">
                        <span className="flex text-4xl md:text-6xl lg:text-7xl ml-7 w-full justify-center font-bold">
                        <AnimatedNumbers value={2} />+
                        </span>
                        <h2 className="text-md md:text-lg lg:text-xl font-medium text-center w-[70%] lg:w-full capitalize text-dark/75 dark:text-light">years of experience</h2>
                    </div>
                </div>

            </div>

            <Skills />
            <Experience />
            <Education />

        </main>
        </>
    )
}