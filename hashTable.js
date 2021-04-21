class HashTable {
  constructor(size = 100) {
    this.buckets = new Array(size); // word문서 그림 참고.
    this.size = size;
  }

  // 해시 함수
  hash(key) {
    return key.toString().length % this.size;
  }

  // 해시 테이블에 새로운 데이터 추가
  set(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);

    return index;
  }

  // 키를 이용하여 데이터 반환
  get(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let bucket of this.buckets[index]) {
      // key
      if (bucket[0] === key) {
        // value
        return bucket[1];
      }
    }
  }
}

const hashTable = new HashTable(10);

hashTable.set("id1", "test1");
hashTable.set("id2", "test2");
hashTable.set("id3", "test3");
hashTable.set("id4", "test4");

console.log(hashTable.get("id1"));
console.log(hashTable.get("id2"));
console.log(hashTable.get("id3"));
console.log(hashTable.get("id4"));
