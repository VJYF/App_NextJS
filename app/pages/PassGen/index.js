import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/PassGen.module.css";
import Button from "@/components/Button";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const PassGen = () => {
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
        let newPassword = '';
        for (let i = 0; i < 12; i++) {
            newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        if (newPassword){
            navigator.clipboard.writeText(newPassword);
        }
        setPassword(newPassword);
    };

    return (
        <>
        <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
            <div className={styles.card}>
            <Header />
            <div className={styles.passgencard}>

            <h1>Password Generator</h1>
            <Button text="Generate Password" onClick={generatePassword} />
            {/* <button onClick={generatePassword}>Generate Password</button> */}
            {password && (
                <div className={styles.password}>
                    <p>{password}</p>
                </div>
            )}
            </div>
            </div>
        </div>
        </>
    );
};

export default PassGen;