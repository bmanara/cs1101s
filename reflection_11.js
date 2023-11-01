// Metalinguistic Abstraction I

// CSE Machine in Source
/*
Programming is communicating computation processes, our CSE machine describes a 
computation process (control, stash, frames etc.) that unfolds when a program
is run. We can use programming to explain and understand this process.
The evalutor, which determines the meaning of statements and expressions in a 
programming language, is just another program.
Writing an intepreter for Source, in Source? How would that work?
Source and target language for the interpreter is that same! Metalinguistic...

We want to write an evaluator in Source that can execute programs that are
written in Source. It's not really needed... The only purpose in writing the 
CSE machine in Source is to gain new insights into the language and deeper 
understanding on the inner working of the machine.
*/

// First step for evaluator: parsing
/*
Source String --> "Parser" --> Parse Tree --> Compiler, Intepreter or Translator
--> Output
// Lexical Analysis
Input characters are split into meaningful symbols (tokens) defined using regex

// Parsing
Checks that the tokens form allowable components (statements etc.)
Produces symbolic representation of the program, a syntax tree.
*/

const syntax_tree = parse("8 + 34;"); // Note the semicolon.

display_list(syntax_tree);

/*
// Calculator Language
// Backus-Naur Form (BNF)
stmt ::== expr;
expr ::== expr bin-op expr 
         | number
         | (expr)
bin-op ::== + | - | * | /
*/

// To run the program 1.4 + 2.3 / 70.4;
display_list(parse("1.4 + 2.3 / 70.4;"));

// Syntax of literals
function is_literal(comp) {
    return is_tagged_list(comp, "literal");
}

function is_tagged_list(comp, the_tag) {
    return is_pair(comp) && head(comp) === the_tag;
}

function literal_value(comp) {
    return head(tail(comp));
}

const is_binary_operator_combination = comp => is_tagged_list(comp, "binary_operator_combination");

