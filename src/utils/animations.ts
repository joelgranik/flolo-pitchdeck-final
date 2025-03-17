// Animation variants for Framer Motion

// Basic fade in animation
export const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Stagger container for animating children with delay
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Slide in from left animation
export const slideIn = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide in from right animation
export const slideInRight = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide in from bottom animation
export const slideInBottom = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide in from top animation
export const slideInTop = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Scale up animation
export const scaleUp = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Pulse animation for highlighting elements
export const pulse = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

// Rotate in animation
export const rotateIn = {
  hidden: {
    rotate: -10,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Bounce animation
export const bounce = {
  hidden: {
    y: 0,
  },
  visible: {
    y: [0, -15, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

// Flip animation
export const flip = {
  hidden: {
    rotateY: 90,
    opacity: 0,
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Staggered list item animation
export const listItem = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Button hover animation
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
  },
};

// Button tap animation
export const buttonTap = {
  scale: 0.95,
};

// Card hover animation
export const cardHover = {
  y: -10,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: {
    duration: 0.2,
  },
};

// Parallax scroll effect
export const parallax = (speed: number = 0.5) => ({
  y: typeof window !== 'undefined' ? window.scrollY * speed : 0,
});

// Number counter animation
export const numberCounter = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Timeline item animation
export const timelineItem = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};