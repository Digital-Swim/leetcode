import { TrieNode } from  "./trieNode"

class Trie {

    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    print() {
        this.printNode(this.root)
    }

    printNode(node: TrieNode) {

        for (let k in node.children) {
            console.log(k);
            this.printNode(node.children[k])
        }
    }

    insert(word: string): void {

        let node = this.root;

        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode()
            }
            node = node.children[ch];
        }

        node.isEnd = true;
    }

    search(word: string): boolean {

        let node = this.root;

        for (let ch of word) {
            if (!node.children[ch]) {
                return false;
            }
            else {
                node = node.children[ch]!;
            }
        }

        return node.isEnd;
    }

    startsWith(prefix: string): boolean {

        let node = this.root;

        for (let ch of prefix) {
            if (!node.children[ch]) {
                return false;
            }
            else {
                node = node.children[ch]!;
            }
        }

        return true;
    }


    suggest(prefix: string) {

        let count = 0;
        let node =  this.root;




    }

}



/**
 * Your Trie object will be instantiated and called as such:
*/
var objT = new Trie()
objT.insert("mobile")
objT.insert("mouse")
objT.insert("moneypot")
objT.insert("monitor")
objT.insert("mousepad")

objT.print();
//console.log(objT.search("cart"));
//console.log(objT.startsWith("ca"));
