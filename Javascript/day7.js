function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const flip = arr.reverse().join(' ');
    console.log(flip)
}