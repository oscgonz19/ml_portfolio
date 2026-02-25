import { forwardRef } from 'react'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>
type SpanProps = React.HTMLAttributes<HTMLSpanElement>

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        'text-3xl font-semibold tracking-tight text-white',
        className
      )}
      {...props}
    />
  )
)
H1.displayName = 'H1'

export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-medium text-white', className)}
      {...props}
    />
  )
)
H2.displayName = 'H2'

export const Text = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-base leading-relaxed text-neutral-400', className)}
      {...props}
    />
  )
)
Text.displayName = 'Text'

export const Muted = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-neutral-500', className)}
      {...props}
    />
  )
)
Muted.displayName = 'Muted'

export const Small = forwardRef<HTMLSpanElement, SpanProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-xs text-neutral-500', className)}
      {...props}
    />
  )
)
Small.displayName = 'Small'
