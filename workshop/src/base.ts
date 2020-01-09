import * as fs from 'fs';

export interface IBaseContent<T> {
  entities: T[];
  lastId: number;
  [key: string]: any;
}

export abstract class Base<A> {

  protected content: IBaseContent<A> | undefined;
  protected tempContent: IBaseContent<A> | undefined | null;

  constructor(private filename: string) {
    if (fs.existsSync(this.filename)) {
      const data = fs.readFileSync(this.filename);
      this.content = JSON.parse(data.toString());
    }
  }

  abstract add(entity: A): Promise<A>;

  abstract remove(prop: any): Promise<A>;

  abstract find(prop: any): Promise<A | null>;

  protected write() {
    return new Promise<IBaseContent<A>>((resolve, reject) => {
      fs.writeFile(this.filename, JSON.stringify(this.tempContent, null, 2), (err) => {
        if (err) { reject(err); return; }
        resolve(this.tempContent as IBaseContent<A>);
      });
    });
  }

  protected read() {
    return new Promise<IBaseContent<A>>((resolve, reject) => {
      fs.readFile(this.filename, (err, data) => {
        if (err) { reject(err); return; }
        const content: IBaseContent<A> = JSON.parse(data.toString());
        resolve(content);
      });
    });
  }
}