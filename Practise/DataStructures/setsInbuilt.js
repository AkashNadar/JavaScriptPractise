var nameSets = new Set();

nameSets.add("Java");
nameSets.add("Python");
nameSets.add("Java");
nameSets.add("Node");

console.log(nameSets);

console.log(nameSets.has("Python"));
console.log(nameSets.has("Python"));
nameSets.delete("Python")

for (const iterator of nameSets) {
    console.log(iterator);
}
