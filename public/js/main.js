

setTimeout(() => {
        Notification.requestPermission();
        if(Notification.permission == 'granted'){
            initFirebaseMessagingRegistration()
        }else{
        }
console.log( Notification.requestPermission());
   
    ;
    
}, 1000);

