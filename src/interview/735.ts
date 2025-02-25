
function asteroidCollision(asteroids: number[]): number[] {

    let stack = [asteroids[0]]
    let prev: number | undefined = stack[0]

    for (let i = 1; i < asteroids.length; i++) {

        let curr: number | undefined = asteroids[i];

        if ((prev && curr && ((prev > 0) && (curr < 0)))) {
            while (prev && curr && ((prev > 0) && (curr < 0))) {

                let collRes = Math.abs(prev) - Math.abs(curr)

                if (collRes == 0) {
                    stack.pop()
                    curr = undefined
                    if (stack.length > 0) { prev = stack[stack.length - 1] }
                    else prev = undefined

                } else if (collRes < 0) {
                    stack.pop()
                    if (stack.length > 0) { prev = stack[stack.length - 1] }
                    else prev = curr
                }
                else {
                    curr = undefined
                }

            }

            if (curr) stack.push(curr)
        }
        else {
            prev = curr
            stack.push(curr)
        }

    }

    return stack

}

function asteroidCollision1(asteroids: number[]): number[] {

    let a = [];
    let prev: number | undefined = asteroids[0];
    a.push(prev);

    for (let i = 1; i < asteroids.length; i++) {

        let curr: number | undefined = asteroids[i];

        if (prev && (prev ^ curr) < 0) {

            while (prev && curr && (prev ^ curr) < 0) {

                let coll = Math.abs(prev) - Math.abs(curr);
                if (coll == 0) {
                    a.pop()
                    if (a.length > 0)
                        prev = a[a.length - 1]
                    else {
                        prev = undefined
                    }
                    curr = undefined
                }
                else if (coll < 0) {
                    a.pop()
                    if (a.length > 0)
                        prev = a[a.length - 1]
                    else {
                        prev = curr
                    }
                }
                else {
                    curr = undefined
                }
            }

            if (curr) a.push(curr)

        }
        else {
            prev = curr
            a.push(curr)
        }

    }

    return a
};



let st = asteroidCollision([-2, -1, 1, 2])
console.log(st);
