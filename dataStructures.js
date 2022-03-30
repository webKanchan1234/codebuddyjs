// level {1/2/3}
//Level 2

//question 1
const arr=[1, 3, 4, 6, 7, 8]
const arr2=[]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        continue;
    }else{
        arr2.push(arr[i])
    }
}
console.log(arr2)

///question 2
let str="Elie"
let s=""
let len=str.length
for(let i=0;i<len;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='o' || str[i]=='i' || str[i]=='u'){
        s+=str[i].toUpperCase()
    }else{
        s+=str[i]
    }
}
console.log(s)

//question 3
const ar=[1, 3, 4, 6, 7, 8, 2, 5]
console.log(Math.max(...ar))






