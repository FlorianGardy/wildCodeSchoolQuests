// ageToBirthYear.js


process.stdout.write('How old are you ?\n');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (age) => {
    let currentYear = new Date().getFullYear();
    let birthYear = currentYear - age;
    if (typeof parseInt(age) == 'number' && age <= 99 && birthYear < currentYear) {
        process.stdout.write(`${birthYear.toString()}\n`);
    }
    else {
        process.stdout.write(`Wrong format\n`);
    }
    process.exit();
})
