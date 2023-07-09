import Test from "./Test";

export default async function Home() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
  const response = await promise;

  return (
    <div>
      <Test />
    </div>
  );
}
