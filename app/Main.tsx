import Link from '@/components/Link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const FEATURED_SLUGS = [
  'sap-ariba-slp-sourcing-innovx-ocp',
  'sap-ariba-buying-invoicing-um6p',
  'procurement-kpis-analytics-um6p',
  'ocr-ai-customs-compliance-sh-code-tracking',
]

const WORK_AREAS = [
  {
    title: 'SAP P2P & S2C Transformation',
    description:
      'SAP Ariba SLP, Sourcing, Buying & Invoicing, SAP S/4HANA MM, supplier lifecycle, sourcing, invoicing, and contracts.',
  },
  {
    title: 'AMOA & Business Process Design',
    description:
      'Workshops, requirements gathering, fit-to-core analysis, functional specifications, UAT, user enablement, and stakeholder coordination.',
  },
  {
    title: 'Data, Analytics & Automation',
    description:
      'Power BI, OData, SAP Ariba APIs, Python, OCR/AI, workflow automation, procurement KPIs, and operational monitoring.',
  },
  {
    title: 'Technical R&D & AI Use Cases',
    description:
      'LLM/RAG, vector search, product embeddings, technical documentation, and industrial software analysis shaped for business delivery.',
  },
]

const EXPERIENCE_SNAPSHOT = [
  {
    title: 'Senior SAP P2P Consultant - Mining & R&D',
    description:
      'UM6P as BU OCP, INNOVX, and OCP Group contexts. SAP Ariba implementation, rollout, evolutive support, analytics, automation, UAT, enablement, and S/4HANA integration.',
  },
  {
    title: 'Confirmed SAP P2P Consultant - Energy & Distribution',
    description:
      'Groupe Zine and Winxo contexts. SAP MM / Ariba support, requirements, functional specifications, SIT/UAT, incidents, and continuous improvement.',
  },
  {
    title: 'Associate SAP Consultant - Automotive & Railway',
    description:
      'MTA Automobile and Alstom contexts. P2P/S2C support, testing, documentation, L1/L2 support, transaction monitoring, and process structuring.',
  },
]

export default function Home({ posts }) {
  const featuredPosts = FEATURED_SLUGS.map((slug) =>
    posts.find((post) => post.slug === slug)
  ).filter(Boolean)

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <section className="pt-6 pb-10 md:pb-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary-500 text-sm font-semibold tracking-[0.2em] uppercase">
                Wahbi Hamza
              </p>
              <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-tight dark:text-gray-100">
                Software Engineer | SAP Ariba / S2P / SAP S/4HANA Consultant
              </h1>
              <p className="max-w-3xl text-lg leading-7 text-gray-500 dark:text-gray-400">
                I turn complex procurement and business processes into structured SAP, data, and
                automation deliverables across P2P, S2C, SAP Ariba, SAP S/4HANA, analytics, and
                AI-enabled workflows.
              </p>
              <p className="max-w-3xl text-base leading-7 text-gray-500 dark:text-gray-400">
                Selected work across SAP procurement transformation, AMOA, business process design,
                analytics, automation, and technical R&D use cases.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-base leading-6 font-medium">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="View case studies"
              >
                View case studies &rarr;
              </Link>
              <Link
                href="/about"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="About Wahbi Hamza"
              >
                About &rarr;
              </Link>
              <Link
                href={`mailto:${siteMetadata.email}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Email Wahbi Hamza"
              >
                Contact &rarr;
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/static/images/avatar.png"
              alt="Wahbi Hamza"
              width={220}
              height={220}
              className="h-40 w-40 rounded-full object-cover md:h-52 md:w-52"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="space-y-2 pb-8">
          <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Selected Work Areas
          </h2>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            Professional delivery across procurement processes, enterprise systems, data, and
            automation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {WORK_AREAS.map((area) => (
            <div
              key={area.title}
              className="space-y-3 rounded-2xl border border-gray-200 p-6 dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                {area.title}
              </h3>
              <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="space-y-2 pb-8">
          <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Experience Snapshot
          </h2>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            A progression from industrial support roles into senior SAP P2P and S2C delivery.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {EXPERIENCE_SNAPSHOT.map((item) => (
            <div
              key={item.title}
              className="space-y-3 rounded-2xl border border-gray-200 p-6 dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="space-y-2 pb-8">
          <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Featured Case Studies
          </h2>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            Professional case studies and sanitized use cases based on SAP, procurement, data,
            automation, and AI work.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!featuredPosts.length && <li className="py-6 text-gray-500">No case studies found.</li>}
          {featuredPosts.map((post) => {
            const { slug, date, title, summary, tags } = post

            return (
              <li key={slug} className="py-8">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap">
                            {tags?.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read case study: "${title}"`}
                        >
                          Read case study &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="py-12">
        <div className="space-y-3">
          <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Looking for a consultant who can bridge business process, enterprise systems, data, and
            automation?
          </h2>
          <p className="max-w-3xl text-base leading-7 text-gray-500 dark:text-gray-400">
            I work across SAP Ariba, SAP S/4HANA, procurement digitalization, analytics, and
            AI-enabled workflow design. Based in Casablanca / Rabat / Hybrid, Morocco.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 pt-6 text-base leading-6 font-medium">
          <Link
            href={`mailto:${siteMetadata.email}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            wahbi.workmail@gmail.com
          </Link>
          {siteMetadata.linkedin && (
            <Link
              href={siteMetadata.linkedin}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              LinkedIn
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}
