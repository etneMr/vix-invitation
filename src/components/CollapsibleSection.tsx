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
            className="group inline-flex items-center gap-2 rounded-full border border-[#66b3ff]/60 bg-white/70 px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#66b3ff]/80 shadow-sm shadow-black/5 transition hover:bg-[#66b3ff]/60 hover:text-white"
          >
            {isExpanded ? collapseLabel : expandLabel}
          </button>
        </div>
      )}
    </div>
  )
}
