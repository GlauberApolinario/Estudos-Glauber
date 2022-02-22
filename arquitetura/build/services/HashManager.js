import { compareSync, genSaltSync, hashSync } from "bcryptjs";
export class HashManager {
    constructor() {
        this.createHash = (plainText) => {
            const salt = genSaltSync(12);
            const cypherText = hashSync(plainText, salt);
            return cypherText;
        };
        this.compareHash = (plainText, cypherText) => {
            return compareSync(plainText, cypherText);
        };
    }
}
//# sourceMappingURL=HashManager.js.map