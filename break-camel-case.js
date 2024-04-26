function solution(text) {
    let modifiedText = '';
    for (let index = 0; index < text.length; index++) {
        let element = text[index];
        if (element.charCodeAt(0).toString(2) == element.toUpperCase().charCodeAt(0).toString(2)) {
            element = " " + element;
        }
        modifiedText += element;
    }    
    return modifiedText;
}