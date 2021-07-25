export const container = {
  hidden: { y: 50 },
  show: {
    y: 0,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.28,
    },
  },
};
export const titleAnim = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};
export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};
export const leftToRight = {
  show: { x: 0, opacity: 1 },
  hidden: { x: -100, opacity: 0 },
};
export const rightToLeft = {
  show: { x: 0, opacity: 1 },
  hidden: { x: 100, opacity: 0 },
};
export const lock = {
  show: {
    scaleX: -1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.25,
    },
  },
  hidden: { scaleX: 1 },
};
export const opacity = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { duration: 1 },
};
export const upToDown = {
  show: { x: 0, opacity: 1 },
  hidden: { x: 100, opacity: 0 },
};
