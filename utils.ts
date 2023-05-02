export function animate(yValues: Array<number>) {
    const canvas = <HTMLDivElement>document.getElementById('canvas');
    Plotly.animate(
        canvas, 
        {
            data: [{y: yValues, text: yValues.map(String)}],
            traces: [0],
            layout: {}
        }, 
        {
            transition: {
                duration: 500,
                easing: 'cubic-in-out'
            },
            frame: {
                duration: 500
            }
        }
    )
}

export function wait2Seconds(array: Array<any>) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(array)
        }, 1000)
    })
}

export function range(start: number, end: number) {
    const range: Array<number> = [];
    for (let i=start; i<end; i++) {
        range.push(i);
    }
    return range;
}

export function makeInitialChart(canvas: HTMLDivElement, yValues: Array<number>, xValues: Array<number>, layout: { [index:string]:boolean|string|{} }) {
    const trace = {
        x: xValues,
        y: yValues,
        width: 0.8,
        type: 'bar',
        text: yValues.map(String),
        textposition: 'auto',
    }

    const data = [trace] as Plotly.Data[];

    Plotly.newPlot(canvas, data, layout);
}