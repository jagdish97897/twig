import React, { useState } from 'react';

const MediaCoverage = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    // Data for 2024
    {
      year: '2024',
      title: 'Gratitude to Shri Sanjiv Singh Ji for Inspiring Innovation at India Mobile Congress 2024',
      date: 'Thu, 17 Oct 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFjmjsZ7vep7g/feedshare-shrink_800/feedshare-shrink_800/0/1729149773084?e=1734566400&v=beta&t=2jdlMR2UzC6b1lrhD1qiG_B2v2MF3gvVd9PhQJDktnE',
    },
    {
      year: '2024',
      title: 'Honored to Meet Shri Hardeep S Puri and Discuss KGV’s Smart E-Hybrid Kits',
      date: 'Tue, 08 Oct 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFSWIonzNHjXQ/feedshare-shrink_800/feedshare-shrink_800/0/1728386476386?e=1734566400&v=beta&t=-6mm1zq8OrXC132QVM9r2vqaVRE-IqXRkkOl3c5cLwg',
    },
    {
      year: '2024',
      title: 'Collaborative Lunch Meeting with Rajasthan CM Shri Bhajan Lal Sharma and Industry Leaders',
      date: 'Wed, 02 Oct 2024',
      source: 'From Linkdin',
      image: 'https://www.instagram.com/reel/DAoAoUXt3j3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D',
    },
    {
      year: '2024',
      title: 'Historic Visit: Jamaica PM’s Visit to India and Meeting with PM Shri Narendra Modi Ji',
      date: 'Wed, 02 Oct 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGd6bcd0OLNlQ/feedshare-shrink_800/feedshare-shrink_800/0/1727698757793?e=1734566400&v=beta&t=0DwEm7KiNjO3M48w8WIRzTYKEa1d554zwdnxolCG-0g',
    },
    {
      year: '2024',
      title: 'Inspiring Conversation with Shri H.D. Kumaraswamy Ji on Sustainable Development and Innovation',
      date: 'Wed, 25 Sep 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHU-JJwo_fOzQ/feedshare-shrink_800/feedshare-shrink_800/0/1727285500666?e=1734566400&v=beta&t=4k9MZUOQtPTXKfb_g-8KxM2_cyKj_-V6SXSFKeFJivg',
    },
    {
      year: '2024',
      title: 'Honored to Speak at 15th World Bamboo Day in Chiang Mai on Sustainable Solutions and Carbon Farming',
      date: 'Tue, 17 Sep 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHNhBN4J9DK5g/feedshare-shrink_800/feedshare-shrink_800/0/1726551261853?e=1734566400&v=beta&t=WWXlZSSd5qnpa7LhrPwt40eTMOvg0K1drEztpTFqKJ8',
    },
    {
      year: '2024',
      title: 'CEO Purushottam Punamchand Singhal at Launch of Bharat Startup Knowledge Access Registry (BHASKAR)',
      date: 'Mon, 16 Sep 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFbmvTmyAk9Bw/feedshare-shrink_800/feedshare-shrink_800/0/1726500102080?e=1734566400&v=beta&t=JU_D5Kq6VJpu3eTjX3bj0sUfNIv17IUC-o94BHkwdHk',
    },
    {
      year: '2024',
      title: 'Productive Meeting with Cyprus Minister Dr. Nicodemus Damianou and Team',
      date: 'Fri, 06 Sep 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQGr9I7rNkadMA/feedshare-shrink_800/feedshare-shrink_800/0/1725640466863?e=1734566400&v=beta&t=lyQnkRKWJEQ7ElL14fXHpR7IeIbSYWQ1jcsLNdr8QWA',
    },
    {
      year: '2024',
      title: 'Honored by Minister Nitin Gadkari: KGV Hybrid Revolutionizing Sustainable Mobility',
      date: 'Mon, 02 Sep 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHSnvsoXunG_Q/feedshare-shrink_800/feedshare-shrink_800/0/1724839375101?e=1734566400&v=beta&t=DAnANQsWZezoKTbXbiLqNe8xsZaFN7j0ceaomSy3SnY',
    },
    {
      year: '2024',
      title: 'Enriching Discussion with Shri Sudhendu Jyoti Sinha ji on Decarbonizing Transportation',
      date: 'Sat, 24 Aug 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQEQlqa4yAfLUg/feedshare-shrink_800/feedshare-shrink_800/0/1724481380691?e=1734566400&v=beta&t=DKJd1Vl1jV4N5FskkojK2zxLt6n3SK86_DLCFNI0oJo',
    },
    {
      year: '2024',
      title: 'Honored to Present Sustainability Projects at UNESCO House with Mr. Benno Boer and Team',
      date: ' Wed, 14 Aug 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHOmeNqpOHUQg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723638014908?e=1734566400&v=beta&t=M-9_KMSWIKY-Zl4sLs1GarFkWu0DTp0Yf5DXEffmspo',
    },
    {
      year: '2024',
      title: 'Meeting with Myanmar Deputy Minister Mr. Minn Minn on Innovative Sustainable Solutions and Collaboration',
      date: ' Sat, 10 Aug 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHeZ7tEx4zNoA/feedshare-shrink_800/feedshare-shrink_800/0/1723283887551?e=1734566400&v=beta&t=nIo5zrxfFZlQBQzSrK5eMejqEKtV12EHe-TSFoKngBo',
    },
    {
      year: '2024',
      title: 'Roundtable Discussion on Competition Law in the Digital Age at India SME Forum, New Delhi',
      date: ' Thu, 08 Aug 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQFxmCIsId7YPg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723120853872?e=1734566400&v=beta&t=6Zqr8UXs7r_rf-qZ7rJ6ojERccibEu5Wk35OWOYf47c',
    },
    {
      year: '2024',
      title: 'Meeting with Nepal Cabinet Minister Mr. Damodar Bhandari on Sustainability in Trade and Innovation',
      date: ' Wed, 07 Aug 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGRa_C_u3ABkg/feedshare-shrink_800/feedshare-shrink_800/0/1723027524169?e=1734566400&v=beta&t=JsOTsHsg8_1zArxNiM5lXGsOa92ADMT-m4KhbUdHu6E',
    },
    {
      year: '2024',
      title: 'Soft Launch of Pure Prakruti: Indias First Commercial Carbon Footprint Diagnostic Tool for Vehicles',
      date: ' Wed, 07 Aug 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHPsq5NZ0iMrw/feedshare-shrink_800/feedshare-shrink_800/0/1723018249616?e=1734566400&v=beta&t=MG8kfu5FmBde1vysgG8LrtGPRcWq9HW41UZteLMcxS8',
    },
    {
      year: '2024',
      title: 'Insightful Discussion on Sustainability and SDGs with Mr. Benno Böer at UNESCO',
      date: ' Fri, 02 Aug 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHJsQkm6s927Q/feedshare-shrink_800/feedshare-shrink_800/0/1722629804040?e=1734566400&v=beta&t=hhHZ0sXOyk4U3VaKZKnaecdMdkXYoFjzVs50Y6p8P1w',
    },
    {
      year: '2024',
      title: 'Proud Moment: TWI Group MD Dr. Uttam Singhal Meets Vietnamese PM H.E. Pham Minh Chinh to Strengthen India-Vietnam Relations',
      date: ' Thu, 01 Aug 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFS1Vpjr-Qtbg/feedshare-shrink_800/feedshare-shrink_800/0/1722537802548?e=1734566400&v=beta&t=obPzIbhjt4ZeWIGYYBB29Omzn2O52BzZ2u9bcOUv2lY',
    },
    {
      year: '2024',
      title: 'Attending Journey towards Viksit Bharat Event with PM Narendra Modi Ji and Key Ministers',
      date: ' Tue, 30 Jul 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHvnYIH9DKnNA/feedshare-shrink_800/feedshare-shrink_800/0/1722360568400?e=1734566400&v=beta&t=uotflJRaTffXjUmLvW9egQfZnSXWmOjcv2Woi93c_4g',
    },
    {
      year: '2024',
      title: 'Honored to Attend World Heritage Celebration at Ethiopian Embassy with Ambassador Gebru',
      date: ' Tue, 30 Jul 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQEH91kfiaMeWg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1722361291166?e=1734566400&v=beta&t=1UX8DmwoTFIYsLNV5HB7d3Kewx-WggCwTBKX-xh_w2E',
    },
    {
      year: '2024',
      title: 'Karishma Global Ventures LLP Wins CleanTech Startup of the Year at Indias First Startup Awards!',
      date: ' Sun, 30 Jun 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHbzu1GcARnpQ/feedshare-shrink_800/feedshare-shrink_800/0/1719766332214?e=1734566400&v=beta&t=Hvt_qxI59T3604BVbr0yV89et-bwMK6H7HwkBaTMWxU',
    },
    {
      year: '2024',
      title: 'JMC Paper Tech Partners with Green Earth Pulp & Paper for Sustainable Paper Mill Project',
      date: ' Wed, 24 Jul 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFvGkl5cJqyaQ/feedshare-shrink_800/feedshare-shrink_800/0/1721793350111?e=1734566400&v=beta&t=vN7xLXJ3lkZb0GdoPYiYXp_ywycL8pByzxJcmUGdP3M',
    },
    {
      year: '2024',
      title: 'Thrilled to Announce Dr. Uttaam Siinghal as Distinguished Speaker at #ICsSEMICONDUCTORINDIA2024!',
      date: ' Wed, 03 Jul 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFD87tNKRZfbg/feedshare-shrink_800/feedshare-shrink_800/0/1719984131864?e=1734566400&v=beta&t=3Ft5jWnepmiuyZ4VtDpwCBjFEbpi7xa0T33fGFuONDk',
    },
    {
      year: '2024',
      title: 'Join ICs-SEMICONDUCTOR INDIA2024 to Accelerate Innovation & Strengthen Indias Semiconductor Ecosystem!',
      date: ' Sat, 29 Jun 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQG8Jp1saE_D1g/feedshare-shrink_800/feedshare-shrink_800/0/1719645312720?e=1734566400&v=beta&t=wDNCH717I42rCqzRCZyVZCq1cre16mPC_tqJvBCdXmE',
    },
    {
      year: '2024',
      title: 'Startup ka Mahakumbh Day 1! Excited to Connect Over the Next Two Days!',
      date: ' Fri, 28 Jun 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFCdQbB2QjB9g/feedshare-shrink_1280/feedshare-shrink_1280/0/1719591574323?e=1734566400&v=beta&t=jWSC1gAH4oHnqNKWyUWZ26bP6SUGY_sIMhnDqeYKviY',
    },
    {
      year: '2024',
      title: 'TWI Group MD, Dr. Uttam Siinghal, Honored to Attend Africa Day 2024 as Distinguished Delegate',
      date: ' Tue, 25 Jun 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGGrQl0hvS26w/feedshare-shrink_800/feedshare-shrink_800/0/1719322129050?e=1734566400&v=beta&t=AsoyxL3to90WOJw6crkKqlOY_hqiOgOUNbrIOAx9pfo',
    },
    {
      year: '2024',
      title: 'Dr. Uttaam Siinghal Appointed as Industry Expert Member on the Board of Studies at Delhi Skill and Entrepreneurship University (DSEU)',
      date: ' Mon, 10 Jun 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHSQbpLuGm3Bg/feedshare-shrink_800/feedshare-shrink_800/0/1719204156228?e=1734566400&v=beta&t=jNykRWkx_OlQdq80atr7-fOKZC-23yR5p24o0WY_zKQ',
    },
    {
      year: '2024',
      title: 'Honored to receive an invitation to attend the Prime Ministers Oath Ceremony at Rashtrapati Bhavan on 09/06/2024. Looking forward to witnessing this historic moment in our nations journey',
      date: ' Sun, 09 Jun 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQG52ZIZWmYNBQ/feedshare-shrink_800/feedshare-shrink_800/0/1717957611229?e=1734566400&v=beta&t=scVsrb8jc0wk_nlUJJSdc7ZaMwrXapICkxRlmb2QPug',
    },
    
    {
      year: '2024',
      title: 'Exploring Future Trade Opportunities: India and Congo Industry Round Table',
      date: ' Sat, 08 Jun 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQFCjtUBSp_s0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719081799554?e=1734566400&v=beta&t=EfmWN_uiSAfVNmDv9e9HRrRWftzvOlyn-KrMBrygsZg',
    },
    {
      year: '2024',
      title: 'Grateful to be a Part of Ashirvad Rasois Noble Cause: Serving the Needy with Food and Blessings',
      date: ' Wed, 05 Jun 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGMpmXP7ruxdQ/feedshare-shrink_800/feedshare-shrink_800/0/1717578108452?e=1734566400&v=beta&t=7659POyJkAsegxmp24VvE2PDY7D4hQZZh4f1-GqzEOM',
    },
    {
      year: '2024',
      title: 'Strengthening Ties and Building Collaborations with Sri Lanka and Namibia: A Productive Meeting with Diplomats',
      date: ' Wed, 05 Jun 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHtR7_kdqf4oA/feedshare-shrink_800/feedshare-shrink_800/0/1717562639772?e=1734566400&v=beta&t=govKhGAlZpTlc2ICDU3313vjRt1QF0G-T0bvFiFoKfA',
    },
    {
      year: '2024',
      title: 'Excited to Join the Advisory Committee of Bhrampunj Foundation: A Step Towards Social Upliftment and Promoting Global Happiness',
      date: ' Fri, 24 May 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGTvKtJPEu-PQ/feedshare-shrink_800/feedshare-shrink_800/0/1716575000558?e=1734566400&v=beta&t=YL3euuxsRlr4OsBTTWmDucfe1RJiw78cyfAAX7XwwyQ',
    },
    {
      year: '2024',
      title: 'An Inspirational Meeting with Shri Sanjiv Singh Ji: A Visionary Leader Driving DPIIT Forward with Innovation and Excellence',
      date: ' Sun, 19 May 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFHQWNM93_9lQ/feedshare-shrink_800/feedshare-shrink_800/0/1716146286667?e=1734566400&v=beta&t=JM7Kv1LK-HIKjkQqVr2nkI0J13BDBsQOcdfV1XtXA68',
    },
    {
      year: '2024',
      title: 'Engaging Discussion with Deogratius J. Dotto, Head of Chancery, Tanzania High Commission: Exploring Exciting Opportunities Ahead',
      date: ' Fri, 17 May 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQEP-BHIBCtr0A/feedshare-shrink_800/feedshare-shrink_800/0/1715922000732?e=1734566400&v=beta&t=lcaCChUZUA2XPBju0Wg16T9xtbporm4nvF5ozs_8J5M',
    },
    {
      year: '2024',
      title: 'Privileged to Meet H.E. Mr. Philip Green, Australias High Commissioner to India 🇮🇳 at Diplomat Diaries',
      date: ' Mon, 06 May 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQH64pESQo4sIw/feedshare-shrink_800/feedshare-shrink_800/0/1714996270694?e=1734566400&v=beta&t=yjRnO_xtF0XAiHR3114VI-V_LMmuPZpNoM3H0PhDY8g',
    },
    {
      year: '2024',
      title: 'Grateful for Insightful Discussion with Mr. Hissein Oumar Seidou, First Counsellor, Embassy of Chad 🇹🇩🇮🇳 on Future Business Opportunities and Sustainable Development',
      date: ' Tue, 30 Apr 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHUD30eCBiWmw/feedshare-shrink_800/feedshare-shrink_800/0/1714498038441?e=1734566400&v=beta&t=04MilLEZUq9ezggCSf_VuVaYwuWMCASymDu3JTuYNYg',
    },
    {
      year: '2024',
      title: 'Productive Meeting with Shri BL Verma Ji, Minister of State, DONER, and Shri Chanchal Kumar Ji, Secretary, Ministry of DONER, on Future TWI Group Projects',
      date: ' Sun, 07 Apr 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQElJwr4XzjJXQ/feedshare-shrink_800/feedshare-shrink_800/0/1712501483272?e=1734566400&v=beta&t=8Z-6O_HEmX4pYEj7Sy52g3rNeGyozMe6fNaZ81wjv68',
    },
    {
      year: '2024',
      title: 'An absolute pleasure meeting Ritesh Aggarwal, CEO of OYO. His amazing personality, generous spirit, and attitude of gratitude are truly appreciated!',
      date: ' Fri, 05 Apr 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQGbw5hokiMUVw/feedshare-shrink_800/feedshare-shrink_800/0/1712328975752?e=1734566400&v=beta&t=9jK5Ly03yyxu1XsbW-TPD231SAfnuMY8C-khblTnQnM',
    },
    {
      year: '2024',
      title: 'Honored to Meet Honble Shri G. Kishan Reddy, Cabinet Minister of Tourism, Culture & DONER, Govt of India – Insightful Discussion on Future Projects',
      date: ' Wed, 03 Apr 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGdJUtBDUY59w/feedshare-shrink_800/feedshare-shrink_800/0/1712124127100?e=1734566400&v=beta&t=Bx5yviIKvj_CS4i4BfF5AQSPwMuAsyVYwUi-tyr2Q7E',
    },
    {
      year: '2024',
      title: 'Pleasure meeting and insightful discussions between Dr. Uttam Singhal, Group MD of TWI Group, and H.E. Chang Jae-bok, Ambassador of Korea to India 🇮🇳. Exploring avenues for bilateral cooperation and innovation',
      date: ' Sat, 23 Mar 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGVch65lXB54Q/feedshare-shrink_800/feedshare-shrink_800/0/1711191084114?e=1734566400&v=beta&t=DkQVA08Pj-OodjdNb57KTQvFuJ_wAAcwfmVe55WgzIQ',
    },
    {
      year: '2024',
      title: 'Pleasure Meeting H.E. Mr. Dato Muzafar Shah Mustafa, High Commissioner of Malaysia to India – Strengthening Bilateral Relations and Exploring New Avenues of Cooperation',
      date: ' Fri, 15 Mar 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFBGodVUvw46g/feedshare-shrink_800/feedshare-shrink_800/0/1710473913646?e=1734566400&v=beta&t=oRxSijVEuxFJV7TVLFFs8UZCfnVGXvR9czN_nkH6aiU',
    },
    {
      year: '2024',
      title: 'Honored to Meet Japans Ambassador to India, Honorable Hiroshi Suzuki! Strengthening Bilateral Trade and Collaboration for Mutual Prosperity 🇮🇳🇯🇵',
      date: ' Thu, 14 Mar 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHFaQWcciQFgg/feedshare-shrink_800/feedshare-shrink_800/0/1710397975789?e=1734566400&v=beta&t=a0FgkQeuldfq--q7Wyc_n6Spr-P5r1NoLq1tM2s0gP0',
    },
    {
      year: '2024',
      title: 'Milestone Achievement: TWI Group Signs Historic INR 3000 Crore MOU with Government of India for 2nd Commercial Bamboo Pulp Plant in Arunachal Pradesh',
      date: ' Tue, 12 Mar 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQEBKRrY27jRpQ/feedshare-shrink_800/feedshare-shrink_800/0/1710267781496?e=1734566400&v=beta&t=qUJeIeoqThF1rBF9SG9nWQ-7qC4b_THXLCqwkBudTRw',
    },
    {
      year: '2024',
      title: 'Grateful for the Inspiring Presence and Valuable Feedback from Mr. Anoh Martin, Mr. Gebru Tekely, and Dr. Uttaam Siinghal at Our Stalls',
      date: ' Sun, 10 Mar 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQExyWXf-p8keQ/feedshare-shrink_800/feedshare-shrink_800/0/1710087595753?e=1734566400&v=beta&t=coJ4laysNcbjxRgsUd1cRtq3sDPp8lYfgG2R2OSgW5M',
    },
    {
      year: '2024',
      title: 'Extending deepest gratitude to Shri M.K Gupta Ji for their visit and invaluable feedback at our three stalls. Your insights are highly valued',
      date: ' Sun, 10 Mar 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHRlHw7aafpJQ/feedshare-shrink_800/feedshare-shrink_800/0/1710087917131?e=1734566400&v=beta&t=eGoHgGHxOA5SOZGzIb8eblpGr3pyhP9cuvVBSBnQEtE',
    },
    {
      year: '2024',
      title: 'Historic Milestone: TWI Group Signs INR 6000 Crore MOU with Government of India for First Commercial Bamboo Pulp Plant in Assam',
      date: ' Fri, 08 Mar 2024 ',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQGl-4ep_s-HNA/feedshare-shrink_800/feedshare-shrink_800/0/1709907551097?e=1734566400&v=beta&t=BJA78xNaUdcGV79NcIvfBR8U1-uxAYDoc7yWP2DHrNQ',
    },
    {
      year: '2024',
      title: 'Expressing heartfelt gratitude to Girish Kumar Surpur Ji, CEO of NLDS, for accepting our invitation, touring all three stalls, and providing invaluable feedback. Your generosity and expertise are truly appreciated.',
      date: 'Wed, 06 Mar 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGewPVWauzvdg/feedshare-shrink_1280/feedshare-shrink_1280/0/1709700577175?e=1734566400&v=beta&t=UocWQTYAVLC9vaBVlDnDjAX5ovPUv_JCIyC2JHM2TA0',
    },
    {
      year: '2024',
      title: 'TWI Group Unites Nations for Innovation: Inaugurating the World’s First Hybrid Bike Kits Exhibition with Global Delegates at IEML, Greater Noida',
      date: 'Tue, 05 Mar 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGdp9uJOHVa4g/feedshare-shrink_1280/feedshare-shrink_1280/0/1709618016259?e=1734566400&v=beta&t=ZV1GS5te0wJ5g8cUB8x4SxJahIYeImeS_sdmKBmdCdw',
    },
    {
      year: '2024',
      title: 'Driving Innovation and Collaboration: Insights from TWI GROUP CEO at IPPTA AGM & Seminar, Kolkata 2024',
      date: 'Mon, 04 Mar 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQECo6VPHhsn9Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1709536587174?e=1734566400&v=beta&t=t1ClEDgueYkZmaNEuAOS8sbCJ7kiJpwZxyCPDBhRlx0',
    },
    {
      year: '2024',
      title: 'Celebrating Excellence: Dr. Uttaam Siinghal, Group MD of TWI Group, Honored with the Global Noble Peace Award 2024',
      date: 'Wed, 14 Feb 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHZu1ygg-xbhw/feedshare-shrink_800/feedshare-shrink_800/0/1707899139439?e=1734566400&v=beta&t=IXUKClYmUT28gj7L9SQmhNcESCttaP6B_WZNq3Bnes4',
    },
    {
      year: '2024',
      title: 'Thrilled to share that KGV(Karishma Global Ventures India LLP), part of our TWI Group, is gaining global recognition for its groundbreaking World First Hybrid Kits with a published patent!',
      date: 'Sat, 10 Feb 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGvslxPaAX2yA/feedshare-shrink_800/feedshare-shrink_800/0/1707555084952?e=1734566400&v=beta&t=7RHPTA7INwUTYvyyU4DekmAEwg-dondiQ6q3py7W_Hk',
    },
    
    {
      year: '2024',
      title: 'Leading the Way in Bamboo Innovation: TWI Group CEO Shri Purushottam Singhal Joins IWST Workshop on Enhancing Bamboo Product Manufacturing, Bangalore – February 02, 2024',
      date: 'Sun, 04 Feb 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQHfUJ4lRHkIQQ/feedshare-shrink_800/feedshare-shrink_800/0/1707027439510?e=1734566400&v=beta&t=ILH2TBS7HdrN1_CqsgF8H2-_egOrGcN3ogn-raxHh34',
    },
    {
      year: '2024',
      title: 'Valuable Insights and Inspiring Dialogue: TWI Group MD Dr. Uttaam Siinghal Meets with Paytm Founder & CEO Mr. Vijay Shekhar Sharma',
      date: 'Thu, 01 Feb 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQGH289sY8XZMg/feedshare-shrink_800/feedshare-shrink_800/0/1706805762362?e=1734566400&v=beta&t=y4byjTOVAQJDClGobwwRHCzREfOZ44UKpeIeiOSoM8Q',
    },

    {
      year: '2024',
      title: 'Exciting News! Dr. Uttaam Siinghal, Group MD of TWI Group, Honored with the Global Noble Peace Award 2024 for His Remarkable Contributions!',
      date: ' Wed, 14 Feb 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHZu1ygg-xbhw/feedshare-shrink_800/feedshare-shrink_800/0/1707899139439?e=1734566400&v=beta&t=IXUKClYmUT28gj7L9SQmhNcESCttaP6B_WZNq3Bnes4',
    },
    
    {
      year: '2024',
      title: 'A Moment of Respect and Gratitude: Our Group MD, Dr. Uttaam Siinghal, Meets the Esteemed Chairman of Adani Group, Mr. Gautam Adani. A Meeting of Great Minds, Driven by Mutual Appreciation.',
      date: ' Mon, 22 Jan 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQEzje2mrcjTXw/feedshare-shrink_800/feedshare-shrink_800/0/1705902449782?e=1734566400&v=beta&t=dAKMRvQhqjSc2GpWYkAWCUBqcjIG-Rqe54dLHhBiQNE',
    },
    {
      year: '2024',
      title: 'CEO Mr. Purushottam Singhal Invited to Attend RSC-DCPPAI Training Programme at NEERI Delhi Centre',
      date: ' Sun, 21 Jan 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQG0wPv5UBpPUQ/feedshare-shrink_800/feedshare-shrink_800/0/1705848425729?e=1734566400&v=beta&t=x53b1l7J10IC8dOzhTP1EUHryYzLYfa_5OqLjIvmlYs',
    },
    {
      year: '2024',
      title: 'Honored to Discuss Future Developments with Shri Piyush Goyal Ji, Honble Cabinet Minister of Commerce & Industry, India',
      date: ' Wed, 17 Jan 2024',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQHxGAYQio-QJw/feedshare-shrink_800/feedshare-shrink_800/0/1705469973190?e=1734566400&v=beta&t=Sdu3Oov7QcJUOiJeJgmZJpB-A1zJFAQ1AkT00MPbPAc',
    },

    
    // Data for 2023
    {
      year: '2023',
      title: 'Honored to Host: Welcoming Zambias Government Officials & Investment Agencies to Experience the KGV Hybrid Kit - Pioneering Global Solutions in Sustainable Bike Transportation!',
      date: ' Thu, 28 Dec 2023',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFQkhDBg5twow/feedshare-shrink_800/feedshare-shrink_800/0/1703799764216?e=1734566400&v=beta&t=UioqDEXiDE_XlLFreREs6RNwb8KzkAuDHAzcfQCT5xs',
    },
    {
      year: '2023',
      title: 'Fostering International Partnerships: TWI Group MD Dr. Uttaam Siinghal Engages in Insightful Dialogue with Vietnams Ambassador to India, H.E. Mr. Nguyen Thanh Hai, on Future Trade and Collaboration Opportunities',
      date: ' Fri, 22 Dec 2023',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFOP0J4tKYnrw/feedshare-shrink_800/feedshare-shrink_800/0/1703238050281?e=1734566400&v=beta&t=T5RknM5dU_KVuxG_CbGMdJrDischSFqFRjljk7ZrwzY',
    },
    {
      year: '2023',
      title: 'Honored to Host: Welcoming Namibia’s High Commissioner Mr. Tangeni and Investment Attaché Ms. Tokkie Nchindo to Discuss Our Pioneering KGV Hybrid Kits and Strengthen Multilateral Ties',
      date: ' Fri, 15 Dec 2023',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQER7uWw7AXpYg/feedshare-shrink_800/feedshare-shrink_800/0/1702657500130?e=1734566400&v=beta&t=HgMam6KTP80dc-SLWw2dSph9kBPAYJHBKdfJysE4kPw',
    },
    {
      year: '2023',
      title: 'An insightful hour spent with H.E. Mr. Clemente Pedro Francisco Camenha, Angolas Ambassador with Dr.Uttaam Siinghal , discussing strategies for fostering stronger business relationships and exploring avenues for multilateral trade. A pleasure meeting in the pursuit of fruitful collaborations and investments',
      date: 'Wed, 13 Dec 2023',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQES35RTgXA2aA/feedshare-shrink_800/feedshare-shrink_800/0/1702436869247?e=1734566400&v=beta&t=3zK0JC6JPR_zmeckbTyEClGScK3HoWL6h-T6vU1s7hw',
    },
    {
      year: '2023',
      title: 'Honored Invitation: TWI Group MD Dr. Uttaam Siinghal to Speak at Uttarakhands Global Investor Summit 2023 – Inspiring Change and Driving Investment for a Brighter Future',
      date: 'Sat, 09 Dec 2023',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQFMoySFUKthcA/feedshare-shrink_800/feedshare-shrink_800/0/1702093215325?e=1734566400&v=beta&t=dznpZ51Umhu5IgArCJxbA6MvRDZkZi1HyyXgqb72r7Y',
    },
    {
      year: '2023',
      title: 'An Esteemed Honor: TWI Group CEO Mr. Purushottam P. Singhal and Group MD Dr. Uttaam Siinghal Receive Diamond Invitation from Hon’ble CM Shri Pushkar Singh Dhami to Attend UK Global Investor Summit 2023, Featuring Chief Guest Honble PM Shri Narendra Modi',
      date: 'Thu, 07 Dec 2023',
      source: 'From Linkdin',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQGH_1CHrbDT0A/feedshare-shrink_800/feedshare-shrink_800/0/1701983224737?e=1734566400&v=beta&t=9jmGDYLEz44jqL0Oa6ybZYLts351Lrt9AyXrJ0voC34',
    },

    // Data for 2022
    {
      year: '2022',
      title: 'New renewable energy targets set by Indian government',
      date: 'Mar 18, 2022',
      source: 'Business Standard',
    },
    {
      year: '2022',
      title: 'Tata Motors launches electric vehicle line',
      date: 'Jan 05, 2022',
      source: 'Hindustan Times',
    },
  ];


  const filteredArticles = articles.filter(article => article.year === selectedYear);

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-4">Media Coverage</h1>

      {/* Year selection dropdown */}
      <div className="flex items-center mb-6">
        <span className="mr-2 text-xl font-semibold">{selectedYear}</span>
        <select
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-2 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      {/* Articles list */}
      <div>
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-4 mb-4 rounded shadow cursor-pointer"
            onClick={() => setSelectedArticle(article)}
          >
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-500">
              {article.date} | {article.source}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for showing article details */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedArticle(null)}  // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}  // Prevent click inside modal from closing it
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedArticle(null)}
            >
              &times;
            </button>
            {selectedArticle.image ? (
              <a href={selectedArticle.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-48 object-cover mb-4 rounded cursor-pointer"
                />
              </a>
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4 rounded">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{selectedArticle.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {selectedArticle.date} | {selectedArticle.source}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCoverage;


// import React, { useState } from 'react';

// const MediaCoverage = () => {
//   const [selectedYear, setSelectedYear] = useState('2024');
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   const articles = [
//     // Data for 2024
//     {
//       year: '2024',
//       title: 'Gratitude to Shri Sanjiv Singh Ji for Inspiring Innovation at India Mobile Congress 2024',
//       date: 'Thu, 17 Oct 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQFjmjsZ7vep7g/feedshare-shrink_800/feedshare-shrink_800/0/1729149773084?e=1734566400&v=beta&t=2jdlMR2UzC6b1lrhD1qiG_B2v2MF3gvVd9PhQJDktnE',
//     },
//     {
//       year: '2024',
//       title: 'Honored to Meet Shri Hardeep S Puri and Discuss KGV’s Smart E-Hybrid Kits',
//       date: 'Tue, 08 Oct 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQFSWIonzNHjXQ/feedshare-shrink_800/feedshare-shrink_800/0/1728386476386?e=1734566400&v=beta&t=-6mm1zq8OrXC132QVM9r2vqaVRE-IqXRkkOl3c5cLwg',
//     },
//     {
//       year: '2024',
//       title: 'Collaborative Lunch Meeting with Rajasthan CM Shri Bhajan Lal Sharma and Industry Leaders',
//       date: 'Wed, 02 Oct 2024',
//       source: 'From Linkdin',
//       image: 'https://www.instagram.com/reel/DAoAoUXt3j3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D',
//     },
//     {
//       year: '2024',
//       title: 'Historic Visit: Jamaica PM’s Visit to India and Meeting with PM Shri Narendra Modi Ji',
//       date: 'Wed, 02 Oct 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQGd6bcd0OLNlQ/feedshare-shrink_800/feedshare-shrink_800/0/1727698757793?e=1734566400&v=beta&t=0DwEm7KiNjO3M48w8WIRzTYKEa1d554zwdnxolCG-0g',
//     },
//     {
//       year: '2024',
//       title: 'Inspiring Conversation with Shri H.D. Kumaraswamy Ji on Sustainable Development and Innovation',
//       date: 'Wed, 25 Sep 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQHU-JJwo_fOzQ/feedshare-shrink_800/feedshare-shrink_800/0/1727285500666?e=1734566400&v=beta&t=4k9MZUOQtPTXKfb_g-8KxM2_cyKj_-V6SXSFKeFJivg',
//     },
//     {
//       year: '2024',
//       title: 'Honored to Speak at 15th World Bamboo Day in Chiang Mai on Sustainable Solutions and Carbon Farming',
//       date: 'Tue, 17 Sep 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQHNhBN4J9DK5g/feedshare-shrink_800/feedshare-shrink_800/0/1726551261853?e=1734566400&v=beta&t=WWXlZSSd5qnpa7LhrPwt40eTMOvg0K1drEztpTFqKJ8',
//     },
//     {
//       year: '2024',
//       title: 'CEO Purushottam Punamchand Singhal at Launch of Bharat Startup Knowledge Access Registry (BHASKAR)',
//       date: 'Mon, 16 Sep 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQFbmvTmyAk9Bw/feedshare-shrink_800/feedshare-shrink_800/0/1726500102080?e=1734566400&v=beta&t=JU_D5Kq6VJpu3eTjX3bj0sUfNIv17IUC-o94BHkwdHk',
//     },
//     {
//       year: '2024',
//       title: 'Productive Meeting with Cyprus Minister Dr. Nicodemus Damianou and Team',
//       date: 'Fri, 06 Sep 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D4D22AQGr9I7rNkadMA/feedshare-shrink_800/feedshare-shrink_800/0/1725640466863?e=1734566400&v=beta&t=lyQnkRKWJEQ7ElL14fXHpR7IeIbSYWQ1jcsLNdr8QWA',
//     },
//     {
//       year: '2024',
//       title: 'Honored by Minister Nitin Gadkari: KGV Hybrid Revolutionizing Sustainable Mobility',
//       date: 'Mon, 02 Sep 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQHSnvsoXunG_Q/feedshare-shrink_800/feedshare-shrink_800/0/1724839375101?e=1734566400&v=beta&t=DAnANQsWZezoKTbXbiLqNe8xsZaFN7j0ceaomSy3SnY',
//     },
//     {
//       year: '2024',
//       title: 'Enriching Discussion with Shri Sudhendu Jyoti Sinha ji on Decarbonizing Transportation',
//       date: 'Sat, 24 Aug 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQEQlqa4yAfLUg/feedshare-shrink_800/feedshare-shrink_800/0/1724481380691?e=1734566400&v=beta&t=DKJd1Vl1jV4N5FskkojK2zxLt6n3SK86_DLCFNI0oJo',
//     },
//     {
//       year: '2024',
//       title: 'Honored to Present Sustainability Projects at UNESCO House with Mr. Benno Boer and Team',
//       date: ' Wed, 14 Aug 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQHOmeNqpOHUQg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723638014908?e=1734566400&v=beta&t=M-9_KMSWIKY-Zl4sLs1GarFkWu0DTp0Yf5DXEffmspo',
//     },
//     {
//       year: '2024',
//       title: 'Meeting with Myanmar Deputy Minister Mr. Minn Minn on Innovative Sustainable Solutions and Collaboration',
//       date: ' Sat, 10 Aug 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQHeZ7tEx4zNoA/feedshare-shrink_800/feedshare-shrink_800/0/1723283887551?e=1734566400&v=beta&t=nIo5zrxfFZlQBQzSrK5eMejqEKtV12EHe-TSFoKngBo',
//     },
//     {
//       year: '2024',
//       title: 'Roundtable Discussion on Competition Law in the Digital Age at India SME Forum, New Delhi',
//       date: ' Thu, 08 Aug 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D4D22AQFxmCIsId7YPg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723120853872?e=1734566400&v=beta&t=6Zqr8UXs7r_rf-qZ7rJ6ojERccibEu5Wk35OWOYf47c',
//     },
//     {
//       year: '2024',
//       title: 'Meeting with Nepal Cabinet Minister Mr. Damodar Bhandari on Sustainability in Trade and Innovation',
//       date: ' Wed, 07 Aug 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQGRa_C_u3ABkg/feedshare-shrink_800/feedshare-shrink_800/0/1723027524169?e=1734566400&v=beta&t=JsOTsHsg8_1zArxNiM5lXGsOa92ADMT-m4KhbUdHu6E',
//     },
//     {
//       year: '2024',
//       title: 'Soft Launch of Pure Prakruti: Indias First Commercial Carbon Footprint Diagnostic Tool for Vehicles',
//       date: ' Wed, 07 Aug 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQHPsq5NZ0iMrw/feedshare-shrink_800/feedshare-shrink_800/0/1723018249616?e=1734566400&v=beta&t=MG8kfu5FmBde1vysgG8LrtGPRcWq9HW41UZteLMcxS8',
//     },
//     {
//       year: '2024',
//       title: 'Insightful Discussion on Sustainability and SDGs with Mr. Benno Böer at UNESCO',
//       date: ' Fri, 02 Aug 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQHJsQkm6s927Q/feedshare-shrink_800/feedshare-shrink_800/0/1722629804040?e=1734566400&v=beta&t=hhHZ0sXOyk4U3VaKZKnaecdMdkXYoFjzVs50Y6p8P1w',
//     },
//     {
//       year: '2024',
//       title: 'Attending Journey towards Viksit Bharat Event with PM Narendra Modi Ji and Key Ministers',
//       date: ' Tue, 30 Jul 2024',
//       source: 'From Linkdin',
//       image: 'https://media.licdn.com/dms/image/v2/D5622AQHvnYIH9DKnNA/feedshare-shrink_800/feedshare-shrink_800/0/1722360568400?e=1734566400&v=beta&t=uotflJRaTffXjUmLvW9egQfZnSXWmOjcv2Woi93c_4g',
//     },
//     // Data for 2023
//     {
//       year: '2023',
//       title: 'Reliance expands into green energy with new initiatives',
//       date: 'Sep 14, 2023',
//       source: 'Financial Express',
//     },
//     {
//       year: '2023',
//       title: 'India’s tech industry growth soars amid new policies',
//       date: 'Jun 22, 2023',
//       source: 'The Times of India',
//     },
//     // Data for 2022
//     {
//       year: '2022',
//       title: 'New renewable energy targets set by Indian government',
//       date: 'Mar 18, 2022',
//       source: 'Business Standard',
//     },
//     {
//       year: '2022',
//       title: 'Tata Motors launches electric vehicle line',
//       date: 'Jan 05, 2022',
//       source: 'Hindustan Times',
//     },
//   ];

//   const filteredArticles = articles.filter(article => article.year === selectedYear);

//   return (
//     <div className="bg-gray-100 p-8">
//       <h1 className="text-3xl font-semibold mb-4">Media Coverage</h1>

//       {/* Year selection dropdown */}
//       <div className="flex items-center mb-6">
//         <span className="mr-2 text-xl font-semibold">{selectedYear}</span>
//         <select
//           className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-2 rounded"
//           value={selectedYear}
//           onChange={(e) => setSelectedYear(e.target.value)}
//         >
//           <option value="2024">2024</option>
//           <option value="2023">2023</option>
//           <option value="2022">2022</option>
//         </select>
//       </div>

//       {/* Articles list */}
//       <div>
//         {filteredArticles.map((article, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 mb-4 rounded shadow cursor-pointer"
//             onClick={() => setSelectedArticle(article)}
//           >
//             <h2 className="text-lg font-semibold">{article.title}</h2>
//             <p className="text-sm text-gray-500">
//               {article.date} | {article.source}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Modal for showing article details */}
//       {selectedArticle && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//               onClick={() => setSelectedArticle(null)}
//             >
//               &times;
//             </button>
//             {selectedArticle.image ? (
//               <a href={selectedArticle.image} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={selectedArticle.image}
//                   alt={selectedArticle.title}
//                   className="w-full h-48 object-cover mb-4 rounded cursor-pointer"
//                 />
//               </a>
//             ) : (
//               <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4 rounded">
//                 <p className="text-gray-500">No image available</p>
//               </div>
//             )}
//             <h2 className="text-2xl font-semibold mb-2">{selectedArticle.title}</h2>
//             <p className="text-sm text-gray-500 mb-4">
//               {selectedArticle.date} | {selectedArticle.source}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MediaCoverage;


// import React, { useState } from 'react';

// const MediaCoverage = () => {
//   const [selectedYear, setSelectedYear] = useState('2024');
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   const articles = [
//     // Data for 2024
//     {
//       year: '2024',
//       title: 'Ratan Tata, the perfect renaissance man',
//       date: 'Oct 11, 2024',
//       source: 'The Economic Times',
//       image: 'https://github.com/jagdish97897/weatherapp/blob/main/screenshot%20(21).png?raw=true',
//     },
//     {
//       year: '2024',
//       title: 'Gautam Adani unveils green energy gallery at London Science Museum',
//       date: 'Apr 02, 2024',
//       source: 'Ahmedabad Times',
//     },
//     // Data for 2023
//     {
//       year: '2023',
//       title: 'Reliance expands into green energy with new initiatives',
//       date: 'Sep 14, 2023',
//       source: 'Financial Express',
//     },
//     {
//       year: '2023',
//       title: 'India’s tech industry growth soars amid new policies',
//       date: 'Jun 22, 2023',
//       source: 'The Times of India',
//     },
//     // Data for 2022
//     {
//       year: '2022',
//       title: 'New renewable energy targets set by Indian government',
//       date: 'Mar 18, 2022',
//       source: 'Business Standard',
//     },
//     {
//       year: '2022',
//       title: 'Tata Motors launches electric vehicle line',
//       date: 'Jan 05, 2022',
//       source: 'Hindustan Times',
//     },
//   ];

//   const filteredArticles = articles.filter(article => article.year === selectedYear);

//   return (
//     <div className="bg-gray-100 p-8">
//       <h1 className="text-3xl font-semibold mb-4">Media Coverage</h1>

//       {/* Year selection dropdown */}
//       <div className="flex items-center mb-6">
//         <span className="mr-2 text-xl font-semibold">{selectedYear}</span>
//         <select
//           className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-2 rounded"
//           value={selectedYear}
//           onChange={(e) => setSelectedYear(e.target.value)}
//         >
//           <option value="2024">2024</option>
//           <option value="2023">2023</option>
//           <option value="2022">2022</option>
//         </select>
//       </div>

//       {/* Articles list */}
//       <div>
//         {filteredArticles.map((article, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 mb-4 rounded shadow cursor-pointer"
//             onClick={() => setSelectedArticle(article)}
//           >
//             <h2 className="text-lg font-semibold">{article.title}</h2>
//             <p className="text-sm text-gray-500">
//               {article.date} | {article.source}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Modal for showing article details */}
//       {selectedArticle && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//               onClick={() => setSelectedArticle(null)}
//             >
//               &times;
//             </button>
//             {selectedArticle.image ? (
//               <img
//                 src={selectedArticle.image}
//                 alt={selectedArticle.title}
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//             ) : (
//               <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4 rounded">
//                 <p className="text-gray-500">No image available</p>
//               </div>
//             )}
//             <h2 className="text-2xl font-semibold mb-2">{selectedArticle.title}</h2>
//             <p className="text-sm text-gray-500 mb-4">
//               {selectedArticle.date} | {selectedArticle.source}
//             </p>
//             <p>{selectedArticle.content}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MediaCoverage;

// import React, { useState } from 'react';

// const MediaCoverage = () => {
//   const [selectedYear, setSelectedYear] = useState('2024');
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   const articles = [
//     {
//       year: '2024',
//       title: 'Ratan Tata, the perfect renaissance man',
//       date: 'Oct 11, 2024',
//       source: 'The Economic Times',
//       image: 'https://github.com/jagdish97897/weatherapp/blob/main/screenshot%20(21).png?raw=true',
//     },
//     {
//       year: '2024',
//       title: 'Gautam Adani unveils green energy gallery at London Science Museum',
//       date: 'Apr 02, 2024',
//       source: 'Ahmedabad Times',
//     },
//     // Data for 2023
//     {
//       year: '2023',
//       title: 'Reliance expands into green energy with new initiatives',
//       date: 'Sep 14, 2023',
//       source: 'Financial Express',
//     },
//     {
//       year: '2023',
//       title: 'India’s tech industry growth soars amid new policies',
//       date: 'Jun 22, 2023',
//       source: 'The Times of India',
//     },
//     // Data for 2022
//     {
//       year: '2022',
//       title: 'New renewable energy targets set by Indian government',
//       date: 'Mar 18, 2022',
//       source: 'Business Standard',
//     },
//     {
//       year: '2022',
//       title: 'Tata Motors launches electric vehicle line',
//       date: 'Jan 05, 2022',
//       source: 'Hindustan Times',
//     },
//   ];

//   const filteredArticles = articles.filter(article => article.year === selectedYear);

//   return (
//     <div className="bg-gray-100 p-8">
//       <h1 className="text-3xl font-semibold mb-4">Media Coverage</h1>

//       {/* Year selection dropdown */}
//       <div className="flex items-center mb-6">
//         <span className="mr-2 text-xl font-semibold">{selectedYear}</span>
//         <select
//           className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-2 rounded"
//           value={selectedYear}
//           onChange={(e) => setSelectedYear(e.target.value)}
//         >
//           <option value="2024">2024</option>
//           <option value="2023">2023</option>
//           <option value="2022">2022</option>
//         </select>
//       </div>

//       {/* Articles list */}
//       <div>
//         {filteredArticles.map((article, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 mb-4 rounded shadow cursor-pointer"
//             onClick={() => setSelectedArticle(article)}
//           >
//             <h2 className="text-lg font-semibold">{article.title}</h2>
//             <p className="text-sm text-gray-500">
//               {article.date} | {article.source}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Modal for showing article details */}
//       {selectedArticle && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//               onClick={() => setSelectedArticle(null)}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedArticle.image}
//               alt={selectedArticle.title}
//               className="w-full h-48 object-cover mb-4 rounded"
//             />
//             <h2 className="text-2xl font-semibold mb-2">{selectedArticle.title}</h2>
//             <p className="text-sm text-gray-500 mb-4">
//               {selectedArticle.date} | {selectedArticle.source}
//             </p>
//             <p>{selectedArticle.content}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MediaCoverage;
