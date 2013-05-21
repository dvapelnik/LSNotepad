function LocalStorageHelper(){
    LocalStorageHelper.getItemByKey = function(key){
        if(LocalStorageHelper.checkStorage()){

        }else{
            throw new Error('Local storage is not available');
        }
    }

    LocalStorageHelper.hasItemByKey = function(key){

    }

    LocalStorageHelper.removeItemByKey = function(key){

    }

    LocalStorageHelper.checkStorage = function(){
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    }
}