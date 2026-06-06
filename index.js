var gradients = [
    ["#B5A66C" , "#376B39"],
    ["#A91C51" , "#9AED55"],
    ["#9C7DC7" , "#2D0B31"],
    ["#6B399E" , "#4E1908"],
    ["#35D85C" , "#97CC2F"],
    ["#A1DA42" , "#1B1759"],
    ["#BA8D80" , "#9D5963"],
    ["#0F1199" , "#C21A61"],
    ["#1B86DD" , "#450E46"],
    ["#989D55" , "#01122A"],
    ["#D51C9C" , "#6EC2C0"],
    ["#FA060E" , "#508535"],
    ["#FE0C0A" , "#E997CC"],
    ["#A18FD3" , "#6946B6"],
    ["#407393" , "#910627"],
    ["#392534" , "#10EB90"],
    ["#3E1075" , "#A70EC5"],
    ["#B6C0A1" , "#00DCE6"],
    ["#F355C6" , "#3662FF"],
    ["#D69055" , "#49BA65"],
    ["#62A960" , "#D64FB2"],
    ["#5048EA" , "#9AE2E5"],
    ["#FF6B6B" , "#4ECDC4"], 
    ["#667EEA" , "#764BA2"], 
    ["#F093FB" , "#F5576C"], 
    ["#4FACFE" , "#00F2FE"], 
    ["#43E97B" , "#38F9D7"],
    ["#FA709A" , "#FEE140"],  
    ["#30CFD0" , "#330867"], 
    ["#A8EDEA" , "#FED6E3"], 
    ["#FF9A9E" , "#FAD0C4"], 
    ["#FFECD2" , "#FCB69F"], 
    ["#84FAB0" , "#8FD3F4"], 
    ["#0BA360" , "#3CBA92"] 
];

var btnColors = [  "#775ee0" , "#046434" , "#333333" , "#e74141ab" , "#dfd21c" , "#a43ee6" , "#44a520" , "#aa2900" , "#5d8ed8" , "#6e750f" , "#f03d07" , "#1ef33b" ,
    "#0a3697" , "#636d05" , "#c9089f" , "#f00d0d" , "#0cd682" , "#eb19eb" , "#194e14" ,
    "#fc12b6" , "#08b8fd" , "#aa0047" ,  "#121212","#f57474","#1A1B26","#7fb9b6","#d8a705","#f78db0","#0F172A","#1E1E1E","#E8F5E8","#e9c58c","#e54bfd","#0494fa",

];

var textColors = ["#fa4a14" , "#dd9613" , "#02611e" , "#aa0063" , "#29c78a" ,
    "#5c1d09" , "#1726f0" , "#e63b3b" , "#9fd608" , "#455811" , "#076f7c" ,
    "#df0c76" , "#29665cc5" , "#6820f0ab" , "#dbb405" , "#074670" , "#5c0b3d57" ,
    "#05f384" , "#027e3a" , "#f149bf" , "#92098b" , "#5791c0" , "#86c5f3",
    "#c982d4",     "#684204",    "#93d393",    "#3f3d3d",    "#12368b",    "#e4638e",    "#8d7a3d",    "#8bccc9",    "#1A1B26",    "#F5F5F5",    "#121212"
]

var i = 0

function changeGradient(){
    var color1 = gradients[i][0];
    var color2 = gradients[i][1];

    //Background
    document.body.style.background=`linear-gradient(45deg, ${color1}, ${color2})`;

    //Hex Color text
    document.getElementById("hexColor").innerText= `${color1} → ${color2}`;

    //Button Color change
    document.getElementById("btn").style.background = btnColors[i];

    //H1 Clor change
    document.getElementById("title").style.color = textColors[i];

    i++

    if(i >= gradients.length){
        i = 0
    }
}