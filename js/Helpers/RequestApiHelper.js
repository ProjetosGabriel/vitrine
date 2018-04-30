class RequestApiHelper{
    
    constructor(callbackApi){
        this._getReferenceProductInfo(callbackApi);
    }

    _getReferenceProductInfo(callbackApi){

        this._referenceProductInfo = callbackApi.data.reference.item;
    
    }

    
}