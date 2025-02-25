/**
 * Definition for singly-linked list.
*/


class ListNode1 {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {

    let p1 = null, prev = null
    let p2 = head

    while (p2) {
        p1 = p2
        p2 = p2.next

        if (p1)
            p1.next = prev

        prev = p1

    }

    return p1
};


function pairSum(head: ListNode | null): number {

    let slower: ListNode | null = head;
    let faster = head?.next?.next

    while (faster?.next) {
        slower = slower ? slower.next : null
        faster = faster.next.next
    }

    let first = head
    let second = slower?.next

    // Break
    if (slower)
        slower.next = null


    let reversed = reverseList(second || null)

    let max = 0;

    while (first) {
        let s = first.val + (reversed?.val || 0)
        if (s > max) max = s
        first = first.next
        reversed = reversed?.next || null
    }

    console.log(max)
    return max;

    // Rever second linked 

    // Travese adding corresporing 


    return 0

};

function oddEvenList(head: ListNode | null): ListNode | null {


    let odd = head;
    let even = head?.next;

    let oddEnd = odd;
    let evenStart = even;

    while (even && odd) {
        odd.next = even.next
        if (!odd.next) oddEnd = odd
        odd = odd.next || null
        even.next = odd?.next || null
        even = even.next
    }

    if (odd) odd.next = evenStart || null
    else if (oddEnd) oddEnd.next = evenStart || null

    return head

};

function deleteMiddle(head: ListNode | null): ListNode | null {

    if (!head?.next) return null

    let slower: ListNode | null = head;
    let faster = head?.next?.next

    while (faster?.next) {
        slower = slower ? slower.next : null
        faster = faster.next.next
    }

    let next = slower?.next ? slower.next.next : null

    if (slower)
        slower.next = next ?? null;

    return head
};

function print(head: ListNode1 | null) {
    while (head) {
        console.log(head.val)
        head = head ? head.next : null
    }
}


function createLinkedList(values: number[]): ListNode1 | null {
    if (values.length === 0) return null;

    let head = new ListNode1(values[0]);
    let current = head;

    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode1(values[i]);
        current = current.next;
    }

    return head;
}

const head = createLinkedList([5, 4, 2, 1]);

//deleteMiddle(head)
pairSum(head)
//print(head)