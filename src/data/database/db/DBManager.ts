import Dexie from 'dexie';
import mainDB from './main-db';

export class DBManager {
    private static instance: DBManager | null = null;
    private mappedDBName: Map<string, Dexie>;
    private constructor() {
        this.mappedDBName = new Map<string, Dexie>();
        this.mappedDBName.set('zmarker', mainDB);
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new DBManager();
        }
        return this.instance;
    }

    public getDB(dbName: string) {
        let db = this.mappedDBName.get(dbName);
        if (!db) {
            db = new Dexie(dbName);
            this.mappedDBName.set(dbName, db);
        }
        return db;
    }
}
