class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  setValue(key, value) {
    let hashFunction = this._hash(key);
    if (!this.data[hashFunction]) {
      this.data[hashFunction] = [];
    }
    this.data[hashFunction].push([key, value]);
    console.log(this.data);
    return this.data;
  }

  getValue(key) {
    let hashFunction = this._hash(key);
    const bucket = this.data[hashFunction];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          console.log("Value of " + key + ": " + bucket[i][1]);
          return bucket[i][1];
        }
      }
    }
    console.log("key not found");
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    console.log(keysArray);
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }
    console.log(valuesArray);
    return valuesArray;
  }

  keysWithoutCollision() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.setValue("grapes", 10000);
myHashTable.setValue("apples", 9);
myHashTable.setValue("Oranges", 2);
myHashTable.getValue("grapes");
myHashTable.getValue("apples");
myHashTable.keys();
myHashTable.values();
myHashTable.keysWithoutCollision();
