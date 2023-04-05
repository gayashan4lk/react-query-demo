import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export function Welcome({}) {
	return (
		<>
			<div className={styles.description}> TanStack React Query</div>

			<div className={styles.center}>
				<div className={styles.thirteen}>Hi</div>
			</div>

			<div className={styles.grid}>
				<a href='#' className={styles.card}>
					<h2 className={inter.className}>
						One <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Find in-depth information about Next.js features and&nbsp;API.
					</p>
				</a>

				<a href='#' className={styles.card}>
					<h2 className={inter.className}>
						Two <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Learn about Next.js in an interactive course with&nbsp;quizzes!
					</p>
				</a>

				<a href='#' className={styles.card}>
					<h2 className={inter.className}>
						Three <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Discover and deploy boilerplate example Next.js&nbsp;projects.
					</p>
				</a>

				<a href='#' className={styles.card}>
					<h2 className={inter.className}>
						Four <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Instantly deploy your Next.js site to a shareable URL
						with&nbsp;Vercel.
					</p>
				</a>
			</div>
		</>
	);
}
