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

/*dice roll*/
document.getElementById("diceroll").onclick = function () {
  var cr = document.getElementById("out").innerHTML;
  if (cr === "Filo Leve") {
    filoCleve();
    } else if (cr === "Filo Grave") {
    filoCgrave();
  } else if (cr === "Impacto Leve") {
    impaCleve();
  }
};

/*impaleve*/
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

/*fleve*/
let filocritleve = [
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

/*fgrave*/
let filocritgrave = [
  {
    Resultado: 1,
    Descripcion: "Corte transversal. –1pv"},
    {
    Resultado: 2,
    Descripcion: "Herida muy fea. –1pv. 1 asalto aturdido"},
    {
    Resultado: 3,
    Descripcion: "Tajo en el omóplato. –2pv."},
    {
    Resultado: 4,
    Descripcion: "Corte en el antebrazo. –2pv. 1 asalto aturdido"},
    {
    Resultado: 5,
    Descripcion: "Corte en el muslo. –2pv. 1 asalto aturdido"},
    {
    Resultado: 6,
    Descripcion: "Corte en los gemelos. –1pv. 2 asaltos aturdido"},
    {
    Resultado: 7,
    Descripcion: "Tajo en el bíceps. –2pv. 2 asaltos aturdido"},
    {
    Resultado: 8,
    Descripcion: "Corte en la parte baja de la espalda. –2pv. 2 asaltos aturdido. Actúas a –5% (Músculo herida leve)"},
    {
    Resultado: 9,
    Descripcion: "Herida cerca de las costillas. –3pv. 2 asaltos aturdido. Actúas a –5% (Hueso herida leve)"},
    {
    Resultado: 10,
    Descripcion: "Corte en el hombro. –4pv. 2 asaltos aturdido. Actúas a –10% (Hueso herida leve)"},
    {
    Resultado: 11,
    Descripcion: "Tajo en el pecho. –3pv. 2 asaltos aturdido. Actúas a –10%. Pierdes 1pv/asalto (Músculo herida leve)"},
    {
    Resultado: 12,
    Descripcion: "Corte en la cadera. –3pv. 2 asaltos aturdido. Actúas a –15%. pierdes 1pv/asalto (Músculo herida leve)"},
    {
    Resultado: 13,
    Descripcion: "Herida en la espalda. –4pv. 2 asaltos aturdido. Actúas a –20%. pierdes 1pv/asalto (Músculo herida grave)"},
    {
    Resultado: 14,
    Descripcion: "Tajo en los abdominales. –4pv. 3 asaltos aturdido. Actúas a –25%. pierdes 1pv/asalto (Músculo herida grave)"},
    {
    Resultado: 15,
    Descripcion: "Corte en los glúteos. –2pv. 3 asaltos aturdido. Actúas a –30%. pierdes 2pv/asalto (Músculo herida grave)"},
    {
    Resultado: 16,
    Descripcion: "Amputación de un brazo por el codo. 4 asaltos aturdido. Actúas a –40%. Pierdes 3pv/asalto ( Hueso herida grave, Músculo herida grave, Tendón herida leve, Tejido herida leve)"},
    {
    Resultado: 17,
    Descripcion: "Amputación de una pierna por la pantorrilla. 5 asaltos aturdido. Actúas a –50%. Pierdes 4pv/asalto (Hueso herida grave, Músculo herida grave, Tendón herida leve, Tejido herida leve)"},
    {
    Resultado: 18,
    Descripcion: "Barriga destripada. Muerte tras 20 asaltos de agonía intentando recoger tus tripas."},
    {
    Resultado: 19,
    Descripcion: "Cabeza cercenada que vuela a 1d3 m del cuerpo. Ooolee…..!!!"},
    {
    Resultado: 20,
    Descripcion: "Partes al adversario en 2. Muerte instantáneamente, por supuesto."}
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

  
