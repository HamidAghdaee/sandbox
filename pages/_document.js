import Document, { Head, Main, NextScript } from 'next/document';
import { renderToSheetList } from 'fela-dom';
import felaRenderer from '../felaRenderer';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const sheetList = renderToSheetList(felaRenderer)
    felaRenderer.clear();
    return {
      ...page,
      sheetList
    }
  }

  render () {
    const styleNodes = this.props.sheetList.map(({ type, media, css }) =>
      <style
        dangerouslySetInnerHTML={{ __html: css }}
        data-fela-type={type}
        key={`${type}-${media}`}
        media={media}
      />
    )
    return (
      <html>
        <Head>
          <title>Design-Engineering Sandbox</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <style>{`body { margin: 0 }`}</style>
          {styleNodes}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}