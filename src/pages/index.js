import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, keywordContent, authorName } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content={
            description ||
            `I'm lakshman gope. This is my portfolio. Developed using react, gatsby, sass, styled-components`
          }
        />
        <meta name="keywords" content={keywordContent} />
        <meta name="author" content={authorName} />
      </Helmet>
      <App />
    </>
  );
};
