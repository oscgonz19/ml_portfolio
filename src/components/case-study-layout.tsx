import type { CaseStudy } from '@/types'
import { H2 } from './typography'

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy
}

function CaseStudySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <H2 className="mb-4">{title}</H2>
      {children}
    </div>
  )
}

export function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  return (
    <div className="space-y-12">
      <CaseStudySection title="Context">
        <p className="leading-relaxed text-neutral-400">{caseStudy.context}</p>
      </CaseStudySection>

      <CaseStudySection title="Problem">
        <p className="leading-relaxed text-neutral-400">{caseStudy.problem}</p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <ul className="space-y-2">
          {caseStudy.approach.map((item, i) => (
            <li
              key={i}
              className="border-l border-neutral-800 pl-4 text-sm leading-relaxed text-neutral-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Technical Decisions">
        <ul className="space-y-2">
          {caseStudy.decisions.map((item, i) => (
            <li
              key={i}
              className="border-l border-neutral-800 pl-4 text-sm leading-relaxed text-neutral-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Trade-offs">
        <ul className="space-y-2">
          {caseStudy.tradeoffs.map((item, i) => (
            <li
              key={i}
              className="border-l border-neutral-800 pl-4 text-sm leading-relaxed text-neutral-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Outcome">
        <p className="leading-relaxed text-neutral-400">{caseStudy.outcome}</p>
      </CaseStudySection>
    </div>
  )
}
