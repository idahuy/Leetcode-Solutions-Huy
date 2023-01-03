/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(A) {
    //number of deletions
    var ans = 0;
    
    //iterate through first word in array
    for (var i = 0; i < A[0].length; i++) {
        
        //now iterate through array
        for (var j = 0; j < A.length - 1; j++) {
            
            //check if the character at the index in this word is greater than the next
            if (A[j].charAt(i) > A[j + 1].charAt(i)) {
                //increment deletions (we would need to delete this char to make it sorted)
                ans++;
                
                //break out of current for loop
                break;
            }
            
        }
    }
    
    //result
    return ans;
};