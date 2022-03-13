import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// COPMONERNT
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

// MyApp.getInitialProps = async (context) => {
//   const { ctx, Component } = context;
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     // Component의 context로 ctx를 넣어주자
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   // return한 값은 해당 컴포넌트의 props로 들어가게 됩니다.
//   return { pageProps };
// };
