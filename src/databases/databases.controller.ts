import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CreateDatabaseDto } from './dto/create-database.dto';
import { DatabasesService } from './databases.service';
import { Database } from './interfaces/database.interface';

@Controller('databases')
export class DatabasesController {
    constructor( private readonly databasesService: DatabasesService) {}
    @Get()
    findAll(): Promise<Database[]> {
        return this.databasesService.findAll();
    }

    @Get(':id') 
    findOne(@Param('id') id): Promise<Database> {
        return this.databasesService.findOne(id)
    }

    @Post() 
    create(@Body() createDatabaseDto: CreateDatabaseDto): Promise<Database> {
        return this.databasesService.create(createDatabaseDto);
    }

    @Delete(':id')
    delete(@Param('id') id, @Query('something') something: string):Promise<Database> {
        return this.databasesService.delete(id);
    }

    @Put(':id')
    update(@Body() updateDatabaseDto: CreateDatabaseDto,@Param('id' ) id): Promise<Database> {
        return this.databasesService.update(id, updateDatabaseDto)
    }
}
