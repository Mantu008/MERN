class ChockletStore{
    giveChocklet(price){
       if(price>=200){
        console.log(`you got an extra chocklet`);
       }
    }
}


module.exports=ChockletStore;