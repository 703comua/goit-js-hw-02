// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.


// Доповни код функції таким чином, що:

//     Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
//     Якщо в рядку відсутні заборонені слова, функція повертає буль false


// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(">>> Task-3.js <<<"); // "Curabitur ligula..."
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Залиш цей код для перевірки ментором.

function checkForSpam(message)
{
	const spamWord1 = 'spam';
	const spamWord2 = 'sale';

	const messageToLower = message.toLowerCase();

	const hasSpamWord1 = messageToLower.includes(spamWord1);
	const hasSpamWord2 = messageToLower.includes(spamWord2);

	if(hasSpamWord1 || hasSpamWord2) {
		return true;
	} else {
		return false;
	}
}