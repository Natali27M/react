export interface IUser{
    name: string;
    age: number;
    gender: string;
}

export function sum(a:number,b:number):number{
    return a + b;
}
export function showSum(a:number,b:number):void{
    console.log(a + b);
}

export function incAge(someUser:IUser, inc:number):IUser{
    someUser.age += inc;
    return someUser;
}




