const sexySet = new Set(["nico", 5, 5, 5, 7, 7]);

sexySet.add("wow");
sexySet.add([2, 19, 39]);
console.log(sexySet);
console.log(sexySet.size);

// WeakSet
const weakSet = new WeakSet();

const sexy = {
  im: true,
};

weakSet.add(sexy);
console.log(weakSet);
weakSet.add({ hello: true });
console.log(weakSet);
