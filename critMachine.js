/*selector ctit-pif*/
function critpif() {
  var x = document.getElementById("crit-selec");
  var y = document.getElementById("pifia");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
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
