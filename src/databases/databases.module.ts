import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { DatabasesController } from './databases.controller';
import { DatabasesService } from './databases.service';
import { DatabaseSchema } from './schema/database.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Database', schema: DatabaseSchema}])],
  controllers: [DatabasesController],
  providers: [DatabasesService],
})
export class DatabasesModule {}