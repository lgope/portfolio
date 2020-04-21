import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  // const { title, lang, description, keywordContent, authorName } = headData;
  const { title, lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />

        {/* <meta name="keywords" content={keywordContent} />
        <meta name="author" content={authorName} /> */}

        {/* meta for preview website */}
        {/* <meta property="og:image" content="../images/preview.png" /> */}
      </Helmet>
      <App />
    </>
  );
};
