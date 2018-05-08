interface	Intervalles{
		root: number;
		allowed: Array<number>;
}	

class Intervalle implements Intervalles
{
		public root: number;
		public allowed: Array<number>;

		constructor(root: number, allowed: Array<number>){
				this.root = root
				this.allowed = allowed
		}
		public get() : Array<number> {
				let res: Array<number> = [];
				for (let allowed of this.allowed) {
						res.push(this.root + allowed) 
				}	
				return res;	
		}
}


export default class Bidule{
		rien: string;
		counter: number = 0;

		constructor(){
				let a = new Intervalle(0, [0, 2]);
				a.root = 4
				console.log(a.get())
		}	
		calculate(){
				
		}
}
