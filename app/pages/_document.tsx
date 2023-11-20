// This custom document file is a good place to include links to font files,
//  analytics SDK links, or any script that you think should be available globally
//  such as <Main /> and <NextScript />
import Document, { Head, Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
