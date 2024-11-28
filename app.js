const apiUrl = "http://localhost/ci/api.php";
const apiUrlYesNo = "https://yesno.wtf/api";

async function getData(){
    console.log('Ingreso a get data ');
    try {
        const respuesta = await fetch(`${apiUrl}?id=123&nombre=Maritza&apellido=Pongo`,{
            method: "GET"
        });
        const data = await respuesta.json();
        
        console.log('data');
        console.log(data);

    }catch(error){
        console.log("Error al momento de hacer la peticion GET: "+ error);


    }

}
let getdata = document.querySelector('#getdata');
getdata.addEventListener('click', function(){
    getData();
});

async function postData() {
    try {
      const respuesta = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: "Maritza",
          apellido: "Pongo",
          lenguaje_favorito: "Java",
          color: "Verde",
        }),
      });
      const data_retorno = await respuesta.json();
      console.log(data_retorno);
    } catch (error) {
      console.log("Error al momento de hace la peticion POST: ", error);
    }
  }
  
  let botonPost = document.querySelector("#postdata");
  botonPost.addEventListener("click", function () {
    postData();
  });

  async function getYesNoData() {
    try {
      const respuesta = await fetch(apiUrlYesNo,
        {
          method: "GET",
        }
      );
      const data = await respuesta.json();
      console.log("aqui llega la informacion");
      console.log(data);
      agregarMensaje(data.answer,false,data.image);

     //NTERESANTE agregarMensaje(data.answer,data.answer == 'no'?true:false);
    } catch (error) {
      console.log("Error al momento de hacer la peticion GET: ", error);
    }
  }
  
  let botonGetYesNo = document.querySelector("#yes-no-data");
  botonGetYesNo.addEventListener("click", function () {
      getYesNoData();
  });

// Función PUT
async function putData() {
    try {
        const respuesta = await fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                nombre: "Camila",
                apellido: "Mamani",
                lenguaje_favorito: "Java",
                color: "Verde",
             }),
        });
        const data_retorno2 = await respuesta.json();
        console.log(data_retorno2);
    } catch (error) {
        console.error("Error al momento de hacer la peticion PUT: "+ error);
    }
}

let putdata = document.querySelector("#putdata");
putdata.addEventListener("click", function () {
    putData();
  });

  
// Función DELETE
async function deleteData() {
    try {
        const respuesta = await fetch(`${apiUrl}?nombre=Maritza`, {
            method: "DELETE",
        });
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.error("Error al momento de hacer la peticion DELETE: "+ error);
    }
}
let deletedata = document.querySelector("#deletedata");
deletedata.addEventListener("click", function () {
    deleteData();
  });


//Funcionalidad del chat yes no 
let chatMessages =document.getElementById('chatMessages');
let chatForm =document.getElementById('chatForm');
let messageInput=document.getElementById('messageInput');

function agregarMensaje1(mensaje, soyYo = true, imagen = null){
  const mensajediv1 = document.createElement('div');
 mensajediv1.classList.add('message');
   mensajediv1.classList.add(soyYo? 'user-message1':'api-message');
   mensajediv1.textContent = mensaje;

   chatMessages.appendChild (mensajediv1);

 }
 agregarMensaje1(" Este chat está protegido por cifrado de extremo a extremo. ", true);


function agregarMensaje(mensaje, soyYo = true, imagen = null){
  const mensajediv = document.createElement('div');
  mensajediv.classList.add('message');
  mensajediv.classList.add(soyYo? 'user-message':'api-message');
  mensajediv.textContent = mensaje;

  if (imagen) {
    const img = document.createElement('img');
    img.src = imagen;
    mensajediv.appendChild(img);
  }
  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight
  }, 500);

  chatMessages.appendChild (mensajediv);
}


chatForm.addEventListener('submit',function(e){
  e.preventDefault();
  const miMensaje= messageInput.value;
  agregarMensaje(miMensaje,true);
  getYesNoData();
});


// agregarMensaje("Hola soy Maritza ", true);
// agregarMensaje("Hola soy la Api ", false);
// agregarMensaje("¿Como estas? ", true);
// agregarMensaje("Bien y tu ? ", false);
// agregarMensaje("Yo tambien ", true);
// agregarMensaje("Me alegro! ", false);




