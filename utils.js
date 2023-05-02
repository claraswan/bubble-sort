export function animate(yValues) {
    const canvas = document.getElementById('canvas');
    Plotly.animate(canvas, {
        data: [{ y: yValues, text: yValues.map(String) }],
        traces: [0],
        layout: {}
    }, {
        transition: {
            duration: 500,
            easing: 'cubic-in-out'
        },
        frame: {
            duration: 500
        }
    });
}
export function wait2Seconds(array) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(array);
        }, 1000);
    });
}
export function range(start, end) {
    const range = [];
    for (let i = start; i < end; i++) {
        range.push(i);
    }
    return range;
}
export function makeInitialChart(canvas, yValues, xValues, layout) {
    const trace = {
        x: xValues,
        y: yValues,
        width: 0.8,
        type: 'bar',
        text: yValues.map(String),
        textposition: 'auto',
    };
    const data = [trace];
    Plotly.newPlot(canvas, data, layout);
}
