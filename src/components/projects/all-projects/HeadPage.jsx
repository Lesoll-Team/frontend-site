import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';

const HeadPage = () => {
    const language = useSelector((state) => state.GlobalState.languageIs);

    return (
        <Head>
            <title>{language ? "المشاريع والكمبوندات" : "Projects and compounds"}</title>
            <meta name="description" content={language ? "افضل المشاريع و الكمبوندات السكنية والتجارية" : "The best residential and commercial projects and compounds"} />
        </Head>
    );
}

export default HeadPage;
