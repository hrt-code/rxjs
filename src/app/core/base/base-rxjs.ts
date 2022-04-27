export class BaseRxjs {

  baseObserver = {
    next: (val:any) => console.log("Next",val),
    error: (error:any) => console.log("error", error),
    compelete: () => console.log("Compelete"),
  };

}
