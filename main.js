const { Text, Color } = require("scenegraph");

function helloHandlerFunction(selection) {
    console.log("my func called");
    const el = new Text();
    el.text = "Hello, world";
    el.styleRanges = [
        {
            length: el.text.length,
            fill: new Color("#FF0000"),
            fontSize: 24
        }
    ];
    selection.insertionParent.addChild(el);
    el.moveInParentCoordinates(100, 100);
}

module.exports = {
    commands: {
        helloCommand: helloHandlerFunction
    }
}