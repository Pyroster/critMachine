/*selector ctit-pif*/
function critpif() {
  var x = document.getElementById("crit-selec");
  var y = document.getElementById("pifia");

  if (x.style.display === "none") {
    document.getElementById("info").innerHTML = "";
    x.style.display = "block";
    y.style.display = "none";
  } else {
    document.getElementById("info").innerHTML = "";
    x.style.display = "none";
    y.style.display = "block";
  }
}

/*critsleves*/
if (document.querySelector('input[name="cronoff"]')) {
  document.querySelectorAll('input[name="cronoff"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      var item = event.target.id;
      console.log(item);
      document.getElementById("crit-sev").checked = false;
      document.getElementById("info").innerHTML = "";
      switch (item) {
        case "filoleve":
          document.getElementById("out").innerHTML = "Filo Leve";
          break;
        case "impaleve":
          document.getElementById("out").innerHTML = "Impacto Leve";
          break;
        case "penleve":
          document.getElementById("out").innerHTML = "Penetración Leve";
          break;
        case "caleleve":
          document.getElementById("out").innerHTML = "Calor/Electricidad Leve";
          break;
        case "frioleve":
          document.getElementById("out").innerHTML = "Frío Leve";
          break;
      }
    });
  });
}

function LearnFunction() {
  var sev = document.getElementById("crit-sev");
  var string = document.getElementById("out").innerHTML;
  document.getElementById("info").innerHTML = "";
  if (sev.checked != true) {
    let result = string.replace(/Grave/g, "Leve");
    document.getElementById("out").innerHTML = result;
  } else {
    let result = string.replace(/Leve/g, "Grave");
    document.getElementById("out").innerHTML = result;
  }
}

/*pifias*/
if (document.querySelector('input[name="ponoff"]')) {
  document.querySelectorAll('input[name="ponoff"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      var item = event.target.id;
      console.log(item);
      document.getElementById("info").innerHTML = "";
      switch (item) {
        case "cacpifia":
          document.getElementById("out").innerHTML = "Pifia de Cuerpo a Cuerpo";
          break;
        case "proypifia":
          document.getElementById("out").innerHTML = "Pifia de Proyectiles";
          break;
        case "arropifia":
          document.getElementById("out").innerHTML = "Pifia de Arrojadizas";
          break;
        case "movpifia":
          document.getElementById("out").innerHTML = "Pifia de Movimientos";
          break;
        case "estapifia":
          document.getElementById("out").innerHTML =
            "Pifia de Maniobras Estáticas";
          break;
        case "comupifia":
          document.getElementById("out").innerHTML = "Pifia de Comunicación";
          break;
        case "fabrpifia":
          document.getElementById("out").innerHTML =
            "Pifia de Fabricación/Creación";
          break;
        case "manipifia":
          document.getElementById("out").innerHTML = "Pifia de Manipulación";
          break;
        case "perpifia":
          document.getElementById("out").innerHTML = "Pifia de Percepción";
          break;
        case "conpifia":
          document.getElementById("out").innerHTML = "Pifia de Conocimientos";
          break;
        case "sigpifia":
          document.getElementById("out").innerHTML = "Pifia de Sigilo";
          break;
      }
    });
  });
}

/*dice roll*/
document.getElementById("diceroll").onclick = function () {
  var cr = document.getElementById("out").innerHTML;
  if (cr === "Filo Leve") {
    filoCleve();
  } else if (cr === "Impacto Leve") {
    impaCleve();
  } else if (cr === "Penetración Leve") {
    peneCleve();
  } else if (cr === "Calor/Electricidad Leve") {
    caleCleve();
  } else if (cr === "Frío Leve") {
    frioCleve();
  } else if (cr === "Filo Grave") {
    filoCgrave();
  } else if (cr === "Impacto Grave") {
    impaCgrave();
  } else if (cr === "Penetración Grave") {
    peneCgrave();
  } else if (cr === "Calor/Electricidad Grave") {
    caleCgrave();
  } else if (cr === "Frío Grave") {
    frioCgrave();
  } else if (cr === "Pifia de Cuerpo a Cuerpo") {
    cacPif();
  } else if (cr === "Pifia de Proyectiles") {
    proyPif();
  } else if (cr === "Pifia de Arrojadizas") {
    arroPif();
  } else if (cr === "Pifia de Movimientos") {
    movPif();
  } else if (cr === "Pifia de Maniobras Estáticas") {
    estatPif();
  } else if (cr === "Pifia de Comunicación") {
    comuPif();
  } else if (cr === "Pifia de Fabricación/Creación") {
    fabrPif();
  } else if (cr === "Pifia de Manipulación") {
    manipPif();
  } else if (cr === "Pifia de Percepción") {
    perPif();
  } else if (cr === "Pifia de Conocimientos") {
    conoPif();
  } else if (cr === "Pifia de Sigilo") {
    sigiPif();
  }
};

/*filocritleve*/
let filocritleve = [
  {
    Resultado: 1,
    Descripcion: "Leve corte en el costado sin más consecuencias"
  },
  { Resultado: 2, Descripcion: "Corte en una pierna. –1pv" },
  { Resultado: 3, Descripcion: "Corte en un brazo. –1pv" },
  { Resultado: 4, Descripcion: "Corte en el pecho. –2pv" },
  { Resultado: 5, Descripcion: "Corte en la espalda. –2pv" },
  { Resultado: 6, Descripcion: "Corte en el abdomen. –1pv. 1 asalto aturdido" },
  {
    Resultado: 7,
    Descripcion:
      "Corte en la parte posterior de la rodilla. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 8,
    Descripcion: "Corte a la altura del codo. –1pv. 1 asalto aturdido"
  },
  { Resultado: 9, Descripcion: "Tajo en la axila. –2pv. 1 asalto aturdido" },
  { Resultado: 10, Descripcion: "Corte en el hombro. –2pv. 1 asalto aturdido" },
  {
    Resultado: 11,
    Descripcion:
      "Herida profunda en un brazo. –2pv. 1 asalto aturdido. Actúas a –5%"
  },
  {
    Resultado: 12,
    Descripcion:
      "Herida profunda en una pierna. –2pv. 2 asaltos aturdido. Actúas a –5%"
  },
  {
    Resultado: 13,
    Descripcion:
      "Tajo en las costillas. –2pv. 2 asaltos aturdido. Actúas a –10%.(Hueso herida leve)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Tajo a la altura de la clavícula. Ésta se rompe. –2pv. 3 asaltos aturdido. Actúas a –15%. ( Hueso herida Leve)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Herida en la parte baja de la espalda. –2pv. 2 asaltos aturdido. Actúas a –15%. Pierdes 1pv/asalto (Músculo herida leve)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Herida en la ingle. –3pv. 3 asaltos aturdido. Actúas a –20%. Pierdes 1pv/asalto (Músculo herida leve)"
  },
  {
    Resultado: 17,
    Descripcion:
      "Amputación de 1D4 dedos de una mano o de un pie. 2 asaltos aturdido"
  },
  {
    Resultado: 18,
    Descripcion:
      "Amputación de la nariz. 3 asaltos aturdido , Actuas a -10%( Hueso herida leve, Tejido herida leve)"
  },
  {
    Resultado: 19,
    Descripcion:
      "Amputación de un brazo por la muñeca. 4 asaltos aturdido. Actúas a –40%. Pierdes 2pv/asalto ( Hueso herida grave, Músculo herida grave, Tendón herida leve, Tejido herida leve)"
  },
  {
    Resultado: 20,
    Descripcion:
      "Amputación de una pierna por el tobillo. . 5 asaltos aturdido. Actúas a –50%. Pierdes 3pv/asalto ( Hueso herida grave, Músculo herida grave, Tendón herida leve, Tejido herida leve)"
  }
];

