import dynamic from "next/dynamic";
import Image from "next/image";

const HomeScreen=dynamic(()=>import("@/screens/home/home"),{
  ssr:true
})
export default function HomePage() {
  return (
<>
<HomeScreen/>
</>
  );
}