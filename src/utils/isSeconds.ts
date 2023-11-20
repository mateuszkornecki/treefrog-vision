import {TSeconds} from "@/components/Pointer";
function isSeconds(value: string): asserts value is TSeconds {
        const secondsRegExp = new RegExp("^[0-9]*s");
        const isInCorrectFormat = secondsRegExp.test(value);

        if (!isInCorrectFormat) {
            throw new Error("Not a second.");
        }
    }

export { isSeconds};