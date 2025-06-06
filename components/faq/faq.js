import Accordion from '../faq/accordian';
import React, { useEffect, useState } from 'react';
import Footer from '../footer';
import { FAQPageJsonLd } from 'next-seo';
function Faq() {
  const styles = {
    fontFamily: 'Raleway',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000000',
  };

  const faqs = [
    {
      question: 'What is E-Summit?',
      answer:
        'E-Summit, being the flagship event of E-Cell IIT Roorkee, is held annually bringing together the academic community, new age entrepreneurs, industry leaders and investors on a common a platform',
    },
    {
      question: 'The dates are 21st to 23rd of January, but what about COVID?',
      answer:
        "Don't worry we've got you covered. This edition of E-Summit is completely online and you can attend it from any part of the world!",
    },
    {
      question:
        'Is it necessary to participate in a competition to be a part of the summit?',
      answer:
        'No, we have separate passes for all those who want to attend speaker sessions, masterclasses and workshops',
    },
    {
      question: 'Who all can be a part of the summit?',
      answer:
        'Students, professionals and professors all can be a part of the summit',
    },
    {
      question: 'Can I form a team with members from different colleges?',
      answer:
        'Definitely, being in the same college is not a restriction to participate in a competition',
    },
    {
      question: 'What are the perks of attending the E-Summit?',
      answer:
        'Apart from an awesome learning experience, you are in for exciting cash prizes and goodies and certificates from E-Cell IIT Roorkee',
    },
  ];

  return (
    <div>
      <FAQPageJsonLd
      mainEntity={faqs}
    />
      <div style={styles} id='faq'>
        <div
          style={{
            width: '80%',
            fontFamily: 'Raleway',
            fontSize: '32px',
            fontWeight: '500',
            lineHeight: '36px',
            textAlign: 'left',
            marginBottom: '2%',
          }}
        >
          FAQs
        </div>
        {faqs?.map((faq, id) => (
          <Accordion title={faq.question} content={faq.answer} key={id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
