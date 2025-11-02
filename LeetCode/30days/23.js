// Input: obj = [null, 0, false, 1]
// Output: [1]

// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}

// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]

var compactObject = function(obj) {
    if(Array.isArray(obj)){
        let result=[]
        for(const el of obj){
            if(el){
                if(typeof el === "object"){
                    const compactedEl=compactObject(el);
                    result.push(compactedEl);
                }else{
                    result.push(el);
                }
            }
        }
        return result;
    }else if(typeof obj === "object" && obj !== null){
        let result={}
        for(const key in obj){
            if(obj[key]){
                if(typeof obj[key] === "object"){
                    const compactedEl=compactObject(obj[key]);
                    if(Array.isArray(compactedEl) && compactedEl.length > 0){
                        result[key]=compactedEl;
                    }else if(typeof compactedEl === "object" && Object.keys(compactedEl).length > 0){
                        result[key]=compactedEl;
                    }
                }else{
                    result[key]=obj[key];
                }
            }
        }
        return result;
    }
    return obj;
};
// obj = [null, 0, false, 1]
obj = {"a": null, "b": [false, 1]}
console.log(compactObject(obj))