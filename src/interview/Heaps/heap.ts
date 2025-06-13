class MinHeap {

    heap: number[];

    constructor() {
        this.heap = [];
    }

    // Helper method to get the parent index
    parent(index: number) {
        return Math.floor((index - 1) / 2);
    }

    // Helper method to get the left child index
    leftChild(index: number) {
        return 2 * index + 1;
    }

    // Helper method to get the right child index
    rightChild(index: number) {
        return 2 * index + 2;
    }

    // Swap two elements in the heap array
    swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert a new value into the heap
    insert(value: number) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Maintain the heap property while inserting
    heapifyUp(index: number) {
        let currentIndex = index;
        while (currentIndex > 0 && this.heap[this.parent(currentIndex)] > this.heap[currentIndex]) {
            this.swap(currentIndex, this.parent(currentIndex));
            currentIndex = this.parent(currentIndex);
        }
    }

    // Extract the minimum (root) element from the heap
    extractMin() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }

        const min = this.heap[0];
        const lastElement = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown(0);
        }
        return min;
    }

    // Maintain the heap property while removing the root
    heapifyDown(index: number) {
        let currentIndex = index;
        let left = this.leftChild(currentIndex);
        let right = this.rightChild(currentIndex);
        let smallest = currentIndex;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== currentIndex) {
            this.swap(currentIndex, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Peek the minimum (root) element without removing it
    peek() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }
        return this.heap[0];
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);

console.log("Peek Min:", minHeap.peek()); // Output: 1
console.log("Extract Min:", minHeap.extractMin()); // Output: 1
console.log("Peek Min after extraction:", minHeap.peek()); // Output: 3
