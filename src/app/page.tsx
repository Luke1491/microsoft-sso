"use client";
import Head from "next/head";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Microsoft SSO</title>
        <meta name="description" content="Auth" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Microsoft SSO</h1>
        <button
          onClick={() => {
            window.location.href = "/one-drive-auth";
          }}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Login with Microsoft
        </button>
      </div>
    </>
  );
}
