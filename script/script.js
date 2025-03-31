const days_given = 28;
const months_given = 2;
const years_given = 2025;

const days_created = 31;
const months_created = 3;
const years_created = 2025;

const currentDate = new Date();
const givenDate = new Date(years_given, months_given - 1, days_given);
const createdDate = new Date(years_created, months_created - 1, days_created);

function calculateDateDifference(startDate, endDate) {
    let yearDiff = endDate.getFullYear() - startDate.getFullYear();
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    let dayDiff = endDate.getDate() - startDate.getDate();

    if (dayDiff < 0) {
        monthDiff -= 1;
        const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        dayDiff += lastMonth.getDate();
    }
    if (monthDiff < 0) {
        yearDiff -= 1;
        monthDiff += 12;
    }

    return { years: yearDiff, months: monthDiff, days: dayDiff };
}


const diffGiven = calculateDateDifference(givenDate, currentDate);
const diffCreated = calculateDateDifference(createdDate, currentDate);


console.log(`Le site a été créé il y a ${diffCreated.years} ans, ${diffCreated.months} mois et ${diffCreated.days} jours.`);


var clicked = 1;

function reverse() {
    clicked = clicked * -1;
    if (clicked === -1) {
        document.querySelector(".card-img-top").src = "/img/IMG_20250308_215445_462.webp";
    }
    else if (clicked === 1)  {
        document.querySelector(".card-img-top").src = "/img/ChatGPT Image 31 mars 2025, 02_30_32.png";
    }
}