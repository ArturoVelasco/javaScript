// Ingresar datos
alert("Hola buen día")
mes = prompt("Ingrese su mes de nacimiento: ");
dia = prompt("Ingrese de dia de nacimiento: ");
// conversion cadena a entero
parseInt(dia);
//switch
switch(mes){
    case "enero":
        if(dia<21)
            alert("Eres capricornio")
        else
            alert("Eres acuario")
        break;
    case "febrero":
        if(dia<20)
            alert("Eres acuario")
        else
            alert("Eres piscis")
        break;
    case "marzo":
        if(dia<21)
            alert("Eres piscis")
        else
            alert("Eres aries")
        break;
    case "abril":
        if(dia<21)
            alert("Eres aries")
        else
            alert("Eres tauro")
        break;
    case "mayo":
        if(dia<22)
            alert("Eres tauro")
        else
            alert("Eres géminis")
        break;
    case "junio":
        if(dia<22)
            alert("Eres géminis")
        else
            alert("Eres cáncer")
        break;
    case "julio":
        if(dia<23)
            alert("Eres cáncer")
        else
            alert("Eres leo")
        break;
    case "agosto":
        if(dia<23)
            alert("Eres leo")
        else
            alert("Eres virgo")
        break;
    case "septiembre":
        if(dia<23)
            alert("Eres virgo")
        else
            alert("Eres libra")
        break;
    case "octubre":
        if(dia<23)
            alert("Eres libra")
        else
            alert("Eres escorpio")
        break;
    case "noviembre":
        if(dia<23)
            alert("Eres escorpio")
        else
            alert("Eres sagitario")
        break;
    case "diciembre":
        if(dia<22)
            alert("Eres sagitario")
        else
            alert("Eres capricornio")
        break;
}