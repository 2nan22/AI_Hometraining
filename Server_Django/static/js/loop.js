
function iter(){

    var iterations = 0;
    
    document.getElementById('iteration').innerText = iterations;
    
    myVideo.addEventListener('ended', function () {    
    
        if (iterations < 20) {       
    
            fetch('http://127.0.0.1:5000/time', {credentials: 'include'});
    
            this.currentTime = 0;
            this.play();
            iterations ++;
            document.getElementById('iteration').innerText = iterations;
        }
    
        else 
        {   
            fetch('http://127.0.0.1:5000/reset', {credentials: 'include'});
            locate_load()
    
        }   
    }, 
    false);
    }
    
    function locate_load() {
        location.href='http://doit.withnet.com:8000/loading';
      }
    
    
    
    
    