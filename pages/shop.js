const setAndEnter = require("../commands/setAndEnter");

const pageCommands = {
    search(word) {
        this
            .setAndEnter('@searchBar', word)
        return this; // Return page object for chaining
        }
};
module.exports = {
    url: 'http://testshop.sedtest-school.ru/',
    commands: [pageCommands],
    elements: {
    catalogue: 'h4',
    searchBar: {selector: '//input[@placeholder="Поиск..."]', locateStrategy: 'xpath'},
    product: {selector: '//a[@class="text-info"]', locateStrategy: 'xpath'},
    },
    sections:{
        topMenu: {
            selector: {selector: '//div[@class="collapse navbar-collapse"]', locateStrategy: 'xpath'},
            elements: {
                logIn: {selector:'//a[@href="/users/auth/"]', locateStrategy: 'xpath'},
                cart: {selector:'//a[@href="/mycart/"]', locateStrategy: 'xpath'},
                favourites: {selector: '//a[@href="/myfavorites/"]', locateStrategy: 'xpath'},
                mainPage: {selector: '//a[@class="nav-link"]', locateStrategy: 'xpath'},
            }
        },

        productPage: {
            selector: {selector: '//div[@class="container"]', locateStrategy: 'xpath'},
            elements: {
                addToCart: {selector: '//a[text()="Добавить в корзину"]', locateStrategy: 'xpath'},
            }
        }
    }
}