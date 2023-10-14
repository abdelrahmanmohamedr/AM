let caru = document.getElementById("carouselExampleDark") ;
let dark = document.getElementById("dark__round") ;
let cou1 = document.getElementById("carouselExample") ;
let cou2 = document.getElementById("carouselExample2") ;
let cou3 = document.getElementById("carouselExample3") ;
let cou4 = document.getElementById("carouselExample4") ;
let logo = document.getElementById("logo__img") ;
let body = document.querySelector("body") ;
let p = document.querySelectorAll("p") ;
let logoi = document.querySelector("svg") ;
let header = document.querySelector("header") ;
let ara = document.querySelector("#Arabic") ;
let sky = document.querySelector(".dark") ;
let hvr = document.querySelectorAll(".img_hover") ;
let ph = document.querySelectorAll(".p__head") ;
console.log(header);

if (header.clientHeight <= 870 && window.innerWidth > 1000) {

  header.style.height = "97vh"
  
}

body.style.backgroundColor = window.localStorage.color

dark.onclick = function darkk() {
  if (body.style.backgroundColor != "rgb(16, 10, 10)") {
    window.localStorage.color = "rgb(16, 10, 10)"
    body.style.backgroundColor = window.localStorage.color
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "white"
    }
    for (let l = 0; l < ph.length; l++) {
      ph[l].style.color = "white"
  }
  if (window.innerWidth <= 1000){
    dark.style.transform = "translate(38px,0px)"
    dark.style.transitionDuration = "1s"
  }else{
    dark.style.transform = "translate(68px,0px)"
    dark.style.transitionDuration = "1s"
  }

    dark.style.backgroundColor = "white"
    sky.style.backgroundColor = "black"
    logo.innerHTML = `<img class="h-100 logo__img" src="logo_dark.png" alt="logo">`
    ara.style.color = "white"
    caru.classList.remove("carousel-dark")
  }else{
    window.localStorage.color = "white"
    body.style.backgroundColor = window.localStorage.color
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "black"
  }
  for (let l = 0; l < ph.length; l++) {
    ph[l].style.color = "black"
}
  dark.style.transform = "translate(0px,0px)"
  dark.style.transitionDuration = "1s"
  dark.style.backgroundColor = "orange"
  sky.style.backgroundColor = "#21a9a9f5"
  ara.style.color = "black"
  caru.classList.add("carousel-dark")
  logo.innerHTML = `<img class="h-100 logo__img" src="logo.png" alt="logo">`
  }
    
  }

  if(window.localStorage.color == "rgb(16, 10, 10)"){
    body.style.backgroundColor = window.localStorage.color
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "white"
    }
    for (let l = 0; l < ph.length; l++) {
      ph[l].style.color = "white"
  }
  if (window.innerWidth <= 1000){
    dark.style.transform = "translate(38px,0px)"
    dark.style.transitionDuration = "1s"
  }else{
    dark.style.transform = "translate(68px,0px)"
    dark.style.transitionDuration = "1s"
  }
    dark.style.backgroundColor = "white"
    sky.style.backgroundColor = "black"
    ara.style.color = "white"
    caru.classList.remove("carousel-dark")
    logo.innerHTML = `<img class="h-100 logo__img" src="logo_dark.png" alt="logo">`
  }
  if(window.localStorage.color == "white"){
    body.style.backgroundColor = window.localStorage.color
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "black"
  }
    for (let l = 0; l < ph.length; l++) {
      ph[l].style.color = "black"
  }
  dark.style.transform = "translate(0px,0px)"
  dark.style.transitionDuration = "1s"
  dark.style.backgroundColor = "orange"
  sky.style.backgroundColor = "#21a9a9f5"
  ara.style.color = "black"
  caru.classList.add("carousel-dark")
  logo.innerHTML = `<img class="h-100 logo__img" src="logo.png" alt="logo">`
}

resizee();

