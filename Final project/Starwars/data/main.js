

let main = document.getElementById("main");
let pre = document.getElementById("luke");
let h1 = document.getElementById("h1");




















function luke() {
    for (const x in LUKE) {
        let luke =
            `
<body style="background-color: black; margin: 0 ;">
<h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
    <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
        <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
           <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex; justify-content: space-between;">
             <button style=" padding:10px 10px; margin-left:0.2rem;" onclick="obi()">  Previous Character</button>
             <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="c3po()">Next Character </button>
           </div> 
            <h1 style="font-size:50px;">  ${LUKE.name}</h1>
            <h2> Height : ${LUKE.height}</h2>
            <h2> Mass : ${LUKE.mass}</h2>
            <h2> Hair color : ${LUKE.hair_color}</h2>
            <h2> Skin color : ${LUKE.skin_color}</h2>
            <h2> Eye color : ${LUKE.eye_color}</h2>
            <h2> Birth year : ${LUKE.birth_year}</h2>
            <h2> Gender : ${LUKE.gender}</h2>
            <h2> Homewolrd :<h2 onclick="planet1()" style="color:#039BE5; cursor: pointer;"> ${LUKE.homeworld} </h2></h2>
            <h2> Films :  <ul  style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${LUKE.film1}</li>
                          <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${LUKE.film2}</li>
                          <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${LUKE.film3}</li>
                          <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${LUKE.film6}</li>
                          <li onclick="film7()" style="color:#039BE5; cursor: pointer;">${LUKE.film7}</li>
                      </ul></h2>
            <h2> Species : 
                <ul style="list-style-type: none;">
                    <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${LUKE.species}</li></h2>
                </ul>    
            <h2> Vehicles : 
            <ul style="list-style-type: none;">
                <li onclick="vehicle14()" style="color:#039BE5; cursor: pointer;">${LUKE.vehicles14}</li>
                <li onclick="vehicle30()" style="color:#039BE5; cursor: pointer;">${LUKE.vehicles30}</li>
            </ul>
            </h2>
            <h2> Starships : 
                <ul style="list-style-type: none;">
                    <li onclick="starship12()" style="color:#039BE5; cursor: pointer;">${LUKE.starships12}</li>
                    <li onclick="starship22()" style="color:#039BE5; cursor: pointer;">${LUKE.starships22}</li>
                </ul>
            </h2>
            <h2> Created : ${LUKE.created}</h2>
            <h2> Edited : ${LUKE.edited}</h2>
        
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./1.jpg" alt="luke">
        </div> 
    </section>
</body>      

        `

        document.open("_self");
        document.write(luke);


    }
}
function c3po() {

    for (const x in C3PO) {

        let c3po =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
    <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
        <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
           <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
           <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="luke()">Previous Character</button>
             <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="r2d2()">Next Character</button>
           </div> 
        <h1 style="font-size:50px;"> ${C3PO.name}</h1>
        <h2> Height : ${C3PO.height}</h2>
        <h2> Mass : ${C3PO.mass}</h2>
        <h2> Hair color : ${C3PO.hair_color}</h2>
        <h2> Skin color : ${C3PO.skin_color}</h2>
        <h2> Eye color : ${C3PO.eye_color}</h2>
        <h2> Birth year : ${C3PO.birth_year}</h2>
        <h2> Gender : ${C3PO.gender}</h2>
        <h2> Homewolrd :<h2 onclick="planet1()" style="color:#039BE5; cursor: pointer;"> ${C3PO.homeworld} </h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${C3PO.films1}</li>
                          <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${C3PO.films2}</li>
                          <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${C3PO.films3}</li>
                          <li onclick="film4()" style="color:#039BE5; cursor: pointer;">${C3PO.films4}</li>
                          <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${C3PO.films5}</li>
                          <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${C3PO.films6}</li>
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species2()" style="color:#039BE5; cursor: pointer;">${C3PO.species}</li></h2>
            </ul>    
        <h2> vehicles  : ${C3PO.vehicles}</h2>
        <h2> Starships : ${C3PO.starships}</h2>
        <h2> Created : ${C3PO.created}</h2>
        <h2> Edited : ${C3PO.edited}</h2>
        
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./2.jpg" alt="c3po">
        </div> 
    </section>
</body> 
        `
        document.open("_self");
        document.write(c3po);
    }
}
function r2d2() {

    for (const x in R2D2) {

        let r2d2 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="c3po()">Previous Character</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="darth()">Next Character</button>
              </div> 
           <h1 style="font-size:50px;"> ${R2D2.name}</h1>
        
        <h2> Height : ${R2D2.height}</h2>
        <h2> Mass : ${R2D2.mass}</h2>
        <h2> Hair color : ${R2D2.hair_color}</h2>
        <h2> Skin color : ${R2D2.skin_color}</h2>
        <h2> Eye color : ${R2D2.eye_color}</h2>
        <h2> Birth year : ${R2D2.birth_year}</h2>
        <h2> Gender : ${R2D2.gender}</h2>
        <h2> Homewolrd :<h2 onclick="planet8()" style="color:#039BE5; cursor: pointer;"> ${R2D2.homeworld} </h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${R2D2.films1}</li>
                          <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${R2D2.films2}</li>
                          <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${R2D2.films3}</li>
                          <li onclick="film4()" style="color:#039BE5; cursor: pointer;">${R2D2.films4}</li>
                          <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${R2D2.films5}</li>
                          <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${R2D2.films6}</li>
                          <li onclick="film7()" style="color:#039BE5; cursor: pointer;">${R2D2.films7}</li>
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${R2D2.species1}</li></h2>
            </ul>    
        <h2> vehicles  : ${R2D2.vehicles}</h2>
        <h2> Starships : ${R2D2.starships}</h2>
        <h2> Created : ${R2D2.created}</h2>
        <h2> Edited : ${R2D2.edited}</h2>
        
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./3.jpg" alt="c3po">
        </div> 
    </section>
</body> 
        `
        document.open("_self");
        document.write(r2d2);
    }
}
function darth() {

    for (const x in DARTH) {

        let darth =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="r2d2()">Previous Character</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="leia()">Next Character</button>
              </div> 
           <h1 style="font-size:50px;"> ${DARTH.name}</h1>
        <h2> Height : ${DARTH.height}</h2>
        <h2> Mass : ${DARTH.mass}</h2>
        <h2> Hair color : ${DARTH.hair_color}</h2>
        <h2> Skin color : ${DARTH.skin_color}</h2>
        <h2> Eye color : ${DARTH.eye_color}</h2>
        <h2> Birth year : ${DARTH.birth_year}</h2>
        <h2> Gender : ${DARTH.gender}</h2>
        <h2> Homewolrd :<h2 onclick="planet1()" style="color:#039BE5; cursor: pointer;"> ${DARTH.homeworld} </h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${DARTH.films1}</li>
                          <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${DARTH.films2}</li>
                          <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${DARTH.films3}</li>
                          <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${DARTH.films6}</li>
                          
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${DARTH.species1}</li></h2>
            </ul>    
        <h2> vehicles  : ${DARTH.vehicles}</h2>
        <h2> Starships :<h2 onclick="starship13()" style="color:#039BE5; cursor: pointer;">${DARTH.starships13}</h2>
        <h2> Created : ${DARTH.created}</h2>
        <h2> Edited : ${DARTH.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./4.jpg" alt="c3po">
        </div> 
    </section>
</body> 
        `
        document.open("_self");
        document.write(darth);
    }
}
function leia() {

    for (const x in LEIA) {

        let leia =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="darth()">Previous Character</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="owen()">Next Character</button>
              </div> 
           <h1 style="font-size:50px;"> ${LEIA.name}</h1>
        
        <h2> Height : ${LEIA.height}</h2>
        <h2> Mass : ${LEIA.mass}</h2>
        <h2> Hair color : ${LEIA.hair_color}</h2>
        <h2> Skin color : ${LEIA.skin_color}</h2>
        <h2> Eye color : ${LEIA.eye_color}</h2>
        <h2> Birth year : ${LEIA.birth_year}</h2>
        <h2> Gender : ${LEIA.gender}</h2>
        <h2 > Homewolrd : <h2 onclick="planet2()" style="color:#039BE5; cursor: pointer;"> ${LEIA.homeworld}</h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${LEIA.films1}</li>
                          <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${LEIA.films2}</li>
                          <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${LEIA.films3}</li>
                          <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${LEIA.films6}</li>
                          <li onclick="film7()" style="color:#039BE5; cursor: pointer;">${LEIA.films7}</li>
                          
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${LEIA.species1}</li></h2>
            </ul>    
        <h2 > vehicles  : <h2 onclick="vehicle30()" style="color:#039BE5; cursor: pointer;">${LEIA.vehicles30}</h2></h2>
        <h2> Starships : ${LEIA.starships}</h2>
        <h2> Created : ${LEIA.created}</h2>
        <h2> Edited : ${LEIA.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./5.jpg" alt="leia">
        </div> 
    </section>
</body> 
        
        `
        document.open("_self");
        document.write(leia);
    }
}
function owen() {

    for (const x in OWENLARS) {

        let owen =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="leia()">Previous Character</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="beru()">Next Character</button>
              </div> 
           <h1 style="font-size:50px;"> ${OWENLARS.name}</h1>
        
        <h2> Height : ${OWENLARS.height}</h2>
        <h2> Mass : ${OWENLARS.mass}</h2>
        <h2> Hair color : ${OWENLARS.hair_color}</h2>
        <h2> Skin color : ${OWENLARS.skin_color}</h2>
        <h2> Eye color : ${OWENLARS.eye_color}</h2>
        <h2> Birth year : ${OWENLARS.birth_year}</h2>
        <h2> Gender : ${OWENLARS.gender}</h2>
        <h2 > Homewolrd : <h2 onclick="planet1()" style="color:#039BE5; cursor: pointer;"> ${OWENLARS.homeworld}</h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${OWENLARS.films1}</li>
                          <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${OWENLARS.films5}</li>
                          <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${OWENLARS.films6}</li>
                         
                          
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${OWENLARS.species1}</li></h2>
            </ul>    
        <h2> vehicles  : ${OWENLARS.vehicles}</h2>
        <h2> Starships : ${OWENLARS.starships}</h2>
        <h2> Created : ${OWENLARS.created}</h2>
        <h2> Edited : ${OWENLARS.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./6.jpg" alt="owen">
        </div> 
    </section>
</body> 
        `
        document.open("_self");
        document.write(owen);
    }
}
function beru() {

    for (const x in BERULARS) {

        let beru =
            `

            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="owen()">Previous Character</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="r5d4()">Next Character</button>
              </div> 
           <h1 style="font-size:50px;"> ${BERULARS.name}</h1>
        <h2> Height : ${BERULARS.height}</h2>
        <h2> Mass : ${BERULARS.mass}</h2>
        <h2> Hair color : ${BERULARS.hair_color}</h2>
        <h2> Skin color : ${BERULARS.skin_color}</h2>
        <h2> Eye color : ${BERULARS.eye_color}</h2>
        <h2> Birth year : ${BERULARS.birth_year}</h2>
        <h2> Gender : ${BERULARS.gender}</h2>
        <h2 > Homewolrd : <h2 onclick="planet1()" style="color:#039BE5; cursor: pointer;"> ${BERULARS.homeworld}</h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${BERULARS.films1}</li>
                          <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${BERULARS.films5}</li>
                          <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${BERULARS.films6}</li>
                         
                          
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${BERULARS.species1}</li></h2>
            </ul>    
        <h2> vehicles  : ${BERULARS.vehicles}</h2>
        <h2> Starships : ${BERULARS.starships}</h2>
        <h2> Created : ${BERULARS.created}</h2>
        <h2> Edited : ${BERULARS.edited}</h2>
        
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./7.jpg" alt="beru">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(beru);
    }
}
function r5d4() {

    for (const x in R5D4) {

        let r5d4 =
            `

            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="beru()">Previous Character</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="biggs()">Next Character</button>
              </div> 
           <h1 style="font-size:50px;"> ${R5D4.name}</h1>
        <h2> Height : ${R5D4.height}</h2>
        <h2> Mass : ${R5D4.mass}</h2>
        <h2> Hair color : ${R5D4.hair_color}</h2>
        <h2> Skin color : ${R5D4.skin_color}</h2>
        <h2> Eye color : ${R5D4.eye_color}</h2>
        <h2> Birth year : ${R5D4.birth_year}</h2>
        <h2> Gender : ${R5D4.gender}</h2>
        <h2> Homewolrd : <h2 onclick="planet1()" style="color:#039BE5; cursor: pointer;" > ${R5D4.homeworld}</h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${R5D4.films1}</li>
                        
                         
                          
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species2()" style="color:#039BE5; cursor: pointer;">${R5D4.species2}</li></h2>
            </ul>    
        <h2> vehicles  : ${R5D4.vehicles}</h2>
        <h2> Starships : ${R5D4.starships}</h2>
        <h2> Created : ${R5D4.created}</h2>
        <h2> Edited : ${R5D4.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./8.jpg" alt="r5d4">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(r5d4);
    }
}
function biggs() {

    for (const x in BIGGS) {

        let biggs =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="r5d4()">Previous Character</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="obi()">Next Character</button>
              </div> 
           <h1 style="font-size:50px;"> ${BIGGS.name}</h1>
        
        <h2> Height : ${BIGGS.height}</h2>
        <h2> Mass : ${BIGGS.mass}</h2>
        <h2> Hair color : ${BIGGS.hair_color}</h2>
        <h2> Skin color : ${BIGGS.skin_color}</h2>
        <h2> Eye color : ${BIGGS.eye_color}</h2>
        <h2> Birth year : ${BIGGS.birth_year}</h2>
        <h2> Gender : ${BIGGS.gender}</h2>
        <h2 > Homewolrd : <h2 onclick="planet1()" style="color:#039BE5; cursor: pointer;"> ${BIGGS.homeworld}</h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${BIGGS.films1}</li>
                        
                         
                          
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${BIGGS.species1}</li></h2>
            </ul>    
        <h2> vehicles  : ${BIGGS.vehicles}</h2>
        <h2 > Starships : <h2 onclick="starship12()" style="color:#039BE5; cursor: pointer;">${BIGGS.starships12}</h2></h2>
        <h2> Created : ${BIGGS.created}</h2>
        <h2> Edited : ${BIGGS.edited}</h2>
        
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./9.jpg" alt="biggs">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(biggs);
    }
}
function obi() {

    for (const x in OBI) {

        let obi =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="biggs()">Previous Character</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="luke()">Next Character</button>
              </div> 
           <h1 style="font-size:50px;"> ${OBI.name}</h1>
        
        <h2> Height : ${OBI.height}</h2>
        <h2> Mass : ${OBI.mass}</h2>
        <h2> Hair color : ${OBI.hair_color}</h2>
        <h2> Skin color : ${OBI.skin_color}</h2>
        <h2> Eye color : ${OBI.eye_color}</h2>
        <h2> Birth year : ${OBI.birth_year}</h2>
        <h2> Gender : ${OBI.gender}</h2>
        <h2> Homewolrd : <h2 onclick="planet20()" style="color:#039BE5; cursor: pointer;"> ${OBI.homeworld}</h2></h2>
        <h2> Films :  <ul style="list-style-type: none;">
                          <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${OBI.films1}</li>
                          <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${OBI.films2}</li>
                          <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${OBI.films3}</li>
                          <li onclick="film4()" style="color:#039BE5; cursor: pointer;">${OBI.films4}</li>
                          <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${OBI.films5}</li>
                          <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${OBI.films6}</li>
                        
                         
                          
                      </ul></h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${OBI.species1}</li></h2>
            </ul>    
        <h2 > vehicles  : <h2 onclick="vehicle38()" style="color:#039BE5; cursor: pointer;">${OBI.vehicles38}</h2></h2>
        <h2> Starships : 
                <ul style="list-style-type: none;">
                        <li onclick="starship48()" style="color:#039BE5; cursor: pointer;">${OBI.starships48}</li>
                        <li onclick="starship59()" style="color:#039BE5; cursor: pointer;">${OBI.starships59}</li>
                        <li onclick="starship64()" style="color:#039BE5; cursor: pointer;">${OBI.starships64}</li>
                        <li onclick="starship65()" style="color:#039BE5; cursor: pointer;">${OBI.starships65}</li>
                        <li onclick="starship74()" style="color:#039BE5; cursor: pointer;">${OBI.starships74}</li>
                
                </ul>
        
        </h2>
        <h2> Created : ${OBI.created}</h2>
        <h2> Edited : ${OBI.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./10.jpg" alt="obi">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(obi);
    }
}



function planet1() {



    for (const x in PLANET1) {
        let planet1 =
            `

                    <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="planet20()">Previous Planet</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="planet2()">Next Planet</button>
              </div> 
           <h1 style="font-size:50px;"> ${PLANET1.name}</h1>
        <h2> Rotaion period : ${PLANET1.rotation_period}</h2>
        <h2> Orbital period : ${PLANET1.orbital_period}</h2>
        <h2> Diameter : ${PLANET1.diameter}</h2>
        <h2> Climate : ${PLANET1.climate}</h2>
        <h2> Gravity : ${PLANET1.gravity}</h2>
        <h2> Terrain : ${PLANET1.terrain}</h2>
        <h2> Surface water : ${PLANET1.surface_water}</h2>
        <h2> Population : ${PLANET1.population}</h2>
        <h2> Residents : 
                <ul style="list-style-type: none;">
                        
                        <li onclick="luke()" style="color:#039BE5; cursor: pointer;">${PLANET1.residents1}</li>
                        <li onclick="c3po()" style="color:#039BE5; cursor: pointer;">${PLANET1.residents2}</li>
                        <li onclick="darth()" style="color:#039BE5; cursor: pointer;">${PLANET1.residents4}</li>
                        <li onclick="owen()" style="color:#039BE5; cursor: pointer;">${PLANET1.residents6}</li>
                        <li onclick="beru()" style="color:#039BE5; cursor: pointer;">${PLANET1.residents7}</li>
                        <li onclick="r5d4()" style="color:#039BE5; cursor: pointer;">${PLANET1.residents8}</li>
                        <li onclick="biggs()" style="color:#039BE5; cursor: pointer;">${PLANET1.residents9}</li>
                        <li onclick="()" style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET1.residents11}</li>
                        <li onclick="()" style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET1.residents43}</li>
                        <li onclick="()" style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET1.residents62}</li>
                </ul>
        </h2>
        <h2> Films : 
                <ul style="list-style-type: none;">
                            <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${PLANET1.films1}</li>
                            <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${PLANET1.films3}</li>
                            <li onclick="film4()" style="color:#039BE5; cursor: pointer;">${PLANET1.films4}</li>
                            <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${PLANET1.films5}</li>
                            <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${PLANET1.films6}</li>
                </ul>
        </h2>
        <h2> Created : ${PLANET1.created}</h2>
        <h2> Edited : ${PLANET1.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./Tatooine.jpg" alt="tatonie" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(planet1);
    }


}
function planet2() {



    for (const x in PLANET2) {
        let planet2 =
            `

            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="planet1()">Previous Planet</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="planet8()">Next Planet</button>
              </div> 
           <h1 style="font-size:50px;"> ${PLANET2.name}</h1>
        <h2> Rotaion period : ${PLANET2.rotation_period}</h2>
        <h2> Orbital period : ${PLANET2.orbital_period}</h2>
        <h2> Diameter : ${PLANET2.diameter}</h2>
        <h2> Climate : ${PLANET2.climate}</h2>
        <h2> Gravity : ${PLANET2.gravity}</h2>
        <h2> Terrain : ${PLANET2.terrain}</h2>
        <h2> Surface water : ${PLANET2.surface_water}</h2>
        <h2> Population : ${PLANET2.population}</h2>
        <h2> Residents : 
                <ul style="list-style-type: none;">
                        
                        <li onclick="leia()" style="color:#039BE5; cursor: pointer;">${PLANET2.residents5}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;;">${PLANET2.residents68}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET2.residents81}</li>
                      
                </ul>
        </h2>
        <h2> Films : 
                <ul style="list-style-type: none;">
                            <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${PLANET2.films1}</li>
                            <lionclick="film6()" style="color:#039BE5; cursor: pointer;">${PLANET2.films6}</li>
                          
                </ul>
        </h2>
        <h2> Created : ${PLANET2.created}</h2>
        <h2> Edited : ${PLANET2.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./alderaan.jpg" alt="alderaan" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(planet2);
    }


}
function planet8() {
    for (const x in PLANET8) {
        let planet8 =
            `

            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="planet2()">Previous Planet</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="planet20()">Next Planet</button>
              </div> 
           <h1 style="font-size:50px;"> ${PLANET8.name}</h1>
        <h2> Rotaion period : ${PLANET8.rotation_period}</h2>
        <h2> Orbital period : ${PLANET8.orbital_period}</h2>
        <h2> Diameter : ${PLANET8.diameter}</h2>
        <h2> Climate : ${PLANET8.climate}</h2>
        <h2> Gravity : ${PLANET8.gravity}</h2>
        <h2> Terrain : ${PLANET8.terrain}</h2>
        <h2> Surface water : ${PLANET8.surface_water}</h2>
        <h2> Population : ${PLANET8.population}</h2>
        <h2> Residents : 
                <ul style="list-style-type: none;">
                        <li onclick="r2d2()" style="color:#039BE5; cursor: pointer;">${PLANET8.residents3}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents21}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents35}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents36}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents37}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents38}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents39}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents42}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents60}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents61}</li>
                        <li style="color:#039BE5;cursor:not-allowed;opacity: 0.5;">${PLANET8.residents66}</li>
                </ul>
        </h2>
        <h2> Films : 
                <ul style="list-style-type: none;">
                            <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${PLANET8.films3}</li>
                            <li onclick="film4()" style="color:#039BE5; cursor: pointer;">${PLANET8.films4}</li>
                            <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${PLANET8.films5}</li>
                            <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${PLANET8.films6}</li>
                </ul>
        </h2>
        <h2> Created : ${PLANET8.created}</h2>
        <h2> Edited : ${PLANET8.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./naboo.jpg" alt="naboo" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(planet8);
    }
}
function planet20() {
    for (const x in PLANET20) {
        let planet20 =
            `

            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="planet8()">Previous Planet</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="planet1()">Next Planet</button>
              </div> 
           <h1 style="font-size:50px;"> ${PLANET20.name}</h1>
        <h2> Rotaion period : ${PLANET20.rotation_period}</h2>
        <h2> Orbital period : ${PLANET20.orbital_period}</h2>
        <h2> Diameter : ${PLANET20.diameter}</h2>
        <h2> Climate : ${PLANET20.climate}</h2>
        <h2> Gravity : ${PLANET20.gravity}</h2>
        <h2> Terrain : ${PLANET20.terrain}</h2>
        <h2> Surface water : ${PLANET20.surface_water}</h2>
        <h2> Population : ${PLANET20.population}</h2>
        <h2> Residents : 
                <ul style="list-style-type: none;">
                        <li onclick="obi()" style="color:#039BE5; cursor: pointer;">${PLANET20.residents10}</li>
               
                </ul>
        </h2>
        <h2> Films :   ${PLANET20.films}   </h2>
        <h2> Created : ${PLANET20.created}</h2>
        <h2> Edited : ${PLANET20.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./steawjon.jpg" alt="steawjon" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(planet20);
    }
}



function film1() {

    for (const x in FILM1) {


        let film1 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="film7()">Previous Film</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="film2()">Next Film</button>
              </div>     
        <h1 style="font-size:50px;">  ${FILM1.title}</h1>
        <h2>  ${FILM1.opening_crawl}</h2>
        <h2> Director : ${FILM1.director}</h2>
        <h2> Producer : ${FILM1.producer}</h2>
        <h2> Release date : ${FILM1.release_date}</h2>
        <h2> Character : 
            <ul style="list-style-type: none;">
                <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${FILM1.Character1}</li>
                <li onclick="c3po()"style="color:#039BE5; cursor: pointer;">${FILM1.Character2}</li>
                <li onclick="r2d2()"style="color:#039BE5; cursor: pointer;">${FILM1.Character3}</li>
                <li onclick="darth()"style="color:#039BE5; cursor: pointer;">${FILM1.Character4}</li>
                <li onclick="leia()"style="color:#039BE5; cursor: pointer;">${FILM1.Character5}</li>
                <li onclick="owen()"style="color:#039BE5; cursor: pointer;">${FILM1.Character6}</li>
                <li onclick="beru()"style="color:#039BE5; cursor: pointer;">${FILM1.Character7}</li>
                <li onclick="r5d4()"style="color:#039BE5; cursor: pointer;">${FILM1.Character8}</li>
                <li onclick="biggs()"style="color:#039BE5; cursor: pointer;">${FILM1.Character9}</li>
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${FILM1.Character10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.Character12}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.Character13}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.Character14}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.Character15}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.Character16}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.Character18}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.Character19}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.Character81}</li>
            </ul >
        </h2>
        <h2> Planets : 
            <ul style="list-style-type: none;">
                <li onclick="planet1()"style="color:#039BE5; cursor: pointer;">${FILM1.planets1}</li>
                <li onclick="planet2"style="color:#039BE5; cursor: pointer;">${FILM1.planets2}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.planets3}</li>
            </ul>
        </h2>
        <h2> Starships : 
            <ul style="list-style-type: none;">       
                <li onclick="starship2()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.starships2}</li>
                <li onclick="starship3()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.starships3}</li>
                <li onclick="starship5()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.starships5}</li>
                <li onclick="starship9()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.starships9}</li>
                <li onclick="starship10()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.starships10}</li>
                <li onclick="starship11()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.starships11}</li>
                <li onclick="starship12()"style="color:#039BE5; cursor: pointer;">${FILM1.starships12}</li>
                <li onclick="starship13()"style="color:#039BE5; cursor: pointer;">${FILM1.starships13}</li>
            </ul>
        </h2>
        <h2> Vehciles :
            <ul style="list-style-type: none;"> 
                <li onclick="vehicle4()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.vehicles4}</li>
                <li onclick="vehicle6()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.vehicles6}</li>
                <li onclick="vehicle7()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.vehicles7}</li>
                <li onclick="vehicle8()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.vehicles8}</li>
            </ul>
        </h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${FILM1.species1}</li>
                <li onclick="species2()" style="color:#039BE5; cursor: pointer;">${FILM1.species2}</li>
                <li onclick="species3()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.species3}</li>
                <li onclick="species4()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.species4}</li>
                <li onclick="species5()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM1.species5}</li>
            </ul>
        </h2>
        <h2> Created : ${FILM1.created}</h2>
        <h2> Edited : ${FILM1.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./anew.jpg" alt="film1" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(film1);
    }
}
function film2() {

    for (const x in FILM2) {


        let film2 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="film1()">Previous Film</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="film3()">Next Film</button>
              </div>     
        <h1 style="font-size:50px;">  ${FILM2.title}</h1>
        <h2>  ${FILM2.opening_crawl}</h2>
        <h2> Director : ${FILM2.director}</h2>
        <h2> Producer : ${FILM2.producer}</h2>
        <h2> Release date : ${FILM2.release_date}</h2>
        <h2> Character : 
            <ul style="list-style-type: none;">
                <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${FILM2.character1}</li>
                <li onclick="c3po()"style="color:#039BE5; cursor: pointer;">${FILM2.character2}</li>
                <li onclick="r2d2()"style="color:#039BE5; cursor: pointer;">${FILM2.character3}</li>
                <li onclick="darth()"style="color:#039BE5; cursor: pointer;">${FILM2.character4}</li>
                <li onclick="leia()"style="color:#039BE5; cursor: pointer;">${FILM2.character5}</li>
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${FILM2.character10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character13}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character14}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character18}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character20}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character21}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character22}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character23}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character24}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character25}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.character26}</li>
            </ul>
        </h2>
        <h2> Planets : 
            <ul style="list-style-type: none;">
                <li onclick="planet4()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.planet4}</li>
                <li onclick="planet5()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.planet5}</li>
                <li onclick="planet6()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.planet6}</li>
                <li onclick="planet27()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.planet27}</li>
            </ul>
        </h2>
        <h2> Starships : 
            <ul style="list-style-type: none;">       
                <li onclick="starship3()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.starships3}</li>
                <li onclick="starship10()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.starships10}</li>
                <li onclick="starship11()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.starships11}</li>
                <li onclick="starship12()"style="color:#039BE5; cursor: pointer;">${FILM2.starships12}</li>
                <li onclick="starship15()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.starships15}</li>
                <li onclick="starship17()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.starships17}</li>
                <li onclick="starship21()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.starships21}</li>
                <li onclick="starship22()"style="color:#039BE5; cursor: pointer;">${FILM2.starships22}</li>
                <li onclick="starship23()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.starships23}</li>
            </ul>
        </h2>
        <h2> Vehciles :
            <ul style="list-style-type: none;"> 
                <li onclick="vehicle8()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.vehicles8}</li>
                <li onclick="vehicle14()"style="color:#039BE5; cursor: pointer;">${FILM2.vehicles14}</li>
                <li onclick="vehicle16()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.vehicles16}</li>
                <li onclick="vehicle18()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.vehicles18}</li>
                <li onclick="vehicle19()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.vehicles19}</li>
                <li onclick="vehicle20()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.vehicles20}</li>
            </ul>
        </h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()"style="color:#039BE5; cursor: pointer;">${FILM2.species1}</li>
                <li onclick="species2()"style="color:#039BE5; cursor: pointer;">${FILM2.species2}</li>
                <li onclick="species3()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.species3}</li>
                <li onclick="species6()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.species6}</li>
                <li onclick="species7()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM2.species7}</li>
            </ul>
        </h2>
        <h2> Created : ${FILM2.created}</h2>
        <h2> Edited : ${FILM2.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./theempire.jpg" alt="film2" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(film2);
    }



}
function film3() {
    for (const x in FILM3) {


        let film3 =
            `

            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="film2()">Previous Film</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="film4()">Next Film</button>
              </div>     
        <h1 style="font-size:50px;">  ${FILM3.title}</h1>
        <h2>  ${FILM3.opening_crawl}</h2>
        
        <h2>  ${FILM3.opening_crawl}</h2>
        <h2> Director : ${FILM3.director}</h2>
        <h2> Producer : ${FILM3.producer}</h2>
        <h2> Release date : ${FILM3.release_date}</h2>
        <h2> Character : 
            <ul style="list-style-type: none;">
                <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${FILM3.characters1}</li>
                <li onclick="c3po()"style="color:#039BE5; cursor: pointer;">${FILM3.characters2}</li>
                <li onclick="r2d2()"style="color:#039BE5; cursor: pointer;">${FILM3.characters3}</li>
                <li onclick="darth()"style="color:#039BE5; cursor: pointer;">${FILM3.characters4}</li>
                <li onclick="leia()"style="color:#039BE5; cursor: pointer;">${FILM3.characters5}</li>
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${FILM3.characters10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters13}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters14}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters16}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters18}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters20}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters21}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters22}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters25}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters27}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters28}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters29}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters30}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters31}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.characters45}</li>
            </ul>
        </h2>
        <h2> Planets : 
            <ul style="list-style-type: none;">
                <li onclick="planet1()" style="color:#039BE5; cursor: pointer;">${FILM3.planets1}</li>
                <li onclick="planet5()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.planets5}</li>
                <li onclick="planet7()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.planets7}</li>
                <li onclick="planet8()" style="color:#039BE5; cursor: pointer;">${FILM3.planets8}</li>
                <li onclick="planet9()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.planets9}</li>
            </ul>
        </h2>
        <h2> Starships : 
            <ul style="list-style-type: none;">       
                <li onclick="starship2()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships2}</li>
                <li onclick="starship3()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships3}</li>
                <li onclick="starship10()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships10}</li>
                <li onclick="starship11()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships11}</li>
                <li onclick="starship12()" style="color:#039BE5; cursor: pointer;">${FILM3.starships12}</li>
                <li onclick="starship15()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships15}</li>
                <li onclick="starship17()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships17}</li>
                <li onclick="starship22()" style="color:#039BE5; cursor: pointer;">${FILM3.starships22}</li>
                <li onclick="starship23()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships23}</li>
                <li onclick="starship27()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships27}</li>
                <li onclick="starship28()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships28}</li>
                <li onclick="starship29()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.starships29}</li>
            </ul>
        </h2>
        <h2> Vehciles :
            <ul style="list-style-type: none;"> 
                <li onclick="vehicle8()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.vehicles8}</li>
                <li onclick="vehicle16()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.vehicles16}</li>
                <li onclick="vehicle18()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.vehicles18}</li>
                <li onclick="vehicle19()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.vehicles19}</li>
                <li onclick="vehicle24()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.vehicles24}</li>
                <li onclick="vehicle25()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.vehicles25}</li>
                <li onclick="vehicle26()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.vehicles26}</li>
                <li onclick="vehicle30()"style="color:#039BE5; cursor: pointer;">${FILM3.vehicles30}</li>
            </ul>
        </h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()"style="color:#039BE5; cursor: pointer;">${FILM3.species1}</li>
                <li onclick="species2()"style="color:#039BE5; cursor: pointer;">${FILM3.species2}</li>
                <li onclick="species3()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.species3}</li>
                <li onclick="species5()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.species5}</li>
                <li onclick="species6()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.species6}</li>
                <li onclick="species8()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.species8}</li>
                <li onclick="species9()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM3.species9}</li>
                <li onclick="species10()"style="color:#039BE5; cursor: cursor:not-allowed;opacity: 0.5;">${FILM3.species10}</li>
                <li onclick="species15()"style="color:#039BE5; cursor: cursor:not-allowed;opacity: 0.5;">${FILM3.species15}</li>
            </ul>
        </h2>
        <h2> Created : ${FILM3.created}</h2>
        <h2> Edited : ${FILM3.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./return.jpg" alt="film3" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(film3);
    }



}
function film4() {
    for (const x in FILM4) {


        let film4 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="film3()">Previous Film</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="film5()">Next Film</button>
              </div>     
        <h1 style="font-size:50px;">  ${FILM4.title}</h1>
        
        
        <h2>  ${FILM4.opening_crawl}</h2>
        <h2> Director : ${FILM4.director}</h2>
        <h2> Producer : ${FILM4.producer}</h2>
        <h2> Release date : ${FILM4.release_date}</h2>
        <h2> Character : 
            <ul style="list-style-type: none;">
                <li onclick="c3po()"style="color:#039BE5; cursor: pointer;">${FILM4.characters2}</li>
                <li onclick="r2d2()"style="color:#039BE5; cursor: pointer;">${FILM4.characters3}</li>
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${FILM4.characters10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters11}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters16}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters20}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters21}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters32}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters33}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters34}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters35}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters36}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters37}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters38}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters39}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters40}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters41}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters42}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters43}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters44}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters46}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters47}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters48}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters49}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters50}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters51}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters52}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters53}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters54}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters55}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters56}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters57}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters58}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.characters59}</li>
                
                
            </ul>
        </h2>
        <h2> Planets : 
            <ul style="list-style-type: none;">
                <li onclick="planet1()" style="color:#039BE5; cursor: pointer;">${FILM4.planets1}</li>
                <li onclick="planet8()" style="color:#039BE5; cursor: pointer;">${FILM4.planets8}</li>
                <li onclick="planet9()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.planets9}</li>
            </ul>
        </h2>
        <h2> Starships : 
            <ul style="list-style-type: none;">       
                <li onclick="starship31()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.starships31}</li>
                <li onclick="starship32()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.starships32}</li>
                <li onclick="starship39()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.starships39}</li>
                <li onclick="starship40()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.starships40}</li>
                <li onclick="starship41()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.starships41}</li>
         
            </ul>
        </h2>
        <h2> Vehciles :
            <ul style="list-style-type: none;"> 
                
                <li onclick="vehicle33()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.vehicles33}</li>
                <li onclick="vehicle34()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.vehicles34}</li>
                <li onclick="vehicle35()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.vehicles35}</li>
                <li onclick="vehicle36()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.vehicles36}</li>
                <li onclick="vehicle37()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.vehicles37}</li>
                <li onclick="vehicle38()" style="color:#039BE5; cursor: pointer;">${FILM4.vehicles38}</li>
                <li onclick="vehicle39()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.vehicles39}</li>
            </ul>
        </h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()"style="color:#039BE5; cursor: pointer;">${FILM4.species1}</li>
                <li onclick="species2()"style="color:#039BE5; cursor: pointer;">${FILM4.species2}</li>
                <li onclick="species6()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species6}</li>
                <li onclick="species11()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species11}</li>
                <li onclick="species12()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species12}</li>
                <li onclick="species13()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species13}</li>
                <li onclick="species14()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species14}</li>
                <li onclick="species15()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species15}</li>
                <li onclick="species16()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species16}</li>
                <li onclick="species17()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species17}</li>
                <li onclick="species18()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species18}</li>
                <li onclick="species19()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species19}</li>
                <li onclick="species20()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species20}</li>
                <li onclick="species21()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species21}</li>
                <li onclick="species22()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species22}</li>
                <li onclick="species23()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species23}</li>
                <li onclick="species24()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species24}</li>
                <li onclick="species25()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species25}</li>
                <li onclick="species26()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species26}</li>
                <li onclick="species27()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM4.species27}</li>
            </ul>
        </h2>
        <h2> Created : ${FILM4.created}</h2>
        <h2> Edited : ${FILM4.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./thephantom.jpg" alt="film4" style="width:500px; height:500px;">
        </div> 
    </section>
</body>

        `
        document.open("_self");
        document.write(film4);
    }


}
function film5() {
    for (const x in FILM5) {


        let film5 =
            `

           <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="film4()">Previous Film</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="film6()">Next Film</button>
              </div>     
        <h1 style="font-size:50px;">  ${FILM5.title}</h1>
        
        
        <h2>  ${FILM5.opening_crawl}</h2>
        <h2> Director : ${FILM5.director}</h2>
        <h2> Producer : ${FILM5.producer}</h2>
        <h2> Release date : ${FILM5.release_date}</h2>
        <h2> Character : 
            <ul style="list-style-type: none;">
                <li onclick="c3po()" style="color:#039BE5; cursor: pointer;">${FILM5.characters2}</li>
                <li onclick="r2d2()" style="color:#039BE5; cursor: pointer;">${FILM5.characters3}</li>
                <li onclick="owen()" style="color:#039BE5; cursor: pointer;">${FILM5.characters6}</li>
                <li onclick="beru()" style="color:#039BE5; cursor: pointer;">${FILM5.characters7}</li>
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${FILM5.characters10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters11}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters20}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters21}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters22}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters33}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters35}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters36}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters40}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters43}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters46}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters51}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters52}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters53}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters58}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters59}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters60}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters61}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters62}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters63}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters64}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters65}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters66}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters67}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters68}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters69}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters70}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters71}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters72}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters73}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters74}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters75}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters76}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters77}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters78}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.characters82}</li>
            </ul>
        </h2>
        <h2> Planets : 
            <ul style="list-style-type: none;">
                <li onclick="planet1()" style="color:#039BE5; cursor: pointer;">${FILM5.planets1}</li>
                <li onclick="planet8()" style="color:#039BE5; cursor: pointer;">${FILM5.planets8}</li>
                <li onclick="planet9()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.planets9}</li>
                <li onclick="planet10()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.planets10}</li>
                <li onclick="planet11()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.planets11}</li>
            </ul>
        </h2>
        <h2> Starships : 
            <ul style="list-style-type: none;">       
                <li onclick="starship21()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.starships21}</li>
                <li onclick="starship32()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.starships32}</li>
                <li onclick="starship39()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.starships39}</li>
                <li onclick="starship43()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.starships43}</li>
                <li onclick="starship47()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.starships47}</li>
                <li onclick="starship48()" style="color:#039BE5; cursor: pointer;">${FILM5.starships48}</li>
                <li onclick="starship49()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.starships49}</li>
                <li onclick="starship52()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.starships52}</li>
                <li onclick="starship58()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.starships58}</li>
            </ul>
        </h2>
        <h2> Vehciles :
            <ul style="list-style-type: none;"> 
                <li onclick="vehicle4()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles4}</li>
                <li onclick="vehicle44()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles44}</li>
                <li onclick="vehicle45()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles45}</li>
                <li onclick="vehicle46()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles46}</li>
                <li onclick="vehicle50()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles50}</li>
                <li onclick="vehicle51()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles51}</li>
                <li onclick="vehicle53()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles53}</li>
                <li onclick="vehicle54()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles54}</li>
                <li onclick="vehicle55()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles55}</li>
                <li onclick="vehicle56()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles56}</li>
                <li onclick="vehicle57()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.vehicles57}</li>
            </ul>
        </h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${FILM5.species1}</li>
                <li onclick="species2()" style="color:#039BE5; cursor: pointer;">${FILM5.species2}</li>
                <li onclick="species6()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species6}</li>
                <li onclick="species12()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species12}</li>
                <li onclick="species13()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species13}</li>
                <li onclick="species15()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species15}</li>
                <li onclick="species28()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species28}</li>
                <li onclick="species29()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species29}</li>
                <li onclick="species30()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species30}</li>
                <li onclick="species31()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species31}</li>
                <li onclick="species32()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species32}</li>
                <li onclick="species33()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species33}</li>
                <li onclick="species34()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species34}</li>
                <li onclick="species35()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM5.species35}</li>
            </ul>
        </h2>
        <h2> Created : ${FILM5.created}</h2>
        <h2> Edited : ${FILM5.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./attackof.jpg" alt="film5" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(film5);
    }
}
function film6() {
    for (const x in FILM6) {


        let film6 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="film5()">Previous Film</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="film7()">Next Film</button>
              </div>     
        <h1 style="font-size:50px;">  ${FILM6.title}</h1>
        
        
        <h2>  ${FILM6.opening_crawl}</h2>
        <h2> Director : ${FILM6.director}</h2>
        <h2> Producer : ${FILM6.producer}</h2>
        <h2> Release date : ${FILM6.release_date}</h2>
        <h2> Character : 
            <ul style="list-style-type: none;">
                <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${FILM6.characters1}</li>
                <li onclick="c3po()"style="color:#039BE5; cursor: pointer;">${FILM6.characters2}</li>
                <li onclick="r2d2()"style="color:#039BE5; cursor: pointer;">${FILM6.characters3}</li>
                <li onclick="darth()"style="color:#039BE5; cursor: pointer;">${FILM6.characters4}</li>
                <li onclick="leia()"style="color:#039BE5; cursor: pointer;">${FILM6.characters5}</li>
                <li onclick="owen()"style="color:#039BE5; cursor: pointer;">${FILM6.characters6}</li>
                <li onclick="beru()"style="color:#039BE5; cursor: pointer;">${FILM6.characters7}</li>
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${FILM6.characters10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters11}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters12}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters13}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters20}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters21}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters33}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters35}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters46}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters51}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters52}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters53}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters54}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters55}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters56}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters58}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters63}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters64}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters67}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters68}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters75}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters78}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters79}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters80}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters81}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters82}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.characters83}</li>
            </ul>
        </h2>
        <h2> Planets : 
            <ul style="list-style-type: none;">
                <li onclick="planet1()" style="color:#039BE5; cursor: pointer;">${FILM6.planets1}</li>
                <li onclick="planet2()" style="color:#039BE5; cursor: pointer;">${FILM6.planets2}</li>
                <li onclick="planet5()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets5}</li>
                <li onclick="planet8()" style="color:#039BE5; cursor: pointer;">${FILM6.planets8}</li>
                <li onclick="planet9()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets9}</li>
                <li onclick="planet12()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets12}</li>
                <li onclick="planet13()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets13}</li>
                <li onclick="planet14()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets14}</li>
                <li onclick="planet15()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets15}</li>
                <li onclick="planet16()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets16}</li>
                <li onclick="planet17()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets17}</li>
                <li onclick="planet18()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets18}</li>
                <li onclick="planet19()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.planets19}</li>

            </ul>
        </h2>
        <h2> Starships : 
            <ul style="list-style-type: none;">       
                <li onclick="starship2()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.starships2}</li>
                <li onclick="starship32()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.starships32}</li>
                <li onclick="starship48()" style="color:#039BE5; cursor: pointer;">${FILM6.starships48}</li>
                <li onclick="starship59()" style="color:#039BE5; cursor: pointer;">${FILM6.starships59}</li>
                <li onclick="starship61()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.starships61}</li>
                <li onclick="starship63()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.starships63}</li>
                <li onclick="starship64()" style="color:#039BE5; cursor: pointer;">${FILM6.starships64}</li>
                <li onclick="starship65()" style="color:#039BE5; cursor: pointer;">${FILM6.starships65}</li>
                <li onclick="starship66()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.starships66}</li>
                <li onclick="starship68()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.starships68}</li>
                <li onclick="starship74()" style="color:#039BE5; cursor: pointer;">${FILM6.starships74}</li>
                <li onclick="starship75()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.starships75}</li>
            </ul>
        </h2>
        <h2> Vehciles :
            <ul style="list-style-type: none;"> 
                <li onclick="vehicle33()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles33}</li>
                <li onclick="vehicle50()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles50}}</li>
                <li onclick="vehicle53()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles53}}</li>
                <li onclick="vehicle56()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles56}}</li>
                <li onclick="vehicle60()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles60}}</li>
                <li onclick="vehicle62()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles62}}</li>
                <li onclick="vehicle67()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles67}}</li>
                <li onclick="vehicle69()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles69}}</li>
                <li onclick="vehicle70()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles70}}</li>
                <li onclick="vehicle71()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles71}}</li>
                <li onclick="vehicle72()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles72}}</li>
                <li onclick="vehicle73()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles73}}</li>
                <li onclick="vehicle76()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.vehicles76}}</li>
            </ul>
        </h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()" style="color:#039BE5; cursor: pointer;">${FILM6.species1}</li>
                <li onclick="species2()" style="color:#039BE5; cursor: pointer;">${FILM6.species2}</li>
                <li onclick="species3()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species3}</li>
                <li onclick="species6()" style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species6}</li>
                <li onclick="species15()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species15}</li>
                <li onclick="species19()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species19}</li>
                <li onclick="species20()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species20}</li>
                <li onclick="species23()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species23}</li>
                <li onclick="species24()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species24}</li>
                <li onclick="species25()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species25}</li>
                <li onclick="species26()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species26}</li>
                <li onclick="species27()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species27}</li>
                <li onclick="species28()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species28}</li>
                <li onclick="species29()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species29}</li>
                <li onclick="species30()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species30}</li>
                <li onclick="species33()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species33}</li>
                <li onclick="species34()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species34}</li>
                <li onclick="species35()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species35}</li>
                <li onclick="species36()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species36}</li>
                <li onclick="species37()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM6.species37}</li>
                

            </ul>
        </h2>
        <h2> Created : ${FILM6.created}</h2>
        <h2> Edited : ${FILM6.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./revenge.jpg" alt="film6" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(film6);
    }



}
function film7() {
    for (const x in FILM7) {


        let film7 =
            `

               <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="film6()">Previous Film</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="film1()">Next Film</button>
              </div>     
        <h1 style="font-size:50px;">  ${FILM7.title}</h1>
        
        
        <h2>  ${FILM7.opening_crawl}</h2>
        <h2> Director : ${FILM7.director}</h2>
        <h2> Producer : ${FILM7.producer}</h2>
        <h2> Release date : ${FILM7.release_date}</h2>
        <h2> Character : 
            <ul style="list-style-type: none;">
                <li onclick="luke()" style="color:#039BE5; cursor: pointer;">${FILM7.characters1}</li>
                <li onclick="r2d2()" style="color:#039BE5; cursor: pointer;">${FILM7.characters3}</li>
                <li onclick="leia()" style="color:#039BE5; cursor: pointer;">${FILM7.characters5}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.characters13}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.characters14}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.characters27}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.characters84}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.characters85}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.characters86}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.characters87}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.characters88}</li>
               
            </ul>
        </h2>
        <h2> Planets : 
            <ul style="list-style-type: none;">
                <li onclick="planet61()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.planets61}</li>
            </ul>
        </h2>
        <h2> Starships : 
            <ul style="list-style-type: none;">       
                <li onclick="starship10()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.starships10}</li>
                <li onclick="starship77()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.starships77}</li>
            
            </ul>
        </h2>
        <h2> Vehciles : ${FILM7.vehicles}

        </h2>
        <h2> Species : 
            <ul style="list-style-type: none;">
                <li onclick="species1()"style="color:#039BE5; cursor: pointer;">${FILM7.species1}</li>
                <li onclick="species2()"style="color:#039BE5; cursor: pointer;">${FILM7.species2}</li>
                <li onclick="species3()"style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${FILM7.species3}</li>
          
            

            </ul>
        </h2>
        <h2> Created : ${FILM7.created}</h2>
        <h2> Edited : ${FILM7.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./forceof.jpg" alt="film7" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(film7);
    }



}



function species1() {
    for (const x in SPECIES1) {


        let specie1 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="species2()">Previous Species</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="species2()">Next Species</button>
              </div>
        <h2 style="font-size:50px;">  ${SPECIES1.name}</h2>
        <h2> Classification : ${SPECIES1.classification}</h2>
        <h2> Designation : ${SPECIES1.designation}</h2>
        <h2> Average Height : ${SPECIES1.average_height}</h2>
        <h2> Skin color : ${SPECIES1.skin_colors}</h2>
        <h2> Hair color : ${SPECIES1.hair_colors}</h2>
        <h2> Eye color : ${SPECIES1.eye_colors}</h2>
        <h2> Average lifespan : ${SPECIES1.average_lifespan}</h2>
        <h2> Homeworld : ${SPECIES1.homeworld}</h2>
        <h2> Language : ${SPECIES1.language}</h2>
        <h2> People : 
            <ul style="list-style-type: none;">
                    <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${SPECIES1.people1}</li>
                    <li onclick="darth()"style="color:#039BE5; cursor: pointer;">${SPECIES1.people4}</li>
                    <li onclick="leia()"style="color:#039BE5; cursor: pointer;">${SPECIES1.people5}</li>
                    <li onclick="owen()"style="color:#039BE5; cursor: pointer;">${SPECIES1.people6}</li>
                    <li onclick="beru()"style="color:#039BE5; cursor: pointer;">${SPECIES1.people7}</li>
                    <li onclick="biggs()"style="color:#039BE5; cursor: pointer;">${SPECIES1.people9}</li>
                    <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${SPECIES1.people10}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people11}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people12}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people14}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people18}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people21}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people22}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people25}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people26}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people28}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people29}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people32}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people34}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people35}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people39}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people42}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people43}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people51}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people62}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people66}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people67}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people68}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people69}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people74}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people81}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people84}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people85}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people86}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES1.people88}</li>
            </ul>
        </h2>
        <h2> Films : 
            <ul style="list-style-type: none;">
                <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${SPECIES1.films1}</li>
                <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${SPECIES1.films2}</li>
                <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${SPECIES1.films3}</li>
                <li onclick="film4()" style="color:#039BE5; cursor: pointer;">${SPECIES1.films4}</li>
                <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${SPECIES1.films5}</li>
                <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${SPECIES1.films6}</li>
                <li onclick="film7()" style="color:#039BE5; cursor: pointer;">${SPECIES1.films7}</li>
            
            </ul>
        </h2>
        <h2> Created : ${SPECIES1.created}</h2>
        <h2> Edited : ${SPECIES1.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./human.jpg" alt="human" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(specie1);
    }

}
function species2() {
    for (const x in SPECIES2) {


        let specie2 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="species1()">Previous Species</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="species1()">Next Species</button>
              </div>
        <h2 style="font-size:50px;">  ${SPECIES2.name}</h2>
        
        <h2> Classification : ${SPECIES2.classification}</h2>
        <h2> Designation : ${SPECIES2.designation}</h2>
        <h2> Average Height : ${SPECIES2.average_height}</h2>
        <h2> Skin color : ${SPECIES2.skin_colors}</h2>
        <h2> Hair color : ${SPECIES2.hair_colors}</h2>
        <h2> Eye color : ${SPECIES2.eye_colors}</h2>
        <h2> Average lifespan : ${SPECIES2.average_lifespan}</h2>
        <h2> Homeworld : ${SPECIES2.homeworld}</h2>
        <h2> Language : ${SPECIES2.language}</h2>
        <h2> People : 
            <ul style="list-style-type: none;">
                    <li onclick="c3po()" style="color:#039BE5; cursor: pointer;">${SPECIES2.people2}</li>
                    <li onclick="r2d2()" style="color:#039BE5; cursor: pointer;">${SPECIES2.people3}</li>
                    <li onclick="r5d4()" style="color:#039BE5; cursor: pointer;">${SPECIES2.people8}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES2.people23}</li>
                    <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${SPECIES2.people87}</li>
             
            </ul>
        </h2>
        <h2> Films : 
            <ul style="list-style-type: none;">
                <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${SPECIES2.film1}</li>
                <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${SPECIES2.film2}</li>
                <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${SPECIES2.film3}</li>
                <li onclick="film4()" style="color:#039BE5; cursor: pointer;">${SPECIES2.film4}</li>
                <li onclick="film5()" style="color:#039BE5; cursor: pointer;">${SPECIES2.film5}</li>
                <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${SPECIES2.film6}</li>
                <li onclick="film7()" style="color:#039BE5; cursor: pointer;">${SPECIES2.film7}</li>
            
            </ul>
        </h2>
        <h2> Created : ${SPECIES2.created}</h2>
        <h2> Edited : ${SPECIES2.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./droid.jpg" alt="droid" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(specie2);
    }

}


function vehicle14() {

    for (const x in VEHICLE14) {

        let vehicle14 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="vehicle38()">Previous Species</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="vehicle30()">Next Species</button>
              </div>
        <h1 style="font-size:50px;">  ${VEHICLE14.name}</h1>
        
        <h2> Model : ${VEHICLE14.model}</h2>
        <h2> Manufacturer${VEHICLE14.manufacturer}</h2>
        <h2> Cost in credits${VEHICLE14.cost_in_credits}</h2>
        <h2> Lenght : ${VEHICLE14.length}</h2>
        <h2> Max atmosphering speed : ${VEHICLE14.max_atmosphering_speed}</h2>
        <h2> Crew : ${VEHICLE14.crew}</h2>
        <h2> Passengers : ${VEHICLE14.passengers}</h2>
        <h2> Cargo capacity : ${VEHICLE14.cargo_capacity}</h2>
        <h2> Consumables : ${VEHICLE14.consumables}</h2>
        <h2> Vehicle class : ${VEHICLE14.vehicle_class}</h2>
        <h2> Pilots : 
                <ul style="list-style-type: none;">
                        <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${VEHICLE14.pilots1}</li>
                        <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${VEHICLE14.pilots18}</li>
                </ul>
        
        </h2>
        <h2 onclick="film2()">${VEHICLE14.films2}</h2>
        <h2>${VEHICLE14.created}</h2>
        <h2>${VEHICLE14.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./snow.jpg" alt="snowspeeder" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(vehicle14);
    }


}
function vehicle30() {

    for (const x in VEHICLE30) {

        let vehicle30 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="vehicle14()">Previous Species</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="vehicle38()">Next Species</button>
              </div>
        <h1 style="font-size:50px;">  ${VEHICLE30.name}</h1>
       
        <h2> Model : ${VEHICLE30.model}</h2>
        <h2> Manufacturer${VEHICLE30.manufacturer}</h2>
        <h2> Cost in credits${VEHICLE30.cost_in_credits}</h2>
        <h2> Lenght : ${VEHICLE30.length}</h2>
        <h2> Max atmosphering speed : ${VEHICLE30.max_atmosphering_speed}</h2>
        <h2> Crew : ${VEHICLE30.crew}</h2>
        <h2> Passengers : ${VEHICLE30.passengers}</h2>
        <h2> Cargo capacity : ${VEHICLE30.cargo_capacity}</h2>
        <h2> Consumables : ${VEHICLE30.consumables}</h2>
        <h2> Vehicle class : ${VEHICLE30.vehicle_class}</h2>
        <h2> Pilots : 
                <ul style="list-style-type: none;">
                        <li onclick="luke()" style="color:#039BE5; cursor: pointer;">${VEHICLE30.pilots1}</li>
                        <li onclick="leia()" style="color:#039BE5; cursor: pointer;">${VEHICLE30.pilots5}</li>
                </ul>
        
        </h2>
        <h2 onclick="film3()">${VEHICLE30.films3}</h2>
        <h2>${VEHICLE30.created}</h2>
        <h2>${VEHICLE30.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./imperial.jpg" alt="imperial" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(vehicle30);
    }


}
function vehicle38() {

    for (const x in VEHICLE38) {

        let vehicle38 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="vehicle30()">Previous Species</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="vehicle14()">Next Species</button>
              </div>
        <h1 style="font-size:50px;">  ${VEHICLE38.name}</h1>
        
        <h2> Model : ${VEHICLE38.model}</h2>
        <h2> Manufacturer : ${VEHICLE38.manufacturer}</h2>
        <h2> Cost in credits : ${VEHICLE38.cost_in_credits}</h2>
        <h2> Lenght : ${VEHICLE38.length}</h2>
        <h2> Max atmosphering speed : ${VEHICLE38.max_atmosphering_speed}</h2>
        <h2> Crew : ${VEHICLE38.crew}</h2>
        <h2> Passengers : ${VEHICLE38.passengers}</h2>
        <h2> Cargo capacity : ${VEHICLE38.cargo_capacity}</h2>
        <h2> Consumables : ${VEHICLE38.consumables}</h2>
        <h2> Vehicle class : ${VEHICLE38.vehicle_class}</h2>
        <h2> Pilots : 
                <ul style="list-style-type: none;">
                        <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${VEHICLE38.pilots10}</li>
                        <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${VEHICLE38.pilots32}</li>
                </ul>
        
        </h2>
        <h2 onclick="film4()">${VEHICLE38.films4}</h2>
        <h2>${VEHICLE38.created}</h2>
        <h2>${VEHICLE38.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./bongo.jpg" alt="bongo" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(vehicle38);
    }


}



function starship12() {

    for (const x in STARSHIP12) {
        let starship12 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="starship74()">Previous Starship</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="starship13()">Next Starship</button>
              </div>
        <h1 style="font-size:50px;">  ${STARSHIP12.name}</h1>
        <h2> Model : ${STARSHIP12.model}</h2>
        <h2> Manufacturer${STARSHIP12.manufacturer}</h2>
        <h2> Cost in credits : ${STARSHIP12.cost_in_credits}</h2>
        <h2> Length : ${STARSHIP12.length}</h2>
        <h2> Max atmosphering speed : ${STARSHIP12.max_atmosphering_speed}</h2>
        <h2> Crew : ${STARSHIP12.crew}</h2>
        <h2> Passengers : ${STARSHIP12.passengers}</h2>
        <h2> Cargo capacity : ${STARSHIP12.cargo_capacity}</h2>
        <h2> Consumables : ${STARSHIP12.consumables}</h2>
        <h2> Hyperdrive rating  : ${STARSHIP12.hyperdrive_rating}</h2>
        <h2> MGLT : ${STARSHIP12.MGLT}</h2>
        <h2> Starship class : ${STARSHIP12.starship_class}</h2>
        <h2> Pilots : 
            <ul style="list-style-type: none;">
                <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${STARSHIP12.pilots1}</li>
                <li onclick="biggs()"style="color:#039BE5; cursor: pointer;">${STARSHIP12.pilots9}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP12.pilots18}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP12.pilots19}</li>
            </ul>
        </h2>
        <h2> Films : 
            <ul style="list-style-type: none;">
                <li onclick="film1()" style="color:#039BE5; cursor: pointer;">${STARSHIP12.films1}</li>
                <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${STARSHIP12.films2}</li>
                <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${STARSHIP12.films3}</li>
            </ul>
        
        </h2>
        <h2> Created : ${STARSHIP12.created}</h2>
        <h2> Edited : ${STARSHIP12.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./xwing.jpg" alt="xwing" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(starship12);

    }






}
function starship13() {

    for (const x in STARSHIP13) {
        let starship13 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="starship12()">Previous Starship</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="starship22()">Next Starship</button>
              </div>
              <h1 style="font-size:50px;">  ${STARSHIP13.name}</h1>
        <h2> Model : ${STARSHIP13.model}</h2>
        <h2> Manufacturer${STARSHIP13.manufacturer}</h2>
        <h2> Cost in credits : ${STARSHIP13.cost_in_credits}</h2>
        <h2> Length : ${STARSHIP13.length}</h2>
        <h2> Max atmosphering speed : ${STARSHIP13.max_atmosphering_speed}</h2>
        <h2> Crew : ${STARSHIP13.crew}</h2>
        <h2> Passengers : ${STARSHIP13.passengers}</h2>
        <h2> Cargo capacity : ${STARSHIP13.cargo_capacity}</h2>
        <h2> Consumables : ${STARSHIP13.consumables}</h2>
        <h2> Hyperdrive rating  : ${STARSHIP13.hyperdrive_rating}</h2>
        <h2> MGLT : ${STARSHIP13.MGLT}</h2>
        <h2> Starship class : ${STARSHIP13.starship_class}</h2>
        <h2> Pilots :
            <ul style="list-style-type: none;">
                <li onclick="darth()" style="color:#039BE5; cursor: pointer;">${STARSHIP13.pilots4}</li>
           
            </ul>
        </h2>
        <h2> Films :
            <ul style="list-style-type: none;">
                <li onclick="film1()"style="color:#039BE5; cursor: pointer;">${STARSHIP13.films1}</li>
              
            </ul>
        
        </h2>
        <h2> Created : ${STARSHIP13.created}</h2>
        <h2> Edited : ${STARSHIP13.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./tie.jpg" alt="tie" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(starship13);
    }
}
function starship22() {

    for (const x in STARSHIP22) {
        let starship22 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="starship13()">Previous Starship</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="starship48()">Next Starship</button>
              </div>
              <h1 style="font-size:50px;">  ${STARSHIP22.name}</h1>
        
        <h2> Model : ${STARSHIP22.model}</h2>
        <h2> Manufacturer${STARSHIP22.manufacturer}</h2>
        <h2> Cost in credits : ${STARSHIP22.cost_in_credits}</h2>
        <h2> Length : ${STARSHIP22.length}</h2>
        <h2> Max atmosphering speed : ${STARSHIP22.max_atmosphering_speed}</h2>
        <h2> Crew : ${STARSHIP22.crew}</h2>
        <h2> Passengers : ${STARSHIP22.passengers}</h2>
        <h2> Cargo capacity : ${STARSHIP22.cargo_capacity}</h2>
        <h2> Consumables : ${STARSHIP22.consumables}</h2>
        <h2> Hyperdrive rating  : ${STARSHIP22.hyperdrive_rating}</h2>
        <h2> MGLT : ${STARSHIP22.MGLT}</h2>
        <h2> Starship class : ${STARSHIP22.starship_class}</h2>
        <h2> Pilots : 
            <ul style="list-style-type: none;">
                <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${STARSHIP22.pilots1}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP22.pilots13}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP22.pilots14}</li>
                
            </ul>
        </h2>
        <h2> Films : 
            <ul style="list-style-type: none;">
                
                <li onclick="film2()" style="color:#039BE5; cursor: pointer;">${STARSHIP22.films2}</li>
                <li onclick="film3()" style="color:#039BE5; cursor: pointer;">${STARSHIP22.films3}</li>
            </ul>
        </h2>
        <h2> Created : ${STARSHIP22.created}</h2>
        <h2> Edited : ${STARSHIP22.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./shuttle.jpg" alt="shuttle" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(starship22);

    }
}
function starship48() {

    for (const x in STARSHIP48) {
        let starship48 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="starship22()">Previous Starship</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="starship59()">Next Starship</button>
              </div>
              <h1 style="font-size:50px;">  ${STARSHIP48.name}</h1>
        
        <h2> Model : ${STARSHIP48.model}</h2>
        <h2> Manufacturer${STARSHIP48.manufacturer}</h2>
        <h2> Cost in credits : ${STARSHIP48.cost_in_credits}</h2>
        <h2> Length : ${STARSHIP48.length}</h2>
        <h2> Max atmosphering speed : ${STARSHIP48.max_atmosphering_speed}</h2>
        <h2> Crew : ${STARSHIP48.crew}</h2>
        <h2> Passengers : ${STARSHIP48.passengers}</h2>
        <h2> Cargo capacity : ${STARSHIP48.cargo_capacity}</h2>
        <h2> Consumables : ${STARSHIP48.consumables}</h2>
        <h2> Hyperdrive rating  : ${STARSHIP48.hyperdrive_rating}</h2>
        <h2> MGLT : ${STARSHIP48.MGLT}</h2>
        <h2> Starship class : ${STARSHIP48.starship_class}</h2>
        <h2> Pilots : 
            <ul style="list-style-type: none;">
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${STARSHIP48.pilots10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP48.pilots58}</li>
                
                
            </ul>
        </h2>
        <h2> Films : 
            <ul style="list-style-type: none;">
                
                <li onclick="starship48()"style="color:#039BE5; cursor: pointer;">${STARSHIP48.films5}</li>
                <li onclick="starship48()"style="color:#039BE5; cursor: pointer;">${STARSHIP48.films6}</li>
            </ul>
        </h2>
        <h2> Created : ${STARSHIP48.created}</h2>
        <h2> Edited : ${STARSHIP48.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./jedi.jpg" alt="jedi" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(starship48);

    }
}
function starship59() {

    for (const x in STARSHIP59) {
        let starship59 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="starship48()">Previous Starship</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="starship64()">Next Starship</button>
              </div>
              <h1 style="font-size:50px;">  ${STARSHIP59.name}</h1>
        
        <h2> Model : ${STARSHIP59.model}</h2>
        <h2> Manufacturer${STARSHIP59.manufacturer}</h2>
        <h2> Cost in credits : ${STARSHIP59.cost_in_credits}</h2>
        <h2> Length : ${STARSHIP59.length}</h2>
        <h2> Max atmosphering speed : ${STARSHIP59.max_atmosphering_speed}</h2>
        <h2> Crew : ${STARSHIP59.crew}</h2>
        <h2> Passengers : ${STARSHIP59.passengers}</h2>
        <h2> Cargo capacity : ${STARSHIP59.cargo_capacity}</h2>
        <h2> Consumables : ${STARSHIP59.consumables}</h2>
        <h2> Hyperdrive rating  : ${STARSHIP59.hyperdrive_rating}</h2>
        <h2> MGLT : ${STARSHIP59.MGLT}</h2>
        <h2> Starship class : ${STARSHIP59.starship_class}</h2>
        <h2> Pilots : 
            <ul style="list-style-type: none;">
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${STARSHIP59.pilots10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP59.pilots11}</li>
                
                
            </ul>
        </h2>
        <h2> Films : 
            <ul style="list-style-type: none;"> 
                
                <li onclick="film6()" style="color:#039BE5; cursor: pointer;">${STARSHIP59.films6}</li>
                
            </ul>
        </h2>
        <h2>${STARSHIP59.created}</h2>
        <h2>${STARSHIP59.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./trade.jpg" alt="trade" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(starship59);

    }
}
function starship64() {

    for (const x in STARSHIP64) {
        let starship64 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="starship59()">Previous Starship</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="starship65()">Next Starship</button>
              </div>
              <h1 style="font-size:50px;">  ${STARSHIP64.name}</h1>
        
        <h2> Model : ${STARSHIP64.model}</h2>
        <h2> Manufacturer${STARSHIP64.manufacturer}</h2>
        <h2> Cost in credits : ${STARSHIP64.cost_in_credits}</h2>
        <h2> Length : ${STARSHIP64.length}</h2>
        <h2> Max atmosphering speed : ${STARSHIP64.max_atmosphering_speed}</h2>
        <h2> Crew : ${STARSHIP64.crew}</h2>
        <h2> Passengers : ${STARSHIP64.passengers}</h2>
        <h2> Cargo capacity : ${STARSHIP64.cargo_capacity}</h2>
        <h2> Consumables : ${STARSHIP64.consumables}</h2>
        <h2> Hyperdrive rating  : ${STARSHIP64.hyperdrive_rating}</h2>
        <h2> MGLT : ${STARSHIP64.MGLT}</h2>
        <h2> Starship class : ${STARSHIP64.starship_class}</h2>
        <h2> Pilots : 
            <ul style="list-style-type: none;">
                <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${STARSHIP64.pilots10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP64.pilots35}</li>
                
                
            </ul>
        </h2>
        <h2> Films : 
            <ul style="list-style-type: none;"> 
                
                <li onclick="film6()"style="color:#039BE5; cursor: pointer;">${STARSHIP64.films6}</li>
                
            </ul>
        </h2>
        <h2>${STARSHIP64.created}</h2>
        <h2>${STARSHIP64.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./naboostar.jpg" alt="naboostar" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(starship64);

    }
}
function starship65() {

    for (const x in STARSHIP65) {
        let starship65 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="starship64()">Previous Starship</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="starship74()">Next Starship</button>
              </div>
              <h1 style="font-size:50px;">  ${STARSHIP65.name}</h1>
        
        <h2> Model : ${STARSHIP65.model}</h2>
        <h2> Manufacturer${STARSHIP65.manufacturer}</h2>
        <h2> Cost in credits : ${STARSHIP65.cost_in_credits}</h2>
        <h2> Length : ${STARSHIP65.length}</h2>
        <h2> Max atmosphering speed : ${STARSHIP65.max_atmosphering_speed}</h2>
        <h2> Crew : ${STARSHIP65.crew}</h2>
        <h2> Passengers : ${STARSHIP65.passengers}</h2>
        <h2> Cargo capacity : ${STARSHIP65.cargo_capacity}</h2>
        <h2> Consumables : ${STARSHIP65.consumables}</h2>
        <h2> Hyperdrive rating  : ${STARSHIP65.hyperdrive_rating}</h2>
        <h2> MGLT : ${STARSHIP65.MGLT}</h2>
        <h2> Starship class : ${STARSHIP65.starship_class}</h2>
        <h2> Pilots : 
            <ul style="list-style-type: none;">
                <li onclick="luke()"style="color:#039BE5; cursor: pointer;">${STARSHIP65.pilots10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP65.pilots11}</li>
                
                
            </ul>
        </h2>
        <h2> Films :
            <ul style="list-style-type: none;">
                
                <li onclick="film6()"style="color:#039BE5; cursor: pointer;">${STARSHIP65.films6}</li>
                
            </ul>
        </h2>
        <h2>${STARSHIP65.created}</h2>
        <h2>${STARSHIP65.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./interceptor.jpg" alt="interceptor" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(starship65);

    }
}
function starship74() {

    for (const x in STARSHIP74) {
        let starship74 =
            `
            <body style="background-color: black; margin: 0 ;">
            <h1 style="text-align: center;"><a href="file:///C:/Users/ahmad/Desktop/starwars%20pic/starwars.html" style="font-size:250px ;color:rgb(208, 243, 9);; text-decoration: none;">STAR WARS</a></h1>
       <section style="  display: flex;justify-content: flex-start;align-items: flex-start; margin-left:200px;">
           <div style="text-align: center; border: 5px solid darkgoldenrod; border-radius: 10px; width:50%;background-color: white; " >   
              <div style="margin-top:0.5rem;margin-left:0.5rem;display: flex;justify-content: space-between; ">
              <button style=" padding:10px 10px; margin-left:0.5rem;" onclick="starship65()">Previous Starship</button>
                <button style=" padding:10px 10px; margin-right:0.5rem;" onclick="starship12()">Next Starship</button>
              </div>
              <h1 style="font-size:50px;">  ${STARSHIP74.name}</h1>
        
        <h2> Model : ${STARSHIP74.model}</h2>
        <h2> Manufacturer${STARSHIP74.manufacturer}</h2>
        <h2> Cost in credits : ${STARSHIP74.cost_in_credits}</h2>
        <h2> Length : ${STARSHIP74.length}</h2>
        <h2> Max atmosphering speed : ${STARSHIP74.max_atmosphering_speed}</h2>
        <h2> Crew : ${STARSHIP74.crew}</h2>
        <h2> Passengers : ${STARSHIP74.passengers}</h2>
        <h2> Cargo capacity : ${STARSHIP74.cargo_capacity}</h2>
        <h2> Consumables : ${STARSHIP74.consumables}</h2>
        <h2> Hyperdrive rating  : ${STARSHIP74.hyperdrive_rating}</h2>
        <h2> MGLT : ${STARSHIP74.MGLT}</h2>
        <h2> Starship class : ${STARSHIP74.starship_class}</h2>
        <h2> Pilots : 
            <ul style="list-style-type: none;">
                <li onclick="obi()"style="color:#039BE5; cursor: pointer;">${STARSHIP74.pilots10}</li>
                <li style="color:#039BE5; cursor:not-allowed;opacity: 0.5;">${STARSHIP74.pilots79}</li>
                
                
            </ul>
        </h2>
        <h2> Films : 
            <ul style="list-style-type: none;">
                
                <li style="color:#039BE5; cursor: pointer;">${STARSHIP74.films6}</li>
                
            </ul>
        </h2>
        <h2>${STARSHIP65.created}</h2>
        <h2>${STARSHIP65.edited}</h2>
        </div> 
        <div style="margin-left:200px;margin-top:200px; border:5px solid red;border-radius:5px;" >
            <img src="./bell.jpg" alt="bell" style="width:500px; height:500px;">
        </div> 
    </section>
</body>
        `
        document.open("_self");
        document.write(starship74);

    }
}

