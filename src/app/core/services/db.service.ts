import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

interface Filter {
  field: string;
  op: firebase.firestore.WhereFilterOp;
  value: any;
}
@Injectable({
  providedIn: 'root',
})
export class DbService {
  db: AngularFirestore;
  constructor(_db: AngularFirestore) {
    this.db = _db;
  }

  async createDocument(collectionName: string, data: any, id?: string) {
    const collection = await this.db.collection(collectionName);
    const success = id
      ? await collection.doc(id).set(data)
      : await collection.add(data);
    return success;
  }

  async updateDocument(collectionName: string, id: string, data: any) {
    const document = await this.db.collection(collectionName).doc(id);
    return document.update(data);
  }

  async getAllInCollection(
    collectionName: string,
    orderBy: string,
    direction?
  ) {
    // if not order direction then default to descending
    const orderDir = direction || 'desc';
    const snapshot = await this.db
      .collection(collectionName, (ref) => ref.orderBy(orderBy, orderDir))
      .get()
      .toPromise();
    return snapshot.docs.map((doc) => doc.data());
  }

  async getFilteredCollection(
    collectionName,
    field: string,
    op: firebase.firestore.WhereFilterOp,
    value: any
  ) {
    const snapshot = await this.db
      .collection(collectionName, (ref) => ref.where(field, op, value))
      .get()
      .toPromise();
    return snapshot.docs.map((doc) => doc.data());
  }

  async findPropertyTypeInCity(
    collectionName,
    propertyType: string,
    city: any
  ) {
    const snapshot = await this.db
      .collection(collectionName, (ref) => {
        const typeRef = ref.where('propertyType', '==', propertyType);
        return typeRef.where('city', '==', city);
      })
      .get()
      .toPromise();
    return snapshot.docs.map((doc) => doc.data());
  }

  // async getFilteredCollectionMulti(collectionName, filters: Filter[]) {
  //   const snapshot = await this.db
  //     .collection(collectionName, (ref) => {
  //       let refUpdate;
  //       filters.forEach((filter) => {
  //         !refUpdate && (refUpdate = ref);
  //         refUpdate = refUpdate.where(filter);
  //       });
  //       return refUpdate;
  //     })
  //     .get()
  //     .toPromise();
  //   return snapshot.docs.map((doc) => doc.data());
  // }
}