function resizee() {

if (window.innerWidth <= 1000) {
  cou1.innerHTML = `       <div class="carousel-inner" data-bs-wrap="false">
            <div class="carousel-item active">
              <div class="ci_con row">
                <div class="item d-flex col-6">
                  <img src="oppenheimer.jpg" class="d-block img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>Oppenheimer</span>
                  </div>
                </div>

                <div class="item d-flex col-6">
                  <img src="inter.jpg" class="d-block img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>intersteller</span>
                  </div>
                </div>

              </div>
            </div>


            <div class="carousel-item ">
              <div class="ci_con row">

                <div class="item d-flex">
                  <img src="extraction.jpg" class="d-bloc img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>extraction</span>
                  </div>
                </div>

                <div class="item d-flex">
                  <img src="barbie.jpg" class="d-block img_sec" alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>barbie</span>
                  </div>
                </div>

              </div>
            </div>


            <div class="carousel-item">
              <div class="ci_con row justify-content-center">

                <div class="item d-flex">
                  <img src="nune.jpg" class="d-block img_sec" alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>nun</span>
                  </div>
                </div>

                <div class="item d-flex">
                  <img src="meg2.jpg" class="d-block img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>meg2</span>
                  </div>
                </div>

              </div>
            </div>


            <div class="carousel-item">
              <div class="ci_con row">        
                
                <div class="item d-flex">
                  <img src="shi.jpg" class="d-block img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>shizume</span>
                  </div>
                </div>

                <div class="item d-flex">
                  <img src="spi.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzNTQxM2E4LTUzYmYtNGI3MS1iM2FmLWJjYTFmOWZjMDYzNS5qcGc=" class="d-bloc img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span class="fs-6">spider-man:across spider verse</span>
                  </div>
                </div>

              </div>
            </div>

            <div class="carousel-item">
              <div class="ci_con row">        
                

                <div class="item d-flex">
                  <img src="wick.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiODAwYWIyLTM1MmItNGI1ZS1iOWQzLTdjZjAzMzI1MDc2Yy5qcGc=" class="d-block img_sec" alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>john wick 4</span>
                  </div>
                </div>

                <div class="item d-flex">
                  <img src="demon.jpg" class="d-block img_sec" alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>demon slayer</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <button class="carousel-control-prev arrow_con__s"type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next arrow_con__e" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>`



          cou2.innerHTML = `  <div class="carousel-inner" data-bs-wrap="false">
          <div class="carousel-item active">
            <div class="ci_con row">
              <div class="item d-flex">
                <img src="oppenheimer.jpg" class="d-block img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>oppenheimer</span>
                </div>
              </div>
              
              <div class="item d-flex">
                <img src="napelion.jpg" class="d-block img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>napelion</span>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item ">
            <div class="ci_con row">

              <div class="item d-flex">
                <img src="mario_sec.jpg" class="d-bloc img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>mario</span>
                </div>
              </div>

              <div class="item d-flex">
                <img src="barbie.jpg" class="d-block img_sec" alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>barbie</span>
                </div>
              </div>

            </div>
          </div>

          <div class="carousel-item ">
            <div class="ci_con row">

              <div class="item d-flex">
                <img src="nunw.jpg" class="d-block img_sec" alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>nun2</span>
                </div>
              </div>

              <div class="item d-flex">
              <img src="spi.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzNTQxM2E4LTUzYmYtNGI3MS1iM2FmLWJjYTFmOWZjMDYzNS5qcGc=" class="d-block img_sec " alt="...">
            </div>

            </div>
          </div>
          
          <div class="carousel-item">
            <div class="ci_con row">
              
              <div class="item d-flex">
                <img src="slam.jpg" class="d-block img_sec " alt="...">
              </div>

              <div class="item d-flex">
                <img src="suzume.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI3OGExOWVjLTIwNGEtNGRhNS1hMzIxLTE5OGFhYWNlOWRhOS5wbmc=" class="d-bloc img_sec " alt="...">
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="ci_con row">

              <div class="item d-flex">
                <img src="wick.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiODAwYWIyLTM1MmItNGI1ZS1iOWQzLTdjZjAzMzI1MDc2Yy5qcGc=" class="d-block img_sec" alt="...">
              </div>

              <div class="item d-flex">
                <img src="mutant.cHJkLWVtcy1hc3NldHMvbW92aWVzLzljYWQwYmM5LWVlMjgtNDQ5OC1iM2ViLTg4Y2MxM2U0YWFmZS5qcGc=" class="d-block img_sec" alt="...">
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev arrow_con__s" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next arrow_con__e" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
          <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>`




          cou3.innerHTML = `          <div class="carousel-inner" data-bs-wrap="false">
            <div class="carousel-item active">
              <div class="ci_con row">
                <div class="item d-flex">
                  <img src="got.jpg" class="d-block img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>game of thrones</span>
                  </div>
                </div>
                
                <div class="item d-flex">
                  <img src="breaking.gif" class="d-block img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>breaking bad</span>
                  </div>
                </div>

              </div>
            </div>
            <div class="carousel-item">
              <div class="ci_con row">

                <div class="item d-flex">
                  <img src="st.jpg" class="d-bloc img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>stranger things</span>
                  </div>
                </div>

                <div class="item d-flex">
                  <img src="wd.jpg" class="d-block img_sec" alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>the walking dead</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="ci_con row">

                <div class="item d-flex">
                  <img src="op.gif" class="d-block img_sec" alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>one piece</span>
                  </div>
                </div>

                <div class="item d-flex">
                <img src="witcher.gif" class="d-block img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>the witcher</span>
                </div>
              </div>
                
              </div>
            </div>
            <div class="carousel-item">
              <div class="ci_con row">
                
                <div class="item d-flex">
                  <img src="si.jpg" class="d-block img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>secret invasion</span>
                  </div>
                </div>

                <div class="item d-flex">
                  <img src="tlou.jpg" class="d-bloc img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>the last of us</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="ci_con row">

                <div class="item d-flex">
                  <img src="tlou.jpg" class="d-bloc img_sec " alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>the last of us</span>
                  </div>
                </div>

                <div class="item d-flex">
                  <img src="bcs.jpg" class="d-block img_sec" alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>better call saul</span>
                  </div>
                </div>

                <div class="item d-flex">
                  <img src="twot.gif" class="d-block img_sec" alt="...">
                  <div class="img_hover d-flex justify-content-center align-items-center">
                    <span>the wheel of time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev arrow_con__s" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
            <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next arrow_con__e" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
            <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>`




          cou4.innerHTML = `          <div class="carousel-inner" data-bs-wrap="false">
          <div class="carousel-item active">
            <div class="ci_con row">
              <div class="item d-flex">
                <img src="hod.jpg" class="d-block img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>house of dargon</span>
                </div>
              </div>
              
              <div class="item d-flex">
                <img src="the continental.jpg" class="d-block img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>the continental</span>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="ci_con row">

              <div class="item d-flex">
                <img src="op.gif" class="d-bloc img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>one piece</span>
                </div>
              </div>

              <div class="item d-flex">
                <img src="giza.jpg" class="d-block img_sec" alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>سفاح الجيزه</span>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="ci_con row">

              <div class="item d-flex">
                <img src="wd.jpg" class="d-block img_sec" alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>the walking dead</span>
                </div>
              </div>

              <div class="item d-flex">
                <img src="si.jpg" class="d-block img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>secret invasion</span>
                </div>
              </div>

            </div>
          </div>

          <div class="carousel-item">
            <div class="ci_con row">
              
              <div class="item d-flex">
                <img src="hp.jpg" class="d-block img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>happy valley:season 3</span>
                </div>
              </div>

              <div class="item d-flex">
                <img src="fou.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzQ1YTA2NmYtMmQ5Ni00ZWNlLThhZTItOGUwZjEyMzFlNGMwLnBuZw==" class="d-bloc img_sec " alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span class="fs-6">foundation:season 3</span>
                </div>
              </div>

            </div>
          </div>
          <div class="carousel-item">
            <div class="ci_con row">
              <div class="item d-flex">
                <img src="you.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vODg2NDIxYjAtMWM0My00OTFkLWJmNTQtODZmY2QzYjkyMTkzLmpwZw==" class="d-block img_sec" alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>you:season 4</span>
                </div>
              </div>

              <div class="item d-flex">
                <img src="sab.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZDFhZTA1OTEtODcyZi00YzE1LWI5OTItZDM4YTcwYjJiMWFmLmpwZw==" class="d-block img_sec" alt="...">
                <div class="img_hover d-flex justify-content-center align-items-center">
                  <span>shadow and bone:season 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev arrow_con__s" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
          <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next arrow_con__e" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
          <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>`
}else{
  cou1.innerHTML = `
  <div class="carousel-inner" data-bs-wrap="false">
    <div class="carousel-item active">
      <div class="ci_con row">
        <div class="item d-flex">
          <img src="oppenheimer.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>Oppenheimer</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="inter.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>intersteller</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="extraction.jpg" class="d-bloc img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>extraction</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="barbie.jpg" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>barbie</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="nune.jpg" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>nun</span>
          </div>
        </div>

      </div>
    </div>
    <div class="carousel-item">
      <div class="ci_con row">
        <div class="item d-flex">
          <img src="meg2.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>meg2</span>
          </div>
        </div>
        
        <div class="item d-flex">
          <img src="shi.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>shutter island</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="spi.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzNTQxM2E4LTUzYmYtNGI3MS1iM2FmLWJjYTFmOWZjMDYzNS5qcGc=" class="d-bloc img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span class="fs-6">spider-man:across spider verse</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="wick.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiODAwYWIyLTM1MmItNGI1ZS1iOWQzLTdjZjAzMzI1MDc2Yy5qcGc=" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>john wick 4</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="demon.jpg" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>demon slayer</span>
          </div>
        </div>

      </div>
    </div>
  </div>
  <button class="carousel-control-prev arrow_con__s" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next arrow_con__e" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
`
  cou2.innerHTML = `
  <div class="carousel-inner" data-bs-wrap="false">
    <div class="carousel-item active">
      <div class="ci_con row">
        <div class="item d-flex">
          <img src="oppenheimer.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>oppenheimer</span>
          </div>
        </div>
        
        <div class="item d-flex">
          <img src="napelion.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>napelion</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="mario_sec.jpg" class="d-bloc img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>mario</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="barbie.jpg" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>barbie</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="nunw.jpg" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>nun2</span>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="ci_con row">
        <div class="item d-flex">
          <img src="spi.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzNTQxM2E4LTUzYmYtNGI3MS1iM2FmLWJjYTFmOWZjMDYzNS5qcGc=" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>spider-man:across the spider verse</span>
          </div>
        </div>
        
        <div class="item d-flex">
          <img src="slam.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>slam dunk</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="suzume.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI3OGExOWVjLTIwNGEtNGRhNS1hMzIxLTE5OGFhYWNlOWRhOS5wbmc=" class="d-bloc img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>suzume</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="wick.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiODAwYWIyLTM1MmItNGI1ZS1iOWQzLTdjZjAzMzI1MDc2Yy5qcGc=" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>john wick</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="mutant.cHJkLWVtcy1hc3NldHMvbW92aWVzLzljYWQwYmM5LWVlMjgtNDQ5OC1iM2ViLTg4Y2MxM2U0YWFmZS5qcGc=" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>teenage mutant:ninja turtles</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev arrow_con__s" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next arrow_con__e" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
    <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>`
  cou3.innerHTML = `
  <div class="carousel-inner" data-bs-wrap="false">
    <div class="carousel-item active">
      <div class="ci_con row">
        <div class="item d-flex">
          <img src="got.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>game of thrones</span>
          </div>
        </div>
        
        <div class="item d-flex">
          <img src="breaking.gif" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>breaking bad</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="st.jpg" class="d-bloc img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>stranger things</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="wd.jpg" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>the walking dead</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="op.gif" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>one piece</span>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="ci_con row">
        <div class="item d-flex">
          <img src="witcher.gif" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>the witcher</span>
          </div>
        </div>
        
        <div class="item d-flex">
          <img src="si.jpg" class="d-block img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>secret invasion</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="tlou.jpg" class="d-bloc img_sec " alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>the last of us</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="bcs.jpg" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>better call saul</span>
          </div>
        </div>

        <div class="item d-flex">
          <img src="twot.gif" class="d-block img_sec" alt="...">
          <div class="img_hover d-flex justify-content-center align-items-center">
            <span>the wheel of time</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev arrow_con__s" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next arrow_con__e" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
    <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
`
cou4.innerHTML = `
<div class="carousel-inner" data-bs-wrap="false">
  <div class="carousel-item active">
    <div class="ci_con row">
      <div class="item d-flex">
        <img src="hod.jpg" class="d-block img_sec " alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>house of dargon</span>
        </div>
      </div>
      
      <div class="item d-flex">
        <img src="the continental.jpg" class="d-block img_sec " alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>the continental</span>
        </div>
      </div>

      <div class="item d-flex">
        <img src="op.gif" class="d-bloc img_sec " alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>one piece</span>
        </div>
      </div>

      <div class="item d-flex">
        <img src="giza.jpg" class="d-block img_sec" alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>سفاح الجيزه</span>
        </div>
      </div>

      <div class="item d-flex">
        <img src="wd.jpg" class="d-block img_sec" alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>the walking dead</span>
        </div>
      </div>
    </div>
  </div>

  <div class="carousel-item">
    <div class="ci_con row">
      <div class="item d-flex">
        <img src="si.jpg" class="d-block img_sec " alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>secret invasion</span>
        </div>
      </div>
      
      <div class="item d-flex">
        <img src="hp.jpg" class="d-block img_sec " alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>happy valley:season 3</span>
        </div>
      </div>

      <div class="item d-flex">
        <img src="fou.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzQ1YTA2NmYtMmQ5Ni00ZWNlLThhZTItOGUwZjEyMzFlNGMwLnBuZw==" class="d-bloc img_sec " alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span class="fs-6">foundation:season 3</span>
        </div>
      </div>

      <div class="item d-flex">
        <img src="you.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vODg2NDIxYjAtMWM0My00OTFkLWJmNTQtODZmY2QzYjkyMTkzLmpwZw==" class="d-block img_sec" alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>you:season 4</span>
        </div>
      </div>

      <div class="item d-flex">
        <img src="sab.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZDFhZTA1OTEtODcyZi00YzE1LWI5OTItZDM4YTcwYjJiMWFmLmpwZw==" class="d-block img_sec" alt="...">
        <div class="img_hover d-flex justify-content-center align-items-center">
          <span>shadow and bone:season 2</span>
        </div>
      </div>
    </div>
  </div>
</div>
<button class="carousel-control-prev arrow_con__s" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
  <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next arrow_con__e" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
  <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
`
}
}

window.onresize = () => {
  resizee();
}