// https://sourceacademy.nus.edu.sg/playground#chap=4&exec=1000&ext=NONE&files=KQJgYgDgNghgngcwE4HsCuA7AJqSrkwC2AdAFYDOAvLqAILAAMtAwgMoCM7D7roDAMgFMAxgBc0SQX36dgAZnogGbAKJ8AsjGEALAJYYpTRrQAqe8nwj4kRPsJQZRMfRaUw%2BqvoS16DfAGYoSHzuSsbCMFDCaLCiQXywGAhoMAiG9EwqAB5E0IKuDDCifKLaUkqC2Hwo-iVllta2RiCKYMbG-phiug58ggBukSmi5QAcgllWoACcfMAA7ABCc80Mc2FKUILFSsxzcgAiCbrkO%2BOTwSCzcsur62ub23y8YYd8GDFQ8reKD398AHc9Ft1qNQOw%2BCcAPofKBfECjPZXGZzJbtDb-DH3PhYE7QeBQ%2ByOVDwxEom7ozFU7FKXHkfFwKGnGDkbSgUYva4-GnUrFKImnOwoQjeKqvI5KMowHAIpFcyk8xW7fYShhOXSkuXfBV83n-O66pUPNrgPoXfLkHoYAowMUMZkjQiVUQWA16nm6WobUbQqC6EY2Un2EW2mWzZFhNFuo0xjEvNZvJQQZyXUZ%2BgORKGDKBoMbB0Vh0BIhic7XRw2G%2BaqwRQcjlBie0HQgBG%2BhgSEZKAgghscSQhOFrYwRSt7PzoZREbWUd%2BsfduuL8lVyd0qf8q9OUK7PYnCPHYvDe3L85Pc8sKfZdaJWC33ZsYtG%2B8LICPs4rp-fc5Xqe8AGtBFCQ7tp2d5FEEUIuKISBoN0vQIjqH6IWeGLbr24HkHAhDNigQbCgWk6HghyFIZ%2BGJahG8pGMeyEmiaDDeDo%2Bj1pB0GwdaRGkf8VZ9LWzFeg8PrkIBbYdreO59hB1pQTBoijnueG7uG4bTtynHEc8Krnqu7IwBA0CMkBHbsqhYH9ixMlWkymHYbhIYHkWHEkU56lqa5VJSjKozqqSpYRsWHnsr5hHUW5Ll-N57IRQiQXkqpzmRtWvGonFYU8j2qCpk%2BDkbCAmC-hgKAAhgQp2TgCigCAsWOWe3EhdORx1ZI4hIMVkqCNKgVVWERi1RktCdBgbEhHpUAGSJcDGaBfbZQwXYQi%2B1QQJVU4LClupNRIrWzVN8Tiku%2B05aAywgJVdWpXIdFzesx3badb7xdS5VKCZ017W8iYPCAAC0FXVaFWIXYt80MD9z1LSs92pQDvwvbtCZHO9qq-S0yNrGd-0JpdEDA3Qi3LWjkMY9iT3beJcP7Yj6zLSa%2BN-Q98hYzjppg3dUPuiT6W7aMsOXIuJ0AKoYPlhVbTzyOUfQvXorR0s0EoGGODAWQBF0skOAUgUAJLMAACnwABS8YACzEOwxDLbMzQy1R-Wq3JDZCU4CBpDefqCvJhAQA4zozaUAFO5OKl0xtLWQkJ35jsKXsGI4gegAAbAnfABR70c%2BytlMfX7UIBxSPUNX1ct0emO61u0TADUNSi%2Bv6peR573uxytM5GiHW3Qk7LtQm7ZzBmnTd8yAJeBuLZaSwXldq1tw%2BZtmub1-3OzKatMaNdsm3J%2B1nlRY%2BUeN0vVX5x0dtwfRMD-t3tcjwi2Zxy375t8c7tgidM-wstxa38iefj%2BXrRy6TNClwGDBiAlPV0fVJ722hDzAcWE2xTwXvvO%2Btxl6GjXs1duQlMDATEkAuBYC5K7wbjHA%2BkY9jzFfGzD0QlDIgTJv2UBCCiF92Qd-bkvUoGn2hDg0SsCmHDkQanNhy8oxoOpBgje1dHapC7j3JBpCZoVV4fQ-BAiRxwQtmPBYE8T5YOEsOPhO1GGDmYXBYhi8UGMHEdiSRodpE51kYIV2Jxe570UQtHKdC8GmQIWY1qWif46OPoNIRgDfEYSwjhBR6dRFrSpI-TYrioSSC9BYthxZ5oS2CRXPRAQNyiB8Q%2BVhHi4nB3XvYhgPcUmCDSSU9OxZAkcN0aE%2B2V4HA3hMsU9xsTkrlMwU-QpqSYkDz4HIQ%2Bv8bZF1lszZQrA1BKAYr4ZiUlWLgJmW0KZzMsYMIKOZNiECQlVwdgY3BsD9lCPSaUvpDAbFYjsfozuzjL7P3qaMrx%2BguyjyCZwvJDiVE%2BIkhclhPSm5lNuavQmfxEknKeS415oKdiD0wF8k6Eycm21aafc5qyLIOCslE2yljm7xPuDC6pwzhEeMyei35WKtp-gAt4nFpw1lEMiTZKxDzBnsgqkOVFH8%2BAcuiew9odLjmMqhACll0kq6jGFfCcFUK%2BDktcbyk6KKIDI2LAq2lBcNkGqUCMU4%2BgEAGptlwradIGQDmJCKskJK6bWtgBNeCaL3WD1xijb1J4iRQRFR%2BRQQbqFE1DU0umgR%2BztR0PXfCb0FkExDfTBxb9Y2KVRBQqhobk1-BbONQF4FgXmKysidGOaYyA1pHiF1Ly3GlRRGWpNioSbOoJPIhE7bRgp2IXGwi3VlXZqbYO4dDBu07xLUpByjaR1DvLa5EAxBF2jz8hDWdPItRBPfK211L9lqCsOjOw9c7j0hvDUfC1fyGDbqZE4VknVHV1W3eqvdSj3XBp9XOZkd7-rvoHSew9Z6-2RqhNGtkN8hj1gpgmle07-1-GvZ2ue5RslHuxNxTxibUNxnRVu6t8Bn3aqpmurDcHiPzkAxio5YTkxIDrFCUMIG55FDGKy01XK-0woGEMZj7IaN1kvFBNjFFtFSyYHxgCDGuM5h426kAZsjbXT4Au8ZGw6LzAYMQBTFJ3XZJtkAA&isFolder=false&tabIdx=0&tabs=PQBwNghgng5gTgewK4DsAmpHwgWwHQBWAzkA&variant=default
// function evaluate(expr) {
//     let C = list(expr);   // Control
//     let S = null;         // Stash
//     while (! is_null(C)) {
//         const command = head(C);
//         C = tail(C);
        
//         // expressions and statements
//         if (is_literal(command)) {
//             S = pair(literal_value(command), S);
//         } else if (is_binary_operator_combination(command)) {
//             C = pair(first_operand(command),
//                  pair(second_operand(command),
//                   pair(make_binary_operator_instruction(
//                   operator_symbol(command)),
//                   C)));

//         // machine instructions
//         } else if (is_binary_operator_instruction(command)) {
//             S = pair(apply_binary(operator_instruction_symbol(command),
//                                   head(tail(S)), head(S)),
//                  tail(tail(S)));
//         } else {
//           error(command, "unknown command:");
//         }
//     }
//     return head(S); 
// }

/*
// Adding booleans, conditionals, and sequences
We don't evaluate consequent or alternative before predicate

// Adding blocks and declarations
Just look at L11 Slides and launch the program... its crazy long

// Adding simple compound functions
The function parameters, body and environment is a data structure pushed 
into the stash. Translates it into a constant declaration.
// Function Application
Evaluate function expression and the arguments
What happens when we encounter a call instruction in our control?
function, argument expressions are already in the stash.
We keep track the number of arguments because we need to pull the right values
from the stash. 
*/







