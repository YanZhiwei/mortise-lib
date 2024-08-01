class Element {

    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    /**
     * @param {string} atrr 
     */
    getAttr(atrr) {
        if (atrr == 'text') {
            return this.element.getAttribute("text")
        }
    }

    getTitle() {
        const tagName = this.element.tagName.trim().toLowerCase();
        if (tagName === "iframe" || tagName === "frame") {
            try {
                return elem?.contentWindow?.document.title;
            }
            catch (erorr) {
                return ""
            }
        } else {
            return this.element.title;
        }
    }
    getPagetitle() {
        if (this.element.ownerDocument) {
            return this.element.ownerDocument.title;
        }
        return "";
    }

    getAncestorid() {
        return this.element.ownerDocument;
    }



}

export default Element