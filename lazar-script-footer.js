let date = new Date;
let month = date.getMonth() + 1;
month = month.toString().padStart(2, '0');
document.querySelector('.footerCont').innerHTML = `iLazar ${date.getFullYear()}/${month} (Est. 2019/12)`;