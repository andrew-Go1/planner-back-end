import { Priority } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

export class TaskDto {
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  isComplited?: boolean;

  @IsString()
  @IsOptional()
  createdAt?: string;

  @IsEnum(Priority)
  @IsOptional()
  @Transform(({ value }) => ('' + value).toLocaleLowerCase())
  priority?: Priority;
}
