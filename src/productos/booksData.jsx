// import tapa1 from '/images/obras/los-dias-del-venado.png';
// import tapa2 from '/images/obras/los-dias-de-la-sombra.jpg';
// import tapa3 from '/images/obras/diciembre-super-album.png';
// import tapa4 from '/images/obras/sucedio-en-colores.png';
// import tapa5 from '/images/obras/los-dias-del-fuego.jpg';
// import tapa6 from '/images/obras/reyes-y-pajaros.jpg';
// import tapa7 from '/images/obras/la-mejor-luna.jpg';
// import tapa8 from '/images/obras/el-espejo-africano.jpg';
// import tapa9 from '/images/obras/cuando-san-pedro-viajo-en-tren.jpg';
// import tapa10 from '/images/obras/presagio-de-carnabal.jpg';
// import tapa11 from '/images/obras/el-rastro-de-la-canela.jpg';
// import tapa12 from '/images/obras/amigos-por-el-viento.jpg';
// import tapa13 from '/images/obras/el-mapa-imposible.png';
// import tapa14 from '/images/obras/la-entrevista.jpg';
// import tapa15 from '/images/obras/oficio-de-buhos.png';
// import tapa16 from  '/images/obras/el-perro-del-peregrino.jpg';
// import tapa17 from '/images/obras/una-isla-en-el-tiempo.jpg';
// import tapa18 from '/images/obras/memorias-impuras.png';
// import tapa19 from '/images/obras/las-voces-del-fuego.jpg';
// import tapa20 from '/images/obras/diez-en-un-barco.jpg';
// import tapa21 from '/images/obras/la-historia-se-hace-ficcion.jpg';
// import tapa22 from '/images/obras/tiempo-de-dragones.png';
// import tapa23 from '/images/obras/ondinas.jpg';
// import tapa24 from '/images/obras/salamandras.jpg';
// import tapa25 from '/images/obras/silfos.jpg';
// import tapa26 from '/images/obras/nomos.jpg';
// import tapa27 from '/images/obras/simi-titi.jpg';
// import tapa28 from '/images/obras/aprendiz-del-dragon.png';
// import tapa29 from '/images/obras/un-mar-para-emilia.jpg';
// import tapa30 from '/images/obras/tiempo-de-dragoness.png';
// import tapa31 from '/images/obras/el-arte-de-los-confines.jpg';
// import tapa32 from '/images/obras/elisa.jpg';
// import tapa33 from '/images/obras/yo-el-espejo-africano.png';
// import tapa34 from '/images/obras/mi-mama-me-ama.jpg';
// import tapa35 from '/images/obras/sucede-en-colores.jpg';
// import tapa36 from '/images/obras/memorias-de-una-alcahueta.jpg';
// import tapa37 from '/images/obras/una-version-de-dios.jpg';
// import tapa38 from '/images/obras/formas-de-ver.jpg';
// import tapa39 from '/images/obras/tiempo-de-dragonesss.png';

