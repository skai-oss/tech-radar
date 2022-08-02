import "../styles/globals.css";

const MixpanelTracking =
  process.env.NEXT_PUBLIC_MIXPANEL_TOKEN &&
  require("../integrations/mixpanel").default;

function MyApp({ Component, pageProps }) {
  return (
    <>
      {MixpanelTracking ? <MixpanelTracking /> : null}
      <div className="h-full bg-gray-100 min-h-screen max-w-screen overflow-x-clip">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
