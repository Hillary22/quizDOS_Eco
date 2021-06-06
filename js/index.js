const database = firebase.database();
const mc= document.getElementById('mc'); 
    

//leer componentes
database.ref('movies').on('value', function(data){
    mc.innerHTML = '';
    data.forEach(
        movieP => {
            let vl = movieP.val();
             console.log();
            let m = new MovieComp(vl);
            mc.appendChild(m.render());
           console.log(m);
        
    });
});