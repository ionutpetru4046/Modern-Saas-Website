import { BRAND_LOGOS, HERO_CONTENT } from "../constants"
import heroImage from "../assets/hero.jpg"

const HeroSection = () => {
  return (
    <section className="pt-28 lg:pt-36">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <div className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-xs">
                {HERO_CONTENT.badgeText}
            </div>
            <h1 className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter 
            bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
                    <span key={index}>
                        {text}
                        <br />
                    </span>
                ))}
            </h1>

            <p className="mt-6 text-neutral-400 max-w-xl">
                {HERO_CONTENT.subHeading}
            </p>
            <div className="mt-6 space-x-4">
                <a href="#" className="inline-block bg-blue-600 hover:bg-blue-500 
                text-white py-3 px-6 rounded-lg font-medium">
                    {HERO_CONTENT.callToAction.primary}
                </a>
                <a href="#" className="inline-block border border-gray-500 hover:border-gray-400
                text-white py-3 px-6 rounded-lg font-medium">
                    {HERO_CONTENT.callToAction.secondary}
                </a>
            </div>
            <div className="py-10 ">
                <p className="text-gray-400 text-center mb-8">
                    {HERO_CONTENT.trustedByText}
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                    {BRAND_LOGOS.map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt} className="h-8" />
                    ))}
                </div>
            </div>

            <div className="mt-12 ">
                <img src={heroImage} />
            </div>
        </div>
    </section>
  )
}

export default HeroSection
