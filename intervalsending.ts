  // Define the interval options
type IntervalOptions = 0 | 7 | 14 | 30;

// Define the contact type
interface Contact {
  id: string;
  interval?: IntervalOptions; // Optional field; 0 means "none selected"
  last_sent_date?: Date | null; // Optional field, can be null
}

// Helper function to check if a date is within the last N days
function isWithinLastNDays(date: Date, NumberOfDays: number): boolean {
  const NumberOfDaysAgo = new Date();
  nDaysAgo.setDate(nDaysAgo.getDate() - NumberOfDays); // Calculate the date N days ago
  return date >= nDaysAgo; // Return true if the date is within the last N days
}

// Main function to decide if an email should be sent
function shouldSendEmail(contact: Contact): boolean {
  const { interval = 0, last_sent_date } = contact;

  if (interval === 0) {
    console.log('Interval not selected. Email Sent.');
    return true; // Allow sending if the interval is not selected
  }

  if (last_sent_date) {
    const isWithinInterval = isWithinLastNDays(last_sent_date, interval);
    if (isWithinInterval) {
      console.log('Last sent date was within the interval selected. No email sent.');
      return false; // Do not send if the last sent date is within the interval
    }
  } else {
    console.log('The contact has not received a survey yet. Email sent.');
  }

  return true; // Send if there's no last sent date or it's outside the interval
}

