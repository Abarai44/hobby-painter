import { Ultra } from "next/font/google";
import { list } from "postcss";

export const navLinks=[
    {
        id:"#about",
        title:"A propos",
    },
    {
        id:"#service",
        title:"Service de peinture",
    },
    {
        id:"#galerie",
        title:"Galerie",
    },
    {
        id:"#contact",
        title:"Contact",
    },

];

export const TAB_DATA=[
    {
        id:"bronze",
        title:"bronze",
        texte:"Vos figurines peintes et parées pour votre prochain tournoi !Destiné avant tout aux joueurs, notre offre bronze vous permettra de ne plus avoir de figurines grises sur votre table de jeu !",
        img:"/images/01_bronze_studio.png"
    },
    {
        id:"silver",
        title:"silver",
        texte:"Idéal pour parader sur le champ de bataille. Le niveau Silver vous garantit une base propre avec un ombrage et un éclaircissement sur les éléments importants des figurines. Une belle manière d’avoir des unités pour votre armée avec une grande qualité visuelle pour un budget raisonnable.",
        img:"/images/silver_studio.png"
    },
    {
        id:"gold",
        title:"gold",
        texte:"Notre exigence au niveau Gold est d’assurer que vos pièces se démarquent des autres. L’ensemble des éléments composant vos figurines sont éclaircis pour une finition parfaite. Le Gold est fait pour vous si vous souhaitez une armée avec un fort niveau de détails sur le champ de bataille et une qualité de peinture plus poussée.",
        img:"/images/01_gold_studio.png"
    },
]

export const projectsData = [
    {
        id:1,
        title:"Marines compagnie de la mort",
        level:"Tabletop++",
        image:"/images/projects/cdlm-min.JPG",
        tag:["all","perso"],
    },
    {
        id:2,
        title:"Succube",
        level:"Tabletop",
        image:"/images/projects/succube-min.jpg",
        tag:["all","perso"],
    },
    {
        id:3,
        title:"Dreadnought",
        level:"Tabletop++",
        image:"/images/projects/dread-min.jpg",
        tag:["all","perso"],
    },
    {
        id:4,
        title:"Guardes Fantômes",
        level:"Tabletop+",
        image:"/images/projects/Fantomes-min.JPG",
        tag:["all","commande"],
    },
    {
        id:5,
        title:"Inceptors Blood Angels",
        level:"Tabletop+",
        image:"/images/projects/inceptor1-min.JPG",
        tag:["all","perso"],
    },
    {
        id:6,
        title:"Mégatrakk Scrapjet",
        level:"Tabletop++",
        image:"/images/projects/ork-min.jpg",
        tag:["all","perso"],
    },
    {
        id:7,
        title:"Assassin Calidus",
        level:"Tabletop++",
        image:"/images/projects/calidus-min.jpg",
        tag:["all","commande"],
    },{
        id:8,
        title:"Chapelain",
        level:"Tabletop++",
        image:"/images/projects/chapelin-min.jpg",
        tag:["all","perso"],
    },{
        id:9,
        title:"Drazhar",
        level:"Tabletop",
        image:"/images/projects/drazar-min.jpg",
        tag:["all","commande"],
    },

]

export const achivements=[
    {
        metrics:'Commandes',
        value:'32',
    },
    {
        metrics:'Figurines peintes',
        value:'524',
    },
    {
        metrics:'Couleurs utilisés',
        value:'78',
    },
    {
        metrics:'Armées perso',
        value:'6',
    },
]

export const etapes=[
    {
        id:'1',
        title:'Le matériel',
        texte:'Au bon artisan les bons outils. Ne vous lancez pas dans la peinture sur figurine avec un matériel inadapté ou de mauvaise qualité. Pour les pinceaux, choisissez-en de différentes tailles en privilégiant la précision. De cela dépendra la perfection de votre oeuvre. Pour la peinture, fiez-vous aux conseils des magasins spécialisés, qui sauront vous aiguiller.',
    },
    {
        id:'2',
        title:'La sous-couche',
        texte:'Indispensable, tous les peintres vous le diront. Elle permet à la peinture placée par dessus de ne pas être “absorbée” par le support. Un intermédiaire dont vous ne pouvez pas vous passer. Débutants, utilisez une sous-couche blanche, la plus simple à manier.',
    },
    {
        id:'3',
        title:'Les aplats',
        texte:"Peignez votre figurine comme si vous lui enfiliez des habits : vêtement par vêtement, couche par couche. Vous reproduirez ainsi parfaitement l'aspect réel de votre figurine.",
    },
    {
        id:'4',
        title:'Le lavis',
        texte:"Le lavis vous permet de créer des effets d'ombre qui ajouteront du réalisme à votre ouvrage. Placé dans les creux, le lavis crée un effet de profondeur qui permet un réalisme intéressant.",
    },
    {
        id:'5',
        title:"L'éclaircissement et vernis",
        texte:"Après l'ombre, la lumière. L'éclairage est une technique permettant d'ajouter des effets de lumière sur votre figurine. Grâce à un trait fin de couleur claire sur les arêtes, vous obtenez cet effet de lumière. Ajoutez-y le vernis. L'étape qui protégera votre figurine du temps. Une étape à ne pas négliger !",
    },
    {
        id:'6',
        title:'Le soclage',
        texte:"Une figurine peinte, c'est bien, mais avec un socle de qualité, c'est mieux. Le socle inscrit la figurine dans son univers. Simple ou complexe, il est indispensable.",
    },
]


