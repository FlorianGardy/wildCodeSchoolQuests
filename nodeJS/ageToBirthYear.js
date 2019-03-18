// ageToBirthYear.js


process.stdout.write('How old are you ?\n');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (age) => {
    let birthYear = new Date().getFullYear() - age;
    process.stdout.write(`${birthYear.toString()}\n`);
    process.exit();
})
