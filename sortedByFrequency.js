const sortedFrequency = (str) => {
    // const mySet = new Set();
    // const sort = str.split("");
    // let tempString = []
    // for (let i = 0; i < str.length; i++) {
    //     if (mySet.has(sort[i])) {
    //         tempString.push(sort[i])
    //     } else {
    //         mySet.add(sort[i], sort[i])
    //     }

    // }
    // console.log(mySet);
    // const newData = [...mySet, ...tempString]
    // console.log(newData)

    stringAsObj = {}
    for (let item of str) {
        if (!stringAsObj[item])
            stringAsObj[item] = 0;
        stringAsObj[item]++;
    }

    let sortedString = Object.keys(stringAsObj).sort(function (a, b) { return stringAsObj[b] - stringAsObj[a] })

    let result = "";
    for (let item of sortedString) {
        result = result + item.repeat(stringAsObj[item])
    }
    console.log(result);
}

sortedFrequency("Aabbc");