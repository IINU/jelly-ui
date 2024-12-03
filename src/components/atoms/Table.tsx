import { Typography } from './Typography'
import { ReactNode } from 'react'

type Column = {
  idExtractor?: (index: number) => number | string
  title: ReactNode
  className?: string
  textAlign?: 'left' | 'right'
}

type Row<T> = {
  idExtractor?: (item: T, index: number) => number | string
  contentExtractor: (item: T) => ReactNode
  textAlign?: 'left' | 'right'
}

type TableColumn<T> = {
  column: Column
  row: Row<T>
}

type Props<T> = {
  columns: TableColumn<T>[]
  rows: T[]
}

export function Table<T>({ columns, rows }: Props<T>) {
  return (
    <div className="jui-overflow-x-auto">
      <table className="jui-min-w-full jui-table-auto jui-border-collapse">
        <thead>
        <tr className="jui-bg-primary-100 jui-text-left jui-whitespace-nowrap">
          {columns.map(({ column }, i) => (
            <th
              key={column.idExtractor ? column.idExtractor(i) : `col-${i}`}
              className={`jui-px-3 jui-py-2 ${column.className ?? ''} ${column.textAlign === 'right' ? 'jui-text-right' : 'jui-text-left'}`}
            >
              <Typography style="subtitle1" className="jui-text-primary-900">
                {column.title}
              </Typography>
            </th>
          ))}
        </tr>
        </thead>

        <tbody>
        {rows.map((item, i) => (
          <tr key={`row-${i}`} className="jui-border-b jui-border-primary-100 jui-whitespace-nowrap">
            {columns.map(({ row }, j) => (
              <td
                key={row.idExtractor ? row.idExtractor(item, j) : `row-col-${i}-${j}`}
                className={`jui-px-3 jui-py-2 jui-bg-white ${row.textAlign === 'right' ? 'jui-text-right' : 'jui-text-left'}`}
              >
                <Typography className="jui-text-primary-900">
                  {row.contentExtractor(item)}
                </Typography>
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}