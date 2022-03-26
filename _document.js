import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
// https://github.com/vercel/next.js/discussions/19049
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // locale is in ctx.locale

    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render() {
    return (
      // set lang="ar" and dir=:"rtl"
      <Html
        dir={this.props.locale === "ar" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <Head>
          {/* base */}
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='description' content='rtl  website' />

          {/* <!-- rtl Bootstrap CSS --> */}

          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css'
            integrity='sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N'
            crossOrigin='anonymous'
          />

          {/* <!-- fonts files --> */}
          <link
            href='http://fonts.googleapis.com/css?family=Karla:400,400italic,700,700italic'
            rel='stylesheet'
            type='text/css'
          />
          <link
            href='http://fonts.googleapis.com/css?family=Libre+Baskerville:400,400italic,700'
            rel='stylesheet'
            type='text/css'
          />

          {/* <!-- Font awesome css --> */}
          <link
            rel='stylesheet'
            href='http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* rtl script support */}
          <script
            src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
            integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
            crossOrigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

{
  /* <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${SiteConfig.googleAnalytic}');`
                }}
              /> */
}

// useEffect(() => {
//   let dir = locale == "ar" ? "rtl" : "ltr";
//   let lang = locale == "ar" ? "ar" : "en";
//   document.querySelector("html").setAttribute("dir", dir);
//   document.querySelector("html").setAttribute("lang", lang);
// }, [locale]);
