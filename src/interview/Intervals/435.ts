
function eraseOverlapIntervals(intervals: number[][]): number {

    sort(intervals);
    let index = 0;
    let inters = 0;

    while (index < intervals.length) {

        let [start, end] = intervals[index];
        inters++;
        index++

        while (index < intervals.length && (start <= intervals[index][0] && end > intervals[index][0])) {
            start = intervals[index][0];
            if (intervals[index][1] < end)
                end = intervals[index][1]
            index++
        }

        console.log(start, end);
    }

    function sort(intervals: number[][]) {
        return intervals.sort((a, b) => {
            if (a[0] == b[0]) {
                return a[1] - b[1];
            }
            return (a[0] - b[0]);
        })
    }

    return intervals.length - inters;
};




let intervals = [[1, 3], [2, 4], [3, 4], [4, 5]]

console.log(eraseOverlapIntervals(intervals))
