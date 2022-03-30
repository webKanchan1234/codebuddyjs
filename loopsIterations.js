// level {1/2/3}


let n=6
let fibonacci=[]
fibonacci[0]=0
fibonacci[1]=1

let sum=fibonacci[0]+fibonacci[1]
for(let i=2;i<=n;i++){
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2]
    sum+=fibonacci[i]
}
console.log(sum)