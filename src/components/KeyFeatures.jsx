import { motion } from "framer-motion"

const KeyFeatures = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                straggerChildren: 0.2,
                when: "beforeChildren",
            }
        }
    }

    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            }
        }
    }
  return (
    <section className="">
        
    </section>
  )
}

export default KeyFeatures
