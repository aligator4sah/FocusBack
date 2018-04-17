export interface IQuestionnaire {
    readonly id:number;
    readonly label:string;
    readonly options:any;
    readonly order:number;
    readonly domain:string;
    readonly subdomain:string;
    readonly questiontype:string;
}