function checkPrime(n){
    let count = 0 
    for( let i = 1 ; i <= n ; i++){
        if(n%i == 1){
        count = count + 1
    }}
    if(count<=1){
        console.log("prime")
    }else{
        console.log("not prime")
    }
}

checkPrime(5)
checkPrime(6)  