let s1 = "a234";
let s2 = "1234";
let s3 = "123456";
let s4 = "dsae";
let s5 = "222";
let s6 = "1e22";

example(s1)
example(s2)
example(s3)
example(s4)
example(s5)
example(s6)

function example(s) {
    console.log(s, isNaN(s));
}