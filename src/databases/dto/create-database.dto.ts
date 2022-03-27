import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDatabaseDto {
    @IsNotEmpty() 
    @IsString() name: string;
    
    description: string;
    
    @IsNumber()
    qty: number
}