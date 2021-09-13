export default function Section({ title, children }) {
  return (
    <div>
      <h1 aria-label="Please leave your feedback">{title}</h1>
      {children}
    </div>
  );
}
