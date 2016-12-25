describe('some shit', function() {
	beforeAll(function() {
		browser.get('http://motherfuckingwebsite.com');
	});
	it('explains what the page is', function() {
		expect(element(by.css('h1'))
			.getText()).toBe('This is a motherfucking website.');
	});
});