import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import stylesFY from "@/styles/FindYou.module.css";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Form from "@/components/Form";
import Button from "@/components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function FindYou() {

    return (
        <>
        <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
            <div className={styles.card}>
            <Header />
              <div className={stylesFY.FindYoucard}>
                <h1>FindYou</h1>
                <Form />
              </div>
            </div>
        </div>
        </>
    )
}