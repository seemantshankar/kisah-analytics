// ============================================================
// KISAH.IN — User Flow Audit Report
// Full structured content. Single source of truth for every page.
// Faithful to "Kisah_Flow_Audit_Report.pdf" (38 pp, June 2026).
// ============================================================

export const meta = {
  brand: 'Kisah',
  domain: 'kisah.in',
  title: 'User Flow Audit Report',
  subtitle: '12 core flows + 5 ethnic-specific flows',
  lede: 'Exists · Current flow · Gaps & recommendations · Friction fixes',
  prepared: 'June 2026',
  confidential: 'Confidential — D2C UX Analysis',
};

export const heroStats = [
  { value: 17, label: 'flows audited', suffix: '' },
  { value: 3040, label: 'styles in catalogue', prefix: '~' },
  { value: 5, label: 'critical fixes', suffix: '' },
  { value: 24, label: 'prioritised actions', suffix: '' },
];

export const priceBand = '₹2,299 – ₹9,999';

export const summary = {
  paragraphs: [
    "This report audits all user flows on kisah.in — India's D2C men's and kids' ethnic-wear brand (~3,040 styles, ₹2,299–₹9,999).",
    'Live browser testing was conducted across 17 distinct flows that cover the complete customer lifecycle, from initial discovery through post-purchase community engagement.',
    'Kisah has a strong product catalogue and a clean shopping experience for users who already know what they want. However, several critical flows unique to the Indian festive and ethnic-wear context are either absent or poorly surfaced, resulting in missed revenue opportunities.',
  ],
};

// Status taxonomy → drives colour + the scorecard distribution.
export const buckets = {
  exists: {
    key: 'exists',
    label: 'Exists, with bugs',
    short: 'Exists ⚠',
    color: 'var(--color-amber)',
    tint: 'var(--color-warn-tint)',
    note: 'Live but undermined by bugs, gaps or friction',
  },
  partial: {
    key: 'partial',
    label: 'Partial',
    short: 'Partial',
    color: 'var(--color-warn)',
    tint: 'var(--color-warn-tint)',
    note: 'Foundations present, key pieces missing',
  },
  minimal: {
    key: 'minimal',
    label: 'Minimal',
    short: 'Minimal',
    color: 'var(--color-teal)',
    tint: 'var(--color-teal-tint)',
    note: 'Bare-bones only — no depth',
  },
  missing: {
    key: 'missing',
    label: 'Missing',
    short: 'Missing',
    color: 'var(--color-danger)',
    tint: 'var(--color-danger-tint)',
    note: 'Does not exist anywhere on site',
  },
};

export const criticalFixes = [
  {
    kind: 'BUG',
    title: 'Occasion filter has 8+ duplicate / typo entries',
    body: "'Mehendi'/'Mehndi', 'Engagement'/'Engagements', 'Weddings'/'Wedding', 'eception'/'Receptions', plus multiple festival variants.",
    fix: 'Audit and deduplicate all Shopify metafield values for the occasions custom filter.',
    flow: 'browse-find',
  },
  {
    kind: 'VERIFICATION',
    title: 'Inline star ratings hidden on all PLPs',
    body: 'The Judge.me badge is suppressed via a display:none CSS rule. Verify with dev/product team whether this was intentional.',
    fix: 'Only remove the CSS override if confirmed as unintentional. Star ratings on product cards demonstrably lift click-through and conversion.',
    flow: 'pdp-decision',
  },
  {
    kind: 'FLOW GAP',
    title: 'Guest checkout blocked',
    body: 'Every buyer must authenticate via phone OTP (KwikPass) before they can purchase — raises abandonment by 23–34%.',
    fix: 'Add a guest checkout path for one-time buyers; reserve KwikPass for repeat customers or an opt-in incentive.',
    flow: 'checkout',
  },
];

export const flows = [
  // ---------------------------------------------------------- 1
  {
    id: 'discovery-entry',
    code: '01',
    group: 'core',
    title: 'Discovery & Entry',
    bucket: 'partial',
    statusLabel: 'Partial',
    keyNote: 'Instagram presence but no shoppable tags; no referral programme.',
    summary:
      'Organic search (Google SEO) and direct URL access work well. An Instagram presence exists with a bio link. No Instagram Shopping tags, referral programme, or marketplace redirect.',
    currentFlow: [
      'User discovers Kisah via a Google search for ethnic wear, or via Instagram → taps the bio link → lands on the homepage or a PLP.',
      'Direct URL type-in: kisah.in loads the homepage with hero banner, category navigation and trend sections.',
      'Paid Meta / Google ads presumably drive traffic to landing pages (not tested, assumed standard).',
      'A WhatsApp chat icon (bottom-right of every page) provides a contact channel, but there is no WhatsApp Catalogue.',
      'The Track Orders link in the nav bar allows order-status lookup without logging in.',
    ],
    improve: [
      'Enable Instagram Shopping / Meta Catalogue so product images in posts and Reels are shoppable — cutting steps from discovery to checkout.',
      'Add a referral programme: give existing customers a unique link and reward both sides (10% off). This taps the word-of-mouth gifting behaviour around weddings and festivals.',
      'Create a WhatsApp Catalogue on the business number so users can browse and initiate orders inside WhatsApp.',
      'Add UTM-tracked, occasion-specific landing pages (e.g. /wedding-season) for ad campaigns that lead straight to relevant collections rather than the generic homepage.',
      'Consider a marketplace presence on Myntra or Ajio with redirect banners back to kisah.in for repeat orders.',
    ],
    friction: [
      {
        point: 'No Instagram Shopping tags',
        rec: 'Set up Instagram Shopping via Meta Business Manager; tag products in posts and Reels. Example: kisah.in/collections/sherwani-achkans',
      },
      {
        point: 'WhatsApp contact, but no catalogue',
        rec: 'Create a WhatsApp Business Catalogue so users can browse and enquire within WhatsApp; link it to the chat button on the site.',
      },
      {
        point: 'No referral programme',
        rec: "Implement referral with a tool like ReferralHero or Shopify's built-in; show a '₹500 off for you and your friend' banner post-purchase.",
      },
      {
        point: 'No loyalty entry point on the homepage',
        rec: 'Surface the loyalty/rewards programme (once built) in the hero banner or nav, especially during Diwali / wedding season.',
      },
    ],
  },
  // ---------------------------------------------------------- 2
  {
    id: 'browse-find',
    code: '02',
    group: 'core',
    title: 'Browse & Find',
    bucket: 'exists',
    statusLabel: 'Exists, with bugs',
    keyNote: '8+ typos in occasion filter; dead Size-Inclusive collection URL.',
    summary:
      'A comprehensive filter-and-sort system exists. However, the occasion filter has 8+ duplicate/typo entries, the Size-Inclusive collection URL is dead (404), and the search results page has no sort or filter controls.',
    currentFlow: [
      'User opens SHOP in the nav → a mega-menu shows 16+ product-type categories (Kurta, Bandhgala, Sherwani, Jacket, etc.) plus Kids sub-categories.',
      'On the PLP: a filters panel opens on the left with Occasion, Colour, Size, Price Range, Product Type and Availability toggles.',
      'The Sort dropdown has 7 options: Featured, Best Selling, Alphabetical A–Z/Z–A, Price Low–High/High–Low, Date New–Old.',
      'The search bar (top-right magnifier) opens an overlay search; results appear at /search?q=.',
      'The kids collection at /collections/kids has 363 products with the same filter/sort controls.',
      'A New Arrivals link in the primary nav leads to /collections/new-arrivals.',
    ],
    improve: [
      "Fix the occasion filter: deduplicate and correct all metafield values — merge 'Mehendi'/'Mehndi', 'Engagement'/'Engagements', 'Wedding'/'Weddings', correct 'eception' to 'Reception', consolidate festival variants.",
      "Add 'Sort by Discount' and 'Sort by Highest Rated' — among the top-used sort modes for Indian fashion buyers.",
      'Restore or redirect the dead Size-Inclusive collection (/collections/size-inclusive-101 → 404), which affects SEO and any marketing links.',
      "Sort by colour exists but without visual swatches. Suggest adding colour swatches to the sort/filter UI.",
      "Add a 'Trending Now' collection or filter on PLPs, separate from the 'Trending' badge on individual PDPs.",
    ],
    friction: [
      {
        point: 'Occasion filter has 8+ duplicates / typos',
        rec: "Audit all Shopify metafield values for the 'Occasions' field. Merge duplicates, correct typos. A one-time data-quality task.",
      },
      {
        point: "No 'Sort by Discount' option",
        rec: "Add a Discount% sort by computing (MRP − sale price) / MRP in the theme's collection sort logic.",
      },
      {
        point: "Sort missing 'Highest Rated'",
        rec: 'Integrate Judge.me review scores into the collection sort; requires a Shopify metafield sync from the Judge.me app.',
      },
      {
        point: 'Size-Inclusive collection is a dead 404',
        rec: 'The URL is a leftover dev slug, not an active collection. Either restore the collection with appropriate products or formally retire the slug via a Shopify URL redirect to prevent future 404s from any stale links.',
      },
    ],
  },
  // ---------------------------------------------------------- 3
  {
    id: 'pdp-decision',
    code: '03',
    group: 'core',
    title: 'PDP Decision',
    bucket: 'exists',
    statusLabel: 'Exists, with bugs',
    keyNote: "Status badge urgency timer is a deprecated feature; PLP star ratings hidden via CSS.",
    summary:
      "Strong gallery, size selection, social proof and share functionality exist. Inline star ratings on PLPs are suppressed via CSS. The urgency-timer popup is a hidden experiment that appears deprecated. No Q&A, compare, or 360° view.",
    currentFlow: [
      'User lands on the PDP → sees a multi-image gallery (vertical thumbnail rail on the left, large main image on the right).',
      'Colour variants appear as product swatches at the top of the right panel — each colour links to a separate product URL (not a Shopify-native variant).',
      "Size selector shows XS-36 to 5XL-52; a 'Size Chart' link opens the size guide.",
      "Social proof: '46 people bought this product in the last 30 days' overlays the main image. A 'Trending' badge shows on trending products.",
      'Trust bar below the size selector: 2-day delivery | Cash on delivery | 7-day return & exchange | Money-back guarantee.',
      'A pincode delivery-check field confirms availability and estimated date.',
      'Wishlist and Add To Bag sit side by side; a Share icon opens Pinterest, Facebook, Instagram, WhatsApp and copy-link options.',
      "A sticky 'Add To Bag' bar appears at the bottom of the viewport on scroll.",
      'Below the fold: Specifications / Description / Shipping tabs; Similar Finds; Ethnic Layered Styles; #SpottedInKisah UGC carousel; Customer Reviews (Judge.me, 4.76/5 from 21 reviews).',
      "OOS products show a 'Sold Out' button and a 'Notify Me When In Stock' modal (email-only, no WhatsApp).",
      "Urgency popup: a hidden div appears under trigger conditions — 'Order within 60 minutes … get this order delivered before 20th October'. The delivery date is HARDCODED.",
    ],
    improve: [
      "The urgency-timer popup is a hidden experiment that appears no longer in use. If reactivated in future, the hardcoded date will need to be updated.",
      'Verify with the dev/product team whether the CSS rule hiding PLP star ratings was intentional (e.g., insufficient review volume). Judge.me is installed and generating ratings.',
      "Add a 'Complete the Look' / bundle section linking complementary items (a kurta with a matching dupatta, a sherwani with a matching Churidar).",
      "Add a 'Shop Matching Kids' cross-link on Men's PDPs where a colour-matched kids product exists — one of the highest-value revenue opportunities for the target audience.",
      'Add a WhatsApp option to the Notify-Me-When-In-Stock modal — WhatsApp restock alerts have far higher open rates than email in India.',
      'AI-generated size models: when the user selects a size (e.g., 2XL), show the same product worn by an AI-generated model of that body type. A/B test this against return rates. This addresses size confidence at the moment of decision without requiring physical samples.',
      'Consider a size-recommendation widget (Kiwi Sizing, Fit Analytics): with no alteration available, size confidence is a primary barrier to first purchase.',
    ],
    friction: [
      {
        point: "Urgency timer popup (status badge) shows a hardcoded past date",
        rec: "This feature appears deprecated and is not actively maintained. If reactivated, the hardcoded date will need to be replaced with a dynamic calculation.",
      },
      {
        point: 'PLP star ratings hidden via display:none',
        rec: 'Verify with the dev/product team whether this was intentional (e.g., insufficient review volume on most products, or deliberate brand choice). Do not recommend removal without confirmation.',
      },
      {
        point: 'Colour variants open new URLs instead of staying on the page',
        rec: 'This is likely an intentional architectural decision (separate URLs for SEO, inventory, or operational reasons). Verify with the team before recommending consolidation into Shopify-native variants.',
      },
      {
        point: 'OOS Notify-Me modal is email-only',
        rec: 'Add a WhatsApp opt-in to the Notify-Me modal — a high-open-rate restock channel for Indian users.',
      },
      {
        point: "No 'Complete the Look' upsell",
        rec: 'Add a styled bundle section below the main CTA. Cross-sell a dupatta with a kurta; a pocket square with a sherwani — a proven AOV driver.',
      },
    ],
  },
  // ---------------------------------------------------------- 4
  {
    id: 'consideration-tools',
    code: '04',
    group: 'core',
    title: 'Consideration Tools',
    bucket: 'partial',
    statusLabel: 'Partial',
    keyNote: 'Wishlist exists; no compare, no stylist chat.',
    summary:
      'Wishlist exists (requires KwikPass OTP login). Product sharing works via 5 channels. No product comparison, no stylist-consultation flow.',
    currentFlow: [
      'Wishlist: user clicks the heart on a PLP card (without login → redirected to OTP login) or the WISHLIST button on the PDP. After logging in, the product is saved and accessible via the heart icon in the top-right nav.',
      'Share: the PDP share icon opens a panel with Pinterest, Facebook, Instagram, WhatsApp and copy-link options.',
      'The WhatsApp bubble (bottom-right) opens a wa.me link to the business number.',
    ],
    improve: [
      'Add a guest wishlist (localStorage or anonymous session) so users can save before being asked to log in. Forcing OTP before save creates significant drop-off.',
      'Add product comparison: let users compare 2–3 kurtas side by side on fabric, occasions, fit and price — especially valuable when choosing between similar wedding styles.',
      "Create a 'Stylist Help' WhatsApp flow: an AI-powered WhatsApp bot (e.g., Interakt, Haptik) that handles common questions about fit, occasion suitability, and styling — and scales without adding headcount. A 'Get styling advice' CTA on PDPs/PLPs opens a pre-filled WhatsApp message with the product URL attached.",
      "Add a 'Share your Wishlist' or 'Create a Gift Registry' feature — high value for wedding season where family members help choose outfits.",
      "Add 'Save to Collection' folders within the wishlist ('Wedding Outfits', 'Casual') to help users organise multiple saved items.",
    ],
    friction: [
      {
        point: 'Wishlist requires OTP login before saving',
        rec: "Implement a guest wishlist in localStorage. Prompt login only when the user views or buys from it, with a value offer: 'Sign in to save across devices and get 5% off'.",
      },
      {
        point: 'No product comparison tool',
        rec: 'Add a compare feature (Comparify app or custom) for 2–3 products across fabric, fit, occasions, price and rating.',
      },
      {
        point: 'WhatsApp chat has no pre-context',
        rec: "Pre-fill the message from a PDP with the product URL and name: 'Hi, I need help with: [Product Name] [URL]'.",
      },
      {
        point: 'No stylist consultation option',
        rec: "AI-first approach: WhatsApp bot with option to escalate to a human for high-value orders only. A 15-min video call at scale is not operationally viable as a standard feature. Suggest: AI WhatsApp bot with option to escalate to a human for orders above a threshold (e.g., ₹8,000+).",
      },
    ],
  },
  // ---------------------------------------------------------- 5
  {
    id: 'cart-precheckout',
    code: '05',
    group: 'core',
    title: 'Cart & Pre-checkout',
    bucket: 'partial',
    statusLabel: 'Partial',
    keyNote: 'No coupon field, no Save-for-Later, no cross-sells on cart.',
    summary:
      'A full cart page (/cart) exists with quantity edit, remove and order note. No coupon field, no Save-for-Later, and no cross-sell section on the cart page.',
    currentFlow: [
      "User clicks 'Add To Bag' on a PDP → a right-side cart drawer opens (primary cart experience). A /cart full-page view also exists.",
      "The cart drawer/page shows product thumbnail, name, size, price, quantity input and a 'Remove' link.",
      "Below the item list: an 'Order note' textarea for special instructions.",
      "Right side: Subtotal, 'Tax included, shipping calculated at checkout', a large 'CHECKOUT' button and a 'Continue shopping' link.",
      "Stock urgency is shown inline, e.g. '2 in stock' in amber below the item size.",
    ],
    improve: [
      'Verify with Kisah whether active internal coupons exist. If so, surface them on the cart page alongside the GoKwik coupon field at checkout.',
      "Add 'Save for Later' to move items to the wishlist without losing them.",
      "Add a 'Pairs well with' / style-matched recommendation carousel to lift AOV. Cross-sell already exists as 'Great Choice! Grab these too'.",
      "Add an 'Add matching kids outfit' prompt when Men's ethnic wear is in the cart — a high-intent moment for the family-coordination use case.",
      'Add a prominent COD-eligibility indicator so users know before clicking Checkout whether COD is available for their pincode.',
    ],
    friction: [
      {
        point: 'No coupon field on cart page',
        rec: "GoKwik does include a coupon field on the payment page. Verify with the Kisah team whether they have active internal coupons. If internal coupons exist, surface them on the cart page to prevent abandonment.",
      },
      {
        point: 'No Save-for-Later',
        rec: "Add 'Save for Later' that moves the item to the wishlist. Requires login — can be a soft prompt with a guest-wishlist fallback.",
      },
      {
        point: 'Cross-sell missing style-matched recommendations',
        rec: "Cross-sell exists as 'Great Choice! Grab these too'. Add a 'Pairs well with' section for style-matched recommendations (e.g., matching dupattas, accessories).",
      },
      {
        point: 'COD availability unknown before checkout',
        rec: 'Add a pincode check on the cart page (reuse the PDP widget) that also shows whether COD is available.',
      },
    ],
  },
  // ---------------------------------------------------------- 6
  {
    id: 'checkout',
    code: '06',
    group: 'core',
    title: 'Checkout',
    bucket: 'exists',
    statusLabel: 'Exists, with friction',
    keyNote: 'Mandatory OTP blocks all guest purchases; no date scheduling.',
    summary:
      'GoKwik / KwikPass checkout handles payment. Mandatory phone-OTP authentication blocks all guest purchases. COD available at select pincodes. No delivery-date scheduling in checkout.',
    currentFlow: [
      'User clicks CHECKOUT on the cart page → the GoKwik KwikPass modal opens.',
      'Step 1: enter mobile number → OTP sent → OTP verified (mandatory, no skip).',
      'Step 2: address entry (autofill if returning KwikPass user).',
      'Step 3: payment selection — card / UPI / netbanking / COD (COD only for eligible pincodes).',
      'Step 4: order placed → confirmation screen + email.',
      'GoKwik handles all payment routing; standard return to the Kisah confirmation page.',
    ],
    improve: [
      "Add a guest checkout path (no OTP): allow address + payment without account creation. Offer OTP-based account as an optional post-purchase step with an incentive ('Save ₹200 on your next order'). Note: this is GoKwik's checkout flow and may require negotiation.",
      "Add delivery-date scheduling: a date picker ('Deliver on or before [date]') with an optional 'Event date' field. Critical for weddings and festivals; back it with a VIP/express option.",
      "Clarify coupon entry: make the promo field visible and prominent in the GoKwik UI — many users don't know it exists.",
      "Add a 'Gift this order' option: gift message, gift wrapping, and optionally hide the price on the packing slip.",
      "Show the estimated delivery date prominently in checkout — not only in the PDP pincode check — so buyers see it before committing.",
    ],
    friction: [
      {
        point: 'Mandatory OTP blocks guest checkout',
        rec: "Guest checkout does not mean removing contact detail collection. Email and phone are still captured for order confirmation, tracking, and returns processing. The change is removing the OTP authentication wall before purchase — not removing identity from the order. Note: this is GoKwik's checkout flow and may require negotiation with them to change. Forced registration raises checkout abandonment by 23–34% (Baymard Institute).",
      },
      {
        point: 'No delivery date scheduled',
        rec: "Add a 'Delivery by [Date]' field powered by a Shopify order note / custom field, visible to fulfilment. Offer express delivery at ₹149–₹299.",
      },
      {
        point: 'COD availability did not surface until checkout',
        rec: 'Pre-filter COD visibility by pincode before checkout (see Cart). Reduces surprise and abandonment.',
      },
      {
        point: 'No gift option at checkout',
        rec: "Add a 'This is a gift' toggle with a message field and optional price-hide. Ethnic wear is frequently gifted for weddings and festivals.",
      },
    ],
  },
  // ---------------------------------------------------------- 7
  {
    id: 'post-purchase',
    code: '07',
    group: 'core',
    title: 'Post-purchase',
    bucket: 'partial',
    statusLabel: 'Partial',
    keyNote: 'Tracking exists; no unboxing CTA or post-purchase upsell.',
    summary:
      'Order confirmation and tracking exist. The unboxing-video policy is documented in policy pages but not surfaced as an active prompt. No post-purchase upsell or visible review-request timing from the front end.',
    currentFlow: [
      'Order placed → confirmation shown in GoKwik / redirect to the Kisah confirmation page.',
      'Order-confirmation email sent to the registered address (per FAQ).',
      "Order tracking: 'Track Orders' in the top nav → Clickpost portal → enter Order ID + phone.",
      'COD refunds: Razorpay payout links sent (per policy docs).',
      'Returns: customer goes to kisah.clickpost.in/return-exchange (third-party subdomain) → enters Order ID + mobile → initiates return.',
    ],
    improve: [
      "Add a post-purchase 'Complete Your Look' email (T+3 days) with complementary products for returning users — for a sherwani buyer, suggest a matching kids outfit, dupatta or accessories.",
      'Trigger a Judge.me review-request email at T+7 days (after delivery + try-on). Reviews exist but the submission trigger timing is unclear.',
      'Embedding a tracking widget on kisah.in is a nice-to-have. Users navigate to branded subdomains (kisah.clickpost.in) without friction. The bigger friction is the link not being surfaced prominently in nav and account dashboard.',
      "Set up a post-delivery WhatsApp message on the 'delivered' webhook from Clickpost: 'Your order has arrived! Tag us with #SpottedInKisah for a chance to be featured.' Drives UGC and re-engagement at once.",
      "Post-delivery fit feedback: trigger a WhatsApp message asking 'How does it fit? Did you size correctly?' and capture responses to build a measurement profile for better fit recommendations on future visits.",
    ],
    friction: [
      {
        point: 'No post-purchase upsell email',
        rec: 'Set up a 3-day post-purchase Klaviyo/Mailchimp sequence, segmented by product type: sherwani → kids matching + accessories; kurta → matching kids + festive accessories.',
      },
      {
        point: 'Review-request timing is unclear',
        rec: 'Configure Judge.me to request a review at delivery + 4 days. Add a ₹100 store-credit incentive for a photo review.',
      },
      {
        point: 'Tracking link not surfaced prominently',
        rec: "Add the returns/tracking links to the account dashboard and footer so users don't have to dig through policy pages. The Clickpost portal is acceptable as an external domain.",
      },
    ],
  },
  // ---------------------------------------------------------- 8
  {
    id: 'returns-exchanges',
    code: '08',
    group: 'core',
    title: 'Returns & Exchanges',
    bucket: 'exists',
    statusLabel: 'Exists, with gaps',
    keyNote: 'Third-party domain; exchange only for defects — not size changes.',
    summary:
      "A returns portal (Clickpost) exists on a separate domain. 7-day window. Exchange only for wrong or defective items — not for size mistakes or buyer's remorse. Sale items are non-returnable.",
    currentFlow: [
      'Customer goes to kisah.clickpost.in/return-exchange (a third-party subdomain, NOT linked from the primary nav).',
      'Enters Order ID + Mobile Number → logs in.',
      'Selects items to return/exchange, states a reason.',
      'The portal handles pickup scheduling and refund/exchange processing.',
      'Refund for prepaid: back to the source payment method. COD refund: via a Razorpay payout link.',
      'Exchange policy: only for the wrong product or genuine manufacturing defects. Image/video of the defect is mandatory.',
      'Sale items: no returns or exchanges (unless incorrect or damaged).',
    ],
    improve: [
      "Add a 'Returns & Exchange' link in the footer and account dashboard. Today the Clickpost URL is buried in policy pages, not the primary nav.",
      'Verify exchange policy with Kisah ops team: the FAQ states exchange-only-for-defects, but in practice fabric/fit/style mismatches may also be accepted. Clarify the actual policy before widening eligibility.',
      'Return-initiation form embedding (kisah.in vs. clickpost.in): medium-term improvement. Users navigating to a branded subdomain is acceptable. Priority: surface the link prominently in nav and account dashboard.',
      "Clarify the defect-claim process: show exactly what the video/photo must include, acceptable format, and who receives it. Today the policy says 'image and video of defect is mandatory' with no instructions.",
      'Automate COD-refund communication: may already be in place. Front-end testing cannot confirm backend workflows. Verify with ops team before treating this as a gap.',
      'Alteration strategy (Indian ethnic wear almost always requires minor alteration): Kisah\'s no-alteration policy is a returns risk. Three options to evaluate: (1) In-store alteration at the Kolkata flagship, (2) Affiliate network with alteration partner stores (e.g., Urban Company) — Kisah refers customers post-delivery and earns affiliate revenue, (3) Absorb the cost of alteration for ~40% of orders into the base product price. Recommend starting with option 2 as lowest operational overhead.',
    ],
    friction: [
      {
        point: 'Returns link not visible in nav or account',
        rec: "Add a 'Returns & Exchange' link in (1) the footer QUICK LINKS column, (2) the account dashboard, (3) the order-tracking confirmation page. Priority: link visibility, not domain.",
      },
      {
        point: 'Exchange only for defects, not size issues',
        rec: 'Based on the live FAQ page on kisah.in. Verify with Kisah ops team — fabric, fit, and style mismatches may also be accepted in practice. Flag as "verify against current operations" rather than stating as confirmed policy.',
      },
      {
        point: 'Sale items non-returnable',
        rec: 'Based on FAQ which may be outdated. Mark as "verify with ops team" before treating this as a hard rule.',
      },
      {
        point: 'Defect-claim process unclear',
        rec: "Add step-by-step instructions: 'Record a clear video of the damage before unpacking is complete. Send to support@kisah.in with subject: DEFECT + Order ID.'",
      },
      {
        point: 'No WhatsApp update on return status',
        rec: 'May already be in place. Front-end testing cannot confirm backend workflows. Verify with the ops team before treating this as a gap.',
      },
    ],
  },
  // ---------------------------------------------------------- 9
  {
    id: 'account-loyalty',
    code: '09',
    group: 'core',
    title: 'Account & Loyalty',
    bucket: 'minimal',
    statusLabel: 'Minimal',
    keyNote: 'Account exists; zero loyalty, points, or referral programme.',
    summary:
      'Account creation via KwikPass OTP exists. Order history and wishlist are accessible after login. No loyalty programme, no referral system, no tiered membership.',
    currentFlow: [
      "User clicks the person icon → 'Login' → GoKwik KwikPass modal → enter mobile → OTP → logged in.",
      'Account dashboard presumably shows order history, saved addresses and wishlist.',
      'Wishlist accessible via the heart icon in the nav after login.',
    ],
    improve: [
      'Launch a standalone loyalty/points programme (Smile.io or LoyaltyLion), not a coalition scheme (e.g., Payback, ClubVistara). A standalone programme gives Kisah full control over points economics and customer data. Award points for purchases, reviews, referrals, social shares and birthdays. Standard for Indian fashion D2C at this price point.',
      "Add a referral programme: 'Refer a friend, get ₹500 each' — powerful in the wedding context where one buyer is the hub for an entire family or baraat.",
      'Add tiered membership (Bronze / Silver / Gold by spend) with perks: early access to new arrivals, free express delivery, or a dedicated WhatsApp line for Gold members.',
      'Add a birthday/anniversary field and trigger an automated discount on the occasion — highly relevant for ethnic-wear gifting.',
      "Show personalised 'Your Past Buys' and 'Shop Your Style Again' sections in the dashboard to drive repeat purchases.",
    ],
    friction: [
      {
        point: 'No loyalty programme',
        rec: 'Implement Smile.io (Shopify-native). Start simple: 1 point per ₹1 spent, 100 points = ₹10 off. Show the points balance in account and cart.',
      },
      {
        point: 'No referral programme',
        rec: 'Add referral via ReferralCandy or custom. Pre-populate the CTA in post-purchase emails and WhatsApp when engagement is highest.',
      },
      {
        point: 'Account lacks engagement hooks',
        rec: "Add order history with a reorder button, 'Complete your look' recommendations, wishlist sharing, and a birthday-reward field.",
      },
      {
        point: 'No acknowledgement of repeat customers',
        rec: "Show 'Welcome back, [Name]! You've shopped with us X times' for logged-in returning customers. Small personalisation drives loyalty.",
      },
    ],
  },
  // ---------------------------------------------------------- 10
  {
    id: 'community-ugc',
    code: '10',
    group: 'core',
    title: 'Community & UGC',
    bucket: 'partial',
    statusLabel: 'Partial',
    keyNote: '#SpottedInKisah carousel on PDP; no submission page or incentive.',
    summary:
      '#SpottedInKisah UGC carousel appears on PDPs with real customer photos. Judge.me reviews with verified buyer photo uploads exist. No dedicated UGC submission page (returns 404). No hashtag instructions on the PDP.',
    currentFlow: [
      'On the PDP: scroll below the Specifications tabs → the #SpottedInKisah carousel shows 10+ customer lifestyle photos with Instagram-style captions.',
      "Customer Reviews (Judge.me) show an aggregate rating (e.g. 4.76/5 from 21 reviews), a star breakdown, a 'Diamond Transparency' badge, and individual reviews with customer photos.",
      "Reviews can be filtered by 'Most Recent' and include verified-buyer photo uploads.",
    ],
    improve: [
      'Create a dedicated /pages/spotted-in-kisah page (currently 404) with a UGC submission form: photo upload, Instagram handle, product tag. This becomes a community hub and content source.',
      "Add '#SpottedInKisah — share your look for a chance to be featured!' directly on PDPs below the images, with the hashtag as a clickable Instagram link.",
      "Add a post-delivery WhatsApp (T+2 days): 'Love your new Kisah look? Tag us with #SpottedInKisah — featured customers get 15% off their next order.'",
      "Create a 'Real Customers' tab on PDPs showing only customer-uploaded photos — Myntra's 'Looks' equivalent for D2C.",
      'Consider a UGC-based referral loop: share your photo + get tagged + get a discount code. Generates both UGC and referral traffic.',
    ],
    friction: [
      {
        point: 'No UGC submission page (/pages/spotted-in-kisah → 404)',
        rec: 'Create the page with a simple Shopify form: photo upload, Instagram handle, optional order ID, product name. Send a confirmation email with a 15% discount incentive.',
      },
      {
        point: 'No hashtag instruction or CTA on PDP',
        rec: "Add a styled callout below the gallery: 'Wear it. Love it. Tag it. → #SpottedInKisah on Instagram' linking to the profile.",
      },
      {
        point: 'No incentive to submit UGC',
        rec: "Offer a 10–15% off coupon for featured photos. Show a 'You could be featured here' placeholder in the carousel.",
      },
      {
        point: 'UGC is not linked back to the product',
        rec: 'Implement a shoppable UGC gallery (Foursixty, Taggshop) so customers can buy the exact product shown.',
      },
    ],
  },
  // ---------------------------------------------------------- 11
  {
    id: 'support',
    code: '11',
    group: 'core',
    title: 'Support',
    bucket: 'exists',
    statusLabel: 'Exists, with gaps',
    keyNote: 'WhatsApp-only Mon–Fri 11am–6pm; phone-number inconsistency.',
    summary:
      'FAQ page, contact form, email and WhatsApp support exist. WhatsApp-only (no phone calls), Mon–Fri 11am–6pm. Phone-number inconsistency between the main site and the returns portal. No live chat, no chatbot, no weekend support.',
    currentFlow: [
      'FAQ page (/pages/faq-1): 4 accordion sections — Deliveries & Shipment, Orders, Returns & Exchanges, Payment & Security — with comprehensive coverage of standard questions.',
      'Contact page (/pages/contact-us): Kolkata address, support@kisah.in, careers cv.kisah@gmail.com, WhatsApp +91 6289 902 520 (Mon–Fri 11am–6pm).',
      "Contact form: Name + Email + Message + 'SEND MESSAGE'.",
      'WhatsApp chat bubble (bottom-right of every page) → opens a wa.me link.',
      'The returns portal footer shows a different number: +91 81009 93481 (WhatsApp-only).',
    ],
    improve: [
      'Fix the phone-number inconsistency: the main site shows +91 6289 902 520; the returns portal shows +91 81009 93481. Standardise to one number across all touchpoints.',
      'Add a chatbot / AI chat widget (Tidio, Freshdesk, or a custom GPT assistant) for common queries (order status, size guide, return policy) 24/7 outside business hours.',
      "Extend support hours or add weekend availability — India's ethnic-wear shopping peaks on weekends when people plan events.",
      'Replace cv.kisah@gmail.com with a professional domain email (careers@kisah.in) — the Gmail address undermines brand credibility.',
      "Add an 'Order Modification' / 'Cancel Order' self-service option so customers can cancel within the 24-hour window without contacting support.",
      "Add a 'Contact Support' button in the returns portal to start a WhatsApp conversation with pre-filled context.",
    ],
    friction: [
      {
        point: 'Phone-number inconsistency across site and returns portal',
        rec: 'Audit every instance and standardise to one: /pages/contact-us, footer, kisah.clickpost.in footer, and marketing materials.',
      },
      {
        point: 'No support outside Mon–Fri 11am–6pm',
        rec: 'Add a chatbot (Tidio/Freshdesk) for out-of-hours responses to the top 10 questions. At minimum, set a WhatsApp auto-reply with an expected response time.',
      },
      {
        point: 'Careers email uses Gmail (cv.kisah@gmail.com)',
        rec: 'Replace with careers@kisah.in — a first impression for potential employees and collaborators.',
      },
      {
        point: 'No self-service order cancellation',
        rec: "Add 'Cancel Order' in the dashboard for orders not yet shipped. The most-requested support action — significantly reduces ticket volume.",
      },
      {
        point: 'The FAQ has no search bar',
        rec: 'Add a search field at the top of /pages/faq-1 so users can find answers without scrolling all sections.',
      },
    ],
  },
  // ---------------------------------------------------------- 12
  {
    id: 'marketing-reengagement',
    code: '12',
    group: 'core',
    title: 'Marketing Re-engagement',
    bucket: 'partial',
    statusLabel: 'Partial',
    keyNote: 'Email subscribe with 40% off; no push/SMS/abandoned cart visible.',
    summary:
      "Email subscription with a '40% off' incentive in the footer. WhatsApp contact channel exists. No visible push notification, SMS opt-in, or abandoned-cart recovery from the front end. GoKwik likely handles abandoned-cart emails at the backend level.",
    currentFlow: [
      "Footer: a 'KEEP UP TO DATE' email-subscribe field with a SUBSCRIBE button — reportedly offers 40% off.",
      'The WhatsApp bubble allows direct contact and, presumably, WhatsApp broadcast marketing.',
      'GoKwik checkout handles post-checkout re-engagement (per assumed standard GoKwik features).',
    ],
    improve: [
      'Add browser push notifications (OneSignal or PushOwl) for restock, price-drop, new-arrival and festive reminders — high opt-in rates in Indian D2C fashion.',
      'Add explicit SMS opt-in at checkout for delivery updates AND marketing (easy opt-out) — Clevertap or WebEngage for Indian SMS compliance.',
      "Set up an automated abandoned-cart sequence: (1) WhatsApp at T+1h with the product image, (2) email at T+24h with 'Still interested? Here's 5% off', (3) SMS at T+48h.",
      "WhatsApp-based digital stylist for abandoned cart recovery: when a cart is abandoned, the reason is often uncertainty — wrong fit, unsure if the item suits the occasion, or indecision between two styles. A WhatsApp AI bot initiated at the point of abandonment can address these objections conversationally. This is more effective than a standard discount-based recovery email for a considered purchase category like ethnic wear.",
      'Add a festive-season countdown on the homepage during Diwali, Eid and wedding season, linking to relevant collections.',
      "Add a 'Price drop alert' on wishlist items — notify via email or WhatsApp when a saved item goes on sale.",
      "Add a win-back trigger (T+90 days since last purchase): 'We miss you — here's ₹300 off your next ethnic look.'",
    ],
    friction: [
      {
        point: 'No abandoned-cart recovery visible on the front end',
        rec: 'Confirm GoKwik abandoned-cart is configured. If not, implement via Klaviyo + GoKwik webhook: T+1h WhatsApp, T+24h email, T+48h SMS.',
      },
      {
        point: 'No push-notification opt-in',
        rec: 'Install PushOwl (Shopify-native); show an opt-in at T+30s. Push for restock/price-drop has 4–8× higher open rates than email.',
      },
      {
        point: "No 'Price Drop Alert' on wishlist",
        rec: "Add a 'Notify me when price drops' option on wishlist items, integrated with Shopify price-update webhooks.",
      },
      {
        point: '40% off subscribe offer buried in footer',
        rec: "Surface it in an exit-intent popup and a 30-second slide-in: 'Get 40% off your first order — enter your email.'",
      },
    ],
  },
  // ---------------------------------------------------------- A
  {
    id: 'family-coordination',
    code: 'A',
    group: 'ethnic',
    title: 'Family Coordination',
    subtitle: 'Father–Son Matching',
    bucket: 'missing',
    statusLabel: 'Missing',
    keyNote: "TOP PRIORITY: Zero father-son matching flow. Unique high-impact opportunity for Kisah's positioning.",
    summary:
      "This flow does not exist anywhere on kisah.in. There is no cross-link between Men's and Kids PDPs. No dedicated 'Father & Son' collection or matching-outfit feature exists, despite Kisah selling both segments.",
    currentFlow: [
      "No father–son matching flow exists. Men's and Kids catalogues are entirely siloed with no cross-linking.",
    ],
    improve: [
      "Create a 'Father & Son' / 'Matching Looks' collection at /collections/father-son — curate men's and boys' products in matching fabrics and colours.",
      "On each Men's PDP, add a 'Shop Matching Kids' section (below Similar Finds) showing the colour-matched kids product, via a Shopify metafield or product-tag pairing.",
      "On each Kids PDP, add a 'Shop Dad's Matching Look' section linking back to the Men's product.",
      "Homepage: feature a 'Dress Alike' / 'Festive Family Looks' banner during Diwali and wedding season (Oct–Feb) — peak father-son matching demand.",
      "Add a 'Family Outfits' filter on PLPs or a top-of-page banner: 'Shop Father-Son Matching → [View Collection]'.",
      'Surface #SpottedInKisah photos featuring father-son combos as a separate section or Instagram Highlight — the most shareable content type for the brand.',
      "Consider a 'Build a Family Look' tool: select a men's product, see matching kids' sizes and prices, add both to cart in one step.",
    ],
    friction: [
      {
        point: "No cross-link between Men's and Kids PDPs",
        rec: "Add a 'Shop Matching Kids Look' section on Men's PDPs using a Shopify metafield (metafields.custom.matching_kids_product) to link the paired product.",
      },
      {
        point: 'No father-son collection page',
        rec: 'Create /collections/father-son with curated matching sets. Feature it in the nav under KIDS and SHOP during peak seasons.',
      },
      {
        point: 'No discovery path for family-coordination intent',
        rec: "Add search suggestions: typing 'father son' or 'matching' should return this collection. Add the page to Shopify's search index.",
      },
      {
        point: 'UGC shows family photos but no shop link',
        rec: 'Use a shoppable UGC tool (Foursixty) to link father-son photos to the products worn — the highest-converting format for this use case.',
      },
    ],
  },
  // ---------------------------------------------------------- B
  {
    id: 'event-date-planning',
    code: 'B',
    group: 'ethnic',
    title: 'Event-date Planning',
    subtitle: 'Wedding / Festival Delivery',
    bucket: 'partial',
    statusLabel: 'Partial',
    keyNote: 'Delayed ship via support email only; no on-site tool. Timeline: implement before September 2026 for Oct–Feb festive season.',
    summary:
      "Delayed delivery is possible on request via email (per FAQ), but there is no on-site delivery-date tool. The urgency-timer popup hardcodes a stale date ('Before 20th October') and fires year-round — a critical credibility bug.",
    currentFlow: [
      "On the PDP: a pincode check shows an estimated delivery date ('2 days delivery' trust badge).",
      "FAQ answer to 'Can you arrange delivery after a period of time?': 'As long as payment is made, we can ship at a later time if feasible. Contact support@kisah.in.'",
      "Urgency popup fires on PDPs — 'Order within 60 minutes … delivered before 20th October' — but the date is hardcoded and currently 8 months past.",
    ],
    improve: [
      "CRITICAL BUG FIX: replace the hardcoded delivery date in the urgency popup. Use document.getElementById('popup-delivery-date').innerText = new Date(Date.now() + 2*86400000).toLocaleDateString('en-IN', {day:'numeric', month:'long'}).",
      "Add an 'Event Date' field at checkout: 'When do you need this by? [date picker]'. Within the standard window → confirm; needs express → show the ₹149 fee; too soon → warn.",
      "Build a 'Wedding Planning Checklist' content page: 'Order your sherwani 4–6 weeks before the wedding for standard delivery; 1–2 weeks for express.'",
      "Add a 'Delivery Guarantee' badge on in-stock PDPs: 'Order by [date + time] for delivery by [event date]' — dynamically calculated from pincode and stock.",
      "Add an 'Event Date Reminder': the user enters their event date and email; the system emails a reminder 6 weeks before suggesting they order now.",
    ],
    friction: [
      {
        point: "Urgency timer shows a past hardcoded date ('Before 20th October')",
        rec: 'CRITICAL BUG. Fix immediately — replace the static date with a dynamic date in the popup JavaScript. The popup fires on every PDP and currently harms credibility.',
      },
      {
        point: 'No delivery-date picker at checkout',
        rec: "Add a 'Deliver by' field using a Shopify checkout extension or GoKwik's custom-field support. Tie it to the fulfilment workflow.",
      },
      {
        point: 'Event-date shipping only possible via email support',
        rec: "Self-service date scheduling (even a simple 'add a note with your required date') reduces support load and improves buyer confidence.",
      },
      {
        point: 'No educational content for wedding-season planning',
        rec: "Add a blog/content page: 'When to Order Your Wedding Outfit: A Groom's Guide' — targets high-intent organic search and reduces last-minute panic.",
      },
    ],
  },
  // ---------------------------------------------------------- C
  {
    id: 'size-confidence',
    code: 'C',
    group: 'ethnic',
    title: 'Size Confidence',
    subtitle: 'For First-timers',
    bucket: 'partial',
    statusLabel: 'Partial',
    keyNote: "Size chart exists; no alteration, no 'Find My Size' tool.",
    summary:
      "The size-chart link exists on each PDP. Sizes go from XS-36 to 5XL-52. No alteration service. No 'Find My Size' tool. No model-measurement reference. The Size-Inclusive collection URL is dead (404).",
    currentFlow: [
      "User views a PDP → clicks 'Size Chart' → opens a modal/page with measurements.",
      "FAQ: 'We do not provide any alteration facilities. Kindly go through the size chart before placing your order.'",
      "FAQ: 'We offer ready-to-wear products in standard sizes.'",
      'Sizes shown as label-chest pairs (e.g. S-38, M-40, L-42) — numeric chest measurements in inches.',
    ],
    improve: [
      "Add a 'Find My Size' interactive tool on PDPs: user inputs chest, waist and height → recommends a size (Kiwi Sizing, Fit Analytics, Size Chart King).",
      "Show model measurements on each PDP: 'Model is 6'0\" (183cm) with a 38\" chest, wearing size M-40.' Standard on Manyavar, Fabindia and every global D2C — a proven conversion lift.",
      'Fix the dead Size-Inclusive collection URL (/collections/size-inclusive-101 → 404). Kisah stocks up to 5XL-52 — a strong differentiator being lost to a broken URL.',
      "Add customer-written size notes in reviews: 'I usually wear L, ordered L-42 and it fits perfectly.' Prompt this in the review email: 'What size did you order and how did it fit?'",
      "Add fabric-specific size notes ('This silk blend runs slim — consider sizing up') for structured garments like bandhgalas and sherwanis.",
    ],
    friction: [
      {
        point: 'No model measurements on PDPs',
        rec: "Add a 'Model is [height] wearing size [X]' caption below or over the first image — the single most-requested information by first-time ethnic-wear buyers.",
      },
      {
        point: "No 'Find My Size' tool",
        rec: 'Install Kiwi Sizing (free plan available) or build simple chest-measurement → size-recommendation logic inline on each PDP.',
      },
      {
        point: 'Size-Inclusive collection is a dead 404',
        rec: 'Restore /collections/size-inclusive-101 or redirect to a filtered collection of 3XL–5XL products. A strong differentiator that deserves its own landing page.',
      },
      {
        point: 'No customer size/fit feedback in reviews',
        rec: "Update the Judge.me review email: 'What is your usual size? What size did you order? How did it fit?' Show this structured data on PDPs.",
      },
      {
        point: 'No alteration service',
        rec: 'Partner with a national alteration service (Urban Company) and provide a post-delivery referral link for buyers who need minor adjustments.',
      },
    ],
  },
  // ---------------------------------------------------------- D
  {
    id: 'bulk-squad-ordering',
    code: 'D',
    group: 'ethnic',
    title: 'Bulk / Squad Ordering',
    subtitle: 'Groomsmen & Group Buys',
    bucket: 'missing',
    statusLabel: 'Missing',
    keyNote: 'No bulk form, pricing, or groomsmen group-buy feature.',
    summary:
      "There is no bulk or group-ordering feature on kisah.in. No quantity discounts, no groomsmen portal, no 'order for your group' flow. Users wanting to dress an entire baraat must place individual orders.",
    currentFlow: [
      'No bulk/group ordering exists. Dressing a baraat means placing many individual orders with no quantity pricing.',
    ],
    improve: [
      "Create a 'Bulk / Group Order' inquiry page (/pages/bulk-order) with a simple form: contact details, products of interest, quantity, event date, delivery city → route to a dedicated sales team.",
      "Add a 'Dress Your Baraat' / 'Groomsmen Outfits' collection/landing page — a high-value, high-AOV use case that is completely unaddressed.",
      'Offer tiered group discounts: 10% off for 4–6 units of the same product, 15% off for 7–10, 20% off for 10+. Show this as a callout on relevant PDPs (sherwanis, bandhgalas).',
      "Add a group-order WhatsApp flow: 'Ordering for a wedding party? WhatsApp us for group pricing and bulk availability.'",
      "Consider a coordinator tool: the groom creates a group-order link, each groomsman enters their own size, the coordinator pays for all — removing the logistical burden from the buyer.",
    ],
    friction: [
      {
        point: 'No bulk/group order feature',
        rec: "Add a 'Bulk Order Enquiry' CTA on Sherwani, Bandhgala and Kurta Set PDPs: 'Ordering for 4+ people? Get group pricing →' linking to a simple form.",
      },
      {
        point: 'No groomsmen landing page',
        rec: "Create a 'Dress Your Baraat' collection with curated baraat/wedding-party styles. Target it in Google and Meta ads for wedding-season queries.",
      },
      {
        point: 'No group-discount pricing visible',
        rec: "Add a quantity-tiered discount table on relevant PDPs ('4+ units: 10% off, automatically applied') — easily done with Shopify automatic discounts.",
      },
      {
        point: 'Hard to coordinate sizes across a group',
        rec: 'Explore a group-size-collection feature: the lead buyer shares a link where each person enters their own size; the lead places and pays for the combined order.',
      },
    ],
  },
  // ---------------------------------------------------------- E
  {
    id: 'customisation-fork',
    code: 'E',
    group: 'ethnic',
    title: 'Customisation Fork',
    subtitle: 'Made-to-Order / Embroidery / Monogram',
    bucket: 'missing',
    statusLabel: 'Missing',
    keyNote: 'No made-to-order; order note is the only rescue option.',
    summary:
      "No customisation of any kind is offered. No made-to-order, no alteration, no embroidery or monogram add-ons. The only 'customisation' escape hatch is the cart's Order Note textarea.",
    currentFlow: [
      "No customisation exists. The only escape hatch is the cart's Order Note textarea, which is not surfaced as a customisation channel.",
    ],
    improve: [
      "Add an embroidery/monogram add-on on bandhgala and sherwani PDPs: 'Add personalised embroidery (name/initials) — ₹499 extra, 5–7 days additional processing.' High-margin, high-differentiation.",
      "Create a 'Custom Order Request' page for bespoke enquiries (occasion, style, colour, size, budget). Even with limited fulfilment, it captures high-intent buyers who would otherwise leave.",
      "Partner with a national alteration service (Urban Company) for a post-delivery referral — 'Need minor adjustments? Book a tailor through Urban Company.' Show on the PDP size section and in post-purchase email.",
      "Add a 'Personalisation' tag/collection to highlight products that can be customised.",
      "Near term: add clear instructions for using the Order Note field — 'Need a specific customisation? Add details in the order note and our team will contact you within 24 hours.'",
    ],
    friction: [
      {
        point: 'No made-to-order or customisation path',
        rec: "Start small: add a 'Personalise This Product' option on top sherwanis/bandhgalas. Collect requests via order notes, process manually, then build a flow once demand is validated.",
      },
      {
        point: 'No embroidery/monogram option',
        rec: 'Evaluate offering basic embroidery (name/date/initials) as a ₹499 add-on. Surface it as a product option or upsell modal on the PDP CTA.',
      },
      {
        point: 'Cart order note is the only customisation channel',
        rec: "Add prominent instructions near the Order Note field: 'For special colour, length or fit requests, add details here. Standard processing times apply; we'll contact you if changes aren't possible.'",
      },
      {
        point: 'No alteration referral post-purchase',
        rec: "Add an alteration-partner referral in the post-delivery email: 'Need it adjusted? Our trusted partners can help.' An affiliate-revenue opportunity.",
      },
    ],
  },
];

