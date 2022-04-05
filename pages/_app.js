import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full bg-gray-100 min-w-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
