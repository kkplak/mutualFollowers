let bobsFollowers = ['niki', 'jose', 'rami', 'syri'];
let tinasFollowers = ['jose', 'samuel', 'rami'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.log(mutualFollowers);