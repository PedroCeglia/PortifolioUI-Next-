// Dark Thema
const darkBackgroundColor = {
    bc0:"#000000", // Black
    bc1:"#333333", // Dark
    bc2:"#228b22", // DarkGreen
    bc3:"#556b2f", // MilitaryGreen
    bc4:"#00ff00", // Green
    bc5:"#98ff98", // LightGreen
    bc6:"#f5f5f5", // White Gray
    bc7:"#ffffff", // White
}
const darkColor = {
    c1:"#F6F7F7", // Light 
    c2:"#333333",  // Dark
    c3:"#ffffff", // White
    c4:"#000000"  // Black

}
const gradientColors ={
    gc0:"linear-gradient(90deg, hsla(0, 0%, 20%, 1) 0%, hsla(317, 29%, 42%, 1) 100%);"
}
const darkTheme = {
    backgroundColor:darkBackgroundColor,
    color:darkColor,
    getDarkColorRGBA:(opacityField)=>{
        return `rgba(48,48,48,${opacityField})`
    },
    getLightColorRGBA:(opacityField)=>{
        return `rgba(245,245,245,${opacityField})`
    },
    createSimpleGradient:(color1, color2)=>{
        return `linear-gradient(to right, ${color1}, ${color2});`
    }
}
export default darkTheme
