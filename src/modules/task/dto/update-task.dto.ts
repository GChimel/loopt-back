import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from 'src/shared/database/entities/task.entity';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({ example: TaskStatus.PENDING, enum: TaskStatus })
  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
