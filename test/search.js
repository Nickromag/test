module.exports = {
    '@tags': ['search'],

    before(browser){
        browser 
            .page.shop()
            .navigate()
            .waitForElementVisible('xpath','//h4[text()="Каталог"]', 'Открыта главная страница');
        
        browser.assert
            .textContains('body > div.container > div:nth-child(1) > div.col-md-3.mt-2 > h4', 'Каталог');
    },

    after(browser){
        browser.end();
    },

    'Поиск по слову': function (browser) {
        let word = browser.globals.searchText;

        browser
            .page.shop()
            .section.topMenu
            .assert.notEmpty('@mainPage')
            .assert.notEmpty('@logIn');

        browser
            .page.shop()
            .search(word)
            .assert.urlContains(encodeURI(word), `Открыта страница с результатами по запросу ${word}`);

        browser
            .page.shop()
            .section.topMenu
            .assert.textContains('@mainPage', 'Главная')
            .assert.textContains('@logIn', 'Войти');
    },
};