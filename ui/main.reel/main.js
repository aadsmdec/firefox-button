/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this.element.addEventListener("dragstart", this, true);
            }
        }
    },
    
    captureDragstart: {
        value: function(event) {
            console.log("target", event.target);
        }
    }
});
