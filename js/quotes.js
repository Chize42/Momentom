const quotes = [
    {
        quote: "이런!!",
        author: " -honhahonha",
    },
    {
        quote: "이이~",
        author: " -Chize42",
    },
    {
        quote: "나는야 덤더미!",
        author: " -DumDum",
    },
    {
        quote: "야유 그냥 보고 지은건데유~",
        author: " -sunssong028",
    },
    {
        quote: "물고기 잡아왔서..~",
        author: " -pinggugaga",
    },
    {
        quote: "오!! 짱 잘만들었다!!",
        author: " -ppirippo",
    },
    {
        quote: "주거라!!주거라!!",
        author: " -???",
    },
    {
        quote: "아 해주세여~~",
        author: " -???",
    },
    {
        quote: "야옹옹야아오오옹왜오오옹",
        author: " -체다",
    },
    {
        quote: "엣헴~",
        author: " -???"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random()* quotes.length) ]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
