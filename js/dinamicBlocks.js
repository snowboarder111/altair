"use strict"

const myDiagram = new go.Diagram("myDiagramDiv",  // create a Diagram for the HTML Div element
    { "undoManager.isEnabled": true });  // enable undo & redo

// define a simple Node template
myDiagram.nodeTemplate =
  new go.Node("Auto")  // the Shape will automatically surround the TextBlock
    // add a Shape and a TextBlock to this "Auto" Panel
    .add(new go.Shape("RoundedRectangle",
        { strokeWidth: 0, fill: "white" })  // no border; default fill is white
        .bind("fill", "color"))  // Shape.fill is bound to Node.data.color
    .add(new go.TextBlock({ margin: 8, stroke: "#ffffff" })  // some room around the text
        .bind("text", "key"));  // TextBlock.text is bound to Node.data.key

// but use the default Link template, by not setting Diagram.linkTemplate


myDiagram.linkTemplate =
  new go.Link(
    // default routing is go.Link.Normal
    // default corner is 0
    { routing: go.Link.Orthogonal, corner: 0 })
    // the link path, a Shape
    .add(new go.Shape({ strokeWidth: 1, stroke: "#3f3b48" }))
    // if we wanted an arrowhead we would also add another Shape with toArrow defined:
    //.add(new go.Shape({  toArrow: "Standard", stroke: null  }))


// create the model data that will be represented by Nodes and Links
myDiagram.model = new go.GraphLinksModel(
  [
    { key: "Alpha", color: "#3f3b48" },
    { key: "Beta", color: "#3f3b48" },
    { key: "Gamma", color: "#3f3b48" },
    { key: "Delta", color: "#3f3b48" }
  ],
  [
    { from: "Alpha", to: "Beta" },
    { from: "Alpha", to: "Gamma" },
      { from: "Gamma", to: "Delta" },
    { from: "Delta", to: "Alpha" }
  ]);