function PolicySection({ section }) {
  return (
    <div className={section.className ?? 'policy-section'}>
      {section.title ? <h2>{section.title}</h2> : null}
      {section.paragraphs?.map((paragraph, index) => (
        <p key={`${section.title ?? 'section'}-${index}`}>{paragraph}</p>
      ))}
      {section.block}
      {section.extra}
    </div>
  );
}

export default function PolicyLayout({ page }) {
  return (
    <>
      <div
        className={`page-hero${page.heroAccent ? ' with-hero-accent' : ''}`}
        style={page.heroAccent ? { '--hero-accent': page.heroAccent } : undefined}
      >
        <span className="page-eyebrow">{page.eyebrow}</span>
        <h1 className="page-title">
          {page.titlePrefix} <em>{page.titleEmphasis}</em>
        </h1>
        <p className="page-date">{page.date}</p>
      </div>

      <div className="policy-wrap">
        {page.sections.map((section, index) => (
          <PolicySection section={section} key={`${page.titlePrefix}-${index}`} />
        ))}

        {page.legalNav ? (
          <div className="legal-nav">
            {page.legalNav.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        {page.note ? <div className="policy-note">{page.note}</div> : null}
      </div>
    </>
  );
}
