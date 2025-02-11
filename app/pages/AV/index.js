import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import stylesAv from "@/styles/Av.module.css";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Button from "@/components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AV() {
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = '/SecurePlace.exe';
        link.download = 'SecurePlace.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
        <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
            <div className={styles.card}>
            <Header />
            <div className={styles.passgencard}>
            <h1>Antivirus</h1>
            <Button text="Download" onClick={downloadFile} />
            </div>
            </div>
        </div>
        </>
    )
}