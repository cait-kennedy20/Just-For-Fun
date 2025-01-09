//this first part is to show the interval options and how they are defined

type IntervalOptions = 0 | 7 | 14 | 30

  interval?: IntervalOptions; 
   // Optional field; 0 means "none selected"

else.if
function iswithinlastndays (date: Date, Int: Number) {
    const nDaysAgo= Date
   //Calculating what n Days ago was
   cons last_sent_date < n
    return true
    //Calculating if the last send was before that and returning true meaning, we an send them a surevey
    
    
    //this part is supposed to be deciding if an email should go to a contact(id) by calculating if their 'last_sent_date' is within and interval that is set.

function ShouldSendEmail (contact: id) boolean {
const {interval, last_sent_date} = id

if (interval === 0)
return true
console.log('Interval not selected. Email Sent.')
\\allow any email to send if the interval is not selected at all

 if (last_sent_date) 
    const isWithinInterval = isWithinLastNDays(last_sent_date, interval)
    return false; // Only send if NOT within the interval
    console.log('Last sent date was within the interval selected.')
    
  //if the last sent date is within the interval we do not send. 
 
  
  else return true 
  console.log('The contact has not received a survey yet. Email sent.')
  
  //if the last sent date is missing or null we send. 
