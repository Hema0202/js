// function maxTree(root){
//     if(root == null) return -Infinity;
//     let l = maxTree(root.left);
//     let r = maxTree(root.right);
//     return Math.max(l,root.val,r);
// }

// function minTree(root){
//     if(root == null) return Infinity;
//     let l = minTree(root.left);
//     let r=minTree(root.right);
//     return Math.min(l,root,r);
// }

// function heightOfTree(root){
//     if(root==null) return 0;
//     let l=heightOfTree(root.left);
//     let r= heightOfTree(root.right);
//     return Math.max(l,r)+1;
// }

// function sumOfTree(root){
//     if(root==null) return 0;
//     let l=sumOfTree(root.left);
//     let r=sumOfTree(root.right);
//     return l+r+root.val;
// }

// function yesOrNo(word){
//    if(word=='YES' || word == 'Yes' || word =='YEs'|| word=='yEs' || word=='yES'||word=='yeS' || word=='YeS'||word=='yes') {
//     return "Yes";
//    }
//    else return "No";
    
// }
// console.log(yesOrNo('yes'));

// let arr = ['YES' , 'Yes' ,'YEs','yEs' ,'yES','yeS' ,'YeS','yes']
// function yesOrNo(arr){
//     let wordArray = [];
//  for(let i =0;i<arr.length;i++){
//     wordArray=arr[i].split('');
//     for(let j=0;j<wordArray.length;j++){
//         let temp = [];
//         temp.push(wordArray[j]);
//         if(temp.has('yes')) return "yes";
//         else "No";
//     }
//  }
// }
// console.log(yesOrNo(arr));

// function yesOrNo(word){
//     return (word.toLowerCase()==='yes') ? 'Yes' : 'No';
// }
// let res=yesOrNo('YeS');
// console.log(res);

// function greeting(name) {

//     return
    
//     `Hi, ${name}`;
    
//     }
    
//     console.log(greeting("John Doe"));


// if(![]==false){
//     console.log("Hello");
// }
// else{
//     console.log("Bye");
// }