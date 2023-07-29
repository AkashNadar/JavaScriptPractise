function recSearch(arr, no, offset) {
    // console.log(arr, no);
    let start = 0;
    let end = arr.length - 1;
    const mid = Math.floor((end - start) / 2);

    if (arr[mid] === no) {
        return mid + offset;
    }

    if (no > arr[mid]) {
        start = mid + 1;
        offset = offset + mid + 1;
    }
    else {
        end = mid - 1;
    }
    return recSearch(arr.slice(start, end + 1), no, offset);
}

arr = [1, 2, 3, 5, 6, 8, 13, 16, 26, 65];
// arr = [5];
console.log(recSearch(arr, 5, 0));