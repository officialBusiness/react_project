class Vector3{
	constructor( x, y, z ){
		this.x = x;
		this.y = y;
		this.z = z;
	}
	getLength(){
		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
	}
	copy( v ){
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
	}
}

export default Vector3;