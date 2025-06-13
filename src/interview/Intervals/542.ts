
function findMinArrowShots(points: number[][]): number {

    sort(points);
    console.log(points);

    let arrows = 0;
    let index = 0;

    while (index < points.length) {

        let [start, end] = points[index];

        arrows++
        index++;

        console.log("intersecton: ", start, end, arrows, index);

        // Check intersection
        while (index < points.length && (
            (start == points[index][0]) ||
            (start <= points[index][0] && end >= points[index][1]) ||
            (end >= points[index][0] && end <= points[index][1]))) {
            start = points[index][0];
            if (points[index][1] < end)
                end = points[index][1]
            index++
        }


        console.log(start, end);

    }

    console.log(arrows);

    return arrows;

};


function sort(intervals: number[][]) {
    return intervals.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return (a[0] - b[0]);
    })
}


let points = [[9, 12], [1, 10], [4, 11], [8, 12], [3, 9], [6, 9], [6, 7]]

console.log(findMinArrowShots(points));