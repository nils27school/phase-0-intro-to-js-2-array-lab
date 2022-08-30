const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
    console.log(cats)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
    console.log(cats)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    console.log(cats)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    console.log(cats)
}
function appendCat(name) {
const copyOfCats = [...cats, name]
return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = [name, ...cats]
    return copyOfCats;
}
function removeLastCat(name) {
    const copyOfCats = [...cats]
    copyOfCats.pop(name)
    return copyOfCats;
}
function removeFirstCat(name) {
    const copyOfCats = [...cats]
    copyOfCats.shift(name)
    return copyOfCats;
}