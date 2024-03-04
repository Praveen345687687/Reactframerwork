
// <div id="class1">
// <div id="child1">
//     <h1>the tag h1</h1>
//     <h2>tha thag h2</h2>
// </div>
// <div id="child2">
//     <h1>the tag11</h1>
//     <h2>the tag12</h2>
// </div>

// </div>

const parent=React.createElement("div",{ id:"class1",abc:"pra"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"h1"},"h1 tag"),
        React.createElement("h2",{id:"h22"},"h2 tag")
    ],
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"h1"},"h12 tag"),
        React.createElement("h2",{id:"h22"},"h12 tag")
    ]
    )
]
);
const root3=ReactDOM.createRoot(document.getElementById("root"));
root3.render(parent);