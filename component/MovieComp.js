class MovieComp {

    constructor(movieP) {
        this.movieP = movieP;
    }

    //a ver cómo sale :V  
    // creación de compt
    render = () => {

        var alreadyV = 0;
        let component = document.createElement('div');
        const database = firebase.database();


        let mcont = document.createElement('div');
        mcont.className = 'cc'
        mcont.innerHTML = ( '<p>'+'<h3>'+this.movieP.name+'</h3>'+this.movieP.promedio);
        component.appendChild(mcont)

        //ESTRELLAS VOTACIÓN
        let pStar = document.createElement('button');
        pStar.className = 'star';
        pStar.innerHTML = "<img src='./image/starM.png' width='14px' height='14px'>";
        component.appendChild(pStar);

        let sStar = document.createElement('button');
        sStar.className = 'star';
        sStar.innerHTML = "<img src='./image/starM.png' width='14px' height='14px'>";
        component.appendChild(sStar);

        let tStar = document.createElement('button');
        tStar.className = 'star';
        tStar.innerHTML = "<img src='./image/starM.png'width='14px' height='14px'>";
        component.appendChild(tStar);

        let cStar = document.createElement('button');
        cStar.className = 'star';
        cStar.innerHTML = "<img src='./image/starM.png' width='14px' height='14px'>";
        component.appendChild(cStar);

        let qStar = document.createElement('button');
        qStar.className = 'star';
        qStar.innerHTML = "<img src='./image/starM.png' width='14px' height='14px'>";
        component.appendChild(qStar);

         //Promedio 
         let promedio = document.createElement('div');
         promedio.className = 'promedio';
         promedio.innerHTML = (
             '<p>'+this.movieP.media+'</p>'
         );
         component.appendChild(promedio);
     /*  component.querySelectorAll('.star').forEach((star, i) => {
            star.addEventListener('click', function () {
                const newVote = {
                    value: i + 1,
                    id:this.movieP.name,
                }
                console.log(newVote);
                //database.ref('movies/' + this.movie.name + '/votos').set(votos);
            }.bind(this));
        });*/
        


       
        pStar.addEventListener('click', () => {

            const suma = this.movieP.suma + 1;
            const votos = this.movieP.vote + 1;
            const promedio = suma / votos;//quitar
            database.ref('movies/' + this.movieP.name + '/suma').set(suma);
            database.ref('movies/' + this.movieP.name + '/media').set(promedio);
            database.ref('movies/' + this.movieP.name + '/votos').set(votos);
            

            alreadyVoted();
        });

        sStar.addEventListener('click', () => {

            const suma = this.movieP.suma + 2;
            const votos = this.movieP.vote + 1;
            const promedio = suma / votos;
            database.ref('movies/' + this.movieP.name + '/suma').set(suma);
            database.ref('movies/' + this.movieP.name + '/media').set(promedio);
            database.ref('movies/' + this.movieP.name + '/votos').set(votos);
            
            alreadyVoted();

        });

        tStar.addEventListener('click', () => {

            const suma = this.movieP.suma + 3;
            const votos = this.movieP.vote + 1;
            const promedio = suma / votos;
            database.ref('movies/' + this.movieP.name + '/suma').set(suma);

            database.ref('movies/' + this.movieP.name + '/media').set(promedio);
            database.ref('movies/' + this.movieP.name + '/votos').set(votos);
           

            alreadyVoted();
        });

        cStar.addEventListener('click', () => {

            const suma = this.movieP.suma + 4;
            const votos = this.movieP.vote + 1;
            const promedio = suma / votos;
            database.ref('movies/' + this.movieP.name + '/suma').set(suma);
            database.ref('movies/' + this.movieP.name + '/media').set(promedio);
            database.ref('movies/' + this.movieP.name + '/votos').set(votos);
           
            alreadyVoted();
        });

        qStar.addEventListener('click', () => {

            const suma = this.movieP.suma + 5;
            const votos = this.movieP.vote + 1;
            const promedio = suma / votos;
            database.ref('movies/' + this.movieP.name + '/suma').set(suma);

            database.ref('movies/' + this.movieP.name + '/media').set(promedio);
            database.ref('movies/' + this.movieP.name + '/votos').set(votos);
            

            alreadyVoted();
        });

        function alreadyVoted() {
            alreadyV = 1;
            if (alreadyV == 1) {
                setInterval(() => { location.href = "./endV.html" }, 300);

            }
        }

        return component;



    }



}