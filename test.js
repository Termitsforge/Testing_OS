describe("Проверка работы функции calculator", function() {

	describe(`Значения корректны`, function() {
		it(`12 * 2 = 24`, function() {
			assert.equal(calculator(12, 2, '*'), '24');
		});
        it(`34 + 12 = 46`, function() {
			assert.equal(calculator(34, 12, '+'), '46');
		});
        it(`32 / 8 = 4`, function() {
			assert.equal(calculator(32, 8, '/'), '4');
		});
        it(`80 - 11 = 69`, function() {
			assert.equal(calculator(80, 11, '-'), '69');
		});
	});

    describe(`Значения меньше 10e-8`, function() {
		it(`12 * 10e-9 = Ошибка ввода.`, function() {
			assert.equal(calculator(12, 10e-9, '*'), 'Ошибка ввода.');
		});
        it(`34 + 10e-9 = Ошибка ввода.`, function() {
			assert.equal(calculator(34, 10e-9, '+'), 'Ошибка ввода.');
		});
        it(`32 / 10e-9 = Ошибка ввода.`, function() {
			assert.equal(calculator(32, 10e-9, '/'), 'Ошибка ввода.');
		});
        it(`80 - 10e-9 = Ошибка ввода.`, function() {
			assert.equal(calculator(80, 10e-9, '-'), 'Ошибка ввода.');
		});
        it(`10e-9 * 2 = Ошибка ввода.`, function() {
			assert.equal(calculator(10e-9, 2, '*'), 'Ошибка ввода.');
		});
        it(`10e-9 + 12 = Ошибка ввода.`, function() {
			assert.equal(calculator(10e-9, 12, '+'), 'Ошибка ввода.');
		});
        it(`10e-9 / 8 = Ошибка ввода.`, function() {
			assert.equal(calculator(10e-9, 8, '/'), 'Ошибка ввода.');
		});
        it(`10e-9 - 11 = Ошибка ввода.`, function() {
			assert.equal(calculator(10e-9, 11, '-'), 'Ошибка ввода.');
		});
	});
    describe(`Деление на ноль`, function() {
		it(`53 / 0 = На ноль делить нельзя!`, function() {
			assert.equal(calculator(53, 0, '/'), 'На ноль делить нельзя!');
		});
        it(`0 / 53 = 0`, function() {
			assert.equal(calculator(0, 53, '/'), '0');
		});
	});
    describe(`Отрицательные значения`, function() {
		it(`-23 * -2 = 26`, function() {
			assert.equal(calculator(-23, -2, '*'), '46');
		});
        it(`-123 + -123 = -246`, function() {
			assert.equal(calculator(-123, -123, '+'), '-246');
		});
        it(`-46 / -23= 2`, function() {
			assert.equal(calculator(-46, -23, '/'), '2');
		});
        it(`-20 - -32 = 12`, function() {
			assert.equal(calculator(-20, -32, '-'), '12');
		});
        it(`-23 * 2 = -26`, function() {
			assert.equal(calculator(-23, 2, '*'), '-46');
		});
        it(`-15 + 12 = -3`, function() {
			assert.equal(calculator(-15, 12, '+'), '-3');
		});
        it(`-4 / 8 = 0.5`, function() {
			assert.equal(calculator(-4, 8, '/'), '-0.5');
		});
        it(`-10 - 11 = -1`, function() {
			assert.equal(calculator(-10, 11, '-'), '-21');
		});
	});
});