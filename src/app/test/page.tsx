import Test from "./Test";

export default async function Home() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_ENDPOINT + "products"
  );
  const data = await response.json();

  return (
    <div>
      <Test />
    </div>
  );
}
