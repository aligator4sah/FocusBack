export interface IQuestionnaire {
    readonly id: number;
    readonly label: string;
    readonly options: any;
    readonly order: number;
    readonly domain: any;
    readonly subdomain: any;
    readonly questiontype: string;
    readonly weight: number;
}