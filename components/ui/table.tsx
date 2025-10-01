import * as React from "react"
import { Table as RTTable } from "@radix-ui/themes"
import { cn } from "@/lib/utils"

type RootRef = React.ElementRef<typeof RTTable.Root>
type RootProps = React.ComponentPropsWithoutRef<typeof RTTable.Root>
type HeaderRef = React.ElementRef<typeof RTTable.Header>
type HeaderProps = React.ComponentPropsWithoutRef<typeof RTTable.Header>
type BodyRef = React.ElementRef<typeof RTTable.Body>
type BodyProps = React.ComponentPropsWithoutRef<typeof RTTable.Body>
type RowRef = React.ElementRef<typeof RTTable.Row>
type RowProps = React.ComponentPropsWithoutRef<typeof RTTable.Row>
type ColumnHeaderCellRef = React.ElementRef<typeof RTTable.ColumnHeaderCell>
type ColumnHeaderCellProps = React.ComponentPropsWithoutRef<typeof RTTable.ColumnHeaderCell>
type CellRef = React.ElementRef<typeof RTTable.Cell>
type CellProps = React.ComponentPropsWithoutRef<typeof RTTable.Cell>

const Table = React.forwardRef<RootRef, RootProps>(
  ({ className, ...props }, ref) => (
    <RTTable.Root ref={ref} className={cn(className)} {...props} />
  )
)
Table.displayName = "Table"

const TableHeader = React.forwardRef<HeaderRef, HeaderProps>(
  ({ className, ...props }, ref) => (
    <RTTable.Header ref={ref} className={cn(className)} {...props} />
  )
)
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<BodyRef, BodyProps>(
  ({ className, ...props }, ref) => (
    <RTTable.Body ref={ref} className={cn(className)} {...props} />
  )
)
TableBody.displayName = "TableBody"

const TableRow = React.forwardRef<RowRef, RowProps>(
  ({ className, ...props }, ref) => (
    <RTTable.Row ref={ref} className={cn(className)} {...props} />
  )
)
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<ColumnHeaderCellRef, ColumnHeaderCellProps>(
  ({ className, ...props }, ref) => (
    <RTTable.ColumnHeaderCell ref={ref} className={cn(className)} {...props} />
  )
)
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<CellRef, CellProps>(
  ({ className, ...props }, ref) => (
    <RTTable.Cell ref={ref} className={cn(className)} {...props} />
  )
)
TableCell.displayName = "TableCell"

export {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
}
