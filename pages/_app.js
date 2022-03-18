export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <p>
          <a href="/">Home</a> <a href="/about">About</a>{' '}
          <a href="/planets">Planets</a>
        </p>
      </div>
      <Component {...pageProps} />
    </div>
  )
}
