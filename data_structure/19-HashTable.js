class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /*set(key, value) {
    let index = this._hash(key);
    const data = [key, value];
    if (this.keyMap[index]?.length) {
      this.keyMap[index].push(data);
    } else {
      this.keyMap[index] = [data];
    }
  }*/

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) return undefined;

    const hashSet = this.keyMap[index];

    for (let hashVal of hashSet) {
      if (hashVal[0] === key) return hashVal[1];
    }
  }

  values() {
    const value = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        const kvp = this.keyMap[i];
        for (let val of kvp) {
          if (!key.includes(val[0])) {
            key.push(val[1]);
          }
        }
      }
    }
    return value;
  }

  keys() {
    const key = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        const kvp = this.keyMap[i];
        for (let val of kvp) {
          if (!key.includes(val[0])) {
            key.push(val[0]);
          }
        }
      }
    }
    return key;
  }
}

const table = new HashTable();
table.set("hello", "world");
table.set("hello", "frat");
console.log(table);
console.log(table.keys());
