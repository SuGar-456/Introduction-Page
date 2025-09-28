import * as React from "react"
import clsx from "clsx"

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={clsx("inline-block rounded-full border px-2 py-0.5 text-xs", className)} {...props} />
}
