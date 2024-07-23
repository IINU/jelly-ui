import { Note, NoteVariant } from './Note'

type Props<T> = {
  notes: T[]
  keyExtractor?: (note: T, index: number) => string | number
  titleExtractor: (note: T) => string
  bodyExtractor: (note: T) => string
  typeExtractor: (note: T) => NoteVariant
}

export function Notes<T>({
  notes,
  keyExtractor,
  titleExtractor,
  bodyExtractor,
  typeExtractor,
}: Props<T>) {
  if (!keyExtractor) {
    keyExtractor = (_, i) => i
  }

  return (
    <div className="jui-space-y-2.5">
      {notes.map((n, i) => (
        <Note
          key={keyExtractor(n, i)}
          variant={typeExtractor(n)}
          title={`#${i + 1} ${titleExtractor(n)}`}
          body={bodyExtractor(n)}
        />
      ))}
    </div>
  )
}
