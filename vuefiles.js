var q = 0;
var r = 0;
const quotes=[
    "Hello world! Welcome to my random quote machine!",
    "This can just display random quotes",
    "Current quote is bullsh*t",
    "This is my first thing in vue.js",
    "We don't do mistakes, just random accidents",
    "Like the quote?",
    "Expect more quotes to be added soon, and I promise those won't be bad like these."
];
const author=[
    "A random stranger",
    "Somebdy you wouldn't know",
    "Guess who!",
    "Laughs in vue.js",
    "Kill Bill",
    "I am the beginning, I am the end!!"
];


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