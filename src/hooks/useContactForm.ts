import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData, SubmitStatus, InputChangeHandler, FormSubmitHandler } from '../types';

interface UseContactFormOptions {
  serviceId: string;
  templateId: string;
  publicKey: string;
  resetDelay?: number;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitStatus: SubmitStatus;
  handleInputChange: InputChangeHandler;
  handleSubmit: FormSubmitHandler;
  resetForm: () => void;
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const useContactForm = ({
  serviceId,
  templateId,
  publicKey,
  resetDelay = 5000,
}: UseContactFormOptions): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setSubmitStatus('idle');
  }, []);

  const handleInputChange: InputChangeHandler = useCallback((event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit: FormSubmitHandler = useCallback(async (event) => {
    event.preventDefault();
    
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after delay
      setTimeout(() => {
        setSubmitStatus('idle');
      }, resetDelay);
    }
  }, [formData, serviceId, templateId, publicKey, isSubmitting, resetDelay]);

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};