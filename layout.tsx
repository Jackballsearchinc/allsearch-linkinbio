export const metadata = {
  title: "AllSearch Recruiting — Link in Bio",
  description: "Where Talent Meets Opportunity.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