function generateflevetableHead(flevetable, data) {
  let flevethead = flevetable.createTHead();
  let row = flevethead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let flevetable = document.getElementById("filoCleve");
let flevedata = Object.keys(filocritleve[0]);
generateflevetable(flevetable, filocritleve);
generateflevetableHead(flevetable, flevedata);

function generateflevetable(flevetable, flevedata) {
  for (let element of flevedata) {
    let row = flevetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function filoCleve() {
  document.getElementById("info").innerHTML = "";
  var fleveTab = document.getElementById("filoCleve");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = fleveTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*impacritleve*/
let impacritleve = [
  {
    Resultado: 1,
    Descripcion: "Leve contusión en el costado sin más consecuencias"
  },
  { Resultado: 2, Descripcion: "Golpe en una pierna. –1pv" },
  { Resultado: 3, Descripcion: "Golpe en un brazo. –1pv" },
  { Resultado: 4, Descripcion: "–2pv" },
  { Resultado: 5, Descripcion: "Golpe en la espalda. –2pv" },
  { Resultado: 6, Descripcion: "Golpe en el abdomen. –1pv. 1 asalto aturdido" },
  { Resultado: 7, Descripcion: "Golpe en la cadera. –1pv. 1 asalto aturdido" },
  {
    Resultado: 8,
    Descripcion: "Golpe a la altura del codo. –1pv. 1 asalto aturdido"
  },
  { Resultado: 9, Descripcion: "Porrazo en la axila. –2pv. 1 asalto aturdido" },
  {
    Resultado: 10,
    Descripcion: "Impacto en el hombro. –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 11,
    Descripcion: "Topetón en un brazo. –2pv. 1 asalto aturdido. Actúas a –5%"
  },
  {
    Resultado: 12,
    Descripcion:
      "Gran contusión en una pierna. –2pv. 2 asaltos aturdido. Actúas a –5%"
  },
  {
    Resultado: 13,
    Descripcion:
      "1D3 costillas rotas. –2pv. 2 asaltos aturdido. Actúas a –10%. (Hueso herida leve)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Golpe en el antebrazo. Éste se rompe y queda inutilizado. Actúas a -15% (Hueso herida leve)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Chasquido en la espinilla. La tibia y el peroné se rompen y caes al suelo. –15%. (Hueso herida leve x cada hueso)"
  },
  {
    Resultado: 16,
    Descripcion: "Impacto en el torso. Te doblas. 8 asaltos aturdido."
  },
  {
    Resultado: 17,
    Descripcion:
      "1D4 dedos de una mano o de un pie destrozados. 1ros auxilios (+30%) y Medicina(+20%) o se perderá la movilidad de éstos. 2 asaltos aturdido. (Hueso herida leve)"
  },
  {
    Resultado: 18,
    Descripcion:
      "Porrón en la cara. Mandíbula rota. Pierdes 1D4 dientes. 3 asaltos aturdido.(Hueso herida leve)"
  },
  {
    Resultado: 19,
    Descripcion:
      "Muñeca mal rota. 4 asaltos aturdido. Actúas a –40%. 1ros auxilios (+20%) y Medicina(+10%) o se perderá la movilidad de la mano. Si solo se falla una tirada y por menos de 20, se perderá la movilidad de 1D4 dedos.(Hueso herida Grave)"
  },
  {
    Resultado: 20,
    Descripcion:
      "Tobillo destrozado. Caes al suelo. 5 asaltos aturdido. Actúas a –50%. 1ros auxilios (+10%) y Medicina(+0) o se perderá la movilidad del pie. Si solo se falla una tirada y por menos de 20, se perderá la movilidad del pie pero podrá apoyarse en el talón para caminar (-10% a los MM).(Hueso herida Grave)"
  }
];

function generateilevetableHead(ilevetable, ilevedata) {
  let ilevethead = ilevetable.createTHead();
  let row = ilevethead.insertRow();
  for (let key of ilevedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let ilevetable = document.getElementById("impaCleve");
let ilevedata = Object.keys(impacritleve[0]);
generateilevetable(ilevetable, impacritleve);
generateilevetableHead(ilevetable, ilevedata);

function generateilevetable(ilevetable, ilevedata) {
  for (let element of ilevedata) {
    let row = ilevetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function impaCleve() {
  document.getElementById("info").innerHTML = "";
  var ilevetab = document.getElementById("impaCleve");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = ilevetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*pleve*/
let pcritleve = [
  { Resultado: 1, Descripcion: "Herida en el costado sin más consecuencias" },
  {
    Resultado: 2,
    Descripcion: "Herida en una pierna. –1pv"
  },
  {
    Resultado: 3,
    Descripcion: "Herida en un brazo. –1pv"
  },
  {
    Resultado: 4,
    Descripcion: "Herida en el pecho. –2pv"
  },
  {
    Resultado: 5,
    Descripcion: "Herida en la espalda. –2pv"
  },
  {
    Resultado: 6,
    Descripcion: "Herida en el abdomen. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 7,
    Descripcion: "Herida en el pie. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 8,
    Descripcion: "Herida a la altura del ombro. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 9,
    Descripcion: "Axila atravesada. –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 10,
    Descripcion: "Antebrazo atravesado. –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 11,
    Descripcion: "Bíceps atravesado. –2pv. 1 asalto aturdido. Actúas a –5%"
  },
  {
    Resultado: 12,
    Descripcion: "Gemelos atravesados. –2pv. 2 asaltos aturdido. Actúas a –5%"
  },
  {
    Resultado: 13,
    Descripcion:
      "1D2 costillas rotas. –2pv. 2 asaltos aturdido. Actúas a –10%.(Hueso herida leve)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Nalga perforada. –2pv. 3 asaltos aturdido. Actúas a –10%.(Músculo herida leve)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Pantorrilla atravesada. –2pv. 2 asaltos aturdido. Actúas a –15%. Pierdes 1pv/asalto (Músculo herida leve)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Herida en la ingle. –3pv. 3 asaltos aturdido. Actúas a –20%. Pierdes 1pv/asalto (Músculo herida leve)"
  },
  {
    Resultado: 17,
    Descripcion:
      "Mano traspasada. 50% de posibilidades de amputar 1 dedo. ( Tendón herida grave)"
  },
  {
    Resultado: 18,
    Descripcion: "Amputación de una oreja. 3 asaltos aturdido"
  },
  {
    Resultado: 19,
    Descripcion:
      "Rodilla traspasada. Rótula, menisco y ligamentos cruzados fisurados. Caes al suelo. 4 asaltos aturdido y actúas a –50. 1eros auxilios (+15%) y Medicina(+5%) o se perderá la movilidad de ésta. Si solo se falla una tirada y por menos de 20, podrá usarla con un -20%. (Hueso herida Grave,Tendones herida Leve)"
  },
  {
    Resultado: 20,
    Descripcion:
      "El proyectil entra por un ojo y sale por debajo de la oreja. 10 asaltos aturdido. Actúas a –50%. Ya puedes ser rey. ( Tejidos herida leve)"
  }
];

function generateplevetableHead(plevetable, plevedata) {
  let plevethead = plevetable.createTHead();
  let row = plevethead.insertRow();
  for (let key of plevedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let plevetable = document.getElementById("peneCleve");
let plevedata = Object.keys(pcritleve[0]);
generateplevetable(plevetable, pcritleve);
generateplevetableHead(plevetable, plevedata);

function generateplevetable(plevetable, plevedata) {
  for (let element of plevedata) {
    let row = plevetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function peneCleve() {
  document.getElementById("info").innerHTML = "";
  var plevetab = document.getElementById("peneCleve");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = plevetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*caleleve*/
let calecritleve = [
  {
    Resultado: 1,
    Descripción: "Leve abrasión en el costado sin más consecuencias"
  },
  { Resultado: 2, Descripción: "Quemadura en una pierna. –1pv" },
  { Resultado: 3, Descripción: "Quemadura en un brazo. –1pv" },
  { Resultado: 4, Descripción: "Quemadura en el pecho. –2pv" },
  { Resultado: 5, Descripción: "Abrasión en la espalda. –2pv" },
  {
    Resultado: 6,
    Descripción: "Quemadura en el abdomen. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 7,
    Descripción: "Abrasión en la cadera. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 8,
    Descripción: "Quemadura a la altura del codo. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 9,
    Descripción: "Quemadura en el cuello y hombros –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 10,
    Descripción: "Quemadura en los omoplatos. –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 11,
    Descripción:
      "Quemadura en un brazo. –2pv. 1 asalto aturdido. Actúas a –5%(Tejido herida leve)"
  },
  {
    Resultado: 12,
    Descripción:
      "Gran quemadura en una pierna. –2pv. 2 asaltos aturdido. Actúas a –5% (Tejido herida leve)"
  },
  {
    Resultado: 13,
    Descripción:
      "Quemadura en un costado. –2pv. 2 asaltos aturdido. Actúas a –10%. (Tejido herida leve)"
  },
  {
    Resultado: 14,
    Descripción:
      "El antebrazo se calcina y la piel se levanta, quemando hasta el músculo. . Actúas a -15% (Tejido herida grave, Músculo herida leve)"
  },
  {
    Resultado: 15,
    Descripción:
      "Abrasión en la espinilla. La piel se calcina y el músculo se quema. –15%. (Tejido herida grave, Músculo herida leve)"
  },
  {
    Resultado: 16,
    Descripción: "Quemadura  en el torso. Te doblas. 8 asaltos aturdido"
  },
  {
    Resultado: 17,
    Descripción:
      "1D4 dedos de una mano o de un pie quedan calcinados. 1ros auxilios (+30%) y Medicina(+20%) o se perderá la movilidad de éstos. 2 asaltos aturdido. (Tejido herida grave, Hueso herida leve)"
  },
  {
    Resultado: 18,
    Descripción:
      "Quemadura en cara y hombros. Pierdes 1D4 de Apariencia. 3 asaltos aturdido.(Tejido herida grave)"
  },
  {
    Resultado: 19,
    Descripción:
      "Muñeca y antebrazo calcinados. 4 asaltos aturdido. Actúas a –40%. 1ros auxilios (+20%) y Medicina(+10%) o se perderá la movilidad de la mano. Si solo se falla una tirada y por menos de 20, se perderá la movilidad de 1D4 dedos.(Tejido herida grave, Músculo herida leve)"
  },
  {
    Resultado: 20,
    Descripción:
      "Pié y pierna quemados. Caes al suelo. 5 asaltos aturdido. Actúas a –50%. 1ros auxilios (+10%) y Medicina(+0) o se perderá la movilidad del pie. Si solo se falla una tirada y por menos de 20, se perderá la movilidad del pie pero podrá apoyarse en el talón para caminar (-10% a los MM).(Tejido herida grave, Músculo herida leve)"
  }
];

function generatecalelevetableHead(calelevetable, calelevedata) {
  let plevethead = calelevetable.createTHead();
  let row = plevethead.insertRow();
  for (let key of calelevedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let calelevetable = document.getElementById("caleCleve");
let calelevedata = Object.keys(calecritleve[0]);
generatecalelevetable(calelevetable, calecritleve);
generatecalelevetableHead(calelevetable, calelevedata);

function generatecalelevetable(calelevetable, calelevedata) {
  for (let element of calelevedata) {
    let row = calelevetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function caleCleve() {
  document.getElementById("info").innerHTML = "";
  var plevetab = document.getElementById("caleCleve");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = plevetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*frioleve*/
let friocritleve = [
  {
    Resultado: 1,
    Descripción: "Leve abrasión en el costado sin más consecuencias"
  },
  { Resultado: 2, Descripción: "Congelación en una pierna. –1pv" },
  { Resultado: 3, Descripción: "Congelación en un brazo. –1pv" },
  { Resultado: 4, Descripción: "Congelación en el pecho. –2pv" },
  { Resultado: 5, Descripción: "Abrasión en la espalda. –2pv" },
  {
    Resultado: 6,
    Descripción: "Congelación en el abdomen. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 7,
    Descripción: "Abrasión en la cadera. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 8,
    Descripción: "Congelación a la altura del codo. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 9,
    Descripción: "Congelación en el cuello y hombros –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 10,
    Descripción: "Congelación en los omoplatos. –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 11,
    Descripción:
      "Congelación en un brazo. –2pv. 1 asalto aturdido. Actúas a –5% (Tejido herida leve)"
  },
  {
    Resultado: 12,
    Descripción:
      "Gran abrasión en una pierna. –2pv. 2 asaltos aturdido. Actúas a –5% (Tejido herida leve)"
  },
  {
    Resultado: 13,
    Descripción:
      "Congelación en un costado. –2pv. 2 asaltos aturdido. Actúas a –10%. (Tejido herida leve)"
  },
  {
    Resultado: 14,
    Descripción:
      "El antebrazo se congela y la piel se levanta,  helando hasta el músculo. . Actúas a -15% (Tejido herida grave, Músculo herida leve)"
  },
  {
    Resultado: 15,
    Descripción:
      "El antebrazo se congela y la piel se levanta,  helando hasta el músculo. . Actúas a -15% (Tejido herida grave, Músculo herida leve)"
  },
  {
    Resultado: 16,
    Descripción: "Congelación en el torso. Te doblas. 8 asaltos aturdido."
  },
  {
    Resultado: 17,
    Descripción:
      "1D4 dedos de una mano o de un pie quedan congelados. 1ros auxilios (+30%) y Medicina(+20%) o se perderá la movilidad de éstos. 2 asaltos aturdido. (Tejido herida grave, Hueso herida leve)"
  },
  {
    Resultado: 18,
    Descripción:
      "Congelación en cara y hombros. Pierdes 1D4 de Apariencia. 3 asaltos aturdido.(Tejido herida grave)"
  },
  {
    Resultado: 19,
    Descripción:
      "Muñeca y antebrazo congelados. 4 asaltos aturdido. Actúas a –40%. 1ros auxilios (+20%) y Medicina(+10%) o se perderá la movilidad de la mano. Si solo se falla una tirada y por menos de 20, se perderá la movilidad de 1D4 dedos.(Tejido herida grave, Músculo herida leve)"
  },
  {
    Resultado: 20,
    Descripción:
      "Pié y pierna congelados. Caes al suelo. 5 asaltos aturdido. Actúas a –50%. 1ros auxilios (+10%) y Medicina(+0) o se perderá la movilidad del pie. Si solo se falla una tirada y por menos de 20, se perderá la movilidad del pie pero podrá apoyarse en el talón para caminar (-10% a los MM).(Tejido herida grave, Músculo herida leve)"
  }
];

function generatefriolevetableHead(friolevetable, friolevedata) {
  let friolevethead = friolevetable.createTHead();
  let row = friolevethead.insertRow();
  for (let key of friolevedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let friolevetable = document.getElementById("frioCleve");
let friolevedata = Object.keys(friocritleve[0]);
generatefriolevetable(friolevetable, friocritleve);
generatefriolevetableHead(friolevetable, friolevedata);

function generatefriolevetable(friolevetable, friolevedata) {
  for (let element of friolevedata) {
    let row = friolevetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function frioCleve() {
  document.getElementById("info").innerHTML = "";
  var friolevetab = document.getElementById("frioCleve");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = friolevetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*fgrave*/
let filocritgrave = [
  {
    Resultado: 1,
    Descripcion: "Corte transversal. –1pv"
  },
  {
    Resultado: 2,
    Descripcion: "Herida muy fea. –1pv. 1 asalto aturdido"
  },
  {
    Resultado: 3,
    Descripcion: "Tajo en el omóplato. –2pv."
  },
  {
    Resultado: 4,
    Descripcion: "Corte en el antebrazo. –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 5,
    Descripcion: "Corte en el muslo. –2pv. 1 asalto aturdido"
  },
  {
    Resultado: 6,
    Descripcion: "Corte en los gemelos. –1pv. 2 asaltos aturdido"
  },
  {
    Resultado: 7,
    Descripcion: "Tajo en el bíceps. –2pv. 2 asaltos aturdido"
  },
  {
    Resultado: 8,
    Descripcion:
      "Corte en la parte baja de la espalda. –2pv. 2 asaltos aturdido. Actúas a –5% (Músculo herida leve)"
  },
  {
    Resultado: 9,
    Descripcion:
      "Herida cerca de las costillas. –3pv. 2 asaltos aturdido. Actúas a –5% (Hueso herida leve)"
  },
  {
    Resultado: 10,
    Descripcion:
      "Corte en el hombro. –4pv. 2 asaltos aturdido. Actúas a –10% (Hueso herida leve)"
  },
  {
    Resultado: 11,
    Descripcion:
      "Tajo en el pecho. –3pv. 2 asaltos aturdido. Actúas a –10%. Pierdes 1pv/asalto (Músculo herida leve)"
  },
  {
    Resultado: 12,
    Descripcion:
      "Corte en la cadera. –3pv. 2 asaltos aturdido. Actúas a –15%. pierdes 1pv/asalto (Músculo herida leve)"
  },
  {
    Resultado: 13,
    Descripcion:
      "Herida en la espalda. –4pv. 2 asaltos aturdido. Actúas a –20%. pierdes 1pv/asalto (Músculo herida grave)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Tajo en los abdominales. –4pv. 3 asaltos aturdido. Actúas a –25%. pierdes 1pv/asalto (Músculo herida grave)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Corte en los glúteos. –2pv. 3 asaltos aturdido. Actúas a –30%. pierdes 2pv/asalto (Músculo herida grave)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Amputación de un brazo por el codo. 4 asaltos aturdido. Actúas a –40%. Pierdes 3pv/asalto ( Hueso herida grave, Músculo herida grave, Tendón herida leve, Tejido herida leve)"
  },
  {
    Resultado: 17,
    Descripcion:
      "Amputación de una pierna por la pantorrilla. 5 asaltos aturdido. Actúas a –50%. Pierdes 4pv/asalto (Hueso herida grave, Músculo herida grave, Tendón herida leve, Tejido herida leve)"
  },
  {
    Resultado: 18,
    Descripcion:
      "Barriga destripada. Muerte tras 20 asaltos de agonía intentando recoger tus tripas."
  },
  {
    Resultado: 19,
    Descripcion: "Cabeza cercenada que vuela a 1d3 m del cuerpo. Ooolee…..!!!"
  },
  {
    Resultado: 20,
    Descripcion:
      "Partes al adversario en 2. Muerte instantáneamente, por supuesto."
  }
];

function generatefgravetableHead(fgravetable, fgravedata) {
  let fgravethead = fgravetable.createTHead();
  let row = fgravethead.insertRow();
  for (let key of fgravedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let fgravetable = document.getElementById("filoCgrave");
let fgravedata = Object.keys(filocritgrave[0]);
generatefgravetable(fgravetable, filocritgrave);
generatefgravetableHead(fgravetable, fgravedata);

function generatefgravetable(fgravetable, fgravedata) {
  for (let element of fgravedata) {
    let row = fgravetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function filoCgrave() {
  document.getElementById("info").innerHTML = "";
  var fgravetab = document.getElementById("filoCgrave");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = fgravetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*impagrave*/
let impacritgrave = [
  { Resultado: 1, Descripcion: "Golpe transversal. –1pv" },
  { Resultado: 2, Descripcion: "Herida muy fea. –1pv. 1 asalto aturdido" },
  { Resultado: 3, Descripcion: "Golpe en los riñones. –2pv." },
  {
    Resultado: 4,
    Descripcion: "Porrón en el antebrazo. –2pv. 1 asalto aturdido"
  },
  { Resultado: 5, Descripcion: "Impacto en el muslo. –2pv. 1 asalto aturdido" },
  {
    Resultado: 6,
    Descripcion: "Golpe en los gemelos. –1pv. 2 asaltos aturdido"
  },
  {
    Resultado: 7,
    Descripcion:
      "Topetón en el bíceps. –2pv. 2 asaltos aturdido. Si tienes algo en la mano, lo sueltas."
  },
  {
    Resultado: 8,
    Descripcion:
      "Porrazo en la parte baja de la espalda. –2pv. 2 asaltos aturdido. Actúas a –5% (Músculo herida grave)"
  },
  {
    Resultado: 9,
    Descripcion:
      "Herida en las costillas, 1D4 de ellas rotas. –2pv. 2 asaltos aturdido. Actúas a –15% (Hueso herida leve)"
  },
  {
    Resultado: 10,
    Descripcion:
      "Impacto en el hombro. –3pv. 2 asaltos aturdido. Actúas a –10%. Sueltas lo que tengas en la mano. (Hueso herida leve)"
  },
  {
    Resultado: 11,
    Descripcion:
      "Herida en el pecho que te corta la respiración unos segundos. –3pv. 5 asaltos aturdido. Actúas a –10%. (Hueso herida leve)"
  },
  {
    Resultado: 12,
    Descripcion:
      "Húmero roto. Sueltas lo que tengas en la mano. 2 asaltos aturdido. Actúas a –15%. (Hueso herida grave)"
  },
  {
    Resultado: 13,
    Descripcion:
      "Fémur roto. Caes al suelo. 2 asaltos aturdido. Actúas a –20%. (Hueso herida grave)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Impacto en los abdominales. –4pv. 6 asaltos aturdido. Actúas a –25%. (Músculo herida grave)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Hostiazo en el culo que rompe la cadera. No te aguantes en pie. –2pv. 3 asaltos aturdido. Actúas a –35%. 1eros Auxilio (+10%) o te quedarás un poco rengo. (Hueso herida grave, Tendón herida leve)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Codo hecho papilla. 4 asaltos aturdido. Actúas a –40%. 1ros auxilios (+10%) y Medicina(+0%) o se perderá la movilidad de éste. Si solo se falla una tirada y por menos de 20, podrá usarlo con un -10%. (Hueso herida grave, Tendón herida leve)"
  },
  {
    Resultado: 17,
    Descripcion:
      "Rodilla descuajeringada. 5 asaltos aturdido. Actúas a –50%. 1ros auxilios (+0%) y Medicina(-10%) o se perderá la movilidad de ésta. Si solo se falla una tirada y por menos de 20, podrá usarla con un -20%. (Hueso herida grave, Tendón herida leve)"
  },
  {
    Resultado: 18,
    Descripcion:
      "Impacto en la parte baja de la espalda. -10pv y 20 asaltos aturdido. Pierdes la sensibilidad de cintura para abajo. (Hueso herida grave, Músculo herida grave)"
  },
  {
    Resultado: 19,
    Descripcion:
      "Porrazo que hace que se te claven costillas en pulmones y órganos. Muerte tras 30 asaltos de asfixia y agonía, entendiendo el concepto de “corsé”"
  },
  {
    Resultado: 20,
    Descripcion:
      "El cráneo estalla en 1000 pedazos y hay salpicón de cerebro en 3m a la redonda."
  }
];

function generateigravetableHead(igravetable, igravedata) {
  let igravethead = igravetable.createTHead();
  let row = igravethead.insertRow();
  for (let key of igravedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let igravetable = document.getElementById("impaCgrave");
let igravedata = Object.keys(impacritgrave[0]);
generateigravetable(igravetable, impacritgrave);
generateigravetableHead(igravetable, igravedata);

function generateigravetable(igravetable, igravedata) {
  for (let element of igravedata) {
    let row = igravetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function impaCgrave() {
  document.getElementById("info").innerHTML = "";
  var igravetab = document.getElementById("impaCgrave");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = igravetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*penecritgrave*/
let penecritgrave = [
  { Resultado: 1, Descripcion: "Pinchazo profundo. –1pv" },
  {
    Resultado: 2,
    Descripcion: "Pinchazo en el costado. –1pv. 1 asalto aturdido"
  },
  { Resultado: 3, Descripcion: "Perforación en el tríceps. -2pv" },
  {
    Resultado: 4,
    Descripcion:
      "Atraviesas las 2 mejillas. Saltan 1D4 dientes. 4 asaltos aturdido"
  },
  {
    Resultado: 5,
    Descripcion:
      "Herida en la parte interna de los muslos. –2pv. 1 asalto aturdido"
  },
  { Resultado: 6, Descripcion: "Muslo perforado. –1pv. 2 asaltos aturdido" },
  {
    Resultado: 7,
    Descripcion: "Perforación de antebrazo. –3pv. 1 asalto aturdido"
  },
  {
    Resultado: 8,
    Descripcion: "Herida en la base de la espalda. –2pv. 2 asaltos aturdido"
  },
  {
    Resultado: 9,
    Descripcion: "Traspasas de lado los abdominales. –3pv. 2 asaltos aturdido"
  },
  {
    Resultado: 10,
    Descripcion:
      "Herida en omóplato. –3pv. 2 asaltos aturdido. Actúas a –5%. (Hueso herida leve)"
  },
  {
    Resultado: 11,
    Descripcion:
      "Herida en el pecho. –3pv. 2 asaltos aturdido. Actúas a –10%.(Músculo herida leve)"
  },
  {
    Resultado: 12,
    Descripcion:
      "Herida en el glúteo.  –3pv. 2 asaltos aturdido. Actúas a –15%.( Músculo herida leve)"
  },
  {
    Resultado: 13,
    Descripcion:
      "Abdomen perforado sin tocar órganos. –2pv. 2 asaltos aturdido. Actúas a –10%. Pierdes 1pv/asalto (Músculo herida grave)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Herida bajo la clavícula. –2pv. 2 asaltos aturdido. Actúas a –15%. Pierdes 2pv/asalto  (Hueso herida leve)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Ligamentos del hombro seccionados parcialmente. Brazo inutilizado hasta que se cure. Actúas a –25%. 1ros auxilios (+30%) y Medicina(+20%) o se perderá la parte de la movilidad del brazo (-15%). Si solo se falla una tirada y por menos de 20, podrá usarla con un -5%. (Tendones herida grave)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Tobillo Inutilizado. Caes al suelo y actúas a –30%. 1ros auxilios (+20%) y Medicina(+10%) o se perderá la movilidad del pie. Si solo se falla una tirada y por menos de 20, solo se perderá la movilidad lateral del (-5% a los MM). (Hueso herida grave)"
  },
  {
    Resultado: 17,
    Descripcion:
      "Yugular cortada. 3 asaltos aturdido. Actúas a –35%. Pierdes 4pv/asalto"
  },
  {
    Resultado: 18,
    Descripcion:
      "Pulmón perforado. Actúas a –50% y estás 30 asaltos aturdido; tras los cuales, mueres"
  },
  {
    Resultado: 19,
    Descripcion:
      "Atraviesas entrecejo del adversario y traspasas su cerebro, el sujeto muere con expresión atontada."
  },
  { Resultado: 20, Descripcion: "Traspasas el corazón. Muerte, claro…." }
];

function generatepenegravetableHead(penegravetable, penegravedata) {
  let penegravethead = penegravetable.createTHead();
  let row = penegravethead.insertRow();
  for (let key of penegravedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let penegravetable = document.getElementById("peneCgrave");
let penegravedata = Object.keys(penecritgrave[0]);
generatepenegravetable(penegravetable, penecritgrave);
generatepenegravetableHead(penegravetable, penegravedata);

function generatepenegravetable(penegravetable, penegravedata) {
  for (let element of penegravedata) {
    let row = penegravetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function peneCgrave() {
  document.getElementById("info").innerHTML = "";
  var penegravetab = document.getElementById("peneCgrave");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = penegravetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*calecritgrave*/
let calecritgrave = [
  { Resultado: 1, Descripcion: "Piel enrojecida –1pv" },
  { Resultado: 2, Descripcion: "Ampollas dolorosas. –1pv. 1 asalto aturdido" },
  { Resultado: 3, Descripcion: "Quemadura en la espalda. –2pv." },
  {
    Resultado: 4,
    Descripcion: "Antebrazo quemado con ampollas. –2pv. 1 asalto aturdido"
  },
  { Resultado: 5, Descripcion: "Muslo. abrasado –2pv. 1 asalto aturdido" },
  { Resultado: 6, Descripcion: "Gemelos abrasados. –1pv. 2 asaltos aturdido" },
  {
    Resultado: 7,
    Descripcion:
      "Quemadura en la mano –2pv. 2 asaltos aturdido. Si tienes algo en la mano, lo sueltas."
  },
  {
    Resultado: 8,
    Descripcion:
      "Quemadura en la parte baja de la espalda. –2pv. 2 asaltos aturdido. Actúas a –5% (Tejido herida grave)"
  },
  {
    Resultado: 9,
    Descripcion:
      "Herida en el costado , piel ampollada . –2pv. 2 asaltos aturdido. Actúas a –15% (Tejido herida leve)"
  },
  {
    Resultado: 10,
    Descripcion:
      "Abrasión en el hombro. –3pv. 2 asaltos aturdido. Actúas a –10%. Sueltas lo que tengas agarrado con ese brazo. (Tejido herida leve)"
  },
  {
    Resultado: 11,
    Descripcion:
      "Quemadura  en el pecho que te corta la respiración unos segundos. –3pv. 5 asaltos aturdido. Actúas a –10%. (tejido herida leve)"
  },
  {
    Resultado: 12,
    Descripcion:
      "Antebrazo gravemente quemado. Sueltas lo que tengas en la mano. 2 asaltos aturdido. Actúas a –15%. (Tejido herida grave)"
  },
  {
    Resultado: 13,
    Descripcion:
      "Grave quemadura en el muslo. Caes al suelo. 2 asaltos aturdido. Actúas a –20%. (Tejido herida grave)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Abrasión severa en los abdominales. –4pv. 6 asaltos aturdido. Actúas a –25%. (Tejido herida grave)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Quemadura profunda en el culo que quema  los músculos de la cadera. No te aguantas en pie. –2pv. 3 asaltos aturdido. Actúas a –35%. 1eros Auxilio (+10%) o te quedarás un poco rengo. (Tejido herida grave, Músculo herida leve)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Brazo calcinado. 4 asaltos aturdido. Actúas a –40%. 1ros auxilios (+10%) y Medicina(+0%) o se perderá la movilidad de éste. Si solo se falla una tirada y por menos de 20, podrá usarlo con un -10%. (Tejido herida grave,  Músculo herida grave, Tendón herida leve)"
  },
  {
    Resultado: 17,
    Descripcion:
      "Pierna abrasada. 5 asaltos aturdido. Actúas a –50%. 1ros auxilios (+0%) y Medicina(-10%) o se perderá la movilidad de ésta. Si solo se falla una tirada y por menos de 20, podrá usarla con un -20%. (Tejido herida grave,  Músculo herida grave, Tendón herida leve)"
  },
  {
    Resultado: 18,
    Descripcion:
      "La parte baja de la espalda queda abrasada. -10pv y 20 asaltos aturdido. Pierdes la sensibilidad de cintura para abajo. (Tejido herida grave,  Músculo herida grave, Tendón herida leve)"
  },
  {
    Resultado: 19,
    Descripcion:
      "El aire caliente entra en la caja torácica , haciendo que se abrasen los pulmones y órganos abdominales. Muerte tras 30 asaltos de asfixia y agonía, entre espasmos y convulsiones."
  },
  {
    Resultado: 20,
    Descripcion:
      "El cráneo  recibe el impacto del calor y estalla en 1000 pedazos y hay salpicón de cerebro recalentado en 3m a la redonda…has inventado el microondas."
  }
];

function generatecalegravetableHead(calegravetable, calegravedata) {
  let calegravethead = calegravetable.createTHead();
  let row = calegravethead.insertRow();
  for (let key of calegravedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let calegravetable = document.getElementById("caleCgrave");
let calegravedata = Object.keys(calecritgrave[0]);
generatecalegravetable(calegravetable, calecritgrave);
generatecalegravetableHead(calegravetable, calegravedata);

function generatecalegravetable(calegravetable, calegravedata) {
  for (let element of calegravedata) {
    let row = calegravetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function caleCgrave() {
  document.getElementById("info").innerHTML = "";
  var calegravetab = document.getElementById("caleCgrave");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = calegravetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*friocritgrave*/
let friocritgrave = [
  { Resultado: 1, Descripcion: "Piel enrojecida –1pv" },
  {
    Resultado: 2,
    Descripcion: "Congelación dolorosas. –1pv. 1 asalto aturdido"
  },
  { Resultado: 3, Descripcion: "Congelación en la espalda. –2pv." },
  { Resultado: 4, Descripcion: "Antebrazo helado . –2pv. 1 asalto aturdido" },
  { Resultado: 5, Descripcion: "Muslo congelado–2pv. 1 asalto aturdido" },
  { Resultado: 6, Descripcion: "Gemelos congelados. –1pv. 2 asaltos aturdido" },
  {
    Resultado: 7,
    Descripcion:
      "Congelación en la mano –2pv. 2 asaltos aturdido. Si tienes algo en la mano, lo sueltas."
  },
  {
    Resultado: 8,
    Descripcion:
      "Congelación en la parte baja de la espalda. –2pv. 2 asaltos aturdido. Actúas a –5% (Tejido herida grave)"
  },
  {
    Resultado: 9,
    Descripcion:
      "Herida en el costado , piel helada . –2pv. 2 asaltos aturdido. Actúas a –15% (Tejido herida leve)"
  },
  {
    Resultado: 10,
    Descripcion:
      "Abrasión en el hombro. –3pv. 2 asaltos aturdido. Actúas a –10%. Sueltas lo que tengas agarrado con ese brazo. (Tejido herida leve)"
  },
  {
    Resultado: 11,
    Descripcion:
      "Congelación  en el pecho que te corta la respiración unos segundos. –3pv. 5 asaltos aturdido. Actúas a –10%. (tejido herida leve)"
  },
  {
    Resultado: 12,
    Descripcion:
      "Antebrazo gravemente helado. Sueltas lo que tengas en la mano. 2 asaltos aturdido. Actúas a –15%. (Tejido herida grave)"
  },
  {
    Resultado: 13,
    Descripcion:
      "Grave congelación en el muslo. Caes al suelo. 2 asaltos aturdido. Actúas a –20%. (Tejido herida grave)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Abrasión severa en los abdominales. –4pv. 6 asaltos aturdido. Actúas a –25%. (Tejido herida grave)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Congelación profunda en el culo que hiela  los músculos de la cadera. No te aguantas en pie. –2pv. 3 asaltos aturdido. Actúas a –35%. 1eros Auxilio (+10%) o te quedarás un poco rengo. (Tejido herida grave, Músculo herida leve)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Brazo congelado. 4 asaltos aturdido. Actúas a –40%. 1eros auxilios (+10%) y Medicina(+0%) o se perderá la movilidad de éste. Si solo se falla una tirada y por menos de 20, podrá usarlo con un -10%. (Tejido herida grave,  Músculo herida grave, Tendón herida leve)"
  },
  {
    Resultado: 17,
    Descripcion:
      "Pierna congelada. 5 asaltos aturdido. Actúas a –50%. 1eros auxilios (+0%) y Medicina(-10%) o se perderá la movilidad de ésta. Si solo se falla una tirada y por menos de 20, podrá usarla con un -20%. (Tejido herida grave,  Músculo herida grave, Tendón herida leve)"
  },
  {
    Resultado: 18,
    Descripcion:
      "Golpe de frío en la cara que congela los ojos. -10pv y 20 asaltos aturdido. Pierdes la visión  (Tejido herida grave,  Músculo herida grave, Tendón herida leve)"
  },
  {
    Resultado: 19,
    Descripcion:
      "El aire frío entra en la caja torácica , haciendo que se hielen los pulmones y órganos abdominales. Muerte tras 30 asaltos de asfixia y agonía, mientras intentas respirar desesperadamente"
  },
  {
    Resultado: 20,
    Descripcion:
      "El cráneo  recibe el impacto del frío y congela el cerebro y los ojos en un asalto, muriendo al instante. Has inventado los ultracongelados."
  }
];

function generatefriogravetableHead(friogravetable, friogravedata) {
  let friogravethead = friogravetable.createTHead();
  let row = friogravethead.insertRow();
  for (let key of friogravedata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let friogravetable = document.getElementById("frioCgrave");
let friogravedata = Object.keys(friocritgrave[0]);
generatefriogravetable(friogravetable, friocritgrave);
generatefriogravetableHead(friogravetable, friogravedata);

function generatefriogravetable(friogravetable, friogravedata) {
  for (let element of friogravedata) {
    let row = friogravetable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function frioCgrave() {
  document.getElementById("info").innerHTML = "";
  var friogravetab = document.getElementById("frioCgrave");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = friogravetab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*cacpif*/
let cacpifia = [
  { Resultado: 1, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  { Resultado: 2, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  { Resultado: 3, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  {
    Resultado: 4,
    Descripcion: "El arma se te escurre de las manos y cae al suelo."
  },
  {
    Resultado: 5,
    Descripcion: "El arma se te escurre de las manos y cae al suelo."
  },
  {
    Resultado: 6,
    Descripcion: "Tropiezas y pierdes el asalto intentando no caer."
  },
  {
    Resultado: 7,
    Descripcion: "Tropiezas y pierdes el asalto intentando no caer."
  },
  {
    Resultado: 8,
    Descripcion: "El arma se te escurre de las manos y cae a 1D6m de ti."
  },
  { Resultado: 9, Descripcion: "Tropiezas y te aturdes 1 asalto." },
  {
    Resultado: 10,
    Descripcion: "El arma se te escurre de las manos y cae a 2D6m de ti."
  },
  {
    Resultado: 11,
    Descripcion:
      "Tropiezas y caes al suelo perdiendo el arma, aturdiendo 1 asalto"
  },
  {
    Resultado: 12,
    Descripcion:
      "Haces un mal gesto y te esquinzas el hombro izquierdo. Aturdido 1 asalto y usas el brazo a -10 hasta que el hombro sea curado. (Tendón herida leve)"
  },
  {
    Resultado: 13,
    Descripcion:
      "Haces un mal gesto y te esquinzas el codo derecho. Aturdido 1 asalto y usas el brazo a -10 hasta que el hombro sea curado.(Tendón herida leve)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Haces un mal gesto y te tuerces el pie. Aturdido 1 asalto y estás a -15 hasta que la torcedura se cure. (Tendón herida leve)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Haces un mal gesto y pinzas los lumbares. Aturdido 2 asaltos y estás a -15 hasta que la espalda sea curada (Tendón herida leve)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Haces un movimiento extraño y te golpeas con tu arma aturdiendo 2d4 asaltos"
  },
  {
    Resultado: 17,
    Descripcion:
      "El arma se te escurre de las manos y salga disparada a 2d4 metros, aturdiendo 1d4 asaltos"
  },
  {
    Resultado: 18,
    Descripcion:
      "Haces un movimiento extraño y golpeas con el arma el suelo, aturdiendo 1d4 asaltos. Tira Armadura del arma x 8 o se rompe."
  },
  {
    Resultado: 19,
    Descripcion:
      "Das un mal golpe y tu arma tira Armadura x 6 para no partirse. Aturdido por el golpe 1d4 asaltos."
  },
  {
    Resultado: 20,
    Descripcion:
      "Das un golpe brusco y tu arma tira Armadura x 3 para no partirse. Aturdido por el golpe 1d4 asaltos."
  }
];

function generatecacpiftableHead(cacpiftable, cacpifdata) {
  let cacpifthead = cacpiftable.createTHead();
  let row = cacpifthead.insertRow();
  for (let key of cacpifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let cacpiftable = document.getElementById("cacPif");
let cacpifdata = Object.keys(cacpifia[0]);
generatecacpiftable(cacpiftable, cacpifia);
generatecacpiftableHead(cacpiftable, cacpifdata);

function generatecacpiftable(cacpiftable, cacpifdata) {
  for (let element of cacpifdata) {
    let row = cacpiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function cacPif() {
  document.getElementById("info").innerHTML = "";
  var cacpifTab = document.getElementById("cacPif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = cacpifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*proypifia*/
let proypifia = [
  { Resultado: 1, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  { Resultado: 2, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  { Resultado: 3, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  {
    Resultado: 4,
    Descripcion: "El proyectil se te escurre de las manos y cae al suelo."
  },
  {
    Resultado: 5,
    Descripcion: "El proyectil se te escurre de las manos y cae al suelo."
  },
  {
    Resultado: 6,
    Descripcion: "Tropiezas y pierdes el asalto intentando no caer."
  },
  {
    Resultado: 7,
    Descripcion: "Tropiezas y pierdes el asalto intentando no caer."
  },
  {
    Resultado: 8,
    Descripcion: "El arma se te escurre de las manos y cae a 1D6m de ti."
  },
  { Resultado: 9, Descripcion: "Tropiezas y te aturdes 1 asalto." },
  {
    Resultado: 10,
    Descripcion: "El arma se te escurre de las manos y cae a 2D6m de ti."
  },
  {
    Resultado: 11,
    Descripcion:
      "Tropiezas y caes al suelo perdiendo el arma, aturdiendo 1 asalto"
  },
  {
    Resultado: 12,
    Descripcion:
      "Haces un mal gesto y te esquinzas el hombro izquierdo. Aturdido 1 asalto y usas el brazo a -10 hasta que el hombro sea curado. (Tendón herida leve)"
  },
  {
    Resultado: 13,
    Descripcion:
      "Haces un mal gesto y te esquinzas el codo derecho. Aturdido 1 asalto y usas el brazo a -10 hasta que el hombro sea curado.(Tendón herida leve)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Haces un mal gesto y te tuerces el tobillo. Aturdido 1 asalto y estás a -15 hasta que la torcedura se cure. (Tendón herida leve)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Haces un mal gesto y pinzas los lumbares. Aturdido 2 asaltos y estás a -15 hasta que la espalda sea curada (Tendón herida leve)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Haces un movimiento extraño y te golpeas con tu arma aturdiendo 2d4 asaltos. Disparo fallido, claro…."
  },
  {
    Resultado: 17,
    Descripcion:
      "El arma se te escurre de las manos y salga disparada a 2d4 metros, aturdiendo 1d4 asaltos"
  },
  {
    Resultado: 18,
    Descripcion:
      "La cuerda tensa demasiado y se parte con un chasquido. Aturdido 1 asalto."
  },
  {
    Resultado: 19,
    Descripcion:
      "La cuerda tensa demasiado fuerte, tira Fuerza mínima del arma x 8 o se parte. Estás aturdido 1d4 asaltos"
  },
  {
    Resultado: 20,
    Descripcion:
      "La cuerda tensa demasiado, tira Fuerza mínima del arma x 5 o se parte. Estás aturdido 1d4 asaltos."
  }
];

function generateproypiftableHead(proypiftable, proypifdata) {
  let proypifthead = proypiftable.createTHead();
  let row = proypifthead.insertRow();
  for (let key of proypifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let proypiftable = document.getElementById("proypif");
let proypifdata = Object.keys(proypifia[0]);
generateproypiftable(proypiftable, proypifia);
generateproypiftableHead(proypiftable, proypifdata);

function generateproypiftable(proypiftable, proypifdata) {
  for (let element of proypifdata) {
    let row = proypiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function proyPif() {
  document.getElementById("info").innerHTML = "";
  var proypifTab = document.getElementById("proypif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = proypifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*arropifia*/
let arropifia = [
  { Resultado: 1, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  { Resultado: 2, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  { Resultado: 3, Descripcion: "Haces un mal movimiento y no puedes atacar." },
  {
    Resultado: 4,
    Descripcion: "El arroectil se te escurre de las manos y cae al suelo."
  },
  {
    Resultado: 5,
    Descripcion: "El arroectil se te escurre de las manos y cae al suelo."
  },
  {
    Resultado: 6,
    Descripcion: "Tropiezas y pierdes el asalto intentando no caer."
  },
  {
    Resultado: 7,
    Descripcion: "Tropiezas y pierdes el asalto intentando no caer."
  },
  {
    Resultado: 8,
    Descripcion: "El arma se te escurre de las manos y cae a 1D6m de ti."
  },
  { Resultado: 9, Descripcion: "Tropiezas y te aturdes 1 asalto." },
  {
    Resultado: 10,
    Descripcion: "El arma se te escurre de las manos y cae a 2D6m de ti."
  },
  {
    Resultado: 11,
    Descripcion:
      "Tropiezas y caes al suelo perdiendo el arma, aturdiendo 1 asalto"
  },
  {
    Resultado: 12,
    Descripcion:
      "Haces un mal gesto y te esquinzas el hombro izquierdo. Aturdido 1 asalto y usas el brazo a -10 hasta que el hombro sea curado. (Tendón herida leve)"
  },
  {
    Resultado: 13,
    Descripcion:
      "Haces un mal gesto y te esquinzas el codo derecho. Aturdido 1 asalto y usas el brazo a -10 hasta que el hombro sea curado.(Tendón herida leve)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Haces un mal gesto y te tuerces el tobillo. Aturdido 1 asalto y estás a -15 hasta que la torcedura se cure. (Tendón herida leve)"
  },
  {
    Resultado: 15,
    Descripcion:
      "Haces un mal gesto y pinzas los lumbares. Aturdido 2 asaltos y estás a -15 hasta que la espalda sea curada (Tendón herida leve)"
  },
  {
    Resultado: 16,
    Descripcion:
      "Haces un movimiento extraño y te golpeas con tu arma aturdiendo 2d4 asaltos. Disparo fallido, claro…."
  },
  {
    Resultado: 17,
    Descripcion:
      "El arma se te escurre de las manos y salga disparada a 2d4 metros, aturdiendo 1d4 asaltos"
  },
  {
    Resultado: 18,
    Descripcion:
      "Haces un movimiento extraño y golpeas con el arma el suelo, aturdiendo 1d4 asaltos. Tira Armadura del arma x 8 o se rompe."
  },
  {
    Resultado: 19,
    Descripcion:
      "Tu arma golpea el suelo al ser lanzada, tira Armadura del arma x 6 o se parte. El latigazo te aturde 2 asaltos"
  },
  {
    Resultado: 20,
    Descripcion:
      "Tu arma golpea el suelo con fuerza, tira Armadura del arma x 4 o se parte. Estás aturdido 1d4 asaltos."
  }
];

function generatearropiftableHead(arropiftable, arropifdata) {
  let arropifthead = arropiftable.createTHead();
  let row = arropifthead.insertRow();
  for (let key of arropifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let arropiftable = document.getElementById("arropif");
let arropifdata = Object.keys(arropifia[0]);
generatearropiftable(arropiftable, arropifia);
generatearropiftableHead(arropiftable, arropifdata);

function generatearropiftable(arropiftable, arropifdata) {
  for (let element of arropifdata) {
    let row = arropiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function arroPif() {
  document.getElementById("info").innerHTML = "";
  var arropifTab = document.getElementById("arropif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = arropifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*movpifia*/
let movpifia = [
  {
    Resultado: 1,
    Descripcion: "Pierdes el asalto intentando asegurar tu acción."
  },
  {
    Resultado: 2,
    Descripcion: "Pierdes el asalto intentando asegurar tu acción."
  },
  {
    Resultado: 3,
    Descripcion: "Pierdes el asalto intentando reconducir tu acción."
  },
  {
    Resultado: 4,
    Descripcion:
      "Pierdes el asalto intentando asegurar tu acción con un movimiento torpe, sin decidirse a empezar."
  },
  {
    Resultado: 5,
    Descripcion:
      "Te golpeas sin querer contigo mismo, dejándote el siguiente asalto a -5. Asalto perdido"
  },
  {
    Resultado: 6,
    Descripcion:
      "Te golpeas sin querer contigo mismo, dejándote el siguiente asalto a -5. Asalto perdido"
  },
  {
    Resultado: 7,
    Descripcion:
      "Te golpeas sin querer contigo mismo, dejándote el siguiente asalto a -10. Asalto perdido"
  },
  {
    Resultado: 8,
    Descripcion:
      "Los músculos no responden y sientes un tirón doloroso. Estás 1 asalto aturdido por el dolor."
  },
  {
    Resultado: 9,
    Descripcion:
      "Te golpeas, sin querer, contigo mismo, dejándote el siguiente asalto a -20.Asalto perdido"
  },
  {
    Resultado: 10,
    Descripcion:
      "Los músculos no responden y sientes un tirón doloroso. Estás 2 asaltos aturdido por el dolor."
  },
  {
    Resultado: 11,
    Descripcion:
      "Te golpeas, sin querer, contigo mismo, dejándote el siguiente asalto a -30.Asalto perdido"
  },
  {
    Resultado: 12,
    Descripcion:
      "Tropiezas/ resbalas en el último momento de manera estrepitosa, cayendo al suelo o soltandote. Asalto perdido."
  },
  {
    Resultado: 13,
    Descripcion:
      "Te golpeas, sin querer, contigo mismo, dejándote el siguiente asalto a -40.Asalto perdido"
  },
  {
    Resultado: 14,
    Descripcion:
      "Tropiezas/ resbalas en el último momento de manera estrepitosa, cayendo al suelo o soltandote. Asalto perdido."
  },
  {
    Resultado: 15,
    Descripcion:
      "Una tortuga voladora vestida de princesa te distrae de la acción, dejándote 1d4 asaltos aturdido."
  },
  {
    Resultado: 16,
    Descripcion:
      "Una  mancha sospechosa en tu visión te distrae de la acción, dejándote 1d4 asaltos aturdido."
  },
  {
    Resultado: 17,
    Descripcion:
      "Un repentino pinchazo constante y doloroso en la entrepierna te distrae de la acción, dejándote 1d6 asaltos aturdido"
  },
  {
    Resultado: 18,
    Descripcion:
      "Sientes un agudo y persistente dolor en el cuello que te distrae de la acción, dejándote 1d6 asaltos aturdido."
  },
  {
    Resultado: 19,
    Descripcion:
      "El esfuerzo hace que te de una taquicardia, dejándote 1d8 asaltos aturdido."
  },
  {
    Resultado: 20,
    Descripcion:
      "Sientes la sangre bombear con fuerza en tu cerebro, mareándote por el esfuerzo, dejándote 1d8 asaltos aturdido."
  },
  {
    Resultado: 21,
    Descripcion:
      "Sufres una grave esguince en una de tus extremidades utilizadas Estás a -15 hasta que se cure (Tendón herida Leve) . Aturdido 2 asaltos"
  },
  {
    Resultado: 22,
    Descripcion:
      "Sufres una severa contractura en una de tus extremidades utilizadas Estás a -15 hasta que se cure (Músculo herida Leve) . Aturdido 2 asaltos"
  },
  {
    Resultado: 23,
    Descripcion:
      "Sufres una grave esguince en una de tus extremidades utilizadas Estás a -20 hasta que se cure (Tendón herida Leve) . Aturdido 3 asaltos"
  },
  {
    Resultado: 24,
    Descripcion:
      "Sufres una severa contractura en una de tus extremidades utilizadas Estás a -20 hasta que se cure (Músculo herida Leve) . Aturdido 3 asaltos"
  },
  {
    Resultado: 25,
    Descripcion:
      "Sufres una severa contractura y una rotura de ligamentos en una de tus extremidades utilizadas Estás a -40 hasta que se cure (Músculo herida Leve, tendón herida grave) . Aturdido 4 asaltos. Eres famoso como el Gran Patán."
  }
];

function generatemovpiftableHead(movpiftable, movpifdata) {
  let movpifthead = movpiftable.createTHead();
  let row = movpifthead.insertRow();
  for (let key of movpifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let movpiftable = document.getElementById("movpif");
let movpifdata = Object.keys(movpifia[0]);
generatemovpiftable(movpiftable, movpifia);
generatemovpiftableHead(movpiftable, movpifdata);

function generatemovpiftable(movpiftable, movpifdata) {
  for (let element of movpifdata) {
    let row = movpiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function movPif() {
  document.getElementById("info").innerHTML = "";
  var movpifTab = document.getElementById("movpif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = movpifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*estatpifia*/
let estatpifia = [
  {
    Resultado: 1,
    Descripcion: "Pierdes el asalto intentando asegurar tu acción."
  },
  {
    Resultado: 2,
    Descripcion: "Pierdes el asalto intentando asegurar tu acción."
  },
  {
    Resultado: 3,
    Descripcion: "Pierdes el asalto intentando reconducir tu acción."
  },
  {
    Resultado: 4,
    Descripcion:
      "Pierdes el asalto intentando asegurar tu acción con un movimiento torpe, sin decidirse a empezar."
  },
  {
    Resultado: 5,
    Descripcion:
      "Te golpeas sin querer contigo mismo, dejándote el siguiente asalto a -5. Asalto perdido"
  },
  {
    Resultado: 6,
    Descripcion:
      "Te golpeas sin querer contigo mismo, dejándote el siguiente asalto a -5. Asalto perdido"
  },
  {
    Resultado: 7,
    Descripcion:
      "Te golpeas sin querer contigo mismo, dejándote el siguiente asalto a -10. Asalto perdido"
  },
  {
    Resultado: 8,
    Descripcion:
      "Los músculos no responden y sientes un tirón doloroso. Estás 1 asalto aturdido por el dolor."
  },
  {
    Resultado: 9,
    Descripcion:
      "Te golpeas, sin querer, contigo mismo, dejándote el siguiente asalto a -20.Asalto perdido"
  },
  {
    Resultado: 10,
    Descripcion:
      "Los músculos no responden y sientes un tirón doloroso. Estás 2 asaltos aturdido por el dolor."
  },
  {
    Resultado: 11,
    Descripcion:
      "Te golpeas, sin querer, contigo mismo, dejándote el siguiente asalto a -30.Asalto perdido"
  },
  {
    Resultado: 12,
    Descripcion:
      "Sueltas lo que manipulavas en el último momento de manera estrepitosa. Asalto perdido."
  },
  {
    Resultado: 13,
    Descripcion:
      "Te golpeas, sin querer, contigo mismo, dejándote el siguiente asalto a -40.Asalto perdido"
  },
  {
    Resultado: 14,
    Descripcion:
      "Sueltas lo que manipularas en el último momento de manera estrepitosa. Asalto perdido."
  },
  {
    Resultado: 15,
    Descripcion:
      "Una contractura en tu cuello te distrae de la acción, con un latigazo de dolor, dejándote 1d4 asaltos aturdido."
  },
  {
    Resultado: 16,
    Descripcion:
      "Una  mancha sospechosa en tu visión y unas palpitaciones te distraen de la acción, dejándote 1d4 asaltos aturdido."
  },
  {
    Resultado: 17,
    Descripcion:
      "Un repentino pinchazo constante y doloroso en la entrepierna te distrae de la acción, dejándote 1d6 asaltos aturdido."
  },
  {
    Resultado: 18,
    Descripcion:
      "Sientes un agudo y persistente dolor en la espalda que te distrae de la acción, dejándote 1d6 asaltos aturdido."
  },
  {
    Resultado: 19,
    Descripcion:
      "El esfuerzo hace que te de una taquicardia, dejándote 1d8 asaltos aturdido."
  },
  {
    Resultado: 20,
    Descripcion:
      "Sientes la sangre bombear con fuerza en tu cerebro, mareándote por el esfuerzo y la tensión, dejándote 1d8 asaltos aturdido."
  },
  {
    Resultado: 21,
    Descripcion:
      "Sufres una grave esguince en una de tus extremidades utilizadas Estás a -15 hasta que se cure (Tendón herida Leve) . Aturdido 2 asaltos"
  },
  {
    Resultado: 22,
    Descripcion:
      "Sufres una severa contractura en una de tus extremidades utilizadas Estás a -15 hasta que se cure (Músculo herida Leve) . Aturdido 2 asaltos"
  },
  {
    Resultado: 23,
    Descripcion:
      "Sufres una grave esguince en una de tus extremidades utilizadas Estás a -20 hasta que se cure (Tendón herida Leve) . Aturdido 3 asaltos"
  },
  {
    Resultado: 24,
    Descripcion:
      "Sufres una severa contractura en una de tus extremidades utilizadas Estás a -20 hasta que se cure (Músculo herida Leve) . Aturdido 3 asaltos"
  },
  {
    Resultado: 25,
    Descripcion:
      "Sufres una severa contractura y una rotura de ligamentos en una de tus extremidades utilizadas Estás a -40 hasta que se cure (Músculo herida Leve, tendón herida grave) . Aturdido 4 asaltos. Eres famoso como el Gran Patán."
  }
];

function generateestatpiftableHead(estatpiftable, estatpifdata) {
  let estatpifthead = estatpiftable.createTHead();
  let row = estatpifthead.insertRow();
  for (let key of estatpifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let estatpiftable = document.getElementById("estatpif");
let estatpifdata = Object.keys(estatpifia[0]);
generateestatpiftable(estatpiftable, estatpifia);
generateestatpiftableHead(estatpiftable, estatpifdata);

function generateestatpiftable(estatpiftable, estatpifdata) {
  for (let element of estatpifdata) {
    let row = estatpiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function estatPif() {
  document.getElementById("info").innerHTML = "";
  var estatpifTab = document.getElementById("estatpif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = estatpifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*perpifia*/
let perpifia = [
  { Resultado: 1, Descripcion: "No consigues descubrir nada relevante." },
  {
    Resultado: 2,
    Descripcion:
      "Uno de los detalles percibidos, es incorrecto, pero eres incapaz de saber cuál es…"
  },
  {
    Resultado: 3,
    Descripcion:
      "Uno de los detalles percibidos, es incorrecto, pero eres incapaz de saber cuál es…"
  },
  {
    Resultado: 4,
    Descripcion:
      "No consigues descubrir  nada relevante. Estás tan bloqueado que tardarás   una hora  en volver a poder tirar."
  },
  {
    Resultado: 5,
    Descripcion:
      "No consigues descubrir  nada relevante. Estás tan bloqueado que tardarás   una hora  en volver a poder tirar."
  },
  {
    Resultado: 6,
    Descripcion:
      "Uno de los detalles percibidos, es incorrecto, pero eres incapaz de saber cuál es….Estás tan bloqueado que tardarás   una hora  en volver a poder tirar para averiguarlo."
  },
  {
    Resultado: 7,
    Descripcion:
      "Uno de los detalles percibidos, es incorrecto, pero eres incapaz de saber cuál es….Estás tan bloqueado que tardarás   una hora  en volver a poder tirar para averiguarlo."
  },
  {
    Resultado: 8,
    Descripcion:
      "Uno de los detalles percibidos, es incorrecto, pero eres incapaz de saber cuál es….No consigues descubrir  nada relevante. Estás tan bloqueado que tardarás   un día  en volver a poder tirar."
  },
  {
    Resultado: 9,
    Descripcion:
      "La concentración hace que te muerdas la lengua sin querer. Estás 2 asaltos aturdido por el dolor. Estás tan bloqueado que tardarás   una hora  en volver a poder tirar esa habilidad, y las otras obtienen un -5% durante esa hora"
  },
  {
    Resultado: 10,
    Descripcion:
      "La concentración hace que te muerdas la lengua sin querer. Estás 3 asaltos aturdido por el dolor. Estás tan bloqueado que tardarás   una hora  en volver a poder tirar esa habilidad, y la siguientes diferentes obtienen un -5% durante esa hora"
  },
  {
    Resultado: 11,
    Descripcion:
      "La concentración hace que te muerdas la lengua sin querer. Estás 4 asaltos aturdido por el dolor. Estás tan bloqueado que tardarás   una hora  en volver a poder tirar esa habilidad, y la siguientes diferentes obtienen un -5% durante esa hora."
  },
  {
    Resultado: 12,
    Descripcion:
      "Uno de los detalles percibidos, es incorrecto, pero eres incapaz de saber cuál es….No consigues descubrir  nada relevante. Estás tan bloqueado que tardarás  un día  en volver a poder tirar. Las otras percepciones obtienen un -10% durante ese día."
  },
  {
    Resultado: 13,
    Descripcion:
      "La concentración hace que te muerdas la lengua sin querer. Estás 6 asaltos aturdido por el dolor. Estás tan bloqueado que tardarás  un día  en volver a poder tirar. Las otras percepciones obtienen un -10% durante ese día."
  },
  {
    Resultado: 14,
    Descripcion:
      "No consigues descubrir  nada relevante. Estás tan bloqueado que tardarás   una semana  en volver a poder tirar esa habilidad."
  },
  {
    Resultado: 15,
    Descripcion:
      "Tu sentido percibe fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -10 permanente, siempre que sea sobre el mismo tema"
  },
  {
    Resultado: 16,
    Descripcion:
      "Tu sentido percibe fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -20 permanente, siempre que sea sobre el mismo tema"
  },
  {
    Resultado: 17,
    Descripcion:
      "Tu sentido percibe fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -30 permanente, siempre que sea sobre el mismo tema"
  },
  {
    Resultado: 18,
    Descripcion:
      "Tu sentido percibe fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -40 permanente, siempre que sea sobre el mismo tema"
  },
  {
    Resultado: 19,
    Descripcion:
      "La información que recibes de tus sentidos  contiene varios errores graves, pero muy creíbles, que eres incapaz de detectar."
  },
  {
    Resultado: 20,
    Descripcion:
      "Tu sentido percibe fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -5 permanente en esa habilidad."
  },
  {
    Resultado: 21,
    Descripcion:
      "Tu sentido percibe fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -10 permanente en esa habilidad."
  },
  {
    Resultado: 22,
    Descripcion:
      "Tu sentido percibe fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -15 permanente en esa habilidad."
  },
  {
    Resultado: 23,
    Descripcion:
      "Tu sentido percibe fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -20 permanente en esa habilidad."
  },
  {
    Resultado: 24,
    Descripcion:
      "Tus sentidos se  quedan en blanco, incapaz de recordar, asimilar o relacionar ningún tipo de información, sufriendo un bloqueo parcial sensorial. Recibes -1d10% permanente en esa habilidad (sólo los sortilegios de mentalismo de recuperar memoria pueden eliminar este negativo, pero el PJ no tiene por qué saberlo)"
  },
  {
    Resultado: 25,
    Descripcion:
      "Tus sentidos se quedan en blanco, incapaz de recordar, asimilar o relacionar ningún tipo de información, sufriendo un bloqueo parcial sensorial. Recibes -1d10% permanente en esa habilidad (sólo los sortilegios de mentalismo de recuperar memoria pueden eliminar este negativo, pero el PJ no tiene por qué saberlo)"
  }
];

function generateperpiftableHead(perpiftable, perpifdata) {
  let perpifthead = perpiftable.createTHead();
  let row = perpifthead.insertRow();
  for (let key of perpifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let perpiftable = document.getElementById("perpif");
let perpifdata = Object.keys(perpifia[0]);
generateperpiftable(perpiftable, perpifia);
generateperpiftableHead(perpiftable, perpifdata);

function generateperpiftable(perpiftable, perpifdata) {
  for (let element of perpifdata) {
    let row = perpiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function perPif() {
  document.getElementById("info").innerHTML = "";
  var perpifTab = document.getElementById("perpif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = perpifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*fabrpifia*/
let fabrpifia = [
  {
    Resultado: 1,
    Descripcion:
      "Realizas una creación defectuosa, que funciona a -10. Todavía puedes reutilizar los materiales"
  },
  {
    Resultado: 2,
    Descripcion:
      "Realizas una creación inútil, que funciona a -10. Pierdes los materiales."
  },
  {
    Resultado: 3,
    Descripcion:
      "Realizas una creación defectuosa, que funciona a -20. Todavía puedes reutilizar los materiales"
  },
  {
    Resultado: 4,
    Descripcion:
      "Realizas una creación inútil, que funciona a -20 Pierdes los materiales."
  },
  {
    Resultado: 5,
    Descripcion:
      "Realizas una creación defectuosa , que funciona a -30. Todavía puedes reutilizar los materiales"
  },
  {
    Resultado: 6,
    Descripcion:
      "Realizas una creación inútil, que funciona a -30 Pierdes los materiales."
  },
  {
    Resultado: 7,
    Descripcion:
      "Realizas una creación defectuosa , que funciona a -40. Todavía puedes reutilizar los materiales"
  },
  {
    Resultado: 8,
    Descripcion:
      "Realizas una creación inútil, que funciona a -40. Pierdes los materiales."
  },
  {
    Resultado: 9,
    Descripcion:
      "Realizas una creación defectuosa, que se romperá en su primer uso. ( Descubrir a -10 para detectarlo)"
  },
  {
    Resultado: 10,
    Descripcion: "Realizas una creación inútil. Pierdes los materiales."
  },
  {
    Resultado: 11,
    Descripcion:
      "Realizas una creación defectuosa , que se romperá en su primer uso. ( Descubrir a -20 para detectarlo)"
  },
  {
    Resultado: 12,
    Descripcion:
      "Realizas una creación inútil. Utilizas el doble de materiales. En caso que no los tengas, queda inacabada."
  },
  {
    Resultado: 13,
    Descripcion:
      "Realizas una creación defectuosa , que se romperá en su primer uso. ( Descubrir a -30 para detectarlo)"
  },
  {
    Resultado: 14,
    Descripcion:
      "Al acabar el tiempo pensado, realizas una creación complicada, necesitando el doble de tiempo o no podrás acabarla"
  },
  {
    Resultado: 15,
    Descripcion:
      "Realizas una creación inútil. Utilizas el doble de materiales. En caso que no los tengas, queda inacabada."
  },
  {
    Resultado: 16,
    Descripcion:
      "Al acabar el tiempo pensado, realizas una creación complicada, necesitando el doble de tiempo o no podrás acabarla. Acabas con una sobrecarga muscular (músculo herida Leve) a -10%"
  },
  {
    Resultado: 17,
    Descripcion:
      "Realizas una creación inútil. Utilizas el doble de materiales. En caso que no los tengas, queda inacabada. Acabas con una sobrecarga muscular (músculo herida Leve) a -10%"
  },
  {
    Resultado: 18,
    Descripcion:
      "Realizas una creación complicada, necesitas el doble de tiempo o no podrás acabarla. Acabas con una sobrecarga muscular (músculo herida Leve) a -15%"
  },
  {
    Resultado: 19,
    Descripcion:
      "Realizas una creación inútil. Utilizas el doble de materiales. En caso que no los tengas, queda inacabada. Acabas con una sobrecarga muscular (músculo herida Leve) a -15%"
  },
  {
    Resultado: 20,
    Descripcion:
      "Realizas una creación defectuosa , que se romperá en su primer uso. (Descubrir a -50 para detectarlo), acabando con una sobrecarga muscular (músculo herida Leve) a -15%"
  },
  {
    Resultado: 21,
    Descripcion:
      "Manipulas de manera incorrecta los utensilios, rompiendo las herramientas al acabar la obra. Realizas una creación defectuosa, que funciona a -10. Acabas con una sobrecarga muscular (músculo herida Leve) a -15%"
  },
  {
    Resultado: 22,
    Descripcion:
      "Manipulas de manera incorrecta los utensilios, rompiendo las herramientas al acabar la obra. Realizas una creación defectuosa, que funciona a -20. Acabas con una sobrecarga muscular (músculo herida Leve) a -15%"
  },
  {
    Resultado: 23,
    Descripcion:
      "Manipulas de manera incorrecta los utensilios, rompiendo las herramientas al acabar la obra. Realizas una creación defectuosa, que funciona a -20. Acabas con una sobrecarga muscular (músculo herida Leve) a -15%"
  },
  {
    Resultado: 24,
    Descripcion:
      "Manipulas de manera incorrecta los utensilios, rompiendo las herramientas al acabar la obra. Realizas una creación defectuosa, que funciona a -30. Acabas con una sobrecarga muscular (músculo herida Leve) a -15%. Siempre que intentes esta misma creación, recibirás un -10%"
  },
  {
    Resultado: 25,
    Descripcion:
      "Manipulas de manera incorrecta los utensilios, rompiendo las herramientas al acabar la obra. Realizas una creación defectuosa, que funciona a -30. Acabas con una rotura fibrilar muscular (músculo herida Leve) a -20%. Siempre que intentes esta misma creación, recibirás un -20%"
  }
];

function generatefabrpiftableHead(fabrpiftable, fabrpifdata) {
  let fabrpifthead = fabrpiftable.createTHead();
  let row = fabrpifthead.insertRow();
  for (let key of fabrpifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let fabrpiftable = document.getElementById("fabrpif");
let fabrpifdata = Object.keys(fabrpifia[0]);
generatefabrpiftable(fabrpiftable, fabrpifia);
generatefabrpiftableHead(fabrpiftable, fabrpifdata);

function generatefabrpiftable(fabrpiftable, fabrpifdata) {
  for (let element of fabrpifdata) {
    let row = fabrpiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function fabrPif() {
  document.getElementById("info").innerHTML = "";
  var fabrpifTab = document.getElementById("fabrpif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = fabrpifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*manippifia*/
let manippifia = [
  {
    Resultado: 1,
    Descripcion:
      "Pierdes el asalto intentando entender qué hacer/ cómo funciona"
  },
  {
    Resultado: 2,
    Descripcion:
      "Pierdes el asalto intentando entender qué hacer/ cómo funciona"
  },
  {
    Resultado: 3,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dubitativo. Asalto perdido. La siguiente manipulación será a -5%, si es del mismo tipo."
  },
  {
    Resultado: 4,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dubitativo. Asalto perdido. La siguiente manipulación será a -5%, si es del mismo tipo."
  },
  {
    Resultado: 5,
    Descripcion:
      "Pierdes el asalto intentando asegurar el procedimiento, sin decidirte a empezar. Te desconcentras sin querer con tus propios pensamientos, dejándote el siguiente asalto a -5. . La siguiente manipulación será a -5%, si es del mismo tipo."
  },
  {
    Resultado: 6,
    Descripcion:
      "Pierdes el asalto intentando asegurar el procedimiento, sin decidirte a empezar. Te desconcentras sin querer con tus propios pensamientos, dejándote el siguiente asalto a -5. . La siguiente manipulación será a -5%, si es del mismo tipo."
  },
  {
    Resultado: 7,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dubitativo. Asalto perdido. La siguiente manipulación será a -10%, si es del mismo tipo."
  },
  {
    Resultado: 8,
    Descripcion:
      "Te muerdes la lengua por el esfuerzo. Estás 1 asalto aturdido por el dolor. La siguiente manipulación será a -10%, si es del mismo tipo."
  },
  {
    Resultado: 9,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dubitativo. Asalto perdido. La siguiente manipulación será a -15%, si es del mismo tipo."
  },
  {
    Resultado: 10,
    Descripcion:
      "Te muerdes la lengua sin querer. Estás 2 asaltos aturdido por el dolor. La siguiente manipulación será a -10%, si es del mismo tipo."
  },
  {
    Resultado: 11,
    Descripcion:
      "Haces un movimiento forzado que torsiona una articulación. Asalto perdido. La siguiente manipulación será a -20%, si es del mismo tipo, y -10 si es de cualquier otro tipo."
  },
  {
    Resultado: 12,
    Descripcion:
      "Te muerdes la lengua  por el esfuerzo sin querer. Estás 3 asaltos aturdido por el dolor. La siguiente manipulación será a -20%, si es del mismo tipo."
  },
  {
    Resultado: 13,
    Descripcion:
      "Haces un movimiento forzado que atrapa un dedo, pinzándolo. Asalto perdido y 1 asalto aturdido por el dolor. La siguiente manipulación será a -20%, si es del mismo tipo, y -10 si es de cualquier otro tipo."
  },
  {
    Resultado: 14,
    Descripcion:
      "Te muerdes la lengua y los labios sin querer. Estás 4 asaltos aturdido por el dolor. La siguiente manipulación será a -20%, si es del mismo tipo."
  },
  {
    Resultado: 15,
    Descripcion:
      "Una visión de futuro catastrófica te distrae de la acción, dejándote 1d4 asaltos aturdido. La siguiente manipulación será a -20%, si es del mismo tipo, y -10 si es de cualquier otro tipo."
  },
  {
    Resultado: 16,
    Descripcion:
      "Una  mancha blanquecina en tu visión te distrae de la acción, dejándote 2+1d4 asaltos aturdido. La siguiente manipulación será a -15%, si es del mismo tipo, y -5 si es de cualquier otro tipo.."
  },
  {
    Resultado: 17,
    Descripcion:
      "Un repentino pinchazo constante y doloroso en el costado te distrae de la acción, dejándote 2+1d6 asaltos aturdido. La siguiente manipulación será a -20%, si es del mismo tipo."
  },
  {
    Resultado: 18,
    Descripcion:
      "Sientes un agudo y persistente dolor en la espalda que te distrae de la acción, dejándote 1d6 asaltos aturdido. La siguiente manipulación será a -20%, si es del mismo tipo, y -10 si es de cualquier otro tipo."
  },
  {
    Resultado: 19,
    Descripcion:
      "El esfuerzo hace que te de una taquicardia, dejándote 2+1d8 asaltos aturdido. La siguiente manipulación será a -15%, si es del mismo tipo, y -5 si es de cualquier otro tipo.."
  },
  {
    Resultado: 20,
    Descripcion:
      "El esfuerzo hace que te de una taquicardia, dejándote 1d10 asaltos aturdido. La siguiente manipulación será a -20%, si es del mismo tipo, y -10 si es de cualquier otro tipo."
  },
  {
    Resultado: 21,
    Descripcion:
      "Manipulas de manera incorrecta los utensilios, rompiendo lo que tengas entre las manos, aturdiéndote 1d8 asaltos."
  },
  {
    Resultado: 22,
    Descripcion:
      "Manipulas de manera incorrecta los utensilios, rompiendo lo que tengas entre las manos, así como el objeto que querías manipular, que adquiere permanentemente un -30% en su manipulación."
  },
  {
    Resultado: 23,
    Descripcion:
      "Sufres una contractura grave en una de tus extremidades utilizadas Estás a -15 hasta que se cure (músculo  herida Leve). Aturdido 2 asaltos"
  },
  {
    Resultado: 24,
    Descripcion:
      "Sufres una sobrecarga muscular  en una de tus extremidades utilizadas Estás a -20 hasta que se cure (músculo  herida Leve) . Aturdido 2 asaltos. El objeto queda alterado, sufriendo un -40% a las manipulaciones posteriores."
  },
  {
    Resultado: 25,
    Descripcion:
      "Sufres una sobrecarga muscular  en una de tus extremidades utilizadas Estás a -40 hasta que se cure (músculo  herida Leve) . Aturdido 2 asaltos, tus utensilios se rompen, dañando al objeto, que recibe un -40% para futuras manipulaciones."
  }
];

function generatemanippiftableHead(manippiftable, manippifdata) {
  let manippifthead = manippiftable.createTHead();
  let row = manippifthead.insertRow();
  for (let key of manippifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let manippiftable = document.getElementById("manippif");
let manippifdata = Object.keys(manippifia[0]);
generatemanippiftable(manippiftable, manippifia);
generatemanippiftableHead(manippiftable, manippifdata);

function generatemanippiftable(manippiftable, manippifdata) {
  for (let element of manippifdata) {
    let row = manippiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function manipPif() {
  document.getElementById("info").innerHTML = "";
  var manippifTab = document.getElementById("manippif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = manippifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*conopifia*/
let conopifia = [
  {
    Resultado: 1,
    Descripcion: "No consigues recordar/acceder a nada relevante."
  },
  {
    Resultado: 2,
    Descripcion: "No consigues recordar/acceder a nada relevante."
  },
  {
    Resultado: 3,
    Descripcion:
      "Uno de los detalles recordados, es incorrecto, pero eres incapaz de saber cuál es…."
  },
  {
    Resultado: 4,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás una hora  en volver a poder tirar para buscar sobre el mismo tema."
  },
  {
    Resultado: 5,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás una hora  en volver a poder tirar para buscar sobre el mismo tema."
  },
  {
    Resultado: 6,
    Descripcion:
      "Uno de los detalles recordados, es incorrecto, pero eres incapaz de saber cuál es….Estás tan bloqueado que tardarás   una hora  en volver a poder tirar para buscar  sobre el mismo tema o averiguar el error"
  },
  {
    Resultado: 7,
    Descripcion:
      "Uno de los detalles recordados, es incorrecto, pero eres incapaz de saber cuál es….Estás tan bloqueado que tardarás   una hora  en volver a poder tirar para buscar  sobre el mismo tema o averiguar el error"
  },
  {
    Resultado: 8,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás un día en volver a poder tirar para buscar sobre el mismo tema."
  },
  {
    Resultado: 9,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás un día en volver a poder tirar para buscar sobre el mismo tema."
  },
  {
    Resultado: 10,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás una semana en volver a poder tirar para buscar el mismo tópico. Tu inseguridad hace que todas las teradas de esa habilidad durante ese tiempo se realicen a -10%"
  },
  {
    Resultado: 11,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás una semana en volver a poder tirar para buscar el mismo tópico."
  },
  {
    Resultado: 12,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás una semana en volver a poder tirar para buscar el mismo tópico."
  },
  {
    Resultado: 13,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás un mes en volver a poder tirar para buscar el mismo tópico."
  },
  {
    Resultado: 14,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás un mes en volver a poder tirar para buscar el mismo tópico."
  },
  {
    Resultado: 15,
    Descripcion:
      "No consigues recordar/acceder a nada relevante. Estás tan bloqueado que tardarás un mes en volver a poder tirar para buscar el mismo tópico."
  },
  {
    Resultado: 16,
    Descripcion:
      "Tu mente recupera fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -10 permanente, siempre que sea sobre el mismo tema"
  },
  {
    Resultado: 17,
    Descripcion:
      "Tu mente recupera fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -20 permanente, siempre que sea sobre el mismo tema"
  },
  {
    Resultado: 18,
    Descripcion:
      "Tu mente recupera fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -30 permanente, siempre que sea sobre el mismo tema"
  },
  {
    Resultado: 19,
    Descripcion:
      "Tu mente recupera fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -40 permanente, siempre que sea sobre el mismo tema"
  },
  {
    Resultado: 20,
    Descripcion:
      "La información que recuerdas claramente  contiene varios errores decisivos y graves, pero muy creíbles, que eres incapaz de detectar."
  },
  {
    Resultado: 21,
    Descripcion:
      "Tu mente recupera fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -5 permanente."
  },
  {
    Resultado: 22,
    Descripcion:
      "Tu mente recupera fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -10 permanente."
  },
  {
    Resultado: 23,
    Descripcion:
      "Tu mente recupera fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -15 permanente."
  },
  {
    Resultado: 24,
    Descripcion:
      "Tu mente recupera fragmentos inconexos y erróneos de información. Hasta que no aumentes tu habilidad, recibirás un -20 permanente."
  },
  {
    Resultado: 25,
    Descripcion:
      "Tu mente se  queda en blanco, incapaz de recordar, asimilar o relacionar ningún tipo de información, sufriendo una amnesia parcial en dicho tema. Recibes -1d10% permanente en esa habilidad (sólo los sortilegios de mentalismo de recuperar memoria pueden eliminar este negativo, pero el PJ no tiene por qué saberlo)"
  }
];

function generateconopiftableHead(conopiftable, conopifdata) {
  let conopifthead = conopiftable.createTHead();
  let row = conopifthead.insertRow();
  for (let key of conopifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let conopiftable = document.getElementById("conopif");
let conopifdata = Object.keys(conopifia[0]);
generateconopiftable(conopiftable, conopifia);
generateconopiftableHead(conopiftable, conopifdata);

function generateconopiftable(conopiftable, conopifdata) {
  for (let element of conopifdata) {
    let row = conopiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function conoPif() {
  document.getElementById("info").innerHTML = "";
  var conopifTab = document.getElementById("conopif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = conopifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*sigipifia*/
let sigipifia = [
  {
    Resultado: 1,
    Descripcion:
      "Pierdes el asalto intentando realizar la acción, intentando asegurar el procedimiento, sin decidirte a empezar."
  },
  {
    Resultado: 2,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos dejándote el siguiente intento a -5. Asalto perdido"
  },
  {
    Resultado: 3,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos dejándote el siguiente intento a -5. Asalto perdido"
  },
  {
    Resultado: 4,
    Descripcion:
      "Pierdes el asalto intentando realizar la acción. Te desconcentras sin querer con tus propios pensamientos, dejándote el siguiente intento a -5."
  },
  {
    Resultado: 5,
    Descripcion:
      "Pierdes el asalto intentando realizar la acción. Te desconcentras sin querer con tus propios pensamientos, dejándote el siguiente intento a -5."
  },
  {
    Resultado: 6,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dejándote el siguiente intento a -10. Asalto perdido"
  },
  {
    Resultado: 7,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dejándote el siguiente intento a -10. Asalto perdido"
  },
  {
    Resultado: 8,
    Descripcion:
      "Te muerdes la lengua por el esfuerzo. Estás 1 asalto aturdido por el dolor. La siguiente acción de subterfugio será a -10%, si es del mismo tipo."
  },
  {
    Resultado: 9,
    Descripcion:
      "Te desconcentras y te lías con tus propios pensamientos dejándote el siguiente intento a -15. Asalto perdido"
  },
  {
    Resultado: 10,
    Descripcion:
      "Te muerdes la lengua sin querer. Estás 2 asaltos aturdido por el dolor. La siguiente acción de subterfugio será a -10%, si es del mismo tipo."
  },
  {
    Resultado: 11,
    Descripcion:
      "Te desconcentras y te lías con tus propios pensamientos dejándote el siguiente intento a -20. Asalto perdido"
  },
  {
    Resultado: 12,
    Descripcion:
      "Te muerdes la lengua  por el esfuerzo sin querer. Estás 3 asaltos aturdido por el dolor. La siguiente acción de subterfugio será a -15%, si es del mismo tipo…si es cualquier otra de subterfugio será a -5%"
  },
  {
    Resultado: 13,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dejándote el siguiente asalto a -40. Asalto perdido"
  },
  {
    Resultado: 14,
    Descripcion:
      "Te muerdes la lengua y los labios sin querer. Estás 4 asaltos aturdido por el dolor. La siguiente acción de subterfugio será a -20%, si es del mismo tipo…si es cualquier otra de subterfugio será a -10%"
  },
  {
    Resultado: 15,
    Descripcion:
      "Tu intento es torpe y desgarbado, permitiendo sumar  +10 a la tirada de Descubrir de los posibles observadores."
  },
  {
    Resultado: 16,
    Descripcion:
      "Una  mancha blanquecina en tu visión te distrae de la acción, dejándote 2+1d4 asaltos aturdido. La siguiente acción de subterfugio será a -15%, si es del mismo tipo…si es cualquier otra de subterfugio será a -5%"
  },
  {
    Resultado: 17,
    Descripcion:
      "Tu intento es torpe y desgarbado, permitiendo sumar  +20 a la tirada de Descubrir de los posibles observadores."
  },
  {
    Resultado: 18,
    Descripcion:
      "Sientes un agudo y persistente dolor en la espalda que te distrae de la acción, dejándote 2+1d6 asaltos aturdido. La siguiente acción de subterfugio será a -15%, si es del mismo tipo…si es cualquier otra de subterfugio será a -5%"
  },
  {
    Resultado: 19,
    Descripcion:
      "El esfuerzo hace que te de una taquicardia, dejándote  2+1d8 asaltos aturdido. La siguiente acción de subterfugio será a -15%, si es del mismo tipo…si es cualquier otra de subterfugio será a -5%"
  },
  {
    Resultado: 20,
    Descripcion:
      "Tu intento es torpe y desgarbado, permitiendo sumar  +30  a la tirada de Descubrir de los posibles observadores."
  },
  {
    Resultado: 21,
    Descripcion:
      "Tu intento es torpe y desgarbado, permitiendo sumar  +30  a la tirada de Descubrir de los posibles observadores. Estás además, 1 asalto aturdido."
  },
  {
    Resultado: 22,
    Descripcion:
      "Tu intento es torpe y desgarbado, permitiendo sumar  +30  a la tirada de Descubrir de los posibles observadores. Estás además, 2 asaltos aturdido."
  },
  {
    Resultado: 23,
    Descripcion:
      "Sufres una contractura grave en una de tus extremidades utilizadas. Estás a -15 hasta que se cure (músculo  herida Leve). Permite sumar  +10 a la tirada de Descubrir de los posibles observadores"
  },
  {
    Resultado: 24,
    Descripcion:
      "Sufres una contractura grave en una de tus extremidades utilizadas. Estás a -15 hasta que se cure (músculo  herida Leve). Permite sumar  +20 a la tirada de Descubrir de los posibles observadores"
  },
  {
    Resultado: 25,
    Descripcion:
      "Sufres una contractura grave en una de tus extremidades utilizadas. Estás a -20 hasta que se cure (músculo  herida Leve). Permite sumar  +10 a la tirada de Descubrir de los posibles observadores. La siguiente acción de subterfugio será a -15%, si es del mismo tipo…si es cualquier otra de subterfugio será a -5%"
  }
];

function generatesigipiftableHead(sigipiftable, sigipifdata) {
  let sigipifthead = sigipiftable.createTHead();
  let row = sigipifthead.insertRow();
  for (let key of sigipifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let sigipiftable = document.getElementById("sigipif");
let sigipifdata = Object.keys(sigipifia[0]);
generatesigipiftable(sigipiftable, sigipifia);
generatesigipiftableHead(sigipiftable, sigipifdata);

function generatesigipiftable(sigipiftable, sigipifdata) {
  for (let element of sigipifdata) {
    let row = sigipiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function sigiPif() {
  document.getElementById("info").innerHTML = "";
  var sigipifTab = document.getElementById("sigipif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = sigipifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}

/*comupifia*/
let comupifia = [
  {
    Resultado: 1,
    Descripcion: "Pierdes el asalto intentando conseguir el tono adecuado."
  },
  {
    Resultado: 2,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dubitativo. Asalto perdido. La siguiente interacción con la misma persona/as será a -5%"
  },
  {
    Resultado: 3,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, dubitativo. Asalto perdido. La siguiente interacción con la misma persona/as será a -5%"
  },
  {
    Resultado: 4,
    Descripcion:
      "Pierdes el asalto intentando asegurar tu acción, embobado. La siguiente interacción con la misma persona/as será a -10%"
  },
  {
    Resultado: 5,
    Descripcion:
      "Pierdes el asalto intentando asegurar tu acción, embobado. La siguiente interacción con la misma persona/as será a -10%"
  },
  {
    Resultado: 6,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos. Asalto perdido. La siguiente interacción con la misma persona/as será a -10%"
  },
  {
    Resultado: 7,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos. Asalto perdido. La siguiente interacción con la misma persona/as será a -10%"
  },
  {
    Resultado: 8,
    Descripcion:
      "Te muerdes la lengua sin querer. Estás 1 asalto aturdido por el dolor. La siguiente interacción con la misma persona/as será a -10%"
  },
  {
    Resultado: 9,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, pareciendo bobo y sin gracia. Asalto perdido. La siguiente interacción con la misma persona/as será a -15%"
  },
  {
    Resultado: 10,
    Descripcion:
      "Te muerdes la lengua sin querer. Estás 2 asaltos aturdido por el dolor. La siguiente interacción con la misma persona/as será a -15%"
  },
  {
    Resultado: 11,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, salivando y salpicando de babas al balbucear..Asalto perdido. La siguiente interacción con la misma persona/as será a -15%"
  },
  {
    Resultado: 12,
    Descripcion:
      "Te muerdes la lengua sin querer. Estás 3 asaltos aturdido por el dolor. La siguiente interacción con la misma persona/as será a -15%"
  },
  {
    Resultado: 13,
    Descripcion:
      "Te desconcentras sin querer con tus propios pensamientos, hablando sin sentido o sobre otro tema irrelevante .Asalto perdido. Necesitas al menos 6 asaltos más hasta poder interaccionar de nuevo con la misma persona/as, eso si, con un -15%"
  },
  {
    Resultado: 14,
    Descripcion:
      "Te muerdes la lengua y los labios sin querer. Estás 4 asaltos aturdido por el dolor. Necesitas al menos 6 asaltos más hasta poder interaccionar de nuevo con la misma persona/as, eso si, con un -15%"
  },
  {
    Resultado: 15,
    Descripcion:
      "Una tortuga voladora vestida de princesa te distrae de la acción, dejándote 1d4 asaltos aturdido. Necesitas luego al menos 6 asaltos más hasta poder interaccionar de nuevo con la misma persona/as, eso si, con un -15%"
  },
  {
    Resultado: 16,
    Descripcion:
      "Una  mancha sospechosa en tu visión te distrae de la acción, dejándote 1d4 asaltos aturdido. Necesitas luego al menos 6 asaltos más hasta poder interaccionar de nuevo con la misma persona/as, eso si, con un -20%"
  },
  {
    Resultado: 17,
    Descripcion:
      "Un repentino pinchazo constante y doloroso en la entrepierna te distrae de la acción, dejándote 1d6 asaltos aturdido. Necesitas luego al menos 6 asaltos más hasta poder interaccionar de nuevo con la misma persona/as, eso si, con un -20%"
  },
  {
    Resultado: 18,
    Descripcion:
      "Sientes un agudo y persistente dolor en el cuello que te distrae de la acción, dejándote 1d6 asaltos aturdido. Necesitas luego al menos 5 minutos más hasta poder interaccionar de nuevo con la misma persona/as, eso si, con un -20%"
  },
  {
    Resultado: 19,
    Descripcion:
      "Tu discurso se malinterpreta, no surte efecto, y  te deja  -10% siempre que intentes influenciar a esta audiencia, independientemente de tus resultados posteriores."
  },
  {
    Resultado: 20,
    Descripcion:
      "Tu discurso se malinterpreta, no surte efecto, y  te deja  -15 % siempre que intentes influenciar a esta audiencia, independientemente de tus resultados posteriores."
  },
  {
    Resultado: 21,
    Descripcion:
      "Tu discurso se malinterpreta, no surte efecto,  y  te deja  -20% siempre que intentes influenciar a esta audiencia, independientemente de tus resultados posteriores."
  },
  {
    Resultado: 22,
    Descripcion:
      "Tu discurso se malinterpreta , no surte efecto, y  te deja  -25% siempre que intentes influenciar a esta audiencia, independientemente de tus resultados posteriores."
  },
  {
    Resultado: 23,
    Descripcion:
      "Tu discurso se malinterpreta  y  te deja a -20% siempre que intentes influenciar a esta audiencia. Los receptores se sienten gravemente insultados y reaccionan tirando un 1d6: 1/2=te ignoran activamente , 3= te atacan ofendidos con pelea, 4/5=reaccionan contrariamente a tus deseos, 4= Te has ganado un enemigo/os que intentarán hacerte la vida difícil, pero sin buscar tu muerte."
  },
  {
    Resultado: 24,
    Descripcion:
      "Tu discurso se malinterpreta  y  te deja a -30% siempre que intentes influenciar a esta audiencia. Los receptores se sienten gravemente insultados y reaccionan tirando un 1d6: 1/2=te ignoran activamente , 3= te atacan ofendidos con pelea, 4/5=reaccionan contrariamente a tus deseos, 6= Te has ganado un enemigo/os que intentarán hacerte la vida difícil, pero sin buscar tu muerte."
  },
  {
    Resultado: 25,
    Descripcion:
      "Tu discurso se malinterpreta  y  te deja a -40% siempre que intentes influenciar a esta audiencia. Los receptores se sienten gravemente insultados y reaccionan tirando un 1d6: 1/2=te ignoran activamente , 3= te atacan ofendidos con pelea, 4=reaccionan contrariamente a tus deseos, 5= Te has ganado un enemigo/os que intentarán hacerte la vida difícil, pero sin buscar tu muerte, 6= Sienten que tu presencia en este mundo es ofensiva y debe desaparecer, así que…Corre!!!"
  }
];

function generatecomupiftableHead(comupiftable, comupifdata) {
  let comupifthead = comupiftable.createTHead();
  let row = comupifthead.insertRow();
  for (let key of comupifdata) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let comupiftable = document.getElementById("comupif");
let comupifdata = Object.keys(comupifia[0]);
generatecomupiftable(comupiftable, comupifia);
generatecomupiftableHead(comupiftable, comupifdata);

function generatecomupiftable(comupiftable, comupifdata) {
  for (let element of comupifdata) {
    let row = comupiftable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function comuPif() {
  document.getElementById("info").innerHTML = "";
  var comupifTab = document.getElementById("comupif");
  var i = document.getElementById("inpnumb").value;
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.

  // GET THE CELLS COLLECTION OF THE CURRENT ROW.
  var objCells = comupifTab.rows.item(i).cells;

  // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
  for (var j = 1; j < objCells.length; j++) {
    info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
  info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).
}
