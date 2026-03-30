export const metadata = {
  title: "Study Tracker",
  description: "Mini project to track study hours",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial", background: "#f4f4f4" }}>
        <div style={{ maxWidth: "600px", margin: "30px auto" }}>
          <h1 style={{ textAlign: "center" }}>📚 Study Tracker</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
