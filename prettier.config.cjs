module.exports = {
    tabWidth: 4, // We indent 4 spaces
    useTabs: false, // We do not use tabs
    printWidth: 80, // Lower width ensures Vue attributes wrap and singleAttributePerLine applies
    semi: true, // Print semicolons at the ends of statements
    quoteProps: "as-needed",
    trailingComma: "es5", // Trailing commas where valid in ES5 (objects, arrays, etc.)
    bracketSpacing: true, // Add spacing inside object brackets: { foo: bar }
    arrowParens: "always",
    vueIndentScriptAndStyle: false,
    endOfLine: "lf",
    singleQuote: false,
    bracketSameLine: false,
    singleAttributePerLine: true, // Force each Vue/HTML attribute on its own line
    htmlWhitespaceSensitivity: "ignore", // Ensure consistent formatting
};
