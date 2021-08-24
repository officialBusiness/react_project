class Vector2{
	constructor( x = 0, y = 0 ){
		this.x = x;
		this.y = y;
	}
	sub( x, y ){
		if( typeof x === 'object' ){
			y = x.y;
			x = x.x;
		}
		this.x -= x;
		this.y -= y;
		return this;
	}
	newSub( x, y ) {
		if( typeof x === 'object' ){
			y = x.y;
			x = x.x;
		}
		return new Vector2().copy( this ).sub( x, y );
	}
	cross( x, y ){
		if( typeof x === 'object' ){
			y = x.y;
			x = x.x;
		}
		return this.x * y - this.y * x;
	}
	getLength(){
		return Math.sqrt( this.x * this.x + this.y * this.y );
	}
	copy( v ){
		this.x = v.x;
		this.y = v.y;
		return this;
	}
}

export default Vector2;