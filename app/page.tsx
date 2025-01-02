
import Hello from "@/app/components/hello";

export default function Home() {
  console.log("Hello, world! -- Server");
  return (
    <>
    <h1 className="text-3xl bold items-center">Exercise Next.JS</h1>
    <Hello />

    </>
  );
}
