import { Base, IBaseContent } from "./base";

export interface IEntity {
  id: number;
  [key: string]: any;
}

export class Model<T extends Partial<IEntity>> extends Base<T> {

  protected content!: IBaseContent<T>;
  protected tempContent!: IBaseContent<T> | null;

  constructor(filename: string, defaultContent: IBaseContent<T>) {
    super(filename);
    this.content = this.content || defaultContent;
  }

  add(entity: Partial<T>): Promise<T> {
    const content = this.tempContent || this.content;
    const newId = content.lastId + 1;
    const newEntity = { ...entity, id: newId } as unknown as T;
    this.tempContent = {
      lastId: newId,
      entities: content.entities.concat(newEntity)
    }
    return this.write().then(c => {
      this.content = c;
      this.tempContent = null;
      return newEntity;
    });
  }

  remove(id: number): Promise<T> {
    const deletedEntityIndex = this.content.entities.findIndex(i => i.id === id);
    const deletedEntity = this.content.entities[deletedEntityIndex];
    const { entities } = this.content;
    this.tempContent = {
      lastId: this.content.lastId,
      entities: [
        ...entities.slice(0, deletedEntityIndex),
        ...entities.slice(deletedEntityIndex + 1)
      ]
    }

    return this.write().then(c => {
      this.content = c;
      this.tempContent = null;
      return deletedEntity;
    });
  }

  find(id: any): Promise<T | null> {
    return Promise.resolve(
      this.content.entities.find(i => i.id === id) || null
    );
  }
}