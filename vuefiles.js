const qsource=require("quote");

var q = 0;
var r = 0;
new Vue({
    el: "#app",
    data: {
        quotes,
        author,
        currentQuote: quotes[q],
        authorName: author[r],
        name: 'raider',
        animating: false
    },
    methods: {
        newQuote: function () {

            q = Math.floor(Math.random() * quotes.length);
            this.currentQuote = quotes[q];
            r = Math.floor(Math.random() * author.length);
            this.authorName = author[r];
        }

    },
    updated: function () {
        this.animating = true;
        setTimeout(() => {
            this.animating = false;
        }, 1000);

    }
});