import Image from "next/image"
import { NextSeo } from "next-seo"
import  styles from '../styles/Home.module.css'
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className={styles.wxbg}>

        <NextSeo 
            title="Links - wxifu"
            description="Bio Links go uwu"
            canonical="https://bio.wxifu.eu"
        />

        <div className="lg:top-[3.3vh] top-[7.6vh] relative w-full">
            <motion.div className="rounded-full outline-primary outline-none lg:w-[13vw] lg:h-[13vw] relative lg:left-[43.5vw] opacity-0 w-[39vw] h-[39vw] left-[30.5vw]" animate={{ opacity: 100 }} transition={{ duration: 10 }}>
                <Image src="https://cdn.discordapp.com/avatars/650832778505486336/70e116c00b33eaa913da00bd95e1b2fe.png?size=1024" layout="fill" className="rounded-full"/>
            </motion.div>

            <div className="h-16"></div>

            <div className="lg:w-[26vw] lg:left-[37vw] relative w-[50vw] left-[25vw]">

                <motion.div className="opacity-0" animate={{ opacity: 100 }} transition={{ duration: 14 }}>
                    <Link href="https://discord.gg/aZTyWjFfJ2">
                    <a href="https://discord.gg/aZTyWjFfJ2" target="_blank" className="btn btn-primary btn-outline normal-case rounded-3xl lg:w-full btn-block" rel="noreferrer">blurse ~ discord</a>
                    </Link>
                </motion.div>
                
                <div className="h-6"></div>

                <motion.div className="opacity-0" animate={{ opacity: 100 }} transition={{ duration: 18 }}>
                    <Link href="https://open.spotify.com/user/5t5hhvmbf43vois9z6bxgx0y5?si=332c4d94ddee4365">
                    <a href="https://open.spotify.com/user/5t5hhvmbf43vois9z6bxgx0y5?si=332c4d94ddee4365" target="_blank" className="btn btn-primary btn-outline normal-case rounded-3xl lg:w-full btn-block" rel="noreferrer">Spotify</a>
                    </Link>
                </motion.div>

                <div className="h-6"></div>

                <motion.div className="opacity-0" animate={{ opacity: 100 }} transition={{ duration: 22 }}>
                    <Link href="https://github.com/ayowxifu">
                    <a href="https://github.com/ayowxifu" target="_blank" className="btn btn-primary btn-outline normal-case rounded-3xl lg:w-full btn-block" rel="noreferrer">Github</a>
                    </Link>
                </motion.div>

                <div className="h-6"></div>

                <motion.div className="opacity-0" animate={{ opacity: 100 }} transition={{ duration: 26 }}>
                    <Link href="https://gitlab.com/wxifu">
                    <a href="https://gitlab.com/wxifu" target="_blank" className="btn btn-primary btn-outline normal-case rounded-3xl lg:w-full btn-block" rel="noreferrer">Gitlab</a>
                    </Link>
                </motion.div>

                <div className="h-6"></div>

                <motion.div className="opacity-0" animate={{ opacity: 100 }} transition={{ duration: 30 }}>
                    <Link href="https://gitlab.com/wxifu">
                    <a href="https://gitlab.com/wxifu" target="_blank" className="btn btn-primary btn-outline normal-case rounded-3xl lg:w-full btn-disabled btn-block" rel="noreferrer">Instagram Placeholder</a>
                    </Link>
                </motion.div>

                <div className="h-6"></div>

            </div>

        </div>
    </div>
  )
}