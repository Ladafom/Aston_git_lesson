// task1

function polyfilBind(func, context, ...args){

	return function() {
		return func.apply( context, [...args]);
	}
}

obj = {
  str:'Hello'
}

function func(phrase){
  console.log(`${this.str}, ${phrase}`)
}

const funcBind = polyfilBind(func, obj, 'world!')

funcBind()