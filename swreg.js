/*we install the service worker to our project */
/*here is the service worker registration */

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').then((reg)=>{
      //the server worker registration did worked
      if(reg.installing){
        console.log('the service worker has been install')
      } else if(reg.waiting){
        console.log('waiting for the service worker installation');
      } else if(reg.active){
        console.log('the service worker is active')
      }
      console.log('registration succesfull. the scope is ' + reg.scope);
    }).catch(error=>{
      //the registration failed
      console.log('The registration failed ' + error);
    });
  }
  
  // credits:https://www.fastfwd.com/make-your-website-work-offline-service-workers/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  