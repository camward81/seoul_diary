export const pageAnim = {
  hidden: {
    opacity: 0,
    y: -300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 1,
    },
  },
};

export const fadeInPhoto = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};
