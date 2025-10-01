import * as React from "react"
import { Badge as RTBadge } from "@radix-ui/themes"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.ComponentPropsWithoutRef<typeof RTBadge> {}

function Badge({ className, ...props }: BadgeProps) {
  return <RTBadge className={cn(className)} {...props} />
}

export { Badge }
