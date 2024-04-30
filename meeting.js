function meeting(s) {
    const names = s.split(';').sort();
    console.log(names, 'names')
    const result = []
    for(let index = 0; index < names.length; index++) {
        let name = names[index].toUpperCase().split(':');
        result.push(`${name[1]}, ${name[0]}`)
    }
    result.sort().map((res) => `(${res})`).join('')
}

s = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn";
meeting(s);

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"