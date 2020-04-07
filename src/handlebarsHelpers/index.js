"use strict";
module.exports = {
    register(hbs) {
        hbs.handlebars.registerHelper('switch', function (value, options) {
            this.switch_value = value;
            return options.fn(this);
        });
        hbs.handlebars.registerHelper('case', function (value, options) {
            if (value == this.switch_value) {
                return options.fn(this);
            }
        });
    }
};
