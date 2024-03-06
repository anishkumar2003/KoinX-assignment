import Chart from "./Chart";

export default function Header() {
  return (
    <main className="w-screen h-full bg-blue-200 px-5">
      <h1>
        <span className="opacity-65">Cryptocurrencies</span> &raquo; Bitcoin
      </h1>
      <Chart></Chart>
    </main>
  );
}
