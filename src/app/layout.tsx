'use client'

import "./globals.css";
import { Provider } from "react-redux";
import {setupStore} from '@/services/store'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = setupStore()
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        {children}
        </Provider>
      </body>
    </html>
  );
}
