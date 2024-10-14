import { Typography } from './Typography'

type Column = {
  idExtractor?: (index: number) => number | string
  title: string
  className?: string
}

type Row<T> = {
  idExtractor?: (item: T, index: number) => number | string
  contentExtractor: (item: T) => string
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
      <table className="jui-min-w-full jui-table-auto jui-border-collapse jui-border jui-border-gray-200">
        <thead>
        <tr className="jui-bg-primary-100 jui-text-left">
          {columns.map(({ column }, i) => (
            <th
              key={column.idExtractor ? column.idExtractor(i) : `col-${i}`}
              className={`jui-px-4 jui-py-2 jui-border jui-border-primary-200 ${column.className ?? ''}`}
            >
              <Typography className="jui-text-primary-900">
                {column.title}
              </Typography>
            </th>
          ))}
        </tr>
        </thead>

        <tbody>
        {rows.map((item, i) => (
          <tr key={`row-${i}`}>
            {columns.map(({ row }, j) => (
              <td
                key={row.idExtractor ? row.idExtractor(item, j) : `row-col-${i}-${j}`}
                className={`jui-px-4 jui-py-2 jui-border jui-bg-white jui-border-primary-100 ${row.textAlign === 'right' ? 'jui-text-right' : 'jui-text-left'}`}
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