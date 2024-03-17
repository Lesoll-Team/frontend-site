import Head from 'next/head';
import React from 'react';

const HomeMetaTag = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "ليسول",
                "alternateName": "ليسول",
                "url": "https://lesoll.com/",
                "logo": "https://lesoll.com/logo.svg",
                "sameAs": [
                    "https://www.facebook.com/LesollRealestate",
                    "https://www.instagram.com/lesollrealestate",
                    "https://twitter.com/LesollRealstate"
                ]
            },
            {
                "@type": "RealEstateAgent",
                "name": "ليسول",
                "image": "https://lesoll.com/logo.svg",
                "@id": "",
                "url": "",
                "telephone": "+20 1032362898",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "",
                    "addressLocality": "",
                    "postalCode": "",
                    "addressCountry": "EG"
                },
                "sameAs": [
                    "https://www.facebook.com/LesollRealestate",
                    "https://twitter.com/LesollRealstate",
                    "https://www.instagram.com/lesollrealestate"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "إضافة عقار",
                        "item": "https://lesoll.com/add-property"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "إضافة طلب",
                        "item": "https://lesoll.com/add-need"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "عقارات سكنية للبيع في مصر",
                        "item": "https://lesoll.com/properties/residential/sale/search?page=1"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "عقارات سكنية للايجار في مصر",
                        "item": "https://lesoll.com/properties/residential/rent/search?page=1"
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "عقارات تجارية للبيع في مصر",
                        "item": "https://lesoll.com/properties/commercial/sale/search?page=1"
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "عقارات تجارية للايجار في مصر",
                        "item": "https://lesoll.com/properties/commercial/rent/search?page=1"
                    },
                    {
                        "@type": "ListItem",
                        "position": 7,
                        "name": "اراضي investment في مصر",
                        "item": "https://lesoll.com/properties/investment/lands/search?page=1"
                    },
                    {
                        "@type": "ListItem",
                        "position": 8,
                        "name": "اراضي للبيع في مصر",
                        "item": "https://lesoll.com/properties/lands/sale/search?page=1"
                    },
                    {
                        "@type": "ListItem",
                        "position": 9,
                        "name": "تمويل عقاري",
                        "item": "https://lesoll.com/properties/finance/sale/search?page=1"
                    },
                    {
                        "@type": "ListItem",
                        "position": 10,
                        "name": "كمبوند للبيع في مصر",
                        "item": "https://lesoll.com/properties/compounds/sale/search?page=1"
                    }
                ]
            }
        ]
    };
    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Head>
    );
}

export default HomeMetaTag;
