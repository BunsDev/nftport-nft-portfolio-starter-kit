import Head from 'next/head'

export default function Meta() {
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME
    const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE
    const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION

    return (
        <>
        <Head>
            <title>{siteName} | {siteTitle}</title>
            <meta name="description" content={`${siteDescription}`} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        </>
    )
}
