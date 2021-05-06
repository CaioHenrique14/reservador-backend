import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) { }

    async getAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async create(user: User): Promise<User> {
        const userCreate = new this.userModel(user);
        return userCreate.save();
    }

    async findById(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async update(id: string, user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user).exec();
    }

    async delete(id: string) {
        const userDelete = this.userModel.findOneAndDelete({ _id: id }).exec();
        return (await userDelete).remove();
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({email});
      }
}
