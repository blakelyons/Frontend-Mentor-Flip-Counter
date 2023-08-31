// Configuration for Prettier code formatter
module.exports = {
    tabWidth: 4, // We indent 4 spaces
    useTabs: false, // We do not use tabs
    printWidth: 150, // Prettier default is 80, which feels a bit small for most our code. Bumped it up.
    semi: true, // Print semicolons at the ends of statements
    quoteProps: "as-needed",
    trailingComma: "es5", // Trailing commas where valid in ES5 (objects, arrays, etc.)
    bracketSpacing: false,
    arrowParens: "always",
    vueIndentScriptAndStyle: false,
    endOfLine: "lf",
    singleQuote: false,
    bracketSameLine: false,
    singleAttributePerLine: false,
};
