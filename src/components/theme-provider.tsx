"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

// Simplified version without TypeScript annotations
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 