// Form handling utility functions

/**
 * Interface for form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  investorType?: string;
  investmentAmount?: string;
  phone?: string;
  company?: string;
  howHeard?: string;
}

/**
 * Validate form data
 * @param data The form data to validate
 * @returns An object with validation errors, or an empty object if valid
 */
export const validateContactForm = (
  data: ContactFormData
): Record<string, string> => {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  } else if (data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Message validation
  if (!data.message || data.message.trim() === '') {
    errors.message = 'Message is required';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  // Phone validation (optional)
  if (data.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
};

/**
 * Submit form data
 * @param data The form data to submit
 * @returns A promise that resolves to the submission result
 */
export const submitContactForm = async (
  data: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would send the data to a server
    // For now, we'll simulate a successful submission
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the form data for demonstration purposes
    console.log('Form submitted:', data);
    
    // Return success
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    // Log the error
    console.error('Form submission error:', error);
    
    // Return error
    return {
      success: false,
      message: 'There was an error submitting your message. Please try again later.',
    };
  }
};

/**
 * Format form data for submission
 * @param data The raw form data
 * @returns Formatted form data
 */
export const formatFormData = (data: ContactFormData): Record<string, any> => {
  return {
    ...data,
    submittedAt: new Date().toISOString(),
    source: 'FloLo Pitch Deck Website',
  };
};

/**
 * Clear form data
 * @returns Empty form data
 */
export const getEmptyFormData = (): ContactFormData => {
  return {
    name: '',
    email: '',
    message: '',
    investorType: '',
    investmentAmount: '',
    phone: '',
    company: '',
    howHeard: '',
  };
};