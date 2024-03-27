// source(26.03.2024): https://www.spguides.com/typescript-string-capitalize-first-letter/
export default function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}