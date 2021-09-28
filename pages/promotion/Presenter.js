import Button from "./../../src/component/Buttons/Button.tsx";
import { motion , useMotionValue, useTransform} from "framer-motion";

export default function Presenter () {
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
      const x = useMotionValue(0)
const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
    return(
        <>
        {/* <animate></animate> */}
            <motion.div
                animate={{ x: 100 }} initial={false}    
            >1</motion.div>

            {/* gesture */}
            <motion.div
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >2</motion.div>
            {/* variants */}
            <motion.ul animate="hidden" variants={list}>
                <motion.li variants={item} />
                <motion.li variants={item} />
                <motion.li variants={item} />
            </motion.ul>

            <motion.div initial={false} animate={{ x: 100 }} >3</motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
            >4</motion.div>
            <motion.div drag="x" style={{ x, opacity }} >5</motion.div>
            {/* keyframe */}
            <motion.div
                animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            >6</motion.div>
                        <motion.div
  animate={{ stdDeviation: [0, 5, 0] }}
>7</motion.div>
<motion.circle cx={500} animate={{ cx: [null, 100] }} >8</motion.circle>
<motion.circle
  cx={500}
  animate={{ cx: [null, 100, 200] }}
  transition={{ duration: 3, times: [0, 0.2, 1] }}
>9</motion.circle>
            {/* <Button component="button" color="warning" className="rounded-0">프로모션관리 하기</Button> */}
        </>
    )
}