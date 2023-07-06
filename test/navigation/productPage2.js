module.exports = {
    '@tags': ['navigation'],

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

    'Переход в карточку товара с главной страницы': function (browser) {
        let word = browser.globals.searchText;

        browser
            .page.shop()
            .section.topMenu
            .assert.notEmpty('@mainPage')
            .assert.notEmpty('@logIn');

        browser
            .page.shop()
            .click('@product');

        browser
            .page.shop()
            .section.topMenu
            .assert.textContains('@mainPage', 'Главная')
            .assert.textContains('@logIn', 'Войти');
    },

    'Переход на главную страницу из карточки товара': function (browser) {
        let word = browser.globals.searchText;

        browser
            .page.shop()
            .section.topMenu
            .assert.notEmpty('@mainPage')
            .assert.notEmpty('@logIn');

        browser
            .page.shop()
            .section.topMenu
            .click('@mainPage')

        browser
            .page.shop()
            .section.topMenu
            .assert.textContains('@mainPage', 'Главная')
            .assert.textContains('@logIn', 'Войти');
    },
};