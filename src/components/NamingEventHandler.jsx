function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing')}>Play Movie</Button>
      <Button onSmash={() => alert('Playing')}>Play Movie</Button>
    </div>
  );
}
