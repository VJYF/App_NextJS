import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import stylesRes from "@/styles/Result.module.css";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function FYresult() {
        const router = useRouter();
        const [data, setData] = useState([]);

        useEffect(() => {
            if (router.query.data) {
                const urls = router.query.data.split(',');
                setData(urls);
            }
        }, [router.query.data]);

        const count = data.length;

        return (
            <>
            <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
                <div className={styles.card}>
                    <Header />
                    <table>
                        <thead>
                        <tr>
                            <th>{count} URL founds</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((url, index) => {
                            const urlFormat = url.replace(/[\[\]']/g, '');
                            return (
                            <tr key={index}>
                                <td><a href={urlFormat} target='_blank'>{urlFormat}</a></td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        );
}