let obras = [
    {
        id: 1,
        year: 2000,
        titulo: "Los días del Venado",
        saga: "La Saga de Los Confines I",
        editorial: "Ed. Norma . Suma de Letras ( Penguin R. House )",
        resenia: "Una invasión sin nombre avanza sobre Las Tierras Fértiles. Será la guerra entre el Bien y el Mal; una guerra frente a la que ningún ser vivo podrá permanecer indiferente. Un guerra que comenzó en la boca de la Muerte y se extendió sobre el mundo entero.",
        img: "/images/obras/los-dias-del-venado.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 1
    },
    {
        id: 2,
        year: 2002,
        titulo: "Los días de la sombra",
        editorial: "Ed. Norma . Suma de Letras ( Penguin R. House )",
        resenia: "El hijo de la Muerte fue derrotado. Pero luego de una respiración, que tardó cinco años del sol en entrar y salir del pecho, prepara una nueva invasión, redoblada en fuerza y en crueldad. Para lograr su propósito enviará a su propia madre al frente de las naves. Y se valdrá de las alianzas que consiguió en las Tierras Fértiles. Esta vez no bastará con la pelea heroica en el campo de batalla. Será necesario hacerse al mar, será necesario atravesar la Puerta que lleva al Tiempo Mágico. Mientras la resistencia se prepara, la Muerte recorre los caminos del continente.",
        saga: "La Saga de Los Confines II",
        img: "/images/obras/los-dias-de-la-sombra.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 1
    },
    {
        id: 3,
        year: 2003,
        titulo: "Diciembre Súper Álbum",
        editorial: "Ed. Alfaguara Penguin Libros",
        resenia: "En el Súper Álbum de diciembre saldrá el último número de la historieta “El viajante”: un hombre que va de pueblo en pueblos tras el rastro del parque de diversiones “Budapest” y de su amada Natalia.El guionista y el dibujante trabajan para darle un final a la historia de Santiago. Los relatos de esta novela pertenecen a dos mundos: el de la ficción y el de la realidad. Y sus protagonistas nos transmiten sus experiencias en una trama llena de emoción y de suspenso.",
        img: "/images/obras/diciembre-super-album.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 1
    },
    {
        id: 4,
        year: 2004,
        titulo: "Sucedió en colores",
        editorial: "Ed. Alfaguara juvenil Penguin Libros",
        resenia: "Cada cuento, de modo poético y sutil, focaliza en un color. Los nombres de los personajes, los elementos y los sentimientos que se desprenden de la lectura se relacionan con ese tono. <br/> Cinco cuentos con pinceladas de amor, bravura y mucha magia.",
        img: "/images/obras/sucedio-en-colores.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 1
    },
    {
        id: 5,
        year: 2004,
        titulo: "Los días del fuego",
        saga: "La Saga de Los Confines III",
        editorial: "Ed. Norma . Suma de Letras ( Penguin R. House )",
        resenia: "La más grande y terrible guerra contra el Odio Eterno que se haya librado jamás está por concluir. Las Tierras Fértiles preparan a sus mejores hijos para enfrentarla. Mientras tanto, en las Tierras Antiguas la resistencia se organiza evitando los zarpazos de Misáianes, quien todo lo ve desde la impiadosa quietud de su monte.",
        img: "/images/obras/los-dias-del-fuego.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 1
    },
    {
        id: 6,
        year: 2007,
        titulo: "Reyes y pájaros",
        editorial: "Norma",
        resenia: "La libertad, el poder, el arte, la muerte, el amor...abordados en maravillosas y conmovedoras historias.",
        img: "/images/obras/reyes-y-pajaros.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 2
    },
    {
        id: 7,
        year: 2007,
        titulo: "La mejor luna",
        editorial: "Norma",
        resenia: "Melina, la gata de Juan, solo es feliz cuando la luna está redonda y blanca. Pero la luna va y viene, y la gata se entristece cuando la ve menguar. Entonces su amigo Pedro, el pintor, ayuda a Juan y pinta una gran luna llena.",
        img: "/images/obras/la-mejor-luna.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 2
    },
    {
        id: 8,
        year: 2008,
        titulo: "El espejo africano",
        editorial: "SM",
        resenia: "Esta es la historia de un espejo que va enlazando el destino de distintas personas en distintos lugares: una esclava africana, el general San Martín, un temeroso huérfano español... Y cuenta las arduas luchas que estos y tantos otros hombres y mujeres afrontaron para obtener la libertad. <br /> Una historia que empezó hace dos siglos, pero aún no ha terminado.",
        img: "/images/obras/el-espejo-africano.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 2
    },
    {
        id: 9,
        year: 2008,
        titulo: "Cuando San Pedro viajó en tren",
        editorial: "SM",
        resenia: "Nicanor y su mamá se mudan de San Pedro a la gran ciudad. Mientras el tren avanza, piensa en las cosas que quedaron atrás. “Un tren es un túnel que avanza. Un tren es un dibujo que se pierde hacia el fondo de la hoja. Un tren es siempre un misterio…”. Y cuando cuenta sobre la tristeza de la partida, el guarda le dice que cuando las personas como él dejan un pueblo, se llevan en la valija todo lo que aman del lugar, por eso el tren va tan pesado.",
        img: "/images/obras/cuando-san-pedro-viajo-en-tren.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 2
    },
    {
        id: 10,
        year: 2009,
        titulo: "Presagio de Carnaval",
        editorial: "Norma",
        resenia: "Una plaza en la parte vieja de la ciudad. Un vendedor de yuyos que llegó desde Bolivia huyendo de la miseria. Una muchacha que no pudo vivir más allá ni más acá de su hermosura. Un vendedor de harinilla que se dejó ganar por el rencor para que el carnaval en el barrio de San Pedro fuera finalmente escenario de la tragedia.",
        img: "/images/obras/presagio-de-carnabal.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 2
    },
    {
        id: 11,
        year: 2010,
        titulo: "El rastro de la canela",
        resenia: "¿Pueden las colonias del Río de la Plata lograr la ansiada independencia de la corona de España? ¿Y puede el amor abrirse paso bajo las estrictas normas sociales que imponen esas colonias? Es que amor es lo que florece entre la niña Amanda Encinas y el mulato Tobías Tatamuez. Y si a algo huele ese amor es a canela. Miel y canela.",
        editorial: "SM",
        img: "/images/obras/el-rastro-de-la-canela.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 3
    },
    {
        id: 12,
        year: 2011,
        titulo: "Amigos por el viento",
        resenia: "Siete relatos que dejan marcas. Tal como la vida que a veces se comporta como el viento y entonces trae aires de amor, o aires llenos de desengaño, aires que con su paso nos transforman.",
        editorial: "Alfaguara Juvenil",
        img: "/images/obras/amigos-por-el-viento.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 3
    },
    {
        id: 13,
        year: 2011,
        titulo: "El mapa imposible",
        resenia: "El Mapa Imposible es un relato atravesado por el ensueño de la infancia y la bruma del conocimiento. Mapa de no lugares, aquellos espacios donde pasan las cosas realmente importantes: el amor, la felicidad, el miedo. <br /> Una novela que se construye en el vaivén del tiempo y de los recuerdos.",
        editorial: "Alfaguara. Penguin Random House",
        img: "/images/obras/el-mapa-imposible.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 3
    },
    {
        id: 14,
        year: 2012,
        titulo: "La entrevista",
        resenia: "La profesora Inés Mavers pidió un trabajo grupal para cerrar el año lectivo. Cuatro alumnos que nunca hubieran formado un mismo equipo y debieron resolverlo juntos.  En La Entrevista irás acercándote a la intimidad de cuatro personajes diferentes a muchos y parecidos a otros.",
        editorial: "Alfaguara. Penguin Random House",
        img: "/images/obras/la-entrevista.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 3
    },
    {
        id: 15,
        year: 2012,
        titulo: "Relatos de Los Confines - Oficio de búhos",
        resenia: "No importa cuánto nos esforcemos en contar. La memoria tiene infinitas puertas y por eso nunca estará completa. Es solo dar cuenta de algo para que se abran cien vacíos, cien preguntas. ¿Cómo continuó la resistencia e n las Tierras Antiguas?  ¿Nacieron nuevos Brujos de la Tierra? ¿Qué ocurrió con la Destrenzada? ¿Y antes? Cien respuestas para que se abran cien nuevos vacíos, cien nuevas preguntas. <br /> Oficio de Búhos nos trae memorables relatos del universo de La Saga de Los Confines.",
        editorial: "Suma de Letras",
        img: "/images/obras/oficio-de-buhos.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 3
    },
    {
        id: 16,
        year: 2013,
        titulo: "El perro del peregrino",
        editorial: "Alfaguara Juvenil – Penguin Random House",
        resenia: "Un peregrino salva a un cachorro que fue arrojado a las aguas del Tiberíades. Con ayuda de la lavandera, este hombre le da un nombre: Miga de León. A partir de entonces, el perro y el peregrino van juntos: comparten el pan, la alegría y el miedo. Detrás de su padre camina Miga de León y huele el amor, la devoción y la traición de los hombres.<br/> El perro llevará al lector hasta el pie del madero, allí donde termina y comienza esta historia de un amor sin condiciones.",
        img: "/images/obras/el-perro-del-peregrino.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 4
    },
    {
        id: 17,
        year: 2013,
        titulo: "Una isla en el tiempo",
        resenia: "Ivan vive junto a su abuela Amparo y una pareja de palomas Aura y Thales, pero la irresponsabilidad del hombre ante la naturaleza hace que esta se revele trayendo largos tiempos de inundaciones sobre la tierra.<br/> Un relato o novela corta de Liliana Bodoc, donde el amor y la fantasía son la salvación de sus personajes.",
        editorial: "Gente Nueva",
        img: "/images/obras/una-isla-en-el-tiempo.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 4
    },
    {
        id: 18,
        year: 2013,
        titulo: "Memorias impuras",
        resenia: "Una novela tan parecida a nuestro pasado que se lee con la avidez lógica de quien asiste a su propia historia.  En un tiempo de revoluciones, un pueblo sueña en sublevarse, bajo la conducción de los maestros de la Logia Bagual.",
        editorial: "Ed. Planeta Reedición Editorial Alfaguara Penguin Libros",
        img: "/images/obras/memorias-impuras.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 4
    },
    {
        id: 19,
        year: 2014,
        titulo: "'La belleza y la luz' en Las voces del fuego",
        resenia: "Es la versión de una leyenda del pueblo arhuaco, que habita en Colombia, en la zona de Sierra Nevada; es una apasionante y trágica historia de amor que explica la llegada al cielo del Sol y de la Luna. El juego, de Jorge Grubissich, recrea un mito de la antigua civilización maya.",
        editorial: "SM",
        img: "/images/obras/las-voces-del-fuego.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 4
    },
    {
        id: 20,
        year: 2014,
        titulo: "'El último viernes' en Diez en un barco",
        resenia: "Leer puede ser un modo de afrontar el mundo, de atravesar distancias, de descifrar mensajes ocultos en las olas. Escribir puede ser la diferencia entre la vida y la muerte, entre el amor y la soledad, entre la comprensión y la desgracia, la ultima frontera contra el olvido o la injusticia. En este libro, el lector navegara por mares calmos y tempestuosos en donde los textos conversan, con diferentes voces, sobre un mismo tema: la lectura y escritura.",
        editorial: "SM Argentina",
        img: "/images/obras/diez-en-un-barco.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 4
    },
    {
        id: 21,
        year: 2015,
        titulo: "'3155 o el número de la tristeza' en La historia se hace ficción",
        editorial: " Ed. Norma",
        img: "/images/obras/la-historia-se-hace-ficcion.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 5
    },
    {
        id: 22,
        year: 2015,
        titulo: "Tiempo de dragones I: La profecía imperfecta",
        resenia: "El tiempo de hermandad entre humanos y dragones es destruido por el linaje Dratewka, pero una profecía advierte sobre la llegada de un Elegido, destinado a restablecer la armonía.",
        editorial: "SM Argentina",
        img: "/images/obras/tiempo-de-dragones.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 5
    },
    {
        id: 23,
        year: 2015,
        titulo: "Elementales - Libro 1: Ondinas",
        resenia: "Este libro contienen cuentos en torno a uno de los cuatro elementos: el agua. A través de su impecable pluma, Liliana Bodoc nos envuelve en todo tipo de historias: una historia sobre el llanto, otra sobre los ríos, incluso los mares y la lluvia están presentes.",
        editorial: "Alfaguara  Penguin Libros",
        img: "/images/obras/ondinas.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 5
    },
    {
        id: 24,
        year: 2015,
        titulo: " Elementales - Libro 2: Salamandras",
        resenia: "Este libro contiene cuentos en torno a uno de los cuatro elementos: el fuego. A través de su impecable pluma, Liliana Bodoc nos envuelve en todo tipo de historias: una historia de amor y hogueras de la inquisición, un relato futurista sobre la escasez del sol, una obra de teatro sobre la vendedora de cerillas, un cuento histórico sobre la bomba de Hiroshima, un gracioso mail de amor despechado, entre otros.",
        editorial: "Alfaguara",
        img: "/images/obras/salamandras.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 5
    },
    {
        id: 25,
        year: 2016,
        titulo: "Elementales - Libro 3: Silfos",
        resenia: "Este libros reúne diez cuentos de aire: el tornado, el humo, los sueños, la música y los chismes invaden estas páginas. Los relatos despeinan, suspiran, enamoran y hacen volar al lector. La autora propone, en este libro de la serie Elementos, que nos dejemos remontar por las historias hacia donde nos lleve el impredecible destino del viento.",
        editorial: "Alfaguara",
        img: "/images/obras/silfos.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 5
    },
    {
        id: 26,
        year: 2016,
        titulo: "Libro 4: Nomos",
        resenia: "Este libros reúne diez cuentos de tierra: el planeta, las cuevas, la arcilla, los túneles, la arena y los mitos invaden estas páginas. Los relatos cavan, moldean, hacen girar y envuelven al lector. La autora propone, en este libro de la serie Elementos, que nos adentremos en el corazón de las historias hasta encontrarnos con el dulce canto de la madre tierra.",
        editorial: "Alfaguara",
        img: "/images/obras/nomos.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 6
    },
    {
        id: 27,
        year: 2016,
        titulo: "Simi Titi",
        resenia: "Simi Tití tiene una gran intriga: ¿cómo se verá el mundo con anteojos? ¿Habrá secretos por descubrir, colores por conocer o formas raras escondidas? A pesar de que su mamá le prohibió probarse anteojos ajenos, Simi Tití no puede resistirse... ¡a mirar el mundo con otros ojos! Una historia bellamente ilustrada que nos invita a reflexionar sobre la empatía y el respeto por la mirada de los otros.",
        editorial: "Editorial Kapelusz Norma ",
        img: "/images/obras/simi-titi.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 6
    },
    {
        id: 28,
        year: 2016,
        titulo: "Aprendiz de dragón",
        resenia: "“Entre niños y dragones no hacen falta explicaciones...”",
        editorial: "SM",
        img: "/images/obras/aprendiz-del-dragon.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 6
    },
    {
        id: 29,
        year: 2017,
        titulo: "Un mar para Emilia",
        resenia: "Emilia sueña con conocer el mar porque vive entre montañas y vientos que le susurran sueños...",
        editorial: "Bambalí",
        img: "/images/obras/un-mar-para-emilia.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 6
    },
    {
        id: 30,
        year: 2017,
        titulo: "Tiempo de dragones 2: El elegido en su soledad",
        resenia: "“El Elegido debía ponerse al frente de la Profecía y conducir la gran rebelión del año 1000. Posibilitar el regreso a un mundo donde humanos y dragones convivieran en hermandad … <br/> Segunda entrega de una excepcional saga sobre la hermandad entre humanos y dragones.",
        editorial: "Pez de Menta",
        img: "/images/obras/tiempo-de-dragoness.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 6
    },
    {
        id: 31,
        year: 2017,
        titulo: " El Arte de los Confines: VENADO",
        resenia: "Libro álbum . Trabajo conjunto de Liliana Bodoc y el artista Gonzalo Kenny. Juntos se propusieron ilustrar el universo de La Saga de Los Confines. Los textos son inéditos y más de 50 ilustraciones originales completan un diálogo único y esencial.",
        editorial: "Pez de Menta",
        img: "/images/obras/el-arte-de-los-confines.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 7
    },
    {
        id: 32,
        year: 2017,
        titulo: " Elisa, La Rosa Inesperada",
        resenia: "Su primera canción de cuna fue una cumbia. Después, cuando Naranja Dulce salió de gira a buscarse un futuro, Elisa —entre la plancha y el rociador— eligió otra música. Sin grandes anhelos, aceptó una invitación que prometía un paisaje diferente y algunas palabras en inglés. Pero el diablo se interpuso y empujó su destino hacia el norte. Allí, una voz de niña de piedra y el silbido de un viejo la alertaron del peligro. Elisa siente la amenaza en el cuerpo, y solo aliviará su pena cuando encuentre sus propias palabras.",
        editorial: "Norma",
        img: "/images/obras/elisa.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 7
    },
    {
        id: 33,
        year: 2017,
        titulo: " Yo, el espejo africano",
        resenia: "Basado en la novela de la autora El espejo africano, es un texto teatral comprometido con el valor irrenunciable de la libertad,",
        editorial: "SM",
        img: "/images/obras/yo-el-espejo-africano.png",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 7
    },
    {
        id: 34,
        year: 2018,
        titulo: "Mi mamá me ama - Ediciones culturales de Mendoza",
        resenia: "“Que no se tropiece”. “Que no se equivoque”. “Que no pase vergüenza”. “Que no le mientan”. “¡Que no le digan la verdad!” La madre de Alicia quiere “proteger” a su hija y se mueve entre miedos y supersticiones hasta decretar que el tiempo muera, cosa imposible cuando el amor atraviesa los muros.",
        editorial: "Ediciones Culturales Mendoza",
        img: "/images/obras/mi-mama-me-ama.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 7
    },
    {
        id: 35,
        year: 2019,
        titulo: " El teatro sucede en colores",
        resenia: "Versión teatral del libro Sucedió en colores. Cinco actos que nos conectan con las emociones y sentimientos profundos.",
        editorial: "Alfaguara",
        img: "/images/obras/sucede-en-colores.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 7
    },
    {
        id: 36,
        year: 2020,
        titulo: "Memorias de una alcahueta",
        resenia: "La obra de teatro póstume de Liliana Bodoc. Es una historia inédita dentro del mundo de ficción que Liliana creó en su novela Memorias Impuras, es decir, una historia nueva dentro de otra conocida en el mundo fantástico de su literatura.        ",
        editorial: "Ediciones Hasta Trilce ",
        img: "/images/obras/memorias-de-una-alcahueta.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 8
    },
    {
        id: 37,
        year: 2021,
        titulo: "Una versión de Dios",
        resenia: "Un libro inédito de Liliana Bodoc, ilustrado por Ana Luisa Stok sobre lo imprevisible, sobre el tiempo y su fugacidad.<br/> Varias historias se entrelazan para forma a esta versión, que Liliana llamó de Dios. Y que es, también, una versión del tiempo.",
        editorial: "Guadal",
        img: "/images/obras/una-version-de-dios.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 8
    },
    {
        id: 38,
        year: 2021,
        titulo: " Formas de ver",
        resenia: "Este texto delicioso hasta ahora inédito de Liliana Bodoc cobra vida con las ilustraciones de Nadia Romero para recordarnos la belleza de las cosas pequeñas ..",
        editorial: "Pez de Menta",
        img: "/images/obras/formas-de-ver.jpg",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 8
    },
    {
        id: 39,
        year: 2022,
        titulo: "Tiempo de dragones 3: Crónicas del mundo",
        resenia: "La historia del Elegido llega a su fin, como esta inolvidable novela en la que hombres y dragones prueban todas las combinaciones de la guerra para tratar de alcanzar la paz.",
        editorial: "Penguin R.House",
        img: "/images/obras/tiempo-de-dragonesss.png}",
        price: Math.floor(Math.random() * 10000),
        stock: Math.floor(Math.random() * 1000),
        page: 8
    },
]

export default obras;