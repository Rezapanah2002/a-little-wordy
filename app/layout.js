import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>A Little Wordy</title>
        <meta name="description" content="Play A Little Wordy online" />
      </head>
      <body>{children}</body>
    </html>
  );
}