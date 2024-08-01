class CustomId {
    constructor() {

    }

    static set(element) {
        if (element.getAttribute("mortise_custom_id") === null) {
            element.set("mortise_custom_id", Math.random().toString(16).slice(2));
        }
    }
}

export default CustomId;