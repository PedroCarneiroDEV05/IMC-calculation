const form = document.getElementById("form-imc");
form.addEventListener('submit', function(event){
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura<=0){
        document.getElementById("resultado").textContent="Preencha os campos corretamente.";
        return;
    }

        const imc = peso / (altura * altura);

        let classificacao = "";
        
        if(imc < 18.5) {
            classificacao = "Abaixo do peso" ;
        }else if(imc < 24.9){
            classificacao = "Peso Normal" ;
        }else if(imc <29.9){
            classificacao = "Sobrepeso" ;
        }else if(imc <34.9){
            classificacao = "Obesidade grau I";
        }else if(imc <39.9){
            classificacao = "Obesidade grau II";
        }else{
            classificacao = "Obesidade grau III(mórbida)";
        }
        
        document.getElementById("resultado").textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    }
);