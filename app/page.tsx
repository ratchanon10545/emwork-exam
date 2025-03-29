import Image from "next/image";
import List from "./components/List";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/incomeexpenses" , {
    method: "GET",
    
  })
  const list = await data.json()
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-3xl md:w-3xl bg-black p-8 rounded-lg shadow-lg justify-items-center">
        <div className="text-xl md:text-4xl font-bold text-white">INCOME-EXPENSES</div>
          <List list={list}></List>
      </div>
    </div>
  );
}
