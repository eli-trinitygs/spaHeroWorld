import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias. Miembro fundador de la Liga de la Justicia de América, Aquaman ha luchado junto a Superman, Batman y Wonder Woman, y se defendió contra las mayores amenazas que el universo haya visto. A pesar de que muchos lo malinterpretan como alguien que simplemente habla con los peces, la súper fuerza de Aquaman y su destreza en la lucha lo convierten en una fuerza a tener en cuenta. Sus habilidades telepáticas lo convierten en una de las mentes más poderosas del planeta. Si uno elige subestimar al rey del mar, lo hace bajo su propio riesgo.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». Batman, uno de los personajes ficticios más emblemáticos del mundo, ha dedicado su vida a una cruzada interminable, una guerra contra todos los delincuentes en nombre de sus padres asesinados, que se lo quitaron cuando era solo un niño. Desde esa noche trágica, ha entrenado su cuerpo y su mente a la perfección casi física para ser un Superhéroe hecho a sí mismo. Ha desarrollado un arsenal de tecnología que avergonzaría a la mayoría de los ejércitos. Y ha reunido equipos de sus compañeros Superhéroes de DC, como Justice League, The Outsiders y Batman, Incorporated.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos. Daredevil lleva un billy club. Como Matt Murdock, lo mantiene disfrazado de bastón de ciego, pero en realidad es un arma de dos partes. La sección inferior es un bastón de combate ponderado directo. La otra sección es un gancho de agarre con resorte con un cable largo.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia). La fuerza de Hulk permanece en el nivel superior de todos los súper seres humanos en la Tierra y aumenta exponencialmente a medida que crece su ira. Esta fuerza le otorga no solo la destreza de la parte superior del cuerpo, sino también la capacidad de saltar grandes distancias y aterrizar sin hacerse daño. La piel de Hulk es casi impenetrable y su capacidad pulmonar permite largos períodos de inmersión en agua, exposición a muchas formas de gases e incluso la supervivencia temporal en el vacío sin aire del espacio exterior.",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang). La vida de Hal como linterna verde no ha sido fácil. Ha tenido que luchar no solo contra enemigos, sino a menudo amigos, colegas y seres queridos. Pero a pesar de la tensión que su identidad de Green Lantern ha puesto en su vida, Hal es un hombre honesto que puede operar sin miedo y siempre está dispuesto a proteger a los necesitados, ya sea solo, con el Cuerpo o junto con la Liga de la Justicia y el otro Súper de la Tierra. Héroes Porque Hal ha hecho el juramento de cada Linterna Verde: que ningún mal escapará a su vista.",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro. Además, Spider-Man lleva pequeños rastreadores de arañas que una vez colocados sobre una persona u objeto transmiten una señal especializada que el héroe puede identificar con su sentido de araña y, por lo tanto, le permite rastrear hasta su punto de origen.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano. Mientras que es un breve miembro del equipo canadiense de superhéroes conocido como Alpha Flight, Wolverine se une a los X-Men a instancias del profesor Charles Xavier. Este es su hogar más emblemático y el lugar donde entra en una relación intermitente con el telépata Jean Grey. Sin embargo, su relación existente con Scott Summers (AKA Cyclope) crea un complejo triángulo amoroso entre los tres.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    },
    {
      nombre: "Capitán América",
      bio: "Después de ser infundido con el suero Super-Soldier, el cuerpo de Steve Roger alcanzó los límites más altos de la perfección humana en fuerza, resistencia, agilidad y durabilidad. Con el entrenamiento, aprendió a usar estos rasgos al unísono perfecto en cualquier situación. Debido a esto, muchos lo ven como súper humano, pero en verdad mantiene un estricto régimen de ejercicio para reforzar la transformación del suero de su forma física. Además, el carisma de Rogers y su habilidad para tomar decisiones astutas también se reconocen como estar en el nivel más alto de cualquier humano en la Tierra. Algunos enemigos del Capitán América incluyen al teniente derecho de la  Roja Crossbones, la hija de la Calavera Sin, la extraña entidad conocida como MODOK, el psiquiatra rebelde Dr. Faustus, el acróbata Batroc, el anarquista Flag Smasher y los Supervillanos con temas de serpientes que conforman la temida Sociedad de la Serpiente.",
      img: "assets/img/capitan-america.png",
      aparicion: "1941-03",
      casa: "Marvel"
    },
    {
      nombre: "Iron Man",
      bio: "Genio. Multimillonario Playboy. Filántropo. La confianza de Tony Stark solo se corresponde con sus habilidades de alto vuelo como el héroe llamado Iron Man. Desde el primer traje construido en una cueva, Tony ha creado docenas de nuevos trajes y mejoras a lo largo de los años. Sin embargo, en los más de 50 modelos de Iron Man, hay capacidades comunes de ofensiva y defensa que se encuentran en la mayoría de las iteraciones. El arma principal contenida en cada traje, los rayos repulsores usan pulsos de energía para repeler e interrumpir a los enemigos y se generan a través de los guanteletes del traje. Los propulsores del traje permiten a Stark volar lo suficientemente rápido como para romper la barrera del sonido y maniobrar más rápido que cualquier avión de combate.",
      img: "assets/img/ironman.png",
      aparicion: "1963-03",
      casa: "Marvel"
    },
    {
      nombre: "Flash",
      bio: "En la década de 1940, el estudiante universitario Jay Garrick adquirió sus habilidades de súper velocidad en un accidente de laboratorio al azar y se convirtió en el primer superhéroe de DC en llamarse Flash. Años más tarde, Jay fue sucedido por el científico policial Barry Allen, hasta que el ex compañero de Barry, Wally West, tomó el manto en un momento en que Barry fue considerado muerto. Pero, cuando Barry regresó, se convirtió en Flash una vez más. Las tres generaciones de velocistas han sido miembros fundamentales de Justice Society y Justice League. Flash no solo domina la velocidad, sino también el tiempo, y a menudo ha usado sus poderes para viajar a través de diferentes épocas e incluso a otras dimensiones. Aunque Flash no siempre ha sido lo suficientemente rápido como para superar la tragedia personal cuando ha llegado a él, siempre hace todo lo posible para evitar que le pase lo mismo a la gente de Central City y Keystone City. Al hacerlo, se ha ganado un lugar entre los mejores superhéroes que el Universo DC haya conocido.",
      img: "assets/img/flash.png",
      aparicion: "1940-01",
      casa: "DC"
    },
    {
      nombre: "Mister Fantastic",
      bio: "Alterado por los rayos cósmicos, todo el cuerpo de Reed Richards puede estirarse y expandirse de múltiples maneras, así como condensarse y compactarse. Puede formar varias formas con él, así como volverse ultradelgado y ultradenso, y este último lo ayuda a usar sus puños, por ejemplo, como arietes y similares. En algunas ocasiones, Richards ha contenido material explosivo con su cuerpo al estirarse alrededor de él e incluso ha alterado sus rasgos para disfrazarse como una persona diferente. Todas estas características de sus habilidades crean estrés en su cuerpo y cuanto mayor es la longitud a la que se estira, más cobra su precio.",
      img: "assets/img/mister-fantastico.png",
      aparicion: "1961-11",
      casa: "Marvel"
    },
    {
      nombre: "Robín",
      bio: "Todos los niños quieren ser Batman, pero ¿tienes una vida de entrenamiento? ¿Una fortuna de mil millones de dólares? El sueño se desvanece bastante rápido. Bien, tal vez no puedas ser Batman ... pero eso no significa que no puedas ser adoptado por él. El acróbata Dick Grayson fue el miembro más joven del acto de circo que desafió la muerte de sus padres. Pero después de su asesinato a sangre fría, Dick juró venganza. Al ver una pieza genuina de sí mismo en el niño, Batman lo acogió y le dio una mejor salida para su ira. Al convertirse en el protegido de Batman, Robin es un luchador experto y un acróbata asombroso, con el ejemplo más difícil del mundo para estar a la altura. Pero la verdadera fuerza de Boy Wonder puede estar en no ser Batman, y en proporcionar un faro de esperanza y familia a lo largo de la cruzada cruzada del Caballero Oscuro.",
      img: "assets/img/robin.png",
      aparicion: "1940-04",
      casa: "DC"
    },
    {
      nombre: "Shazam",
      bio: "Cuando Billy Batson dice el nombre de un viejo mago, se transforma en el mortal más poderoso del mundo: ¡Shazam! Los padres de Billy Batson murieron cuando aún era un bebé. El niño huérfano creía que no tenía a nadie en quien confiar y tenía que valerse por sí mismo. Pero un día, fue guiado a la Roca de la Eternidad, donde esperaba el antiguo mago Shazam. El mundo necesitaba héroes y el niño se convirtió en el nuevo campeón del mago, capaz de transformarse en un superhéroe adulto al invocar un rayo mágico. Ahora, siempre que el mal deba detenerse o las personas necesiten ayuda, ¡la Tierra puede confiar en el poder de Shazam!",
      img: "assets/img/shazam.png",
      aparicion: "1940-02",
      casa: "DC"
    },
    {
      nombre: "Superman",
      bio: "Desde su uniforme azul hasta su capa roja que fluye hasta el escudo -S- en su pecho, Superman es uno de los Superhéroes DC más reconocidos y queridos de todos los tiempos. El hombre de acero es el último símbolo de la verdad, la justicia y la esperanza. Es el primer superhéroe del mundo y una luz de guía para todos. La punta de lanza en una revolución que cambiaría el panorama de la cultura pop, Superman ha pasado los últimos ochenta años redefiniendo lo que significa defender la verdad, la justicia y el estilo estadounidense. El último superviviente del planeta condenado Krypton, criado en el tranquilo corazón de Smallville, Kansas, Superman es tanto una leyenda como un hombre: el estándar de oro del heroísmo, la compasión y la responsabilidad.",
      img: "assets/img/superman.png",
      aparicion: "1938-04-18",
      casa: "DC"
    },
    {
      nombre: "Cíclope",
      bio: "Cuando Scott Summers todavía era un niño, su padre llevaba a su familia a Canadá cuando su nave fue atacada por una nave espacial Shi'ar. Dándole a Scott el único paracaídas a bordo del avión, arrojó a sus dos hijos fuera del avión y los arrojó al desierto canadiense. Los dos hermanos fueron llevados a un orfanato dirigido por Sinister, quien luego los adoptó a los dos, considerándolos lo más cercano que Sinister había encontrado a la perfección genética. Scott se convirtió rápidamente en el favorito de Sinister de sus dos hijos debido a los genes y la capacidad de liderazgo de Scott. Este favoritismo tensaría la relación entre Scott y Alex, quien se puso celoso de su hermano Scott. Sin que Scott o Alex lo supieran, su verdadero padre, Christopher, había logrado escapar del Shi'ar y había regresado a la Tierra en una aeronave Shi'ar. Desafortunadamente, también fue infectado con un huevo Brood y su nave fue capturada por las fuerzas de Apocalypse. Fue llevado a los corrales de cría donde Henry McCoy lo experimentó durante varios años. Cyclops comenzó a cuestionar el tratamiento de los prisioneros en los corrales de cría y comenzó a liberarlos en secreto. En una ocasión, Jean Gray fue capturado por Cyclops durante una misión con los X-Men y enviado al laboratorio de Sinister. Sin embargo, Cyclops se sintió atraído por su espíritu y dedicación a su vida pasada. Contempló devolver a Jean a sus amigos, pero Arma X se había infiltrado en los laboratorios y había liberado a Jean, encontrando a Cíclope en el camino. Los dos lucharon en una feroz batalla con el Arma X sacando el ojo izquierdo de Cíclope, mientras que Cíclope tomó represalias al destruir la mano izquierda del Arma X con una explosión óptica. Tanto Jean como Weapon X lograron escapar, pero se mantuvo un resentimiento entre Cyclops y Weapon X.",
      img: "assets/img/ciclope.png",
      aparicion: "1963",
      casa: "Marvel"
    },
    {
      nombre: "Hawkeye",
      bio: "Cuando Scott Summers todavía era un niño, su padre llevaba a su familia a Canadá cuando su nave fue atacada por una nave espacial Shi'ar. Dándole a Scott el único paracaídas a bordo del avión, arrojó a sus dos hijos fuera del avión y los arrojó al desierto canadiense. Los dos hermanos fueron llevados a un orfanato dirigido por Sinister, quien luego los adoptó a los dos, considerándolos lo más cercano que Sinister había encontrado a la perfección genética. Scott se convirtió rápidamente en el favorito de Sinister de sus dos hijos debido a los genes y la capacidad de liderazgo de Scott. Este favoritismo tensaría la relación entre Scott y Alex, quien se puso celoso de su hermano Scott. Sin que Scott o Alex lo supieran, su verdadero padre, Christopher, había logrado escapar del Shi'ar y había regresado a la Tierra en una aeronave Shi'ar. Desafortunadamente, también fue infectado con un huevo Brood y su nave fue capturada por las fuerzas de Apocalypse. Fue llevado a los corrales de cría donde Henry McCoy lo experimentó durante varios años. Cyclops comenzó a cuestionar el tratamiento de los prisioneros en los corrales de cría y comenzó a liberarlos en secreto. En una ocasión, Jean Gray fue capturado por Cyclops durante una misión con los X-Men y enviado al laboratorio de Sinister. Sin embargo, Cyclops se sintió atraído por su espíritu y dedicación a su vida pasada. Contempló devolver a Jean a sus amigos, pero Arma X se había infiltrado en los laboratorios y había liberado a Jean, encontrando a Cíclope en el camino. Los dos lucharon en una feroz batalla con el Arma X sacando el ojo izquierdo de Cíclope, mientras que Cíclope tomó represalias al destruir la mano izquierda del Arma X con una explosión óptica. Tanto Jean como Weapon X lograron escapar, pero se mantuvo un resentimiento entre Cyclops y Weapon X.",
      img: "assets/img/hawkeye.png",
      aparicion: "1964-09-00",
      casa: "Marvel"
    },
{
      nombre: "Raven",
      bio: "Raven tuvo una infancia muy difícil y después de descubrir que su padre era un demonio su vida no paró de complicarse cada vez más. Es capaz de crear portales para otras dimensiones, materializar objetos a partir de la nada y conjurar diferentes tipos de hechizos, entre muchas otras habilidades. Además de todo esto, es extremadamente peligrosa para todos los Kryptonianos que son súper sensibles a la magia.",
      img: "assets/img/raven.png",
      aparicion: "1980-10--",
      casa: "DC"
    },
{
      nombre: "Zatanna",
      bio: "Teóricamente esta superheroína puede vencer al mismísimo Superman. Zatanna es una integrante de la Liga de la Justicia y de la Liga de Justicia Oscura, un equipo que reúne a los mejores personajes relacionados con las fuerzas místicas. A través de su magia, Zatanna consigue controlar cualquiera de los cuatro elementos, pero eso es tan sólo una pequeña muestra de su verdadero poder.",
      img: "assets/img/zatanna.png",
      aparicion: "1964-11--",
      casa: "DC"
    },
{
      nombre: "Mera",
      bio: "Mera es la esposa de Aquaman y la Reina de Atlantis y de los Océanos. A pesar de eso, Mera no nació en Atlantis, sino que procede de una dimensión paralela llamada Xebel. Conoció a Aquaman y se enamoró perdidamente del héroe de Atlantis, lo que le hizo abandonar su tierra natal y la llevó a sentarse al lado de Aquaman en el trono de la mística ciudad de Atlantis.",
      img: "assets/img/mera.png",
      aparicion: "1963-09--",
      casa: "DC"
    },
{
      nombre: "Starfire",
      bio: "Starfire era una habitante del planeta Tamaran, que después de ver su planeta destruido, decidió viajar a la Tierra y encontró allí un nuevo hogar.Starfire es una alienígena, y su lista de poderes es realmente impresionante. Además de la tradicional superfuerza, consigue hablar en cualquier lengua, volar y hasta disparar rayos de energía. Sin duda, el planeta Tierra está más que agradecido por contar con una nueva habitante con unas características tan especiales.",
      img: "assets/img/starfire.png",
      aparicion: "1982-10--",
      casa: "DC"
    },
{
      nombre: "Tormenta",
      bio: "Ororo Munroe, la diosa africana con el poder de controlar el clima y esposa (intermitente) de T'Challa (Black Panther) es uno de los personajes más queridos por los aficionados. Ororo puede volar, lanzar rayos, manipular la temperatura y hasta desatar un torbellino de gran potencia. Sus emociones están estrechamente ligadas a sus poderes, por lo que su capacidad de autocontrolarse es la que hace que no desate todo el potencial de su poder. ¡Te aseguramos que no querrás ver a Storm enfadada!",
      img: "assets/img/tormenta.png",
      aparicion: "1975-05",
      casa: "Marvel"
    },
{
      nombre: "Black Widow",
      bio: "Natasha Romanoff no necesita tener poderes sobrehumanos para estar en esta lista. Durante su estancia en la Red Room (la Habitación Roja, una instalación de entrenamiento soviético para espías altamente especializadas), Natasha recibió una variante del Suero del Supersoldado (el mismo que el del Capitán América), lo que hizo que sus capacidades físicas (fuerza, resistencia, agilidad) se elevaran al máximo, y que su cuerpo sea inmune al envejecimiento y a las enfermedades. Es experta en artes marciales y en la lucha cuerpo a cuerpo, especialista en armas y excelente tiradora.",
      img: "assets/img/black-widow.png",
      aparicion: "1964-04",
      casa: "Marvel"
    },
{
      nombre: "Gamora",
      bio: "Gamora, la última de su especie (los Zen Whoberi) y la mujer más peligrosa del universo. Como miembro de los Guardianes de la Galaxia se ha enfrentado a terribles amenazas cósmicas,sin olvidar que es la hija adoptiva de Thanos. Thanos la sometió a tratamientos para elevar su nivel de poder y la entrenó para convertirse en una peligrosa combatiente cuerpo a cuerpo, experta en armas y en técnicas de infiltración. Sigilosa y letal, esta experta asesina es capaz de derrotar a enemigos mucho más poderosos que ella. Posee fuerza, durabilidad y agilidad sobrehumana, además de un factor de curación que la hace casi imbatible.",
      img: "assets/img/gamora.png",
      aparicion: "1975-06",
      casa: "Marvel"
    },
{
      nombre: "Scarlet Witch",
      bio: "Wanda Maximoff tal vez sea el personaje más poderoso que existe en el Universo Marvel, con permiso de Jean Grey. La hija (o no, es muy complicado) de Magneto tiene la habilidad de manipular la probabilidad mediante hechizos, lo que le da un inmenso poder sobre la realidad y la creación de posibilidades infinitas. Posteriormente se especuló con que su poder se generaba a partir de la combinación de sus habilidades mutantes con la Magia del Caos, pero finalmente (esto es Marvel, donde todo cambia continuamente) se reveló que lo que hacía Wanda era reeescribir la realidad constantemente. ¡Imagínate el peligro que tiene esta mujer para el multiverso y para el mismo tejido de la realidad!.",
      img: "assets/img/scarlet-witch.png",
      aparicion: "1964",
      casa: "Marvel"
    },
{
      nombre: "Mujer Maravilla",
      bio: "¡Diana Prince, la Reina de las Amazonas, es sin duda la superheroína más popular del mundo! Actualmente, la actriz Gal Gadot es la responsable de dar vida en la pantalla a este fantástico personaje. Una de las mayores defensoras de la Paz en todo el mundo, Wonder Woman es también uno de los personajes más poderosos del Universo DC. Hija de Zeus y de la Reina Hippolyta, se convirtió más tarde en uno de los miembros fundadores de la Liga de la Justicia.",
      img: "assets/img/mujer-maravilla.png",
      aparicion: "1941-12",
      casa: "DC"
    }
  ];


  constructor() {
    console.log('Servicio heroico listo para usarse');
   }

   //crear metodo para acceder a la data
   getHeroes():Heroe[] {
     return this.heroes;
   }
   getHeroe(idx: string) {
     return this.heroes[idx];
   }

   //FUNCION BUSCAR HEROES
   buscarHeroes( termino:string) {
     //crear nuevo arreglo
let heroesArr:Heroe[] = [];
//pasar termino recibido a minuscula
termino = termino.toLowerCase();
//barrido del arreglo de heroes para busca cual es el que coincide

// for(let heroe of this.heroes)
for(let i= 0; i < this.heroes.length; i++){
    let heroe = this.heroes[i];

  //comparar en minuscula con el termino 
  let nombre = heroe.nombre.toLowerCase();
    if(nombre.indexOf(termino) >= 0){
      heroe.idx = i;
      heroesArr.push(heroe)
    }
}
  return heroesArr;
   }
}

//creando interface
export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}