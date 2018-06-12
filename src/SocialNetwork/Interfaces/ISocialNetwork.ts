export interface ISocialNetwork {
  readonly id: number;
  readonly sessionId: any;
  readonly questionId: number;
  readonly userId: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly midName:string;
  readonly weight: number;
  readonly block: number;
  readonly relationship:any;
}