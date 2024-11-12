const colors = document.querySelector(":root")

const primary = getComputedStyle(colors).getPropertyValue("--primary");
const primary_accent = getComputedStyle(colors).getPropertyValue("--primary_accent");
const secondary = getComputedStyle(colors).getPropertyValue("--secondary");
const first = getComputedStyle(colors).getPropertyValue("--first");
const second = getComputedStyle(colors).getPropertyValue("--second");
const third = getComputedStyle(colors).getPropertyValue("--third");
const hover_link = getComputedStyle(colors).getPropertyValue("--hover_link");

export const theme_colours = {
    primary,primary_accent,secondary,first,second,third,hover_link
}

export const hero_animation_colours =[
    "#FF2975","#F222FF","#8C1EFF","#00cc88","#04BFAD",

]