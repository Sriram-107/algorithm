function f() {
    console.log(1);
    f();
}
// f();

let count = 0;
function f1() {
    count++;
    console.log(count);
    f1();
}
// f1();

// f1() will stop running after memory runs out - stack overflow.
// To prevent this from happening we will use base condition.

let value = 0;
function f2() {
    if (value == 4) {
        return;
    }
    console.log(value);
    value++
    f2();
    console.log(value);

}

f2();
