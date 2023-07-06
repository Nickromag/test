module.exports = {
    command: function(selector, word) {
        return this
            .waitForElementVisible(selector)
            .setValue(selector, [word, browser.Keys.ENTER]);
    }
};