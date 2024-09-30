let conteo = 0;

function myFunction() {
    conteo = conteo + 1;
    if (conteo % 3 == 0) {
        document.getElementById("pvalor").innerHTML = "Conoce Nuestra propuesta de valor, dale click en el botón!";
    } else if (conteo % 3 == 1) {
        document.getElementById("pvalor").innerHTML = "Ofrecemos un servicio de domicilios rápido, seguro y accesible, conectando a nuestros clientes con sus restaurantes y tiendas favoritas en tiempo récord. Nos diferenciamos por nuestra atención personalizada, tecnología de seguimiento en tiempo real y una red confiable de repartidores locales. Garantizamos entregas puntuales y seguras, con opciones de pago flexibles y atención al cliente 24/7. Nuestro objetivo es hacer que la experiencia de recibir productos sea conveniente y sin complicaciones, para que puedas disfrutar de tu tiempo sin preocuparte por los envíos.";    
    } else {
        document.getElementById("pvalor").innerHTML = "Con DomiRapi, disfrutarás de entregas rápidas y seguras en todo momento. Nuestro equipo de repartidores locales garantiza que recibas tus productos en perfectas condiciones y en tiempo récord, mientras tú te enfocas en lo que realmente importa.";
    }
}
