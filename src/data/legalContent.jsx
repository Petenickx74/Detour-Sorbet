const contactBlock = (emailHref, emailText) => (
  <div className="contact-block">
    <p>
      Email: <a href={emailHref}>{emailText}</a>
    </p>
    <p>
      Phone: <a href="tel:+14065291178">(406) 529-1178</a>
    </p>
    <p>Eliot, Maine</p>
  </div>
);

const allergenLegend = (
  <>
    <p>
      The information below reflects our current recipes. Recipes and ingredients may change
      seasonally — always confirm with us directly if you have concerns.
    </p>
    <div className="legend" style={{ marginTop: '1.2rem' }}>
      <span className="legend-title">Key:</span>
      <div className="legend-item">
        <span className="allergen-tag contains">Contains</span>
        <span>present in recipe</span>
      </div>
      <div className="legend-item">
        <span className="allergen-tag may-contain">May Contain</span>
        <span>shared kitchen risk</span>
      </div>
      <div className="legend-item">
        <span className="allergen-tag free">Free From</span>
        <span>not in recipe</span>
      </div>
    </div>
    <div className="allergen-grid">
      {[
        ['Pistachio', ['Tree Nuts', 'Dairy-Free', 'Gluten-Free', 'Peanuts'], ['contains', 'free', 'free', 'may-contain']],
        ['Chocolate Almond', ['Tree Nuts', 'Dairy-Free', 'Gluten-Free', 'Peanuts'], ['contains', 'free', 'free', 'may-contain']],
        ['Diner Coffee', ['Nut-Free', 'Dairy-Free', 'Gluten-Free', 'Tree Nuts'], ['free', 'free', 'free', 'may-contain']],
        ['PB&J', ['Peanuts', 'Dairy-Free', 'Gluten-Free'], ['contains', 'free', 'free']],
        ['Coconut', ['Tree Nuts', 'Dairy-Free', 'Gluten-Free', 'Peanuts'], ['contains', 'free', 'free', 'may-contain']],
        ['Keylime', ['Nut-Free', 'Dairy-Free', 'Gluten-Free', 'Tree Nuts'], ['free', 'free', 'free', 'may-contain']],
        ['Coconut Thai Basil', ['Tree Nuts', 'Dairy-Free', 'Gluten-Free', 'Peanuts'], ['contains', 'free', 'free', 'may-contain']],
        ['Peanut Vanilla', ['Peanuts', 'Dairy-Free', 'Gluten-Free', 'Tree Nuts'], ['contains', 'free', 'free', 'may-contain']],
      ].map(([name, tags, classes]) => (
        <div className="allergen-card" key={name}>
          <div className="allergen-card-name">{name}</div>
          <div className="allergen-tag-list">
            {tags.map((tag, index) => (
              <span className={`allergen-tag ${classes[index]}`} key={`${name}-${tag}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

export const privacyPolicyPage = {
  eyebrow: 'Legal',
  titlePrefix: 'Privacy',
  titleEmphasis: 'Policy',
  date: 'Last updated: April 2025',
  sections: [
    { title: 'Who we are', paragraphs: ['Detour LLC is a small-batch sorbet company based in Eliot, Maine. Our website is located at detoursorbet.com.'] },
    { title: 'What information we collect', paragraphs: ['We only collect information you voluntarily provide to us — such as your name, email address, and phone number when you reach out to place an order, ask about wholesale, or contact us directly. We do not use sign-up forms, account creation, or automated data collection at this time.'] },
    { title: 'How we use your information', paragraphs: ['Any information you share with us is used solely to respond to your inquiry or fulfill your order. We do not send unsolicited marketing emails, and we will never sell, rent, or share your personal information with third parties for their own use.'] },
    { title: 'Third-party services', paragraphs: ["Our website links to Instagram, which is operated by Meta. If you visit our Instagram page, Meta's own privacy policy governs that experience. Our site also loads certain images via GitHub's servers. We do not control the data practices of either platform."] },
    { title: 'Cookies and tracking', paragraphs: ['Our website does not currently use cookies, tracking pixels, or analytics software. If this changes in the future, this policy will be updated to reflect it.'] },
    { title: 'Data security', paragraphs: ['We take reasonable precautions to protect any information you share with us. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'] },
    { title: "Children's privacy", paragraphs: ['Our website is not directed at children under the age of 13, and we do not knowingly collect information from minors.'] },
    { title: 'Your rights', paragraphs: ['You may request that we delete any personal information we hold about you at any time by contacting us directly. We will honor all such requests promptly.'] },
    { title: 'Changes to this policy', paragraphs: ['If we make material changes to this policy, we will update the date at the top of this page. We encourage you to check back periodically.'] },
    { title: 'Contact', paragraphs: ['If you have any questions about this privacy policy, please reach out:'], block: contactBlock('mailto:detoursorbet@gmail.com', 'detoursorbet@gmail.com') },
  ],
  note: 'Note: This privacy policy reflects current business practices. As Detour Sorbet grows and adds features such as online ordering or a mailing list, this policy will be updated accordingly.',
};

export const termsOfUsePage = {
  eyebrow: 'Legal',
  titlePrefix: 'Terms of',
  titleEmphasis: 'Use',
  date: 'Last updated: April 2025',
  heroAccent: '#f7e27a',
  sections: [
    { title: 'Acceptance of Terms', paragraphs: ['By accessing or using detoursorbet.com, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site. We reserve the right to update these terms at any time, and continued use of the site following any changes constitutes your acceptance of the revised terms.'] },
    { title: 'About This Site', paragraphs: ['This website is operated by Detour LLC and is intended for informational purposes — to showcase our products, share our story, and allow customers to initiate orders via email. It is not an automated e-commerce platform, and no purchase is completed directly through this site.'] },
    {
      title: 'Ordering & Fulfillment',
      paragraphs: [
        <>
          Orders are placed by contacting us directly at{' '}
          <a href="mailto:orders@detoursorbet.com" style={{ color: 'var(--color-coral)' }}>
            orders@detoursorbet.com
          </a>
          . Submitting an order inquiry does not guarantee product availability or confirm a sale.
          All orders are subject to our manual review and confirmation. Detour Sorbet reserves the
          right to decline or cancel any order at its discretion. Pricing and product availability
          are subject to change without notice.
        </>,
      ],
    },
    { title: 'Intellectual Property', paragraphs: ['All content on this site — including the Detour Sorbet name, logo, photography, written content, and design — is the property of Detour LLC. Nothing on this site may be copied, reproduced, distributed, or used for commercial purposes without our express written permission.'] },
    {
      title: 'Food & Allergen Disclaimer',
      paragraphs: ['We make every effort to provide accurate ingredient and allergen information for our products. However, our sorbets are produced in a kitchen environment that may handle common allergens including nuts, dairy, and others.'],
      block: (
        <div className="policy-highlight">
          <p>
            If you have a severe food allergy, please contact us directly at{' '}
            <a href="mailto:detoursorbet@gmail.com" style={{ color: 'var(--color-coral)' }}>
              detoursorbet@gmail.com
            </a>{' '}
            before placing an order. Detour Sorbet cannot guarantee a completely allergen-free
            product or environment.
          </p>
        </div>
      ),
    },
    { title: 'No Warranties', paragraphs: ['This website is provided on an "as is" basis. Detour Sorbet makes no warranties, expressed or implied, regarding the accuracy, completeness, or availability of any content on this site. We do not guarantee uninterrupted or error-free access to the site.'] },
    { title: 'Limitation of Liability', paragraphs: ['To the fullest extent permitted by law, Detour LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our products. Our total liability for any claim related to this site shall not exceed the amount you paid for the order in question.'] },
    { title: 'External Links', paragraphs: ['This site contains links to third-party platforms including Instagram. These links are provided for convenience only. Detour Sorbet has no control over the content or practices of external sites and accepts no responsibility for them.'] },
    { title: 'Governing Law', paragraphs: ['These Terms of Use are governed by the laws of the State of Maine. Any disputes arising from your use of this site shall be subject to the exclusive jurisdiction of the courts of Maine.'] },
    { title: 'Contact', paragraphs: ['If you have any questions about these Terms of Use, please reach out:'], block: contactBlock('mailto:detoursorbet@gmail.com', 'detoursorbet@gmail.com') },
  ],
  legalNav: [
    { href: 'privacy-policy.html', label: '← View Privacy Policy' },
    { href: 'allergen-info.html', label: 'View Allergen Info →' },
  ],
  note: 'Note: These terms reflect current business operations. As Detour Sorbet grows and adds features such as online payments or shipping, these terms should be reviewed and updated accordingly.',
};

export const allergenInfoPage = {
  eyebrow: 'Health & Safety',
  titlePrefix: 'Allergen',
  titleEmphasis: 'Info',
  date: 'Last updated: April 2025',
  heroAccent: '#a8d5ba',
  observeSelector: '.policy-section, .allergen-warning',
  sections: [
    {
      className: 'allergen-warning',
      paragraphs: [
        <span key="warning">
          <strong>Important:</strong> Our sorbets are produced in a shared kitchen environment that
          handles common allergens including tree nuts, peanuts, and dairy. While many of our
          flavors are naturally free of these ingredients, cross-contact cannot be fully guaranteed.
          If you have a severe food allergy, please contact us directly before ordering.
        </span>,
      ],
    },
    { title: 'Our Approach to Allergens', paragraphs: ['We believe in full transparency about what goes into our sorbets. We use as few ingredients as possible — fruit, water, and sugar form the base of most of our flavors. However, some flavors include nuts, nut-based ingredients, or dairy, and all products are made in a shared kitchen. We take reasonable precautions to prevent cross-contact, but we cannot certify any product as completely allergen-free.'] },
    { title: 'Flavor Allergen Guide', extra: allergenLegend },
    { title: 'Common Allergens We Handle', paragraphs: ['The following allergens are present in our kitchen environment and may appear in one or more of our products: tree nuts (including pistachio, almond, coconut), peanuts. Our facility does not regularly handle wheat, shellfish, fish, eggs, soy, or sesame, though we cannot make absolute guarantees. All of our sorbets are dairy-free by nature.'] },
    { title: 'Ingredient Changes', paragraphs: ['Our recipes are seasonal and may change throughout the year as we introduce new flavors or source different ingredients. Allergen information on this page is updated as best we can, but we strongly recommend contacting us directly for the most current ingredient details before placing an order if you have any allergy concerns.'] },
    { title: 'Questions or Concerns', paragraphs: ['We take allergen safety seriously and are happy to answer any questions about specific ingredients or preparation methods.'], block: contactBlock('mailto:detoursorbet@gmail.com', 'sam@detoursorbet.com') },
  ],
  legalNav: [
    { href: 'privacy-policy.html', label: '← Privacy Policy' },
    { href: 'terms-of-use.html', label: 'Terms of Use →' },
  ],
  note: 'Note: Allergen information is provided in good faith based on current recipes and sourcing. Detour Sorbet LLC is not liable for reactions resulting from undisclosed allergies or cross-contact risks inherent to a shared kitchen. Customers with severe allergies assume responsibility for confirming ingredient details directly with us prior to purchase.',
};
