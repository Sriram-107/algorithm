const a = [1, 2, 3, 4, 5];
function reverse(l, r) {
    if (l >= r) {
        return;
    }
    a[l] = a[l] + a[r];
    a[r] = a[l] - a[r];
    a[l] = a[l] - a[r];
    reverse(l + 1, r - 1);
}

reverse(0, a.length - 1);
console.log(a);
