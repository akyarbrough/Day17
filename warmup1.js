function isAnagram(first,second){
    let strFirst = first.split('').sort().join('');
    let strSecond = second.split('').sort().join('');

    if (strFirst === strSecond){
        console.log("True");
    } else {
        console.log("False");
    }

}

isAnagram("dog","god");
