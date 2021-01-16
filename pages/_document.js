import Document, { Html, Head, Main, NextScript } from 'next/document'
class InlineStylesHead extends Head {
  getCssLinks({ allFiles }) {
    return allFiles
      .filter((file) => file.endsWith('.css'))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(path.join('.next', file), 'utf-8'),
          }}
        />
      ));
  }
}
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <InlineStylesHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument