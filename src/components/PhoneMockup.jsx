import { caseStudy } from '../data/content.js'

/**
 * The CardSense home screen, in a phone bezel.
 * Source: src/CardSense_Dashboard.jpg (1440×3120), resized to 720px wide and exported as
 * WebP + JPEG into public/ — 951 KB down to 57 KB.
 */
export default function PhoneMockup() {
  const shot = caseStudy?.screenshot || '/cardsense.webp'
  const fallback = caseStudy?.screenshotFallback || '/cardsense.jpg'

  return (
    <div className="relative mx-auto w-full rounded-[2.5rem] border border-base-600 bg-base-950 p-2.5 shadow-2xl">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#07090F]">
        <picture>
          <source srcSet={shot} type="image/webp" />
          <img
            src={fallback}
            alt="CardSense home screen: total outstanding across cards, utilization ring, monthly spend, the next payment due, and recent large-transaction alerts."
            width="720"
            height="1560"
            loading="lazy"
            decoding="async"
            className="block h-full w-full"
          />
        </picture>
      </div>
    </div>
  )
}
