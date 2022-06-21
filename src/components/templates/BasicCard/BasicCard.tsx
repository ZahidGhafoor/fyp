export default function BasicCard({ children }: any) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginBottom: "20px",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
