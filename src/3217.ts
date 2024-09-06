/** 
 * You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after 
 * removing all nodes from the linked list that have a value that exists in nums.

Example 1:

Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5]


Remove the nodes with values 1, 2, and 3.

Example 2:

Input: nums = [1], head = [1,2,1,2,1,2]

Output: [2,2,2]



Remove the nodes with value 1.

Example 3:

Input: nums = [5], head = [1,2,3,4]

Output: [1,2,3,4]

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
All elements in nums are unique.
The number of nodes in the given list is in the range [1, 105].
1 <= Node.val <= 105
The input is generated such that there is at least one node in the linked list that has a value not present in nums.



No node has value 5.
 * 
 * **/
//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function createList(nums: number[]): ListNode | null {
    return nums.reduceRight<ListNode | null>((acc, val) => {
        let node = new ListNode(val);
        node.next = acc;
        return node;
    }, null);
}

const nums = [1, 2, 3, 4, 5, 1];
const list = createList(nums);

modifiedList([1, 3, 4, 2], list);


function modifiedList(nums: number[], head: ListNode | null): ListNode | null {


    if (!head) return null;

    const numSet = new Set(nums);

    while(head)
    {
        if(numSet.has(head.val))
        {
            head = head.next;
        }
        else
        {
            break;
        }
    }

    
    if (!head) return null;

    let prev = head
    let next: ListNode | null = prev;

    do {
        if (numSet.has(next.val)) {
            next = next.next;
            prev.next = next;
        } else {
            prev = next;
            next = next.next;
        }
    } while (next);

    printList(head);
    return head;
}

function modifiedList1(nums: number[], head: ListNode | null): ListNode | null {
    printList(head);
    console.log(nums);

    let current = head;

    let next = current?.next || null;
    let prev = current;

    printList(current);

    while (current) {
        let index = nums.indexOf(current.val)
        if (index !== -1) {
            current = current.next;
            next = current?.next || null;
            prev = next;
        }
        else break;
    }
    printList(current);

    while (next && prev) {
        let index = nums.indexOf(next.val);
        if (index !== -1) {
            prev.next = next.next;
            next = next.next;
        } else {
            prev = next;
            next = next.next;
        }
        printList(current);

    }

    printList(current);

    return current;

};


function printList(head: ListNode | null) {
    let current = head;
    let array = [];
    while (current) {
        array.push(current.val);
        current = current.next;
    }

    console.log(array);
}