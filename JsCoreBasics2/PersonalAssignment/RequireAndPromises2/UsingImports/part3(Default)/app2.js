
// if theres only one it does'nt make sense to write out an export statement
// you can use the export keyword in front of your function instead 
export default function test() {
    console.log('test');
}

export const sayHi=()=>console.log('hi');

// export { test }