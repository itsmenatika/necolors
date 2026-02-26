type consoleColor = string;
type consoleColorsMulti = string;
type consoleColorRGB = string;

type allColorType = consoleColor | consoleColors | consoleColorsMulti | consoleColorRGB;

const ansiEscape = '\x1b';

/**
 * colors
 */
enum consoleColors{
    Reset = ansiEscape + "[0m",
    NoColor = "",
    Bright = ansiEscape + "[1m",
    Dim = ansiEscape + "[2m",
    Italic = ansiEscape + "[3m",
    Underscore = ansiEscape + "[4m",
    Blink = ansiEscape + "[5m",
    Reverse = ansiEscape + "[7m",
    Hidden = ansiEscape + "[8m",
    StrikeThrough = ansiEscape + "[9m",
    
    FgBlack = ansiEscape + "[30m",
    FgRed = ansiEscape + "[31m",
    FgGreen = ansiEscape + "[32m",
    FgYellow = ansiEscape + "[33m",
    FgBlue = ansiEscape + "[34m",
    FgMagenta = ansiEscape + "[35m",
    FgCyan = ansiEscape + "[36m",
    FgWhite = ansiEscape + "[37m",
    FgGray = ansiEscape + "[90m",
    
    BgBlack = ansiEscape + "[40m",
    BgRed = ansiEscape + "[41m",
    BgGreen = ansiEscape + "[42m",
    BgYellow = ansiEscape + "[43m",
    BgBlue = ansiEscape + "[44m",
    BgMagenta = ansiEscape + "[45m",
    BgCyan = ansiEscape + "[46m",
    BgWhite = ansiEscape + "[47m",
    BgGray = ansiEscape + "[100m",
}

/**
 * generate a new ansi Color with rgb
 * @param red 
 * @param green 
 * @param blue 
 * @returns the ansi color
 */
function generateAnsiColor(red: number, green: number, blue: number): consoleColorRGB {
  return `${ansiEscape}[38;2;${red};${green};${blue}m`;
}


/**
 * the function to combine colors
 * 
 * USE IT TO ENSURE THE COMPATIBILITY WITH THE NEXT VERSION
 * 
 * IT DOESNT WORK with colors created with libraries like chalk or with generateAnsiColor
 * 
 * @param colors colors
 * @returns the combined colors
 */
function combineColors(...colors: consoleColor[]): consoleColorsMulti{
    let toReturn: consoleColorsMulti = "";

    for(let color of colors){
        toReturn += color;
    }

    return toReturn;
}


type brightnessMinecraftPallete = "9" | "0";
type foregroundMinecraftPallete = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "f";
type backgroundMinecarftPallete = "a" | "c" | "d" | "e" | "g" | "h" | "j" | "k";
type controlsMinecraftPallete = "i" | "v" | "u" | "s" | "b" | "f" | "r";
type colorsMinecraftPallete = brightnessMinecraftPallete | foregroundMinecraftPallete | backgroundMinecarftPallete | controlsMinecraftPallete;


/**
 * a pallete of colors associated by only one letter key inspired by minecraft notation
 */
const minecraftColorPallete: Record<colorsMinecraftPallete, consoleColor> = {
    "1": consoleColors.FgBlack,
    "2": consoleColors.FgBlue,
    "3": consoleColors.FgYellow,
    "4": consoleColors.FgMagenta,
    "5": consoleColors.FgRed,
    "6": consoleColors.FgGreen,
    "7": consoleColors.FgCyan,
    "8": consoleColors.FgGray,

    "9": consoleColors.Bright,
    "0": consoleColors.Dim,
    
    "a": consoleColors.BgBlack,
    "c": consoleColors.BgBlue,
    "d": consoleColors.BgYellow,
    "e": consoleColors.BgMagenta,
    "g": consoleColors.BgRed,
    "h": consoleColors.BgGreen,
    "j": consoleColors.BgCyan,
    "k": consoleColors.BgGray,

    "i": consoleColors.Italic,
    "v": consoleColors.Reverse,
    "u": consoleColors.Underscore,
    "s": consoleColors.StrikeThrough,
    "b": consoleColors.Blink,

    "f": consoleColors.FgWhite,

    "r": consoleColors.Reset
};

export {
    consoleColor, consoleColorsMulti, consoleColorRGB, allColorType,
    ansiEscape,
    consoleColors,
    generateAnsiColor,
    combineColors,
    brightnessMinecraftPallete, foregroundMinecraftPallete, backgroundMinecarftPallete, controlsMinecraftPallete,
    colorsMinecraftPallete, minecraftColorPallete
}