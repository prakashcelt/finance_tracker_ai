"use client"

import * as React from "react"
import { Select as RTSelect } from "@radix-ui/themes"
import { cn } from "@/lib/utils"

const Select = RTSelect.Root
const SelectGroup = RTSelect.Group
// Preserve API: no-op; Radix Themes Trigger renders selected value itself
const SelectValue = ({ placeholder }: { placeholder?: string }) => null

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RTSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof RTSelect.Trigger>
>(({ className, children: _children, ...props }, ref) => (
  <RTSelect.Trigger ref={ref} className={cn(className)} {...props} />
))
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef<
  React.ElementRef<typeof RTSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RTSelect.Content>
>(({ className, ...props }, ref) => (
  <RTSelect.Content ref={ref} className={cn(className)} {...props} />
))
SelectContent.displayName = "SelectContent"

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof RTSelect.Label>,
  React.ComponentPropsWithoutRef<typeof RTSelect.Label>
>(({ className, ...props }, ref) => (
  <RTSelect.Label ref={ref} className={cn(className)} {...props} />
))
SelectLabel.displayName = "SelectLabel"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof RTSelect.Item>,
  React.ComponentPropsWithoutRef<typeof RTSelect.Item>
>(({ className, ...props }, ref) => (
  <RTSelect.Item ref={ref} className={cn(className)} {...props} />
))
SelectItem.displayName = "SelectItem"

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof RTSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof RTSelect.Separator>
>(({ className, ...props }, ref) => (
  <RTSelect.Separator ref={ref} className={cn(className)} {...props} />
))
SelectSeparator.displayName = "SelectSeparator"

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
