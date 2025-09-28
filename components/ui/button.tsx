import * as React from "react"
import clsx from "clsx"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: "default" | "secondary" | "outline"
}

export function Button({ className, variant="default", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-medium transition border"
  const styles = {
    default: "bg-black text-white hover:opacity-90 border-black",
    secondary: "bg-white text-black hover:bg-neutral-100 border-neutral-200",
    outline: "bg-transparent text-black hover:bg-neutral-100 border-neutral-300",
  }[variant]
  return <button className={clsx(base, styles, className)} {...props} />
}
