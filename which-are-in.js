function inArray(array1, array2) {
    return array1.filter((a1) => array2.find((a2) => a2.includes(a1))).sort();
}