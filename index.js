function generaHashtag(str){
   return (str.length > 140 || str === '') ? false : '#' + str.split('').map(capitalize).join(' '); 
}
function capitalize(w){
    console.log(w);
    return w.charAt(0).toUpperCase()+str.slice(1);
}


console.log(generaHashtag('How are you'));
