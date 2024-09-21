import { useState } from "react"
import logo from "../assets/logo.png"

const NAvbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
        <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl 
        mx-auto px-4 py-3 flex justify-between items-center rounded-xl border 
        border-neutral-800">
            {/* Left: Logo */}
            <img src={logo} alt="logo" width={120} height={24} />

            {/* Center: Links (hidden on mobile) */}
            <div className="hidden md:flex space-x-6">
                <a href="#works" className="hover:text-neutral-200">
                    How it works
                </a>
                <a href="#pricing" className="hover:text-neutral-200">
                    Pricing
                </a>
                <a href="#testimonial" className="hover:text-neutral-200">
                    Testimonials
                </a>
            </div>
        </div>
    </nav>
  )
}

export default NAvbar
