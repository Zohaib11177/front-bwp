import {
    uniqueNamesGenerator,
    adjectives,
    colors,
    animals,
} from "unique-names-generator";

const name = () => {
    const firstName = uniqueNamesGenerator({
        dictionaries: [adjectives, animals, colors],
        length: 1,
    });
    const secondName = uniqueNamesGenerator({
        dictionaries: [adjectives, animals, colors],
        length: 1,
    });
    const name = firstName.slice(0, 3) + secondName.slice(0, 3);
    return name;
};
const UniqueName = {
    name,
};

export default UniqueName;
