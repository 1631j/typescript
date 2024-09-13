type ComponentProps = { name: string; id: number };

function Component({ name, id }: ComponentProps) {
  return (
    <div>
      {/* <h2>React & Typescript</h2>
      <h2>Props</h2> */}
      <h1>name: {name}</h1>
      <h1>id: {id}</h1>
    </div>
  );
}
export default Component;
