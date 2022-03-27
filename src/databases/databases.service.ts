import { Injectable } from '@nestjs/common';
import { Database } from './interfaces/database.interface';
import { Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DatabasesService {
    constructor (@InjectModel('Database') private readonly databaseModel: Model<Database>) {}

    async findAll(): Promise<Database[]> {
        return await this.databaseModel.find();
    }

    async findOne(id: string): Promise<Database> {
        return await this.databaseModel.findOne({_id: id});
    }

    async create(database: Database): Promise<Database> {
        const newDatabase = new this.databaseModel(database);
        return newDatabase.save();
    }

    async delete(id: string): Promise<Database> {
        return this.databaseModel.findByIdAndRemove(id);
    }

    async update(id: string, database: Database): Promise<Database> {
        return this.databaseModel.findByIdAndUpdate(id, database, {new: true})
    }
}
