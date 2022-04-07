import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full bg-gray-100 min-h-screen max-w-screen overflow-x-clip">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
