//Ejercicio 2
alert("Hola soy kokun");
figura = prompt("Bienvenido, seleccione una figura: ");
String(figura);
//switch
switch (figura) {
    case "Cuadrado":
        lado = prompt("Ingrese el valor del lado: ");
        parseFloat(lado);
        area = lado*lado;
       per = 4*lado;
        alert("Usted esta dibujando un cuadrado con un area de "+area+" y un perimetro de "+per);
        break;
        case "Circulo":
            radio = prompt("Ingrese el valor del radio: ");
            parseFloat(radio);
            pi = 3.1416;
            area = pi*(Math.pow(radio,2));
            per = 2*pi*(Math.pow(radio,2));
            alert("Usted esta dibujando un circulo con un area de "+area+" y un perimetro de "+per);
            break;
            case "Rectangulo":
                base = prompt("Ingrese el valor de la base: ");
                parseFloat(base);
                altura = prompt("Ingrese el valor de la altura: ");
                parseFloat(altura);
                area = base*altura;
                per = 2*(base + altura);
                alert("Usted esta dibujando un rectangulo con un area de "+area+" y un perimetro de "+per);
                break;
                case "Triangulo":
                let base = prompt('Usted ha elegido el triangulo, por favor inserte base (cm): ');
                let altura= prompt('Por favor inserte la altura del triangulo (cm): ');
                let tipoTriangulo = prompt('¿Es un triangulo equilatero?');
                areaTriangulo= (base * altura )/2;
                alert('El area del triangulo es (cm^2): ',areaTriangulo);
                if (tipoTriangulo == 'si')  {
                let ladoTriangulo = prompt('Inserte lado triangulo (cm): ');
                perimetroTriangulo = ladoTriangulo * 3;
                alert('El perimetro del triangulo es: ',perimetroTriangulo);
                }else{
                let Lado1 = prompt('Inserte tamaño de lado #1 (cm): ');
                let Lado2 = prompt('Inserte tamaño de lado #2 (cm): ');
                let Lado3 = prompt('Inserte tamaño de lado #3 (cm): ');
                perimetroTriangulo = Lado1 + Lado2 + Lado3;
                alert('El perimetro del triangulo es: ', perimetroTriangulo);
                }
                break;

    default: alert("ERROR!");
        break;
}