import crypto from "crypto"

interface BlockShape {
    hash: string
    prevHash: string
    height: number
    data: string
}


class Block implements BlockShape{
    public hash: string;

    constructor(
        public prevHash: string,
        public data: string,
        public height: number
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash: string, height: number, data:string){
        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class BlockChain {
    private blocks:Block[];

    constructor() {
        this.blocks = []
    }
    private getPrevHash() {
        if (this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length -1].hash
    }
    public addBlock(data: string) {
        const newBlock = new Block(this.getPrevHash(), data, this.blocks.length+1)
        this.blocks.push(newBlock)
    }
    public getBlocks(){
        return [...this.blocks]
    }
    
}

const blockchain = new BlockChain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks())

/////////////https://github.com/DefinitelyTyped/DefinitelyTyped 타입 정리해둔 git
//////////////@types/node
// npm i @types/node -D
