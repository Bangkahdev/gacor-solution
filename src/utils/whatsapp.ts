export const sendWhatsAppMessage = (message: string) => {
  const phoneNumber = '+623170687631';
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappURL, '_blank');
};