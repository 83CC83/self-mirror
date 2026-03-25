export const metadata = {
  title: "Self Mirror | 你認識自己嗎",
  description: "你以為的自己，不一定是真實的你。",
  keywords: ["自我認知", "心理測驗", "自我探索", "性格測驗", "自我了解", "心理分析"],
  openGraph: {
    title: "Self Mirror | 你認識自己嗎",
    description: "你以為的自己，不一定是真實的你。",
    url: "https://self-mirror-quiz.vercel.app",
    siteName: "Self Mirror",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Self Mirror",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}