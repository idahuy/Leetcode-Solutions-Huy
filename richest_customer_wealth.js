/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let temp = result = 0
    accounts.forEach(e=> {
        temp = e.reduce((acc,cur)=>acc+cur,0);
        result = Math.max(temp,result);
    })
    return result;
};

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    var i = 0, j=0,sum =0,temp =0;
    while(i < accounts.length){
        temp = 0;
        j=0;
        while(j<accounts[i].length){
            temp+=accounts[i][j];
            j++;
        }
        sum = Math.max(sum,temp);
        i++;
    }
    return sum;
};