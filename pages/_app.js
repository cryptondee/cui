import "@/styles/globals.css";
import { Bitter as Sans, Montserrat as Serif } from "@next/font/google";
const bitter = Sans({
  subsets: ["latin"],
  variable: "--font-bitter",
  weight: "400",
});
const montserrat = Serif({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${bitter.variable} ${montserrat.variable} bg-gray-900`}>
      <Component {...pageProps} />;
    </main>
  );
}
