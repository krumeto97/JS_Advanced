function Area(input){
    let type=typeof(input);
    if(type=='number'){
        var result=Math.PI*(input**2);
        console.log(result.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}