console.log('Bài 1:')
function getStringHasMaxLength(arr){
    //Tìm độ dài lớn nhất
    var arrMaxLength = Math.max(...arr.map(i => i.length));
    //trả về  chuỗi có độ dài lớn nhất
    return arr.filter(i => i.length == arrMaxLength);
}
console.log(['aba', 'aa', 'ad', 'c', 'vcd']);
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));


console.log('Bài 2:');
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];

for (let i = 0; i < users.length; i++) {
    if(users[i].age >25 && users[i].isStatus == true){
        console.log(users[i]);
    }
}

console.log('-------------');

users.sort(function(a,b){
    return a.age - b.age;
})
console.log(users);


console.log('Bài 3:');
var counts = {};
var getCountElement = (["one", "two", "three", "one", "one", "three"])

getCountElement.forEach((i) => {
    counts[i] = counts[i] ? (counts[i] + 1) : 1;
});
console.log(["one", "two", "three", "one", "one", "three"]);
console.log(counts);
