
import data from '../data.json' assert { type: 'json' };
import stringLib from 'string-lib-alexharlan'
import dateLib from 'alexeasydatejs'

// function that returns the difference in between two dates and formates it according to the difference
const timeDiff = (date1, date2) => {
  const diff = date1 - date2;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (years > 0) {
    return `${years} years ago`;
  } else if (months > 0) {
    return `${months} months ago`;
  } else {
    return `${days} days ago`;
  }
}

data.forEach((item) => {
  // console.log(item);
  console.log('\n')

  console.log(stringLib.upperFirst(item.first_name), stringLib.upperFirst(item.last_name));
  const d = new dateLib(item.purchased);
  console.log("Purchased:", d.format('M d, Y'));

  const d2 = new dateLib(item.lastpayment);
  const d3 = new dateLib(Date.now());
  console.log("Last Payment:", timeDiff(new Date(Date.now()), new Date(item.lastpayment)));
});