
function solution(A: number[]): number {
    const a = new Set(A);
    let smallest = 1;
    while (a.has(smallest)) {
        smallest++;
    }
    return smallest;
}



console.log(solution([1, 3, 6, 4, 1, 2],))