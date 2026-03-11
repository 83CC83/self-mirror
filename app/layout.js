export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}