import { Children, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type CollapsibleSectionProps = {
  children: ReactNode
  previewCount?: number
  initiallyExpanded?: boolean
  className?: string
  contentClassName?: string
  expandLabel?: string
  collapseLabel?: string
}

export function CollapsibleSection({
  children,
  previewCount = 4,
  initiallyExpanded = false,
  className,
  contentClassName,
  expandLabel = 'Xem thêm',
  collapseLabel = 'Thu gọn',
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded)
  const items = useMemo(() => Children.toArray(children), [children])

  const canCollapse = items.length > previewCount
  const visibleItems = isExpanded || !canCollapse ? items : items.slice(0, previewCount)

  return (
    <div className={className}>
      <div className={contentClassName}>{visibleItems}</div>
      {canCollapse && (
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
          >
            {isExpanded ? collapseLabel : expandLabel}
          </button>
        </div>
      )}
    </div>
  )
}
