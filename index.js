const heading = React.createElement(
    "h2", {
        id: "heading",
        style: {
            color: "red"
        }
    },
    "Jai Shree Ram"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);

/**
 * if we have to create like
 * <div class='parent1'>
 *   <div class='child1'>
 *      <h1 id='heading1'> This is Ram Raj.</h1>
 *      <span> This is Ram From Ayodhya.</span>
 *   </div>
 *   <div class='child2'>
 *      <h2> This is Ram Raj 2.</h2>
 *      <span> This is Ram From Ayodhya 2.</span>
 *   </div>
 *
 * </div>
 */

const element = React.createElement("div", {
            class: "parent1"
        }, [
            React.createElement("div", {
                class: "child1"
            },
                [React.createElement('h1', {
                        class: 'heading'
                    }, "This is Ram Raj."),
                React.createElement('span', {}, "This is Ram From Ayodhya")
                ]),
           React.createElement('div', {
                class: 'child2'
            },
                [React.createElement('h2', {}, 'This is Ram Raj 2'),
                React.createElement('span', {}, "This is Ram from Ayodhya 2.")
                ])
        ]
        );

        const root1=ReactDOM.createRoot(document.getElementById('root'));

        root1.render(element);