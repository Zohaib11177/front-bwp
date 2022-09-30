export default class BionicValidationException extends Error {
    constructor(message) {
        super(message);
        this.name = "BionicValidationException";
    }
}
