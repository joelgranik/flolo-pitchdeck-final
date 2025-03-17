// Scroll-based utility functions

/**
 * Interface for section reference
 */
export interface SectionRef {
  id: string;
  ref: React.RefObject<HTMLElement>;
  label: string;
}

/**
 * Check if an element is in the viewport
 * @param element The element to check
 * @param offset The offset to apply (default: 0)
 * @returns Whether the element is in the viewport
 */
export const isInViewport = (
  element: HTMLElement | null,
  offset: number = 0
): boolean => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) - offset &&
    rect.right >= offset
  );
};

/**
 * Get the current active section based on scroll position
 * @param sectionRefs Array of section references
 * @param offset The offset to apply (default: 100)
 * @returns The ID of the active section
 */
export const getActiveSection = (
  sectionRefs: SectionRef[],
  offset: number = 100
): string => {
  // If there are no sections, return an empty string
  if (!sectionRefs.length) return '';
  
  // Find the first section that is in the viewport
  for (const section of sectionRefs) {
    if (section.ref.current && isInViewport(section.ref.current, offset)) {
      return section.id;
    }
  }
  
  // If no section is in the viewport, return the first section
  return sectionRefs[0].id;
};

/**
 * Scroll to a section
 * @param id The ID of the section to scroll to
 * @param offset The offset to apply (default: 80)
 */
export const scrollToSection = (id: string, offset: number = 80): void => {
  const element = document.getElementById(id);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

/**
 * Get the scroll progress of the page
 * @returns The scroll progress (0-1)
 */
export const getScrollProgress = (): number => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
};

/**
 * Get the scroll progress of an element
 * @param element The element to check
 * @param offset The offset to apply (default: 0)
 * @returns The scroll progress (0-1)
 */
export const getElementScrollProgress = (
  element: HTMLElement | null,
  offset: number = 0
): number => {
  if (!element) return 0;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Element is below the viewport
  if (rect.top >= windowHeight) return 0;
  
  // Element is above the viewport
  if (rect.bottom <= 0) return 1;
  
  // Element is partially in the viewport
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const elementHeight = rect.height;
  
  return visibleHeight / elementHeight;
};

/**
 * Apply parallax effect to an element
 * @param element The element to apply the effect to
 * @param speed The speed of the parallax effect (default: 0.5)
 */
export const applyParallaxEffect = (
  element: HTMLElement | null,
  speed: number = 0.5
): void => {
  if (!element) return;
  
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const translateY = scrollTop * speed;
  
  element.style.transform = `translateY(${translateY}px)`;
};

/**
 * Create an intersection observer for animations
 * @param callback The callback to execute when an element intersects
 * @param options The options for the intersection observer
 * @returns An intersection observer
 */
export const createAnimationObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
): IntersectionObserver => {
  return new IntersectionObserver(callback, options);
};