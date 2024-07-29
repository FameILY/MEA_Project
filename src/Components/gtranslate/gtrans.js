import { useEffect } from 'react';
import Head from 'next/head';

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script');
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };



    const initGoogleTranslate = () => {
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en' },
            'google_translate_element'
          );
        };
      }
    };
  

    addScript();
    initGoogleTranslate();

  }, []);

  return (
    <>
      <Head>
        <script type="text/javascript">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en' },
                'google_translate_element'
              );
            }
          `}
        </script>
      </Head>
      <div id="google_translate_element"></div>
      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }

        body {
          top: 0px !important;
        }
      `}</style>
    </>
  );
};

export default GoogleTranslate;