// Impact × effort prioritisation (report's own Priority Action Matrix).
export const priorityMatrix = [
  // TOP PRIORITY - Unique to Kisah's positioning
  { action: "Add 'Shop Matching Kids' cross-link on Men's PDPs", status: 'MISSING', impact: 'High', effort: 'Medium', note: 'TOP PRIORITY: Metafield + template', flow: 'family-coordination' },
  { action: 'Create Father-Son / Family Coordination collection', status: 'MISSING', impact: 'High', effort: 'Medium', note: 'TOP PRIORITY: Collection curation + page', flow: 'family-coordination' },
  
  // Critical bugs
  { action: 'Remove CSS suppressing PLP star ratings', status: 'BUG', impact: 'High', effort: 'Quick', note: '1 CSS rule removal', flow: 'pdp-decision' },
  { action: 'Fix occasion-filter duplicates / typos', status: 'BUG', impact: 'High', effort: 'Quick', note: 'Metafield data cleanup', flow: 'browse-find' },
  { action: 'Redirect / restore Size-Inclusive 404 URL', status: 'BUG', impact: 'Medium', effort: 'Quick', note: 'Shopify URL redirect', flow: 'size-confidence' },
  { action: 'Standardise support phone number', status: 'BUG', impact: 'Medium', effort: 'Quick', note: 'Copy update', flow: 'support' },
  
  // High-impact, medium-effort features
  { action: 'Guest checkout option', status: 'MISSING', impact: 'High', effort: 'Medium', note: 'GoKwik configuration', flow: 'checkout' },
  { action: 'Add model measurements to all PDPs', status: 'MISSING', impact: 'High', effort: 'Medium', note: 'Content / metafield update', flow: 'size-confidence' },
  { action: 'Coupon field on cart page', status: 'MISSING', impact: 'High', effort: 'Medium', note: 'Shopify theme dev', flow: 'cart-precheckout' },
  { action: 'Delivery-date picker at checkout', status: 'MISSING', impact: 'High', effort: 'Medium', note: 'Before Sept 2026: GoKwik custom field', flow: 'event-date-planning' },
  // Medium-priority features
  { action: 'WhatsApp option in Notify-Me (OOS) modal', status: 'MISSING', impact: 'Medium', effort: 'Quick', note: 'Modal update', flow: 'pdp-decision' },
  { action: 'Loyalty / points programme', status: 'MISSING', impact: 'High', effort: 'Large', note: 'Smile.io integration', flow: 'account-loyalty' },
  { action: 'Bulk / groomsmen order page + group discount', status: 'MISSING', impact: 'High', effort: 'Medium', note: 'Form + discount config', flow: 'bulk-squad-ordering' },
  { action: "Add 'Find My Size' tool to PDPs", status: 'MISSING', impact: 'High', effort: 'Medium', note: 'Kiwi Sizing app', flow: 'size-confidence' },
  { action: 'UGC submission page (currently 404)', status: 'MISSING', impact: 'Medium', effort: 'Quick', note: 'Page creation + form', flow: 'community-ugc' },
  { action: 'Referral programme', status: 'MISSING', impact: 'High', effort: 'Large', note: 'ReferralCandy integration', flow: 'account-loyalty' },
  { action: 'Abandoned-cart WhatsApp + email sequence', status: 'MISSING', impact: 'High', effort: 'Medium', note: 'Klaviyo + GoKwik webhook', flow: 'marketing-reengagement' },
  { action: 'Event-date planning content + wedding guide', status: 'MISSING', impact: 'Medium', effort: 'Quick', note: 'Before Sept 2026: Blog / content page', flow: 'event-date-planning' },
  { action: 'Embed Clickpost tracking widget on kisah.in', status: 'PARTIAL', impact: 'Medium', effort: 'Medium', note: 'Nice-to-have: Clickpost embed API', flow: 'post-purchase' },
  { action: 'Add cross-sell on cart page', status: 'MISSING', impact: 'Medium', effort: 'Medium', note: 'Theme dev', flow: 'cart-precheckout' },
  { action: 'Self-service order cancellation in account', status: 'MISSING', impact: 'Medium', effort: 'Medium', note: 'Shopify flow config', flow: 'support' },
  { action: 'Embroidery / monogram add-on service', status: 'MISSING', impact: 'Medium', effort: 'Large', note: 'Operational + tech', flow: 'customisation-fork' },
];

// Derived helpers -------------------------------------------------
export function bucketCounts() {
  const counts = { exists: 0, partial: 0, minimal: 0, missing: 0 };
  for (const f of flows) counts[f.bucket]++;
  return counts;
}
